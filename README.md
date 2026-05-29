# Habilin

Habilin is a personalized web-letter website where each recipient gets a unique interactive letter experience.

## Purpose

This project is built to turn heartfelt messages into a shareable, story-like web experience instead of a plain text message.  
Each letter can feel personal through its own:

- recipient-specific content
- optional password protection
- animated flow (intro -> password -> loading -> letter reveal)
- custom visual theme (fonts, colors, background effects)

## How It Works

- `/` shows a simple About page for the website.
- `/:id` opens a specific letter by its unique ID.
- If a letter requires a password, users must enter it before reading.
- If the ID does not exist, the app shows a not-found page.

Letter content is currently stored in:

- `src/data/letters.ts`

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- Framer Motion

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview
```

## Customize Letters

To add or edit a letter, update entries in `src/data/letters.ts`:

- `id`: route identifier used in the URL
- `recipientName`, `introTitle`, `letterBody`, etc.: message content
- `passwordRequired`, `password`, `passwordHint`: access control
- `theme` and `background`: visual styling per recipient

