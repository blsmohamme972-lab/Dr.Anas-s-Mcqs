# Dr. Anas MCQs

A responsive English-only study companion for vascular, thoracic, and cardiac surgery MCQs.

## Preview scope

This repository contains the first 20% product slice described in `APP_PLAN.md`:

- Responsive app shell for desktop, mobile, and tablet widths.
- Home dashboard with resume state, streak, statistics, and focus topics.
- Topic browser with the first six topic cards from the planned curriculum.
- Study flow with sample questions, answer checking, concise explanations, bookmarking, and local progress persistence.
- Exam flow with specialty selection, question count, random order, a countdown timer, answer board, review marks, submission, and result breakdown.
- A 66-topic curriculum map with Vascular, Thoracic, and Cardiac specialty filters.
- Books, Progress, and Settings entry points with clear preview states.
- Install-ready web manifest for the planned PWA direction.

The question data is intentionally sample content for this preview. Book ingestion, authentication, server sync, admin review, full exam analytics, and automatic updates belong to later slices.

## Run locally

Because the preview uses browser modules, serve the folder with any small static server:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.
