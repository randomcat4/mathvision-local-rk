# Local preview

Run:

```powershell
npx vite --host 127.0.0.1 --port 4173
```

Then open `http://127.0.0.1:4173/`.

The source assembler preserves the production-origin check for every non-local
hostname and permits only `127.0.0.1` and `localhost` for development. Vite uses
the automatic JSX runtime expected by the recovered React 19 production code.

The recovered application is now local-only. It starts with a fixed local
identity and does not construct the Keycloak client, refresh tokens, or build
login/account-management redirects. The bundled Keycloak implementation is
removed from the assembled runtime entry.

The account settings menu contains an English / Simplified Chinese interface
switch. The first visit follows the browser language; an explicit choice is
stored locally and takes effect immediately without a reload.

Chats, folders, workspace snapshots, and profile changes use the local
repository in `src/local/localRepository.ts`. The existing production request
and response shapes are preserved, while supported writes persist in browser
local storage. Endpoints that require a future inference or collaboration
backend return an explicit HTTP 501 instead of silently contacting MathVision.

No production token, cookie, account session, or MathVision browser storage is
copied into the local application.

The preview has been exercised in Chrome at
`http://127.0.0.1:4173/chats`. The workspace shell, Explorer, chat composer,
KaTeX styles, and external Lucide icons render without the error boundary.
