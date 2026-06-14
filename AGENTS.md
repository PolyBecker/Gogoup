# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project status

**Gogoup** (`PolyBecker/Gogoup`) is intended to be the **Gogoup_site** project. As of the initial commit, the repository contains only an empty `README.md` — no application source, dependency manifests, Docker config, or CI workflows.

Until application code is added, there is nothing to lint, test, build, or run.

## Repository layout

```
/workspace/
├── README.md    # Placeholder (empty)
└── AGENTS.md    # This file
```

## Cursor Cloud specific instructions

### Services

| Service | Required? | Notes |
|---------|-----------|-------|
| Web frontend | No | Not present in repo |
| API / backend | No | Not present in repo |
| Database | No | Not present in repo |
| Docker Compose | No | No `docker-compose.yml` |

No services need to be started for the current repository state.

### Environment

The Cloud Agent VM provides standard tooling out of the box:

- **Git** — repository is cloned at `/workspace` on branch `main`
- **Node.js** (v22+) and **npm** — available when a Node project is added
- **Python 3.12** — available when a Python project is added
- **Docker** — not installed on the default VM; add only if the project later requires it

### Commands (when code exists)

Once dependency manifests are added (e.g. `package.json`, `requirements.txt`, `Makefile`), follow the instructions in `README.md` or project docs. Typical patterns:

| Task | Where to look |
|------|----------------|
| Install deps | `package.json` scripts, `Makefile`, or `requirements.txt` |
| Lint | `npm run lint`, `make lint`, or CI config |
| Test | `npm test`, `pytest`, `make test`, etc. |
| Dev server | `npm run dev`, `docker compose up`, etc. |

### Gotchas

- **Empty repo**: Do not assume a framework or stack — inspect the tree after each pull; new files may appear without notice.
- **No `.env.example`**: Environment variables are undocumented until the project adds them.
- **Single branch**: Only `main` exists on the remote; feature work should use `cursor/<descriptive-name>-41e6` branches per Cloud Agent conventions.
