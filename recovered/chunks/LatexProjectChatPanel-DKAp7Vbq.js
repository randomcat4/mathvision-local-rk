import {
  E as re,
  ax as ie,
  aj as ce,
  g as O,
  r as n,
  b1 as le,
  j as e,
  B as d,
  _ as M,
  T as v,
  C as ee,
  S as pe,
  p as de,
  b2 as me,
  t as G,
  ai as ue,
  s as X,
  V as he,
} from "./index-BM3ZINIl.js";
import { u as xe } from "./useQuery-DM2qiUYb.js";
import { u as fe } from "./useMutation-C1SgG9wr.js";
import { t as ge, u as Ce } from "./chatsApi-Ck-JYICO.js";
import { r as je, n as ye } from "./chatQueryCache-DOdNJrP_.js";
import { u as be, f as ve, h as Se } from "./threadMessageListLazy-ghC-RLRq.js";
import { u as Ee, b as Pe, A as Ie, c as Ae } from "./ChatPanelMoreMenu-B1X9SOWN.js";
import { a as Me } from "./cache-BNzcfneg.js";
import { u as we } from "./OpenInNewRounded-D-7V5TzF.js";
import { M as Re } from "./MessageAttachments-nUg1LIry.js";
import { C as ke } from "./ComposerAttachmentCard-BVMHeN2h.js";
import { M as Te, d as Le } from "./MessageBubble-DqxHrk03.js";
import { f as De } from "./useLatexQueries-DBpKOPUv.js";
import { L as _e } from "./latexProjectChatMessages-Cty9Jluh.js";
import { M as Be } from "./MChip-DiH8NXBU.js";
import { a as ze } from "./Markdown-Dh8LhaRc.js";
import { A } from "./Alert-DnFVD8li.js";
import { T as He } from "./TextField-D8vc_sXz.js";
import { E as Y } from "./eraser-B4pclN2p.js";
import { P as Fe } from "./panel-right-close-BXzsVzHe.js";
import "./streamNdjson-sRiOwtSP.js";
import "./authFetch-DXjDztUP.js";
import "./useInfiniteQuery-CdNTitqC.js";
import "./MarkdownHighlights-C-ZhT8z1.js";
import "./index-Yb6ONXKu.js";
import "./FormControlLabel-CQvCddOM.js";
import "./ThinkingElapsedLabel-DKCKD95O.js";
import "./ListItemText-CBxudZz_.js";
import "./useIsMobile-SdtLFChL.js";
import "./ChatInteractionOverrides-dyfOoEnd.js";
import "./DebouncedTextField-DEJkKI5N.js";
import "./useGetUserType-DlzkERhz.js";
import "./search-CE89ACSU.js";
import "./WorkspaceSidePanelFrame-BElEFQhq.js";
import "./useResizablePanelWidth-DfMwOMGi.js";
import "./useResizablePanelValue-D_NwbF9E.js";
import "./LogoutRounded-BsETu1qq.js";
import "./LinkOffRounded-CKGtm4_4.js";
import "./attachmentsApi-BHgxfYft.js";
import "./Divider-BcuihGce.js";
import "./ListItemIcon-CaLBil7Q.js";
import "./AlertTitle-B2wnIUF2.js";
import "./LoadingSection-wWBu2CqJ.js";
import "./SidebarTreeConnector-DsRNfBIo.js";
import "./file-code-corner-DV79SyC0.js";
import "./chatMessageSelectors-CRUAC26Y.js";
import "./Badge-b-klHfWK.js";
import "./circle-DSozMRKK.js";
import "./FormGroup-BsLWbxpH.js";
import "./TimeRelative-HYP_-RcH.js";
import "./panel-left-close-BNWX01EL.js";
import "./useAttachmentContent-15uaQfvd.js";
import "./AttachmentFileName-BwwbwxPg.js";
import "./latexAttachmentPreviewLazy-DKgWJirC.js";
import "./latexAttachment-C8umpCPo.js";
import "./Card-Bf0WPnf4.js";
import "./katex.min-ADdKj7O-.js";
import "./CopyButton-BcOsqrNJ.js";
import "./index-DzMT-bSF.js";
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const We = [
    [
      "path",
      {
        d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
        key: "1miecu",
      },
    ],
  ],
  Oe = re("paperclip", We),
  Ve = (t) => ie.post(ce, `latex/documents/${encodeURIComponent(t)}/chat`, {}).then((i) => ge(i)),
  Ue = { minWidth: 0, minHeight: 0, height: "100%", display: "flex", flexDirection: "column" },
  $e = (t) => ({
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: t.spacing(1),
    padding: t.spacing(1.2, 1.5),
    borderBottom: `1px solid ${O(t.palette.text.primary, 0.08)}`,
    backgroundColor: O(t.palette.background.paper, 0.7),
  }),
  Ke = (t) => ({ minWidth: 0, display: "flex", flexDirection: "column", gap: t.spacing(0.25) }),
  Ne = (t) => ({ flex: "0 0 auto", display: "flex", alignItems: "center", gap: t.spacing(0.5) }),
  J = (t) => ({
    flex: 1,
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: t.spacing(1.2),
    padding: t.spacing(2),
  }),
  Qe = (t) => ({
    flex: 1,
    minHeight: 0,
    display: "flex",
    flexDirection: "column",
    gap: t.spacing(1.15),
    overflowX: "hidden",
    overflowY: "auto",
    padding: t.spacing(1.25),
    scrollbarGutter: "stable",
  }),
  qe = (t) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: t ? "flex-end" : "flex-start",
    contentVisibility: "auto",
    containIntrinsicSize: "auto 8rem",
    gap: 0.5,
  }),
  Ge = { width: "fit-content", maxWidth: "96%" },
  Xe = (t) => ({
    flex: "0 0 auto",
    display: "flex",
    flexDirection: "column",
    gap: t.spacing(0.75),
    padding: t.spacing(1, 1.25),
    borderTop: `1px solid ${O(t.palette.text.primary, 0.08)}`,
    backgroundColor: O(t.palette.background.paper, 0.76),
  }),
  Ye = { minWidth: 0 },
  Je = (t) => ({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: t.spacing(0.75),
    maxHeight: "12rem",
    overflowY: "auto",
  }),
  Ze = (t) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: t.spacing(1),
  }),
  et = (t) => ({
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: t.spacing(0.5),
  }),
  tt = (t) => ({ display: "flex", alignItems: "center", gap: t.spacing(0.75) }),
  st = 12,
  Z = 12,
  ot = ({ documentId: t, message: i }) => {
    const f = i.content.trim(),
      c = i.attachments ?? [],
      l = De(t, i.latexEditProposalId ?? null).data,
      m = i.role === "user",
      S = i.markdownMathFormat === "canonical-v1" ? "canonical" : "compatibility";
    return !f && c.length === 0 && !l
      ? null
      : e.jsxs(d, {
          sx: qe(m),
          children: [
            e.jsxs(pe, {
              direction: "row",
              spacing: 0.5,
              sx: { alignItems: "center" },
              children: [
                e.jsx(v, {
                  variant: "caption",
                  color: "textSecondary",
                  children: m ? "You" : "Assistant",
                }),
                l &&
                  e.jsx(Be, {
                    size: "xs",
                    color:
                      l.status === "pending"
                        ? "warning"
                        : l.status === "applied"
                          ? "success"
                          : "error",
                    label: `${l.status[0].toUpperCase()}${l.status.slice(1)} proposal`,
                  }),
              ],
            }),
            e.jsxs(Te, {
              type: m ? "user" : "assistant",
              sx: Ge,
              children: [
                c.length > 0 && e.jsx(Re, { attachments: c }),
                f &&
                  e.jsx(ze, {
                    content: f,
                    mathSyntax: S,
                    mode: "compact",
                    tone: m ? "user" : "assistant",
                  }),
                !m && e.jsx(Le, { sources: i.sources }),
              ],
            }),
          ],
        });
  },
  at = n.memo(ot),
  nt = ({ chat: t }) => {
    var q;
    const [i, f] = n.useState(""),
      [c, l] = n.useState(!1),
      [m, S] = n.useState(null),
      [E, y] = n.useState(st),
      r = m && m.messageRevision > t.messageRevision ? m : t,
      x = n.useRef(null),
      j = n.useRef(!0);
    be(r.id, { markReadOnCompletedRun: !1, pollWhenIdle: !1 });
    const { error: a, executionModes: g, isLoading: L } = ve(),
      p = n.useMemo(() => {
        var T;
        const s =
          (T = [...r.messages].reverse().find((h) => h.role === "assistant")) == null
            ? void 0
            : T.modelId;
        return g.find((h) => h.id === s) ?? g.find((h) => h.isDefault) ?? g[0] ?? null;
      }, [r.messages, g]),
      {
        attachmentInputRef: D,
        composerAttachments: u,
        composerError: P,
        getAttachmentValidationError: _,
        handleInputSelection: B,
        openAttachmentPicker: z,
        removeComposerAttachment: I,
        setComposerAttachments: w,
        showComposerError: H,
        toChatAttachments: R,
      } = Ee({ selectedExecutionMode: p }),
      {
        cancelRun: F,
        isCancelingRun: k,
        isSubmittingChat: o,
        sendMessage: b,
        submissionErrorMessage: U,
      } = Pe({
        chat: r,
        workflowMode: "single",
        selectedExecutionModeId: (p == null ? void 0 : p.id) ?? "",
        selectedExecutionMode: p,
        selectedReasoningEffort: (p == null ? void 0 : p.reasoningEfforts[0]) ?? "none",
        selectedOperation: "chat",
        onOptimisticChatChange: S,
      }),
      $ = Math.max(0, r.messages.length - E),
      K = n.useMemo(() => r.messages.slice(-E), [r.messages, E]),
      C = r.activeRun !== null,
      N = le(r),
      V =
        (!i.trim() && u.length === 0) ||
        L ||
        p === null ||
        C ||
        o ||
        c ||
        !!P ||
        !!r.inputSafetyBlockedAt;
    n.useLayoutEffect(() => {
      const s = x.current;
      !s || !j.current || (s.scrollTop = s.scrollHeight);
    }, [(q = r.activeRun) == null ? void 0 : q.id, r.messages.length]);
    const te = n.useCallback(() => {
        const s = x.current;
        s && (j.current = s.scrollHeight - s.scrollTop - s.clientHeight <= 72);
      }, []),
      W = n.useCallback(async () => {
        const s = i.trim();
        if (!((!s && u.length === 0) || V || _(u))) {
          (l(!0), (j.current = !0));
          try {
            const h = await R(u);
            w(h.composerAttachments);
            try {
              (await b(s, h.chatAttachments, "chat"), f(""), w([]));
            } catch {
              f((ne) => ne || s);
            }
          } catch (h) {
            H(h instanceof Error ? h.message : "We couldn't prepare those files.");
          } finally {
            l(!1);
          }
        }
      }, [u, i, _, V, b, w, H, R]),
      se = n.useCallback(
        (s) => {
          (s.preventDefault(), W());
        },
        [W],
      ),
      Q = n.useCallback(
        (s) => {
          s.key !== "Enter" || s.shiftKey || s.nativeEvent.isComposing || (s.preventDefault(), W());
        },
        [W],
      ),
      oe = n.useMemo(
        () => ({
          input: { disableUnderline: !0 },
          htmlInput: { "aria-label": "Project chat message", onKeyDown: Q },
        }),
        [Q],
      ),
      ae = n.useMemo(
        () =>
          u.map((s) =>
            e.jsx(ke, { attachment: s, disabled: c || o, onRemove: () => I(s.id) }, s.id),
          ),
        [u, c, o, I],
      );
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(d, {
          ref: x,
          sx: Qe,
          onScroll: te,
          children: [
            $ > 0 &&
              e.jsxs(M, {
                type: "button",
                size: "small",
                variant: "text",
                onClick: () => {
                  y((s) => s + Z);
                },
                children: ["Show", " ", Math.min($, Z), " ", "earlier messages"],
              }),
            r.messages.length === 0 &&
              !C &&
              e.jsx(v, {
                variant: "body2",
                color: "textSecondary",
                align: "center",
                children:
                  "Ask about this project, or tell the chat to edit the contents of any text file. Proposed changes are shown for review before they are applied.",
              }),
            K.map((s, T) =>
              e.jsx(
                at,
                { documentId: r.latexDocumentId, message: s },
                `${s.role}:${s.timestamp}:${r.messages.length - K.length + T}`,
              ),
            ),
            N && e.jsx(A, { severity: "error", children: N }),
            C &&
              e.jsxs(d, {
                sx: tt,
                children: [
                  e.jsx(ee, { size: 16 }),
                  e.jsx(v, {
                    variant: "body2",
                    color: "textSecondary",
                    children: "Working with the project context…",
                  }),
                ],
              }),
          ],
        }),
        e.jsxs(d, {
          component: "form",
          sx: Xe,
          onSubmit: se,
          children: [
            e.jsx("input", {
              ref: D,
              type: "file",
              accept: Ie,
              multiple: !0,
              disabled: C || o || c,
              hidden: !0,
              onChange: B,
            }),
            !!a && e.jsx(A, { severity: "error", children: "Chat modes could not be loaded." }),
            C && e.jsx(A, { severity: "info", children: _e }),
            U && e.jsx(A, { severity: "error", children: U }),
            P && e.jsx(A, { severity: "error", children: P }),
            u.length > 0 && e.jsx(d, { sx: Je, children: ae }),
            e.jsx(He, {
              sx: Ye,
              placeholder: "Ask a question or describe the file edits you want",
              value: i,
              disabled: C || o || c,
              variant: "standard",
              fullWidth: !0,
              multiline: !0,
              minRows: 2,
              maxRows: 6,
              slotProps: oe,
              onChange: (s) => {
                f(s.target.value);
              },
            }),
            e.jsxs(d, {
              sx: Ze,
              children: [
                e.jsxs(d, {
                  sx: et,
                  children: [
                    e.jsx(M, {
                      type: "button",
                      size: "small",
                      variant: "text",
                      startIcon: e.jsx(Oe, { size: 16 }),
                      disabled: C || o || c,
                      onClick: z,
                      children: "Attach",
                    }),
                    e.jsx(v, {
                      variant: "caption",
                      color: "textSecondary",
                      children: "Enter to send · Shift+Enter for a new line",
                    }),
                  ],
                }),
                !C &&
                  e.jsx(M, {
                    type: "submit",
                    size: "small",
                    variant: "contained",
                    disabled: V,
                    children: c ? "Uploading" : "Send",
                  }),
                C &&
                  e.jsx(M, {
                    type: "button",
                    size: "small",
                    variant: "outlined",
                    disabled: k,
                    onClick: () => {
                      F();
                    },
                    children: k ? "Canceling" : "Cancel",
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  rt = n.memo(nt),
  it = ({
    documentId: t,
    documentRevision: i,
    isHideDisabled: f = !1,
    onActiveRunChange: c,
    onEditProposalIdChange: l,
    prepareSubmission: m,
    refreshProject: S,
    onHide: E,
  }) => {
    var R, F, k;
    const y = de(),
      r = xe({
        queryKey: ["latex", "documents", t, "chat"],
        queryFn: async () => {
          const o = await Ve(t);
          if (o.latexDocumentId !== t)
            throw new Error("The loaded chat is not bound to this LaTeX project.");
          return (X(y, o), o);
        },
        retry: !1,
        staleTime: 1 / 0,
      }),
      x = ((R = r.data) == null ? void 0 : R.id) ?? null,
      j = Se(x, { enabled: x !== null, markRead: !1 }),
      a = j.data ?? r.data ?? null,
      g = a !== null,
      L = !!(a != null && a.activeRun),
      p = (a == null ? void 0 : a.messages) ?? null,
      D = n.useMemo(() => {
        if (!p) return null;
        for (let o = p.length - 1; o >= 0; o -= 1) {
          const b = p[o].latexEditProposalId;
          if (b) return b;
        }
        return null;
      }, [p]);
    (n.useEffect(() => {
      g && y.invalidateQueries({ queryKey: Me.editProposals(t) });
    }, [
      (F = a == null ? void 0 : a.activeRun) == null ? void 0 : F.id,
      (k = a == null ? void 0 : a.latestRun) == null ? void 0 : k.status,
      a == null ? void 0 : a.messageRevision,
      t,
      g,
      y,
    ]),
      n.useEffect(() => {
        g && l(D);
      }, [g, D, l]),
      n.useEffect(
        () => () => {
          l(null);
        },
        [l],
      ),
      n.useEffect(
        () => (
          c(L),
          () => {
            c(!1);
          }
        ),
        [L, c],
      ));
    const u = n.useCallback(async () => {
        const o = await m();
        return {
          latexEditorContext: {
            documentRevision: o.documentRevision,
            activeFileId: o.activeFileId,
            selectionStart: o.selectionStart,
            selectionEnd: o.selectionEnd,
          },
        };
      }, [m]),
      P = n.useCallback(
        async (o) => {
          me(o) && (await S());
        },
        [S],
      ),
      _ = n.useMemo(() => ({ onSubmissionError: P, prepareSubmission: u }), [P, u]),
      B = r.isPending || !!(x && j.isPending),
      z = r.isError || j.isError,
      I = fe({
        mutationFn: (o) => Ce(o.id, { messages: [], expectedRevision: o.messageRevision }),
        onSuccess: (o) => {
          (X(y, o), ye(o), G.success("Project chat cleared."));
        },
        onError: (o) => {
          (x && je(y, x, o), G.error(ue(o, "The project chat could not be cleared.")));
        },
      }),
      { activate: w, confirmationDialog: H } = we((o, b) => ({
        title: "Clear project chat?",
        message:
          "This permanently removes all previous messages and dismisses pending proposed edits. Your LaTeX project files are not changed.",
        confirmLabel: "Clear chat",
        pendingConfirmLabel: "Clearing...",
        confirmColor: "error",
        confirmStartIcon: e.jsx(Y, { size: 16 }),
        isPending: I.isPending,
        onConfirm: async () => {
          if (a)
            try {
              (await I.mutateAsync(a), b());
            } catch {}
        },
      }));
    return e.jsxs(d, {
      sx: Ue,
      children: [
        e.jsxs(d, {
          component: "header",
          sx: $e,
          children: [
            e.jsxs(d, {
              sx: Ke,
              children: [
                e.jsx(v, { variant: "subtitle2", color: "textPrimary", children: "Project chat" }),
                e.jsxs(v, {
                  variant: "caption",
                  color: "textSecondary",
                  children: ["Revision ", i],
                }),
              ],
            }),
            e.jsxs(d, {
              sx: Ne,
              children: [
                a &&
                  a.messages.length > 0 &&
                  e.jsx(M, {
                    type: "button",
                    size: "small",
                    variant: "text",
                    startIcon: e.jsx(Y, { size: 15 }),
                    disabled: !!a.activeRun || I.isPending,
                    onClick: () => {
                      w("clear");
                    },
                    children: "Clear",
                  }),
                E &&
                  e.jsx(he, {
                    tooltip: "Hide project chat panel",
                    "aria-label": "Hide project chat panel",
                    disabled: f,
                    onClick: E,
                    children: e.jsx(Fe, { size: 17 }),
                  }),
              ],
            }),
          ],
        }),
        B &&
          e.jsxs(d, {
            sx: J,
            children: [
              e.jsx(ee, { size: 24 }),
              e.jsx(v, {
                variant: "body2",
                color: "textSecondary",
                children: "Opening project chat",
              }),
            ],
          }),
        z &&
          e.jsxs(d, {
            sx: J,
            children: [
              e.jsx(A, { severity: "error", children: "The project chat could not be opened." }),
              e.jsx(M, {
                type: "button",
                size: "small",
                variant: "outlined",
                onClick: () => {
                  (r.refetch(), x && j.refetch());
                },
                children: "Retry",
              }),
            ],
          }),
        !B && !z && a && e.jsx(Ae, { value: _, children: e.jsx(rt, { chat: a }, a.id) }),
        H,
      ],
    });
  },
  us = n.memo(it);
export { us as LatexProjectChatPanel };
