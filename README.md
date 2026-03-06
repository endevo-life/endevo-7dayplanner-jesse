# Jesse — Digital Readiness Scanner

> **Built for Jim. For every family that shouldn't have to figure this out alone.**

A single-page web assessment tool. Users answer 10 questions about their digital readiness, enter their name and email, then receive a personalised PDF report (7-Day Action Plan) via email.

**Flow:** Landing → Quiz (10 Qs) → Capture (name + email) → Loading → Confirmation

---

## Team

| Role | Person | Branch |
|------|--------|--------|
| Tech Lead / DevOps | Nermeen | `main` |
| Frontend (React) | Karna | `feature/frontend-*` |
| Backend (Node + Express) | Aryan | `feature/backend-*` |
| UAT | Jim & Anna | URL: TBD |
| PM | Niki | — |

---

## Stack

- **Frontend**: React 18 + TypeScript → Vite → Vercel
- **Backend**: Node.js + Express + TypeScript → Vercel (serverless)
- **AI**: Anthropic Claude (`claude-sonnet-4-6`)
- **Email**: Resend API
- **PDF**: pdf-lib

---

## Branch Rules

| Branch | Purpose |
|--------|---------|
| `main` | Production — protected. Requires PR + approval before merge. |
| `feature/<task>` | New features (e.g. `feature/frontend-quiz`, `feature/backend-pdf`) |
| `fix/<issue>` | Bug fixes (e.g. `fix/cors-error`) |
| `style/<screen>` | CSS/UI-only changes |
| `chore/<task>` | Config, deps, tooling |

**Commit message prefixes:**
- `feat:` — new screen, feature, endpoint
- `fix:` — bug fix
- `style:` — CSS changes only
- `chore:` — setup, config, env files

**Never commit** `.env` files or `node_modules/`.

---

## Getting Started

```bash
# Frontend
cd frontend && npm install && npm run dev

# Backend
cd backend && npm install && npm run dev
```

---

## Env Files

Copy `.env.example` → `.env` in each folder and fill in real values.

**Backend** (`backend/.env`):
```
ANTHROPIC_API_KEY=
RESEND_API_KEY=
EMAIL_FROM=hello@endevo.life
FRONTEND_URLS=http://localhost:5173
```

**Frontend** (`frontend/.env.local`):
```
VITE_API_URL=http://localhost:5000
```

---

## Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── api/         # API config & endpoints
│   │   ├── data/        # Questions data
│   │   ├── pages/       # Screen components + CSS
│   │   ├── types/       # TypeScript types
│   │   └── utils/       # Scoring helpers
│   └── public/          # Static assets (logo, jesse.png, video)
│
└── backend/
    ├── services/        # scoring, ai, pdf, email
    ├── middleware/      # Error handler
    ├── types/           # Shared TS types
    └── server.ts        # Express app + /api/assess route
```
