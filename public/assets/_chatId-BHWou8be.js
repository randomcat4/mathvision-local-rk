import {
  j as e,
  r as p,
  B as n,
  ac as T,
  ad as j,
  M as y,
  ae as S,
  q as P,
  af as A,
  S as i,
  ag as I,
  T as l,
  g as L,
  a as k,
  ah as R,
} from "./index-BM3ZINIl.js";
import { A as C } from "./AutoAwesomeRounded-DwWNeeYP.js";
import { L as U, P as B } from "./LinkOffRounded-CKGtm4_4.js";
import { u as H } from "./useQuery-DM2qiUYb.js";
import { C as q, b as _ } from "./chatsApi-Ck-JYICO.js";
import { M as N } from "./Markdown-Dh8LhaRc.js";
import { S as $ } from "./useAttachmentContent-15uaQfvd.js";
import { g as Q } from "./chatMessageSelectors-CRUAC26Y.js";
import { A as W, U as D } from "./UserMessage-DN7iPijg.js";
import { c as F } from "./MarkdownHighlights-C-ZhT8z1.js";
import "./katex.min-ADdKj7O-.js";
import "./CopyButton-BcOsqrNJ.js";
import "./MChip-DiH8NXBU.js";
import "./TextField-D8vc_sXz.js";
import "./index-DzMT-bSF.js";
import "./index-Yb6ONXKu.js";
import "./attachmentsApi-BHgxfYft.js";
import "./authFetch-DXjDztUP.js";
import "./assistantStructuredResponseLazy-CCAemx3W.js";
import "./triangle-alert-C5eP7BuB.js";
import "./circle-check-B9fquZbm.js";
import "./Divider-BcuihGce.js";
import "./LoadingSection-wWBu2CqJ.js";
import "./ThinkingElapsedLabel-DKCKD95O.js";
import "./streamNdjson-sRiOwtSP.js";
import "./MessageBubble-DqxHrk03.js";
import "./OpenInNewRounded-D-7V5TzF.js";
import "./FormControlLabel-CQvCddOM.js";
import "./MessageAttachments-nUg1LIry.js";
import "./AttachmentFileName-BwwbwxPg.js";
import "./latexAttachmentPreviewLazy-DKgWJirC.js";
import "./latexAttachment-C8umpCPo.js";
import "./Card-Bf0WPnf4.js";
import "./history-7HBMn_Gr.js";
import "./AssistantMessageMetadata-BCGLTOhc.js";
import "./WriteupDisplayControls-E0ZIJhIu.js";
import "./PdfCanvasViewerControls-CKiN42mP.js";
import "./chevron-left-BwEFN4zp.js";
import "./zoom-in-uCZ29dqq.js";
import "./Alert-DnFVD8li.js";
import "./circle-check-big-D9HEGJKD.js";
import "./useMutation-C1SgG9wr.js";
import "./NextStepsResponse-NcFjw3w7.js";
import "./save-Bre0AB4-.js";
import "./send-CDdCro4v.js";
import "./play-3zl_nde-.js";
import "./FormGroup-BsLWbxpH.js";
import "./QuotedSelection-JUU54BvY.js";
import "./quote-DYxVpGUS.js";
import "./minimize-2-DiBwEVni.js";
const h = (t) => ({
    minHeight: "100dvh",
    backgroundColor: t.palette.background.default,
    color: t.palette.text.primary,
  }),
  x = {
    width: "100%",
    maxWidth: "76rem",
    minHeight: "100dvh",
    mx: "auto",
    px: { xs: 1.5, sm: 2.5, md: 4 },
    py: { xs: 2, md: 3 },
  },
  K = (t) => ({
    alignItems: { xs: "flex-start", sm: "center" },
    justifyContent: "space-between",
    gap: t.spacing(2),
    py: t.spacing(1.5),
  }),
  O = (t) => ({ alignItems: "center", minWidth: 0, gap: t.spacing(1.4) }),
  z = (t) => ({ display: "inline-flex", alignItems: "center", gap: t.spacing(0.65) }),
  G = { mt: 0.45 },
  V = { mt: 0.65 },
  Y = (t) => ({
    pt: t.spacing(1.5),
    pb: t.spacing(5),
    borderTop: `1px solid ${L(t.palette.text.primary, 0.08)}`,
  }),
  b = { minHeight: "calc(100dvh - 4rem)" },
  M = () => {},
  J = (t, o) => `${t.role}-${t.timestamp}-${o}`,
  X = (t) => {
    const o = new Date(t);
    return new Intl.DateTimeFormat(void 0, { dateStyle: "medium", timeStyle: "short" }).format(o);
  };
function Z({ chatId: t }) {
  const o = H({ queryKey: k.sharedChat(t), queryFn: () => _(t), retry: !1, gcTime: q }),
    r = o.data ?? null,
    u = p.useRef(null),
    g = p.useMemo(() => (r ? X(r.lastUpdated) : null), [r]),
    w = p.useCallback(
      (s) => {
        var m;
        const a = r == null ? void 0 : r.messages[s];
        if (!a || !["user", "assistant"].includes(a.role))
          throw new Error(`Could not find quoted source message ${s}.`);
        const c = (m = u.current) == null ? void 0 : m.querySelector(`[data-message-index="${s}"]`);
        if (!c) throw new Error(`Could not render quoted source message ${s}.`);
        c.scrollIntoView({ behavior: "smooth", block: "center" });
      },
      [r],
    );
  if (o.isPending)
    return e.jsx(n, {
      sx: h,
      children: e.jsx(n, {
        sx: x,
        children: e.jsx(T, {
          text: "Opening shared chat",
          subtext: "Fetching the chat snapshot.",
          tone: "shared",
          sx: b,
        }),
      }),
    });
  if (o.isError || !r) {
    const s = o.error ?? new Error("Shared chat was not returned.");
    return e.jsx(n, {
      sx: h,
      children: e.jsx(n, {
        sx: x,
        children: e.jsx(j, {
          title: "Shared chat unavailable",
          subtitle: P(s),
          icon: e.jsx(U, {}),
          sx: b,
          children: e.jsx(y, {
            to: "/",
            variant: "contained",
            startIcon: e.jsx(S, { fontSize: "small" }),
            sx: { mt: 1 },
            children: "Back to App",
          }),
        }),
      }),
    });
  }
  const E = r.title ?? A,
    d = r.messages,
    f = Q(d),
    v = F(d);
  return e.jsx(n, {
    sx: h,
    children: e.jsxs(i, {
      sx: x,
      children: [
        e.jsxs(i, {
          component: "header",
          direction: "row",
          sx: K,
          children: [
            e.jsxs(i, {
              direction: "row",
              sx: O,
              children: [
                e.jsx(I, { children: e.jsx(C, {}) }),
                e.jsxs(i, {
                  sx: { minWidth: 0 },
                  children: [
                    e.jsxs(i, {
                      component: "span",
                      direction: "row",
                      sx: z,
                      children: [
                        e.jsx(B, { color: "primary", sx: { fontSize: "1rem" } }),
                        e.jsx(l, {
                          component: "span",
                          variant: "sharedPageEyebrow",
                          color: "primary",
                          children: "Shared chat",
                        }),
                      ],
                    }),
                    e.jsx(n, {
                      sx: G,
                      children: e.jsx(l, {
                        component: "h1",
                        variant: "sharedPageTitle",
                        children: E,
                      }),
                    }),
                    g
                      ? e.jsx(n, {
                          sx: V,
                          children: e.jsxs(l, {
                            component: "p",
                            variant: "sharedPageMeta",
                            color: "textSecondary",
                            children: ["Updated ", g],
                          }),
                        })
                      : null,
                  ],
                }),
              ],
            }),
            e.jsx(y, {
              to: "/",
              variant: "outlined",
              startIcon: e.jsx(S, { fontSize: "small" }),
              sx: { flex: "0 0 auto" },
              children: "Open app",
            }),
          ],
        }),
        d.length > 0
          ? e.jsx(i, {
              ref: u,
              component: "main",
              spacing: 0.35,
              sx: Y,
              children: d.map((s, a) => {
                var c, m;
                return e.jsx(
                  "div",
                  {
                    "data-message-index": a,
                    children: e.jsx(N, {
                      macros: v[a],
                      children:
                        s.role === "assistant"
                          ? e.jsx(W, {
                              message: s,
                              messageIndex: a,
                              responseNumber: (c = f.get(a)) == null ? void 0 : c.responseNumber,
                              availableModels: [],
                              areCitationPreviewsEnabled: !1,
                              areWriteupActionsEnabled: !1,
                            })
                          : e.jsx(D, {
                              message: s,
                              queryNumber: (m = f.get(a)) == null ? void 0 : m.queryNumber,
                              isLatestUserMessage: !1,
                              areLatestUserActionsDisabled: !0,
                              onRetryLatestUserMessage: M,
                              onEditLatestUserMessage: M,
                              onQuoteClick: w,
                            }),
                    }),
                  },
                  J(s, a),
                );
              }),
            })
          : e.jsx(j, {
              title: "No messages yet",
              subtitle: "This shared chat does not contain any messages.",
              icon: e.jsx(C, {}),
              sx: { minHeight: "28rem", mt: 2 },
            }),
      ],
    }),
  });
}
function ee({ chatId: t }) {
  return e.jsx($, { chatId: t, children: e.jsx(Z, { chatId: t }) });
}
function Je() {
  const { chatId: t } = R.useParams();
  return e.jsx(ee, { chatId: t });
}
export { Je as component };
