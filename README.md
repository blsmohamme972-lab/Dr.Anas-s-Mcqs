# Dr.Anas's MCQs

A mobile-first, English-only PWA for studying vascular, thoracic, and cardiac surgery MCQs. It works on iPhone, Android and iPad, offline after the first visit, and updates itself automatically after every merge to `main` (GitHub Pages workflow in `.github/workflows/pages.yml`).

Live app: https://blsmohamme972-lab.github.io/Dr.Anas-s-Mcqs/

## Features

- Study by book (with chapters when a book has them) or by one of the 66 fixed topics.
- Single-answer, select-all-that-apply, and matching questions, with figures and explanations.
- Exam mode: book, chapter and topic scope, question count, shuffle, time per question, answers after each question or at the end, review of mistakes, retry missed.
- Quick review with swipe gestures, Favorites grouped by book, hidden questions, Ask GPT AI and Ask Claude AI buttons.
- Progress per book and specialty, stored only on the device. No account.

## Content

All content lives in `data/`:

- `data/books.json` — the list of books: `id`, `title`, `short`, `code` (2 letters on the cover), `specialty`, `publisher`, `edition`, `description`, `file`, `count`, and an optional `chapters` list of `{ "id", "title" }`.
- `data/questions/<book-id>.json` — one array per book. Each question has `id`, `number`, `type` (`single`, `multi`, `matching`), `specialty`, `topic` (one of the 66 topics in `app.js`), `stem`, `options`, `answer` (letters, for example `["B", "D"]`), `explanation`, `images`, optional `chapter` (a chapter id from `books.json`) and, for matching questions, `answerText`.
- `data/images/<book-id>/` — figures referenced by `images`.

To add or correct a book, edit these files and merge to `main`; the app picks up the change on the next open.

## Run locally

    python3 -m http.server 4173

Then open http://localhost:4173 in a browser.
