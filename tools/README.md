# Adding books — pipeline

This is how books 01–05 were published. Follow the same steps for every new book. Content rules are in the root `README.md` (data format) and in `reports/` (one example report per book).

Source: Google Drive folder "Books tables - corrected" — https://drive.google.com/drive/folders/1ZgnGkm9Q2sEIwLsJjXpJry6TOf0hqRnc
Each book has its own subfolder with `<book>.jsonl` (the extraction, one question per line), `<book>.md`, `report.md` (the extraction report — read it first) and, for some books, `images/` or `images*.zip`. The folder is public, so plain `curl` works.

## 1. Download

    python3 -I tools/drive_list.py 1ZgnGkm9Q2sEIwLsJjXpJry6TOf0hqRnc tree.json     # lists every file with its Drive id
    curl -sSL -o <file> "https://drive.google.com/uc?export=download&id=<id>"      # small files
    curl -sSL -o <file> "https://drive.usercontent.google.com/download?id=<id>&export=download&confirm=t"   # large files and PDFs

Work in a scratch directory outside the repository. Unzip `images*.zip` there.

## 2. Read the extraction report

`report.md` lists missing questions, questions without an answer key, keys that point to missing options, matching questions, layout fixes and chapters. Every one of these needs a decision in step 4.

## 3. Prepare the questions

    python3 -I tools/auto_topics.py <book.jsonl> <book-id> <vascular|thoracic|cardiac> <reviewed.json>

This fixes spacing and punctuation, parses the printed key into letters ("a, c, d" -> ["A","C","D"], multi when more than one), assigns a topic from `tools/topics.json` by keywords, and prints every question marked `NEEDS DECISION`.

## 4. Decisions and topic pass (by hand, in reviewed.json)

- Matching questions (keys like "1-B, 2-C"): `type: "matching"`, `answer: []`, and a clear `answerText` with one line per item.
- "All of the above": all option letters, type multi.
- Key points to a missing option: reconstruct the option only if the answer is clinically unambiguous, keep the key, and explain in `note`. Otherwise remove the question and say so in the book notes.
- No answer key: remove the question and list its number in the book notes.
- Replace each `NEEDS DECISION ...` note with the decision taken.
- Chapters: if the book has chapters (for example numbering 1.1–4.35), add `"chapter": "ch1"` to each question and list the chapters in meta.json.
- Topic pass: read every stem and correct wrong topics. The keyword pass is only a first guess; books 01–05 needed about 1 correction in 4. The topic decides the specialty.
- Do not change medical content, answer keys or wording beyond typos. No explanations yet (medical review comes later).

## 5. Cover

The first page of each source PDF is the book cover (the PDF's Drive id is at the top of `<book>.md`):

    pdftoppm -f 1 -l 1 -singlefile -scale-to-x 480 -scale-to-y -1 -jpeg -jpegopt quality=82 book.pdf data/covers/<book-id>

## 6. Write the book into the app

    python3 -I tools/add_book.py <meta.json> <reviewed.json> <downloaded book folder>

It validates everything (topics, answer letters, types, chapters, images, no question count in the title) and writes nothing if there is a problem. It writes `data/questions/<id>.json`, copies figures to `data/images/<id>/`, adds or updates the entry in `data/books.json` (the cover is picked up from `data/covers/`) and writes `reports/<id>.md` from meta.notes and the per-question notes.

## 7. Test, then publish

    python3 -m http.server 4173

Open the app at phone and iPad widths: Books, the new book page (cover, topics or chapters), Study (single, multi, matching, figures), Exam, Quick review. There must be no console errors. Then commit on the working branch, open a pull request to `main` and merge; GitHub Pages deploys in about a minute. Check https://blsmohamme972-lab.github.io/Dr.Anas-s-Mcqs/data/books.json for the new entry.
