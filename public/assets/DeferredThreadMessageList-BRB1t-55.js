import {
  E as Qe,
  r as a,
  j as n,
  B as E,
  e as Ae,
  T as P,
  V as Ge,
  g as b,
  by as Ye,
  bz as st,
  bA as le,
  M as He,
  _ as Ke,
  bB as at,
  p as ot,
  bC as Ze,
  S as ye,
  bv as We,
} from "./index-BM3ZINIl.js";
import { M as ct } from "./Markdown-Dh8LhaRc.js";
import { M as Ue } from "./MChip-DiH8NXBU.js";
import { M as lt } from "./maximize-2-B07z4fzS.js";
import { u as ut } from "./ChatInteractionOverrides-dyfOoEnd.js";
import { U as dt, A as pt } from "./UserMessage-DN7iPijg.js";
import { h as mt, k as ht, l as xt } from "./assistantStructuredResponseLazy-CCAemx3W.js";
import { u as gt } from "./index-D0EP5Hzg.js";
import { G as Ee, T as ft, a as Tt } from "./ThinkingElapsedLabel-DKCKD95O.js";
import { b as bt } from "./MarkdownHighlights-C-ZhT8z1.js";
import { b as It, L as yt } from "./TextField-D8vc_sXz.js";
import { L as Et } from "./ListItemIcon-CaLBil7Q.js";
import { L as Mt } from "./ListItemText-CBxudZz_.js";
import { C as _t } from "./NextStepsResponse-NcFjw3w7.js";
import { u as Rt } from "./useIsMobile-SdtLFChL.js";
import "./katex.min-ADdKj7O-.js";
import "./CopyButton-BcOsqrNJ.js";
import "./index-DzMT-bSF.js";
import "./index-Yb6ONXKu.js";
import "./MessageBubble-DqxHrk03.js";
import "./OpenInNewRounded-D-7V5TzF.js";
import "./FormControlLabel-CQvCddOM.js";
import "./MessageAttachments-nUg1LIry.js";
import "./useAttachmentContent-15uaQfvd.js";
import "./useQuery-DM2qiUYb.js";
import "./attachmentsApi-BHgxfYft.js";
import "./authFetch-DXjDztUP.js";
import "./AttachmentFileName-BwwbwxPg.js";
import "./latexAttachmentPreviewLazy-DKgWJirC.js";
import "./latexAttachment-C8umpCPo.js";
import "./Card-Bf0WPnf4.js";
import "./history-7HBMn_Gr.js";
import "./AssistantMessageMetadata-BCGLTOhc.js";
import "./streamNdjson-sRiOwtSP.js";
import "./chatsApi-Ck-JYICO.js";
import "./WriteupDisplayControls-E0ZIJhIu.js";
import "./PdfCanvasViewerControls-CKiN42mP.js";
import "./chevron-left-BwEFN4zp.js";
import "./zoom-in-uCZ29dqq.js";
import "./LoadingSection-wWBu2CqJ.js";
import "./Alert-DnFVD8li.js";
import "./Divider-BcuihGce.js";
import "./circle-check-big-D9HEGJKD.js";
import "./useMutation-C1SgG9wr.js";
import "./QuotedSelection-JUU54BvY.js";
import "./quote-DYxVpGUS.js";
import "./minimize-2-DiBwEVni.js";
import "./triangle-alert-C5eP7BuB.js";
import "./circle-check-B9fquZbm.js";
import "./save-Bre0AB4-.js";
import "./send-CDdCro4v.js";
import "./play-3zl_nde-.js";
import "./FormGroup-BsLWbxpH.js";
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const St = [
    ["path", { d: "m15 10 5 5-5 5", key: "qqa56n" }],
    ["path", { d: "M4 4v7a4 4 0 0 0 4 4h12", key: "z08zvw" }],
  ],
  kt = Qe("corner-down-right", St);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const At = [
    ["path", { d: "M20 20v-7a4 4 0 0 0-4-4H4", key: "1nkjon" }],
    ["path", { d: "M9 14 4 9l5-5", key: "102s5s" }],
  ],
  Ct = Qe("corner-up-left", At),
  vt = 160,
  jt = (e, r) => ({
    width: "min(100%, 68rem)",
    marginInline: "auto",
    paddingBlock: r.spacing(1.1),
    scrollMarginBlock: r.spacing(1.4),
    borderRadius: r.shape.radiusLgPx,
    outline: `2px solid ${e ? b(r.palette.primary.main, 0.55) : "transparent"}`,
    outlineOffset: r.spacing(0.35),
    transition: r.transitions.create(["box-shadow", "outline-color"], {
      duration: r.transitions.duration.standard,
    }),
  }),
  Lt = (e) => ({
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto",
    alignItems: "center",
    gap: e.spacing(1.4),
    padding: e.spacing(1, 1.2),
    border: `1px solid ${b(e.palette.text.primary, 0.08)}`,
    borderRadius: e.shape.borderRadiusPx,
    background: b(e.palette.background.paper, 0.72),
    boxShadow: `0 12px 28px ${b(e.palette.text.primary, 0.08)}`,
    [e.breakpoints.down("sm")]: { gridTemplateColumns: "minmax(0, 1fr)" },
  }),
  wt = (e) => ({ minWidth: 0, display: "grid", gap: e.spacing(0.65) }),
  Be = (e) => ({
    minWidth: 0,
    display: "grid",
    gridTemplateColumns: "6.5rem minmax(0, 1fr)",
    alignItems: "center",
    columnGap: e.spacing(1),
    [e.breakpoints.down("sm")]: { gridTemplateColumns: "minmax(0, 1fr)" },
  }),
  zt = (e) => ({
    width: "2.35rem",
    height: "2.35rem",
    border: `1px solid ${b(e.palette.primary.main, 0.22)}`,
    borderRadius: e.shape.borderRadiusPx,
    color: e.palette.primary.main,
    backgroundColor: b(e.palette.background.paper, 0.9),
    justifySelf: "end",
  }),
  $e = (e) => {
    const r = Ye(e);
    return r ? st(r, vt) : "Empty message";
  },
  Nt = ({
    userMessage: e,
    assistantMessage: r,
    assistantMessageIndex: t,
    queryNumber: s,
    responseNumber: p,
    isHighlighted: M,
    isRestoreDisabled: o,
    onRestore: m,
  }) =>
    n.jsx(E, {
      sx: (d) => jt(M, d),
      children: n.jsxs(Ae, {
        variant: "inset",
        sx: Lt,
        children: [
          n.jsxs(E, {
            sx: wt,
            children: [
              n.jsxs(E, {
                sx: Be,
                children: [
                  n.jsx(Ue, {
                    label: s ? `Question ${s}` : "Question",
                    size: "xs",
                    sx: { mr: "auto" },
                  }),
                  n.jsx(P, { variant: "body2", color: "textPrimary", noWrap: !0, children: $e(e) }),
                ],
              }),
              r &&
                n.jsxs(E, {
                  "data-message-index": t,
                  sx: Be,
                  children: [
                    n.jsx(Ue, {
                      label: p ? `Answer ${p}` : "Answer",
                      size: "xs",
                      sx: { mr: "auto" },
                    }),
                    n.jsx(P, {
                      variant: "body2",
                      color: "textSecondary",
                      noWrap: !0,
                      children: $e(r),
                    }),
                  ],
                }),
            ],
          }),
          n.jsx(Ge, {
            tooltip: "Expand",
            sx: zt,
            "aria-label": "Expand message pair",
            disabled: o,
            disableRipple: !0,
            onClick: m,
            children: n.jsx(lt, { size: 18 }),
          }),
        ],
      }),
    }),
  De = a.memo(Nt),
  Ot = ({
    message: e,
    chatId: r,
    messageIndex: t,
    adminHasRetryActivity: s = !1,
    adminModelExecutionRunId: p,
    minimizeAssistantMessageIndex: M,
    queryNumber: o,
    responseNumber: m,
    proChatCallAdminUserId: d = null,
    shouldPrepareWriteupPdf: f = !1,
    writeupPdfPreparationPriority: _ = 0,
    availableModels: I,
    areChatActionsEnabled: h,
    areCitationPreviewsEnabled: S,
    areWriteupActionsEnabled: v,
    areWriteupExportsEnabled: w,
    areVariableHighlightsEnabled: H,
    areNextStepTooltipsDisabled: x,
    showUserMessageTimestamp: A,
    isHighlighted: y,
    isBookmarked: U,
    isBookmarkActionPending: T,
    isBranchTourTarget: j,
    isLatestUserMessage: L,
    areLatestUserActionsDisabled: N,
    retryLatestUserMessageTooltip: O,
    nextStepChoiceRunLabel: B,
    isNextStepsActionDisabled: i = !1,
    isRunAllNextStepsDisabled: l = !1,
    isRunAllNextStepsPending: g = !1,
    isBranching: k,
    areBranchActionsDisabled: z,
    areFeedbackActionsDisabled: ue,
    areMinimizeActionsDisabled: de,
    onRetryLatestUserMessage: pe,
    onEditLatestUserMessage: ee,
    onBranchAssistantMessage: te,
    onSetAssistantMessageFeedback: re,
    onSetAssistantMessageBookmark: $,
    onSelectNextStep: me,
    onRunNextSteps: he,
    onRunAllNextSteps: xe,
    onSetMessagePairMinimized: ne,
    onJumpToMessageIndex: ge,
    onOpenAdminModelExecution: F,
    onContentResizeInteraction: X,
  }) => {
    const { branchAssistantMessage: q } = ut(),
      Q = a.useCallback(() => {
        ee(e);
      }, [e, ee]),
      G = a.useCallback(() => {
        ne(t, M ?? null, !0);
      }, [t, M, ne]),
      fe = a.useCallback(
        (W) => {
          if (q) {
            q();
            return;
          }
          te(t, W);
        },
        [q, t, te],
      ),
      Te = a.useCallback(
        (W) => {
          re(t, W);
        },
        [t, re],
      ),
      be = a.useCallback(
        (W) => {
          $ == null || $(t, W);
        },
        [t, $],
      ),
      ie = a.useCallback(() => {
        p && F && F(p);
      }, [p, F]),
      Y = !!p && !!F,
      K = h && M !== void 0;
    return e.role === "user"
      ? n.jsx(dt, {
          message: e,
          queryNumber: o,
          hasAdminRetryActivity: s,
          isHighlighted: y,
          showTimestamp: A,
          isLatestUserMessage: L,
          areLatestUserActionsDisabled: N,
          retryLatestUserMessageTooltip: O,
          isMinimizeActionDisabled: de,
          onRetryLatestUserMessage: pe,
          onEditLatestUserMessage: Q,
          onMinimize: K ? G : void 0,
          onOpenAdminModelExecution: Y ? ie : void 0,
          onQuoteClick: ge,
        })
      : n.jsx(pt, {
          message: e,
          messageIndex: t,
          hasAdminRetryActivity: s,
          chatId: r,
          responseNumber: m,
          availableModels: I,
          proChatCallAdminUserId: d,
          areProChatCallActionsEnabled: h,
          areCitationPreviewsEnabled: S,
          areWriteupActionsEnabled: v,
          areWriteupExportsEnabled: w,
          areVariableHighlightsEnabled: H,
          areNextStepTooltipsDisabled: x,
          shouldPrepareWriteupPdf: f,
          writeupPdfPreparationPriority: _,
          isHighlighted: y,
          isBranchTourTarget: j,
          isBranching: k,
          isBranchActionDisabled: z,
          isFeedbackActionDisabled: ue,
          isBookmarked: U,
          isBookmarkActionDisabled: T,
          nextStepChoiceRunLabel: B,
          isNextStepsActionDisabled: i,
          isRunAllNextStepsDisabled: l,
          isRunAllNextStepsPending: g,
          onContentResizeInteraction: X,
          onBranch: h || q ? fe : void 0,
          onFeedbackChange: h ? Te : void 0,
          onBookmarkChange:
            h && $ && (!e.proChatCall || e.proChatCall.status === "completed") ? be : void 0,
          onSelectNextStep: h && !N ? me : void 0,
          onRunNextSteps: he,
          onRunAllNextSteps: xe,
          onOpenAdminModelExecution: Y ? ie : void 0,
        });
  },
  Pt = a.memo(Ot),
  Ht = 92,
  Wt = 150,
  Ut = 260,
  Fe = 440,
  Me = 132,
  Bt = 680,
  $t = 88,
  Dt = 24,
  Ft = 1800,
  J = (e, r) => `${e.role}-${e.timestamp}-${r}`,
  _e = (e) => {
    let r = 0;
    for (let t = 0; t < e.length; t += 1) r = (Math.imul(r, 31) + e.charCodeAt(t)) | 0;
    return r.toString(36);
  },
  ae = (e, r) => {
    var t, s;
    return [
      J(e, r),
      _e(e.content),
      _e(((t = e.quote) == null ? void 0 : t.text) ?? ""),
      _e(e.reasoning ?? ""),
      e.displayMode ?? "default",
      ((s = e.attachments) == null
        ? void 0
        : s.map((p) => [p.kind, p.id ?? "", p.name].join(":")).join(",")) ?? "",
      e.isMinimized ? "minimized" : "expanded",
    ].join("|");
  },
  qt = (e, r, t) => {
    const s = [],
      p = new Map(),
      M = (o) => {
        const m = s.length;
        s.push(o);
        for (const d of o.messageIndexes) p.set(d, m);
      };
    for (let o = 0; o < e.length; o += 1) {
      const m = e[o],
        d = e[o + 1] ?? null,
        f = e[o - 1] ?? null,
        _ = t === o,
        I = _ || t === o + 1,
        h =
          r &&
          m.role === "user" &&
          (d == null ? void 0 : d.role) === "assistant" &&
          d.isMinimized &&
          !I
            ? d
            : null,
        S = m.role === "user" && (d == null ? void 0 : d.role) !== "assistant",
        v = r && S && !!m.isMinimized && !_;
      if (!(
        r &&
        m.role === "assistant" &&
        m.isMinimized &&
        !_ &&
        t !== o - 1 &&
        (f == null ? void 0 : f.role) === "user"
      )) {
        if (v) {
          M({
            kind: "minimizedStandaloneUser",
            key: J(m, o),
            messageIndex: o,
            messageIndexes: [o],
            userMessageIndex: o,
            userMessage: m,
          });
          continue;
        }
        if (h) {
          M({
            kind: "minimizedPair",
            key: `${J(m, o)}-${J(h, o + 1)}`,
            messageIndex: o,
            messageIndexes: [o, o + 1],
            userMessageIndex: o,
            userMessage: m,
            assistantMessage: h,
            assistantMessageIndex: o + 1,
          });
          continue;
        }
        M({
          kind: "message",
          key: J(m, o),
          messageIndex: o,
          messageIndexes: [o],
          userMessageIndex: m.role === "user" ? o : void 0,
          message: m,
          pairedAssistantMessageIndex:
            m.role === "user"
              ? (d == null ? void 0 : d.role) === "assistant"
                ? o + 1
                : null
              : void 0,
        });
      }
    }
    return { messageIndexToRowIndex: p, rows: s };
  },
  D = (e, { charsPerLine: r = $t, lineHeightPx: t = Dt, maxHeightPx: s = Ft } = {}) =>
    Math.min(s, Math.ceil(e.trim().length / r) * t),
  Vt = (e) =>
    Array.isArray(e)
      ? e.reduce((r, t) => {
          if (!t || typeof t != "object" || Array.isArray(t)) return r + Me;
          const s = "prompt" in t && typeof t.prompt == "string" ? t.prompt : "";
          return r + Me + D(s, { maxHeightPx: 360 });
        }, 0)
      : Me,
  Ce = (e) =>
    (e == null ? void 0 : e.operation) === "writeup" &&
    typeof e.writeup == "string" &&
    e.writeup.trim().length > 0,
  Xt = (e) => {
    var r;
    return (
      ((r = e.agentExecution) == null
        ? void 0
        : r.outputs.some((t) => t.operation === "writeup" && Ce(t.response))) ?? !1
    );
  },
  Qt = (e) => e.role === "assistant" && (Ce(le(e.content)) || Xt(e)),
  oe = (e) =>
    e.kind === "minimizedStandaloneUser"
      ? `${e.kind}:${ae(e.userMessage, e.messageIndex)}`
      : e.kind === "minimizedPair"
        ? `${e.kind}:${ae(e.userMessage, e.messageIndex)}:${ae(e.assistantMessage, e.assistantMessageIndex)}`
        : `${e.kind}:${ae(e.message, e.messageIndex)}`,
  Gt = (e) => {
    var s;
    if (e.kind === "minimizedPair" || e.kind === "minimizedStandaloneUser") return Ht;
    const { message: r } = e;
    if (r.role === "user")
      return (
        Wt +
        D(r.content, { maxHeightPx: 520 }) +
        D(((s = r.quote) == null ? void 0 : s.text) ?? "", { maxHeightPx: 360 })
      );
    const t = le(r.content);
    if (!t) return Ut + D(r.content);
    if (t.operation === "next-steps") {
      const p = typeof t.intuition == "string" ? t.intuition : "";
      return Fe + Vt(t.choices) + D(p, { maxHeightPx: 360 });
    }
    if (Ce(t)) {
      const p = typeof t.writeup == "string" ? t.writeup : "";
      return Bt + D(p);
    }
    return Fe + D(r.content, { maxHeightPx: 900 });
  },
  Yt = 48,
  Kt = 8,
  ce = 180,
  Zt = 2,
  Jt = 2,
  er = 90,
  tr = 3,
  rr = 2,
  nr = (e) => (e === "auto" ? "nearest" : e),
  ir = ({ initialScrollToBottomKey: e, onVirtualRowsChange: r, rows: t, viewportRef: s }) => {
    const [p, M] = a.useState(0),
      o = a.useRef(null),
      m = a.useRef(new Map()),
      d = a.useRef(null),
      f = a.useRef(null),
      _ = a.useRef(null),
      I = a.useRef(null),
      h = a.useCallback(() => {
        ((f.current = null),
          d.current !== null && (window.cancelAnimationFrame(d.current), (d.current = null)));
      }, []);
    (a.useEffect(
      () => () => {
        (h(), I.current !== null && (window.cancelAnimationFrame(I.current), (I.current = null)));
      },
      [h],
    ),
      a.useEffect(() => {
        const i = new Set(t.map(oe));
        for (const l of m.current.keys()) i.has(l) || m.current.delete(l);
      }, [t]),
      a.useLayoutEffect(() => {
        const i = s.current;
        if (!i) return;
        const l = () => {
          M(i.clientHeight);
        };
        if ((l(), typeof ResizeObserver > "u")) return;
        const g = new ResizeObserver(l);
        return (
          g.observe(i),
          () => {
            g.disconnect();
          }
        );
      }, [s]),
      a.useEffect(() => {
        const i = s.current;
        if (i)
          return (
            i.addEventListener("wheel", h, { passive: !0 }),
            i.addEventListener("touchstart", h, { passive: !0 }),
            i.addEventListener("pointerdown", h, { passive: !0 }),
            () => {
              (i.removeEventListener("wheel", h),
                i.removeEventListener("touchstart", h),
                i.removeEventListener("pointerdown", h));
            }
          );
      }, [h, s]));
    const S = a.useCallback(() => {
        !r ||
          I.current !== null ||
          (I.current = window.requestAnimationFrame(() => {
            ((I.current = null), r());
          }));
      }, [r]),
      v = a.useMemo(() => {
        const i = new Map();
        for (const l of t) i.set(oe(l), Gt(l));
        return i;
      }, [t]),
      w = a.useCallback(
        (i) => {
          const l = t[i];
          if (!l) return ce;
          const g = oe(l);
          return m.current.get(g) ?? v.get(g) ?? ce;
        },
        [v, t],
      ),
      H = a.useMemo(() => t.reduce((i, l, g) => i + w(g), 0), [w, t]),
      x = a.useCallback(
        (i, l) => {
          const g = (l == null ? void 0 : l.contentRect.height) ?? i.getBoundingClientRect().height,
            k = Number(i.dataset.index),
            z = Number.isInteger(k) ? t[k] : void 0;
          return (z && m.current.set(oe(z), g), g);
        },
        [t],
      ),
      A = p || ce * 4,
      y = t.length > Yt || H > A * Kt,
      U = Math.max(Zt, Math.ceil((A / ce) * ((Jt - 1) / 2))),
      T = gt({
        count: y ? t.length : 0,
        estimateSize: w,
        getItemKey: (i) => {
          var l;
          return ((l = t[i]) == null ? void 0 : l.key) ?? i;
        },
        getScrollElement: () => s.current,
        initialOffset:
          y && e
            ? () => {
                const i = s.current,
                  l = (i == null ? void 0 : i.clientHeight) ?? p;
                return Math.max(0, H - l);
              }
            : 0,
        measureElement: x,
        overscan: U,
        useAnimationFrameWithResizeObserver: !0,
        onChange: (i, l) => {
          y && !l && S();
        },
      });
    a.useLayoutEffect(() => {
      if (y || typeof ResizeObserver > "u") return;
      const i = o.current;
      if (!i) return;
      const l = new ResizeObserver(() => {
        S();
      });
      return (
        l.observe(i),
        () => {
          l.disconnect();
        }
      );
    }, [S, y]);
    const j = a.useCallback(
        (i = "auto") => {
          const l = s.current;
          return !l || t.length === 0
            ? !1
            : (T.scrollToIndex(t.length - 1, { align: "end", behavior: i }),
              l.scrollTo({ top: Number.MAX_SAFE_INTEGER, behavior: i }),
              !0);
        },
        [T, t.length, s],
      ),
      L = a.useCallback(
        (i, { align: l = "center", behavior: g = "smooth" } = {}) => {
          var z;
          if (i < 0 || i >= t.length) return !1;
          const k =
            (z = o.current) == null ? void 0 : z.querySelector(`[data-thread-row-index="${i}"]`);
          return k ? (k.scrollIntoView({ behavior: g, block: nr(l), inline: "nearest" }), !0) : !1;
        },
        [t.length],
      ),
      N = a.useCallback(
        (i = "auto") => {
          if (y) return j(i);
          const l = s.current;
          return !l || t.length === 0 ? !1 : (l.scrollTo({ top: l.scrollHeight, behavior: i }), !0);
        },
        [t.length, j, y, s],
      ),
      O = a.useCallback(
        (i) => {
          (h(), (f.current = { frameCount: 0, key: i, stableFrameCount: 0 }));
          const l = () => {
            d.current = window.requestAnimationFrame(() => {
              d.current = null;
              const g = f.current;
              if (!g || g.key !== i || _.current !== i) {
                ((f.current = null), (d.current = null));
                return;
              }
              if (!N("auto")) {
                f.current = null;
                return;
              }
              const k = s.current,
                z = k ? k.scrollHeight - k.scrollTop - k.clientHeight : 0;
              if (
                ((g.frameCount += 1),
                (g.stableFrameCount = z <= rr ? g.stableFrameCount + 1 : 0),
                g.frameCount < er && g.stableFrameCount < tr)
              ) {
                l();
                return;
              }
              f.current = null;
            });
          };
          l();
        },
        [h, N, s],
      );
    a.useLayoutEffect(() => {
      if (!e) {
        h();
        return;
      }
      t.length === 0 || _.current === e || ((_.current = e), N("auto"), O(e));
    }, [h, e, t.length, O, N]);
    const B = a.useCallback(
      (i, { align: l = "center", behavior: g = "smooth" } = {}) =>
        i < 0 || i >= t.length
          ? !1
          : y
            ? (T.scrollToIndex(i, { align: l, behavior: g }), !0)
            : L(i, { align: l, behavior: g }),
      [T, t.length, L, y],
    );
    return {
      listRootRef: o,
      rowVirtualizer: T,
      scrollToRowIndex: B,
      shouldVirtualize: y,
      virtualItems: T.getVirtualItems(),
    };
  },
  sr = (e) => ({
    width: "min(100%, 68rem)",
    marginInline: "auto",
    padding: e.spacing(0.35, 0, 1.25),
  }),
  ar = (e) => ({
    position: "relative",
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: e.spacing(0.65),
    padding: e.spacing(0.7, 0.85),
    overflow: "hidden",
    border: `1px solid ${b(e.palette.primary.main, 0.16)}`,
    borderRadius: e.shape.radiusSmPx,
    background: `linear-gradient(115deg, ${b(e.palette.primary.main, 0.08)}, ${b(e.palette.background.paper, 0.88)} 42%)`,
    boxShadow: `0 8px 24px ${b(e.palette.primary.main, 0.06)}`,
    "&::before": {
      content: '""',
      position: "absolute",
      insetBlock: 0,
      insetInlineStart: 0,
      width: "0.2rem",
      backgroundColor: e.palette.primary.main,
    },
  }),
  or = (e) => ({
    width: "1.85rem",
    height: "1.85rem",
    flex: "0 0 1.85rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginInlineStart: e.spacing(0.25),
    borderRadius: "50%",
    color: e.palette.primary.main,
    backgroundColor: b(e.palette.primary.main, 0.12),
  }),
  cr = (e) => ({ minWidth: "9rem", flex: "1 1 12rem", display: "grid", gap: e.spacing(0.05) }),
  Re = (e) => ({
    minWidth: 0,
    maxWidth: "min(100%, 19rem)",
    flex: "0 1 auto",
    justifyContent: "flex-start",
    paddingInline: e.spacing(0.8),
    borderColor: b(e.palette.primary.main, 0.2),
    backgroundColor: b(e.palette.background.paper, 0.74),
    "& .MuiButton-startIcon, & .MuiButton-endIcon": { flex: "0 0 auto" },
  }),
  lr = { maxWidth: "22rem", minWidth: "16rem" },
  Se = (e, r) => ({
    messageIndex: r,
    "branch-space-id": e,
    "workspace-panel": void 0,
    "latex-document-id": void 0,
    "latex-file-id": void 0,
    "latex-create-project": void 0,
  }),
  ur = (e) => {
    const r = e.children.length;
    return e.parent && r > 0
      ? {
          title: "Branch junction",
          detail: `This chat begins here · ${r} ${r === 1 ? "branch begins" : "branches begin"} here`,
        }
      : e.parent
        ? { title: "Branch origin", detail: "This chat begins from this answer" }
        : {
            title: "Branch point",
            detail: `${r} ${r === 1 ? "branch begins" : "branches begin"} from this answer`,
          };
  },
  dr = ({ branchSpaceId: e, lineage: r }) => {
    const t = a.useId(),
      [s, p] = a.useState(null),
      M = ur(r),
      o = r.children.length === 1 ? r.children[0] : null,
      m = a.useCallback(() => {
        p(null);
      }, []),
      d = a.useCallback((f) => {
        p(f.currentTarget);
      }, []);
    return n.jsxs(E, {
      sx: sr,
      children: [
        n.jsxs(Ae, {
          variant: "inset",
          sx: ar,
          children: [
            n.jsx(E, {
              "aria-hidden": "true",
              sx: or,
              children: n.jsx(Ee, { size: 17, strokeWidth: 2.2 }),
            }),
            n.jsxs(E, {
              sx: cr,
              children: [
                n.jsx(P, { variant: "subtitle2", children: M.title }),
                n.jsx(P, {
                  variant: "caption",
                  color: "textSecondary",
                  noWrap: !0,
                  children: M.detail,
                }),
              ],
            }),
            r.parent &&
              n.jsx(He, {
                to: "/chats/$chatId",
                params: { chatId: r.parent.chatId },
                search: Se(e, r.parent.messageIndex),
                size: "small",
                color: "secondary",
                variant: "outlined",
                startIcon: n.jsx(Ct, { size: 15 }),
                tooltip: `Open branch source: ${r.parent.title}`,
                sx: Re,
                children: n.jsxs(P, {
                  variant: "body2",
                  noWrap: !0,
                  children: ["From ", r.parent.title],
                }),
              }),
            o &&
              n.jsx(He, {
                to: "/chats/$chatId",
                params: { chatId: o.chatId },
                search: Se(e, o.messageIndex),
                size: "small",
                color: "secondary",
                variant: "outlined",
                startIcon: n.jsx(Ee, { size: 15 }),
                tooltip: `Open child branch: ${o.title}`,
                sx: Re,
                children: n.jsxs(P, { variant: "body2", noWrap: !0, children: ["To ", o.title] }),
              }),
            r.children.length > 1 &&
              n.jsxs(Ke, {
                size: "small",
                color: "secondary",
                variant: "outlined",
                endIcon: n.jsx(bt, { size: 15 }),
                "aria-controls": s ? t : void 0,
                "aria-haspopup": "menu",
                "aria-expanded": s ? !0 : void 0,
                onClick: d,
                sx: Re,
                children: [r.children.length, " branches"],
              }),
          ],
        }),
        r.children.length > 1 &&
          n.jsx(It, {
            id: t,
            anchorEl: s,
            open: !!s,
            onClose: m,
            slotProps: { paper: { sx: lr } },
            children: r.children.map((f) =>
              n.jsxs(
                at,
                {
                  dense: !0,
                  to: "/chats/$chatId",
                  params: { chatId: f.chatId },
                  search: Se(e, f.messageIndex),
                  onClick: m,
                  children: [
                    n.jsx(Et, { children: n.jsx(Ee, { size: 17 }) }),
                    n.jsx(Mt, { primary: f.title, secondary: "Starts from this answer" }),
                  ],
                },
                f.chatId,
              ),
            ),
          }),
      ],
    });
  },
  pr = a.memo(dr),
  mr = new Set(),
  hr = new Map(),
  xr = 4,
  ke = (e) => ({ scrollMarginBlock: e.spacing(1.4) }),
  gr = { position: "relative", width: "100%", flex: "0 0 auto" },
  fr = { width: "100%", flex: "0 0 auto" },
  Tr = { position: "absolute", top: 0, left: 0, width: "100%" },
  Je = a.forwardRef(
    (
      {
        chatId: e,
        branchSpaceId: r = null,
        branchLineageByMessageIndex: t = hr,
        messages: s,
        messageNumbersByIndex: p,
        markdownLatexMacrosByIndex: M,
        areVariableHighlightsEnabled: o = !0,
        areNextStepTooltipsDisabled: m = !1,
        shouldCollapseSavedMessagePairs: d = !0,
        forcedVisibleMessageIndex: f = null,
        bookmarkedMessageIndexes: _ = mr,
        highlightedMessageIndex: I,
        initialScrollToBottomKey: h = null,
        latestUserMessageIndex: S,
        viewportRef: v,
        proChatCallAdminUserId: w = null,
        availableModels: H,
        areChatActionsEnabled: x = !0,
        areCitationPreviewsEnabled: A = !0,
        areWriteupActionsEnabled: y = x,
        areWriteupExportsEnabled: U = !0,
        areLatestUserActionsVisible: T = !0,
        showUserMessageTimestamps: j = !1,
        isMessageSubmissionDisabled: L,
        isEditingLatestUserMessage: N,
        retryLatestUserMessageTooltip: O,
        nextStepChoiceRunLabel: B,
        nextStepsMessageIndex: i = null,
        runAllNextStepsMessageIndex: l = null,
        isNextStepsActionDisabled: g = !1,
        isRunAllNextStepsDisabled: k = !1,
        isRunAllNextStepsPending: z = !1,
        branchingMessageIndex: ue,
        isBranchChatPending: de,
        isFeedbackActionPending: pe,
        bookmarkingMessageIndex: ee = null,
        areBookmarkActionsDisabled: te = !1,
        onRetryLatestUserMessage: re,
        onEditLatestUserMessage: $,
        onBranchAssistantMessage: me,
        onSetAssistantMessageFeedback: he,
        onSetAssistantMessageBookmark: xe,
        onSelectNextStep: ne,
        onRunNextSteps: ge,
        onRunAllNextSteps: F,
        onSetMessagePairMinimized: X,
        onJumpToMessageIndex: q,
        adminRetryActivityRunIdsByMessageIndex: Q,
        adminModelExecutionRunIdsByMessageIndex: G,
        onOpenAdminModelExecution: fe,
        onContentResizeInteraction: Te,
        onVirtualRowsChange: be,
      },
      ie,
    ) => {
      const Y = ot(),
        K = s.reduce((c, u, R) => (u.role === "assistant" ? R : c), -1),
        W = a.useMemo(() => {
          const c = s[K];
          if (!c) return [];
          const u = le(c.content);
          return (u == null ? void 0 : u.operation) !== "lit-search" || !mt(u.bibliography)
            ? []
            : Array.from(
                new Set(
                  u.bibliography.flatMap((R) => {
                    var Z;
                    const C = (Z = R.link) == null ? void 0 : Z.trim();
                    return C ? [C] : [];
                  }),
                ),
              );
        }, [K, s]);
      a.useEffect(() => {
        if (!A || W.length === 0) return;
        const c = [...W],
          u = async () => {
            for (;;) {
              const C = c.shift();
              if (!C) return;
              await Y.prefetchQuery({ ...xt(C), meta: ht });
            }
          },
          R = Math.min(xr, c.length);
        Promise.all(Array.from({ length: R }, () => u()));
      }, [A, W, Y]);
      const et = a.useMemo(() => s.reduce((c, u, R) => (Qt(u) ? R : c), -1), [s]),
        { messageIndexToRowIndex: Ie, rows: V } = a.useMemo(() => qt(s, d, f), [f, s, d]),
        {
          listRootRef: ve,
          rowVirtualizer: je,
          scrollToRowIndex: se,
          shouldVirtualize: tt,
          virtualItems: rt,
        } = ir({ initialScrollToBottomKey: h, onVirtualRowsChange: be, rows: V, viewportRef: v });
      a.useImperativeHandle(
        ie,
        () => ({
          scrollToLastRow: (c = {}) => se(V.length - 1, { align: "end", ...c }),
          scrollToMessageIndex: (c, u = {}) => {
            const R = Ie.get(c);
            return R === void 0 ? !1 : se(R, u);
          },
          scrollToUserMessageIndex: (c, u = {}) => {
            const R = Ie.get(c);
            if (R === void 0) return !1;
            const C = V[R];
            return (C == null ? void 0 : C.userMessageIndex) !== c
              ? !1
              : se(R, { align: "start", ...u });
          },
        }),
        [Ie, V, se],
      );
      const Le = (c) => {
        var we, ze, Ne, Oe, Pe;
        const u = c.messageIndex,
          R = c.kind === "minimizedPair" ? c.assistantMessageIndex : u,
          C = t.get(R);
        if (C && !r) throw new Error("Branch lineage requires a chat hierarchy id.");
        const Z = C && r && n.jsx(pr, { branchSpaceId: r, lineage: C }),
          nt = x && T && u === S;
        return c.kind === "minimizedStandaloneUser"
          ? n.jsx(E, {
              "data-message-index": c.messageIndex,
              "data-user-message-index": c.userMessageIndex,
              sx: ke,
              children: n.jsx(De, {
                userMessage: c.userMessage,
                queryNumber: (we = p.get(u)) == null ? void 0 : we.queryNumber,
                isHighlighted: I === u,
                isRestoreDisabled: L,
                onRestore: () => {
                  X(u, null, !1);
                },
              }),
            })
          : c.kind === "minimizedPair"
            ? n.jsxs(E, {
                "data-message-index": c.messageIndex,
                "data-user-message-index": c.userMessageIndex,
                sx: ke,
                children: [
                  n.jsx(De, {
                    userMessage: c.userMessage,
                    assistantMessage: c.assistantMessage,
                    assistantMessageIndex: c.assistantMessageIndex,
                    queryNumber: (ze = p.get(u)) == null ? void 0 : ze.queryNumber,
                    responseNumber:
                      (Ne = p.get(c.assistantMessageIndex)) == null ? void 0 : Ne.responseNumber,
                    isHighlighted: c.messageIndexes.some((it) => I === it),
                    isRestoreDisabled: L,
                    onRestore: () => {
                      X(u, c.assistantMessageIndex, !1);
                    },
                  }),
                  Z,
                ],
              })
            : n.jsxs(E, {
                "data-message-index": c.messageIndex,
                "data-user-message-index": c.userMessageIndex,
                sx: ke,
                children: [
                  n.jsx(ct, {
                    macros: M[u],
                    children: n.jsx(Pt, {
                      chatId: e,
                      message: c.message,
                      messageIndex: u,
                      adminHasRetryActivity: !!(Q != null && Q.get(u)),
                      adminModelExecutionRunId: G == null ? void 0 : G.get(u),
                      queryNumber: (Oe = p.get(u)) == null ? void 0 : Oe.queryNumber,
                      responseNumber: (Pe = p.get(u)) == null ? void 0 : Pe.responseNumber,
                      proChatCallAdminUserId: w,
                      shouldPrepareWriteupPdf: y && u === et,
                      isBranchTourTarget: u === K,
                      writeupPdfPreparationPriority: u,
                      availableModels: H,
                      isHighlighted: I === u,
                      isBookmarked: _.has(u),
                      isBookmarkActionPending: te || ee === u,
                      areChatActionsEnabled: x,
                      areCitationPreviewsEnabled: A,
                      areWriteupActionsEnabled: y,
                      areWriteupExportsEnabled: U,
                      areVariableHighlightsEnabled: o,
                      areNextStepTooltipsDisabled: m,
                      showUserMessageTimestamp: j,
                      isLatestUserMessage: nt,
                      areLatestUserActionsDisabled: L || N,
                      retryLatestUserMessageTooltip: O,
                      nextStepChoiceRunLabel: B,
                      isNextStepsActionDisabled: g,
                      isRunAllNextStepsDisabled: k,
                      isRunAllNextStepsPending: z,
                      isBranching: ue === u,
                      areBranchActionsDisabled: de,
                      areFeedbackActionsDisabled: L || pe,
                      areMinimizeActionsDisabled: L,
                      minimizeAssistantMessageIndex: c.pairedAssistantMessageIndex,
                      onRetryLatestUserMessage: re,
                      onEditLatestUserMessage: $,
                      onBranchAssistantMessage: me,
                      onSetAssistantMessageFeedback: he,
                      onSetAssistantMessageBookmark: xe,
                      onSelectNextStep: ne,
                      onRunNextSteps: u === i ? ge : void 0,
                      onRunAllNextSteps: u === l ? F : void 0,
                      onSetMessagePairMinimized: X,
                      onJumpToMessageIndex: q,
                      onOpenAdminModelExecution: fe,
                      onContentResizeInteraction: Te,
                    }),
                  }),
                  Z,
                ],
              });
      };
      return tt
        ? n.jsx(E, {
            ref: ve,
            sx: gr,
            style: { height: `${je.getTotalSize()}px` },
            children: rt.map((c) => {
              const u = V[c.index];
              return u
                ? n.jsx(
                    E,
                    {
                      ref: je.measureElement,
                      "data-index": c.index,
                      "data-thread-row-index": c.index,
                      sx: Tr,
                      style: { transform: `translateY(${c.start}px)` },
                      children: Le(u),
                    },
                    c.key,
                  )
                : null;
            }),
          })
        : n.jsx(E, {
            ref: ve,
            sx: fr,
            children: V.map((c, u) =>
              n.jsx(E, { "data-thread-row-index": u, children: Le(c) }, c.key),
            ),
          });
    },
  );
Je.displayName = "ThreadMessageList";
const zn = a.memo(Je),
  br = [{ name: "offset", options: { offset: [0, 10] } }],
  Ir = (e) => ({ zIndex: e.zIndex.tooltip }),
  yr = ({ selection: e, onQuote: r, onClose: t }) =>
    n.jsx(Ze, {
      open: e !== null,
      anchorEl: (e == null ? void 0 : e.anchorEl) ?? null,
      placement: "top",
      modifiers: br,
      sx: Ir,
      children:
        e &&
        n.jsx(_t, {
          onClickAway: t,
          children: n.jsx(E, {
            role: "presentation",
            onMouseDown: (s) => {
              s.preventDefault();
            },
            children: n.jsx(Ke, {
              type: "button",
              variant: "contained",
              size: "small",
              startIcon: n.jsx(kt, {}),
              onClick: () => {
                r(e.quote);
              },
              children: "Quote response",
            }),
          }),
        }),
    }),
  Er = 140,
  Mr = 240,
  qe = 160,
  _r = (e) => ({
    position: "fixed",
    right: e.spacing(2.2),
    top: "50%",
    zIndex: e.zIndex.drawer - 1,
    transform: "translateY(-50%)",
  }),
  Rr = (e) => ({
    width: "1.9rem",
    height: "6.2rem",
    padding: 0,
    border: 0,
    borderRadius: e.shape.radiusSmPx,
    color: b(e.palette.text.primary, 0.42),
    backgroundColor: "transparent",
    boxShadow: "none",
    backdropFilter: "none",
    "&:hover, &.Mui-focusVisible": {
      color: b(e.palette.text.primary, 0.7),
      backgroundColor: b(e.palette.background.paper, 0.82),
      boxShadow: `0 10px 26px ${b(e.palette.text.primary, 0.1)}`,
    },
  }),
  Sr = (e) => ({
    width: "min(26rem, calc(100vw - 2rem))",
    maxHeight: "min(28rem, calc(100vh - 3rem))",
    overflow: "hidden",
    borderRadius: e.shape.borderRadiusPx,
    border: `1px solid ${b(e.palette.text.primary, 0.08)}`,
    backgroundColor: b(e.palette.background.paper, 0.96),
    boxShadow: `0 24px 80px ${b(e.palette.text.primary, 0.14)}`,
    backdropFilter: "blur(18px)",
  }),
  kr = { minWidth: 0 },
  Ar = {
    minWidth: 0,
    maxHeight: "20rem",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    padding: 0,
  },
  Ve = (e) => ({
    minWidth: 0,
    alignItems: "flex-start",
    gap: e.spacing(1),
    borderRadius: 0,
    backgroundColor: b(e.palette.background.paper, 0.56),
    borderBottom: `1px solid ${b(e.palette.text.primary, 0.07)}`,
    "&:hover": { backgroundColor: b(e.palette.primary.main, 0.08) },
    "&:last-of-type": { borderBottom: 0 },
  }),
  Xe = { minWidth: 0, flex: 1 },
  Cr = (e) => ({ flexShrink: 0, alignSelf: "center", color: e.palette.primary.main }),
  vr = {
    width: "1.25rem",
    display: "grid",
    gap: "0.34rem",
    justifyItems: "end",
    pointerEvents: "none",
  },
  jr = { height: "0.095rem", borderRadius: "999px", backgroundColor: "currentColor" },
  Lr = [
    { width: "1.05rem", opacity: 0.5 },
    { width: "1.05rem", opacity: 0.42 },
    { width: "1.05rem", opacity: 0.5 },
    { width: "1.05rem", opacity: 0.42 },
    { width: "1.05rem", opacity: 0.5 },
    { width: "1.05rem", opacity: 0.42 },
    { width: "1.05rem", opacity: 0.5 },
    { width: "1.05rem", opacity: 0.42 },
  ],
  wr = ({ messages: e, triggerSx: r, triggerButtonSx: t, onSelectUserQuery: s }) => {
    const p = Rt(),
      [M, o] = a.useState(!1),
      m = a.useRef(null),
      d = a.useRef(null),
      f = a.useMemo(() => {
        const x = [];
        let A = 0;
        for (const [y, U] of e.entries()) {
          if (U.role !== "user") continue;
          A += 1;
          const T = e[y + 1],
            j = (T == null ? void 0 : T.role) === "assistant" ? le(T.content) : null,
            L =
              (T == null ? void 0 : T.role) === "assistant" &&
              typeof (j == null ? void 0 : j.operation) == "string"
                ? j.operation
                : (T == null ? void 0 : T.role) === "assistant" &&
                    (T.displayMode === "plain" || (!T.displayMode && !j))
                  ? "chat"
                  : null,
            O = Ye(U).slice(0, Mr).replace(/\s+/g, " ").trim(),
            B = O.length > qe ? `${O.slice(0, qe).trimEnd()}...` : O;
          x.push({ messageIndex: y, queryNumber: A, preview: B || "Empty prompt", operation: L });
        }
        return x;
      }, [e]),
      _ = f.length > 1,
      I = M && _,
      h = I ? "thread-user-query-navigator" : void 0,
      S = () => {
        d.current !== null && (window.clearTimeout(d.current), (d.current = null));
      },
      v = () => {
        _ && (S(), o(!0));
      },
      w = () => {
        (S(), o(!1));
      },
      H = () => {
        (S(),
          (d.current = window.setTimeout(() => {
            (o(!1), (d.current = null));
          }, Er)));
      };
    return (
      a.useEffect(
        () => () => {
          S();
        },
        [],
      ),
      p
        ? null
        : n.jsxs(E, {
            ref: m,
            "data-thread-tour-target": ft.queryNavigator,
            sx: [_r, ...(Array.isArray(r) ? r : r ? [r] : [])],
            children: [
              n.jsx(Ge, {
                tooltip: _ && !I ? "User queries" : void 0,
                sx: [Rr, ...(Array.isArray(t) ? t : t ? [t] : [])],
                "aria-label": "User queries",
                "aria-controls": h,
                "aria-haspopup": _ ? "dialog" : void 0,
                "aria-expanded": I ? "true" : void 0,
                disableRipple: !0,
                onMouseEnter: () => {
                  v();
                },
                onMouseLeave: H,
                onFocus: () => {
                  v();
                },
                onClick: () => {
                  v();
                },
                onKeyDown: (x) => {
                  x.key === "Escape" && w();
                },
                children: n.jsx(E, {
                  component: "span",
                  "aria-hidden": "true",
                  sx: vr,
                  children: Lr.map((x, A) =>
                    n.jsx(
                      E,
                      { component: "span", sx: [jr, { width: x.width, opacity: x.opacity }] },
                      A,
                    ),
                  ),
                }),
              }),
              I
                ? n.jsx(Ze, {
                    open: !0,
                    anchorEl: m.current,
                    placement: "left",
                    modifiers: [{ name: "offset", options: { offset: [0, -32] } }],
                    sx: (x) => ({ zIndex: x.zIndex.drawer + 2 }),
                    children: n.jsx(Ae, {
                      variant: "floating",
                      id: h,
                      role: "dialog",
                      "aria-label": "User queries in this chat",
                      sx: Sr,
                      onMouseEnter: S,
                      onMouseLeave: H,
                      onKeyDown: (x) => {
                        x.key === "Escape" && w();
                      },
                      children: n.jsx(ye, {
                        sx: kr,
                        children: n.jsx(yt, {
                          dense: !0,
                          disablePadding: !0,
                          "aria-label": "User queries in this chat",
                          sx: Ar,
                          children:
                            f.length > 0
                              ? f.map((x) =>
                                  n.jsxs(
                                    We,
                                    {
                                      title: x.preview,
                                      sx: Ve,
                                      onClick: () => {
                                        (w(), s(x.messageIndex));
                                      },
                                      children: [
                                        x.operation &&
                                          n.jsx(E, {
                                            component: "span",
                                            "aria-hidden": "true",
                                            sx: Cr,
                                            children: n.jsx(Tt, {
                                              operation: x.operation,
                                              size: 20,
                                            }),
                                          }),
                                        n.jsxs(ye, {
                                          sx: Xe,
                                          children: [
                                            n.jsxs(P, {
                                              variant: "caption",
                                              color: "primary",
                                              noWrap: !0,
                                              children: ["Prompt ", x.queryNumber],
                                            }),
                                            n.jsx(P, {
                                              variant: "body2",
                                              color: "textPrimary",
                                              noWrap: !0,
                                              children: x.preview,
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    x.messageIndex,
                                  ),
                                )
                              : n.jsx(We, {
                                  disabled: !0,
                                  sx: Ve,
                                  children: n.jsxs(ye, {
                                    sx: Xe,
                                    children: [
                                      n.jsx(P, {
                                        variant: "caption",
                                        color: "textSecondary",
                                        noWrap: !0,
                                        children: "No prompts",
                                      }),
                                      n.jsx(P, {
                                        variant: "body2",
                                        color: "textPrimary",
                                        noWrap: !0,
                                        children: "This chat is empty.",
                                      }),
                                    ],
                                  }),
                                }),
                        }),
                      }),
                    }),
                  })
                : null,
            ],
          })
    );
  },
  Nn = ({
    messages: e,
    onCloseTextSelection: r,
    onQuoteSelection: t,
    onSelectUserQuery: s,
    textSelection: p,
  }) =>
    n.jsxs(n.Fragment, {
      children: [
        n.jsx(yr, { selection: p, onQuote: t, onClose: r }),
        n.jsx(wr, { messages: e, onSelectUserQuery: s }),
      ],
    });
export { Nn as ThreadHistoryControls, zn as default };
