# madelinegall.com

Portfolio and writing site. React 19 + TypeScript + Vite, deployed on Vercel.

## Running locally

```bash
npm install
npm run dev        # site at http://localhost:5173
```

The `/admin` editor calls serverless functions that only exist on Vercel. To run
those locally:

```bash
npm i -g vercel
vercel dev         # site + API at http://localhost:3000
```

## Structure

```
content/posts/     Blog posts as markdown. One file per post.
api/               Vercel serverless functions (auth + post CRUD).
src/data/          Résumé, projects, and site copy. Edit content here, not in JSX.
src/lib/           Markdown loading (posts.ts) and admin API client.
src/pages/         Home, Blog, BlogPost, Admin, NotFound.
src/components/    Shared UI.
src/styles/        One stylesheet per area. Tokens in variables.css.
```

### Editing site content

All résumé and project copy lives in `src/data/`. `src/data/resume.ts` is the
source of truth for employment dates and is kept in sync with the current
résumé — update it there and every page follows.

## Blog

Posts are markdown files in `content/posts/`, loaded at build time by
`src/lib/posts.ts`. There is no database.

Frontmatter:

```yaml
---
title: 'Your Chatbot Has Amnesia'
date: 2026-07-20
excerpt: 'Shown on the blog index and in link previews.'
tags: [AI, product management]
published: true      # false keeps it out of the public build
---
```

You can write posts either way:

- **In the browser** — sign in at `/admin`, write, hit Save. The serverless
  function commits the markdown file to this repo, which triggers a Vercel
  rebuild. The post is live in roughly 30 seconds.
- **In your editor** — add a `.md` file to `content/posts/` and push.

Both paths produce identical results because the browser editor is just
committing the same files.

## Environment variables

Set these in **Vercel → Project → Settings → Environment Variables** for all
environments. The `/admin` editor returns 500s until they exist.

| Variable | Purpose |
| --- | --- |
| `ADMIN_PASSWORD` | The password for `/admin`. Use a long random string. |
| `SESSION_SECRET` | Random 32+ byte string used to sign the session cookie. |
| `GITHUB_TOKEN` | Fine-grained PAT with **Contents: read and write** on this repo only. |
| `GITHUB_REPO` | Optional. Defaults to `madelinegit/madelinedotcom`. |
| `GITHUB_BRANCH` | Optional. Defaults to `main`. |

Generate the two secrets with:

```bash
openssl rand -base64 32
```

### Security notes

- The password is verified server-side only. It is never sent to the browser
  and never appears in the bundle.
- The session is an HMAC-signed, `HttpOnly`, `Secure`, `SameSite=Strict` cookie
  that expires after 12 hours.
- The GitHub token should be **fine-grained** and scoped to this repository with
  contents write access — nothing else. If it ever leaks, the blast radius is
  this repo.
- Rotate `SESSION_SECRET` to invalidate every existing session immediately.

## Scripts

```bash
npm run dev        # dev server
npm run build      # typecheck + production build
npm run preview    # serve the production build
npm run lint       # eslint
```
