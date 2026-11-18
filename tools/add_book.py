"""Add or replace one book in the app: data/questions/<id>.json, data/books.json, data/images/<id>/, reports/<id>.md.

Usage:
  python3 -I tools/add_book.py <meta.json> <reviewed.json> <source-folder>

meta.json — the book entry, for example:
  {"id": "vesap5-dialysis", "title": "VESAP 5 – Dialysis Access", "short": "VESAP 5 Dialysis", "code": "DA",
   "specialty": "vascular", "publisher": "Society for Vascular Surgery", "edition": "VESAP 5",
   "description": "One sentence about the content.",
   "chapters": [{"id": "ch1", "title": "Chapter title"}],        (optional; questions then carry "chapter": "ch1")
   "notes": ["Book-level notes for the report (source gaps, decisions). Not shown in the app."]}
  Do not put the number of questions in title or short.

reviewed.json — output of tools/auto_topics.py after your manual fixes (see tools/README.md).
source-folder — the book's Drive folder downloaded locally (figures are read from it, paths as in "images").

The cover is used automatically if data/covers/<id>.jpg exists. Run from the repository root.
Validation problems are printed and the script exits with status 1 without writing anything.
"""
import json, os, re, shutil, sys

meta_path, reviewed_path, src_dir = sys.argv[1:4]
ROOT = os.getcwd()
TOPICS = json.load(open(os.path.join(ROOT, "tools", "topics.json")))
SP_OF = {t: sp for sp, ts in TOPICS.items() for t in ts}

meta = json.load(open(meta_path, encoding="utf-8"))
items = json.load(open(reviewed_path, encoding="utf-8"))
bid = meta["id"]
chapter_ids = {c["id"] for c in meta.get("chapters", [])}
problems, qs, report_items = [], [], []

if re.search(r"\b\d+\s*Q\b", meta["title"] + " " + meta.get("short", "")):
    problems.append("title/short must not contain the question count")

for q in items:
    pid = q.get("id", "?")
    n = len(q["options"])
    if q.get("topic") not in SP_OF:
        problems.append(f"{pid}: unknown topic {q.get('topic')!r}")
        continue
    q["specialty"] = SP_OF[q["topic"]]
    if q["type"] not in ("single", "multi", "matching"):
        problems.append(f"{pid}: bad type {q['type']}")
    for a in q["answer"]:
        if not (len(a) == 1 and 0 <= ord(a) - 65 < n):
            problems.append(f"{pid}: answer {a} outside options ({n})")
    if q["type"] == "single" and len(q["answer"]) != 1:
        problems.append(f"{pid}: single with {len(q['answer'])} answers")
    if q["type"] == "multi" and len(q["answer"]) < 2:
        problems.append(f"{pid}: multi with {len(q['answer'])} answers")
    if q["type"] == "matching" and not q.get("answerText"):
        problems.append(f"{pid}: matching without answerText")
    if str(q.get("note", "")).startswith("NEEDS DECISION"):
        problems.append(f"{pid}: unresolved NEEDS DECISION note")
    if any(not str(o).strip() for o in q["options"]) or n < 2:
        problems.append(f"{pid}: empty or too few options")
    if q.get("chapter") and q["chapter"] not in chapter_ids:
        problems.append(f"{pid}: chapter {q['chapter']} not in meta.chapters")
    for img in q.get("images", []):
        if not os.path.exists(os.path.join(src_dir, img)):
            problems.append(f"{pid}: image missing {img}")
    rec = {"id": q["id"], "number": q["number"], "type": q["type"], "specialty": q["specialty"], "topic": q["topic"],
           "stem": q["stem"].strip(), "options": [str(o).strip() for o in q["options"]], "answer": q["answer"],
           "explanation": q.get("explanation", "").strip(), "images": q.get("images", [])}
    for key in ("answerText", "chapter"):
        if q.get(key):
            rec[key] = q[key]
    qs.append(rec)
    if q.get("note") or q.get("keyCheck") in ("doubt", "wrong") or q.get("fixes"):
        report_items.append(q)

ids = [q["id"] for q in qs]
if len(ids) != len(set(ids)):
    problems.append("duplicate question ids")
if problems:
    print("NOT WRITTEN. Problems:")
    for p in problems:
        print(" -", p)
    sys.exit(1)

os.makedirs(os.path.join(ROOT, "data", "questions"), exist_ok=True)
json.dump(qs, open(os.path.join(ROOT, "data", "questions", bid + ".json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
for q in qs:
    for img in q["images"]:
        dst = os.path.join(ROOT, "data", "images", bid, os.path.basename(img))
        os.makedirs(os.path.dirname(dst), exist_ok=True)
        shutil.copyfile(os.path.join(src_dir, img), dst)

books_path = os.path.join(ROOT, "data", "books.json")
books = json.load(open(books_path, encoding="utf-8")) if os.path.exists(books_path) else {"version": 1, "books": []}
entry = {k: v for k, v in meta.items() if k != "notes"}
entry["file"] = bid + ".json"
entry["count"] = len(qs)
if os.path.exists(os.path.join(ROOT, "data", "covers", bid + ".jpg")):
    entry["cover"] = "data/covers/" + bid + ".jpg"
existing = [i for i, b in enumerate(books["books"]) if b["id"] == bid]
if existing:
    books["books"][existing[0]] = entry
else:
    books["books"].append(entry)
json.dump(books, open(books_path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

lines = [f"# Report — {meta['title']}", "", "For AI agents and editors who maintain this book. Not shown in the app.", "",
         f"- Data file: `data/questions/{bid}.json`", f"- Questions in the app: {len(qs)}", "", "## Book-level notes", ""]
lines += [f"- {n}" for n in meta.get("notes", [])] or ["- None."]
lines += ["", "## Questions with answer or content notes", ""]
flagged = [q for q in report_items if q.get("note") or q.get("keyCheck") in ("doubt", "wrong")]
if not flagged:
    lines.append("- None.")
for q in flagged:
    lines += [f"### Q{q['number']} (`{q['id']}`)", f"- Answer in the app: {', '.join(q['answer']) or q.get('answerText', '')}"]
    if q.get("note"):
        lines.append(f"- Decision: {q['note']}")
    if q.get("keyComment"):
        lines.append(f"- Reviewer comment: {q['keyComment']}")
    lines.append("")
lines += ["", "## Typo and format fixes", ""]
fixed = [q for q in report_items if q.get("fixes")]
lines += [f"- Q{q['number']}: " + "; ".join(q["fixes"]) for q in fixed] or ["- None."]
os.makedirs(os.path.join(ROOT, "reports"), exist_ok=True)
open(os.path.join(ROOT, "reports", bid + ".md"), "w", encoding="utf-8").write("\n".join(lines) + "\n")
print(f"{bid}: {len(qs)} questions written; books.json updated; report written")
