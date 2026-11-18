# Dr.Anas-s-Mcqs

Atlas MCQs is a mobile-first English-only PWA for studying vascular, thoracic, and cardiac surgery.

## First milestone

This repository now contains the first usable frontend slice from the app plan:

- Responsive app shell with desktop sidebar and mobile navigation.
- Fixed 66-topic taxonomy with 22 topics in each specialty.
- Books view for the three question-bank tracks.
- Study mode with answer feedback, explanations, saved questions, and local progress.
- Exam mode with scope, question count, shuffle, optional timer, review marks, and score breakdown.
- Progress and settings views.
- Local-first Favorites, hidden-question management, and Quick Review Mode with swipe navigation.
- Question handoff buttons for GPT and Cloud AI apps, with a formatted prompt containing the question and options.
- PWA manifest and service worker for a cached offline shell.
- Local browser persistence for the preview state.

The question bank currently contains nine educational preview questions. Favorites, hidden questions, study filters, quick review state, settings, and progress are stored locally in the browser. The import, OCR, medical review, publishing, account, and sync services are intentionally left for the next backend milestone.

## Run locally

Use any static file server from the repository root. For example:

    python3 -m http.server 4173

Then open http://localhost:4173 in a browser.

## Product plan

See APP_PLAN.md for the complete implementation plan and the remaining backend, content pipeline, review, sync, and release milestones.
