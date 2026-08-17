import { E as Qe, r as a, j as n, B as E, e as Ae, T as P, V as Ge, g as b, by as Ye, bz as st, bA as le, M as He, _ as Ke, bB as _Component5, p as ot, bC as Ze, S as _Component9, bv as We } from "./index-BM3ZINIl.js";
import { M as _Component7 } from "./Markdown-Dh8LhaRc.js";
import { M as Ue } from "./MChip-DiH8NXBU.js";
import { M as _Component } from "./maximize-2-B07z4fzS.js";
import { u as ut } from "./ChatInteractionOverrides-dyfOoEnd.js";
import { U as _Component2, A as _Component3 } from "./UserMessage-DN7iPijg.js";
import { h as mt, k as ht, l as xt } from "./assistantStructuredResponseLazy-CCAemx3W.js";
import { u as gt } from "./index-D0EP5Hzg.js";
import { G as Ee, T as ft, a as Tt } from "./ThinkingElapsedLabel-DKCKD95O.js";
import { b as _Component4 } from "./MarkdownHighlights-C-ZhT8z1.js";
import { b as It, L as _Component0 } from "./TextField-D8vc_sXz.js";
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
 */
const St = [["path", {
  d: "m15 10 5 5-5 5",
  key: "qqa56n"
}], ["path", {
  d: "M4 4v7a4 4 0 0 0 4 4h12",
  key: "z08zvw"
}]];
const _Component8 = Qe("corner-down-right", St);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const At = [["path", {
  d: "M20 20v-7a4 4 0 0 0-4-4H4",
  key: "1nkjon"
}], ["path", {
  d: "M9 14 4 9l5-5",
  key: "102s5s"
}]];
const Ct = Qe("corner-up-left", At);
const vt = 160;
const jt = (e, r) => ({
  width: "min(100%, 68rem)",
  marginInline: "auto",
  paddingBlock: r.spacing(1.1),
  scrollMarginBlock: r.spacing(1.4),
  borderRadius: r.shape.radiusLgPx,
  outline: `2px solid ${e ? b(r.palette.primary.main, 0.55) : "transparent"}`,
  outlineOffset: r.spacing(0.35),
  transition: r.transitions.create(["box-shadow", "outline-color"], {
    duration: r.transitions.duration.standard
  })
});
const Lt = e => ({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) auto",
  alignItems: "center",
  gap: e.spacing(1.4),
  padding: e.spacing(1, 1.2),
  border: `1px solid ${b(e.palette.text.primary, 0.08)}`,
  borderRadius: e.shape.borderRadiusPx,
  background: b(e.palette.background.paper, 0.72),
  boxShadow: `0 12px 28px ${b(e.palette.text.primary, 0.08)}`,
  [e.breakpoints.down("sm")]: {
    gridTemplateColumns: "minmax(0, 1fr)"
  }
});
const wt = e => ({
  minWidth: 0,
  display: "grid",
  gap: e.spacing(0.65)
});
const Be = e => ({
  minWidth: 0,
  display: "grid",
  gridTemplateColumns: "6.5rem minmax(0, 1fr)",
  alignItems: "center",
  columnGap: e.spacing(1),
  [e.breakpoints.down("sm")]: {
    gridTemplateColumns: "minmax(0, 1fr)"
  }
});
const zt = e => ({
  width: "2.35rem",
  height: "2.35rem",
  border: `1px solid ${b(e.palette.primary.main, 0.22)}`,
  borderRadius: e.shape.borderRadiusPx,
  color: e.palette.primary.main,
  backgroundColor: b(e.palette.background.paper, 0.9),
  justifySelf: "end"
});
const $e = e => {
  const r = Ye(e);
  if (r) {
    return st(r, vt);
  } else {
    return "Empty message";
  }
};
const Nt = ({
  userMessage: e,
  assistantMessage: r,
  assistantMessageIndex: t,
  queryNumber: s,
  responseNumber: p,
  isHighlighted: M,
  isRestoreDisabled: o,
  onRestore: m
}) => <E sx={d => jt(M, d)}><Ae variant="inset" sx={Lt}><E sx={wt}><E sx={Be}><Ue label={s ? `Question ${s}` : "Question"} size="xs" sx={{
          mr: "auto"
        }} /><P variant="body2" color="textPrimary" noWrap={true}>{$e(e)}</P></E>{r && <E data-message-index={t} sx={Be}><Ue label={p ? `Answer ${p}` : "Answer"} size="xs" sx={{
          mr: "auto"
        }} /><P variant="body2" color="textSecondary" noWrap={true}>{$e(r)}</P></E>}</E><Ge tooltip="Expand" sx={zt} aria-label="Expand message pair" disabled={o} disableRipple={true} onClick={m}><_Component size={18} /></Ge></Ae></E>;
const De = a.memo(Nt);
const Ot = ({
  message: e,
  chatId: r,
  messageIndex: t,
  adminHasRetryActivity: s = false,
  adminModelExecutionRunId: p,
  minimizeAssistantMessageIndex: M,
  queryNumber: o,
  responseNumber: m,
  proChatCallAdminUserId: d = null,
  shouldPrepareWriteupPdf: f = false,
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
  isNextStepsActionDisabled: i = false,
  isRunAllNextStepsDisabled: l = false,
  isRunAllNextStepsPending: g = false,
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
  onContentResizeInteraction: X
}) => {
  const {
    branchAssistantMessage: q
  } = ut();
  const Q = a.useCallback(() => {
    ee(e);
  }, [e, ee]);
  const G = a.useCallback(() => {
    ne(t, M ?? null, true);
  }, [t, M, ne]);
  const fe = a.useCallback(W => {
    if (q) {
      q();
      return;
    }
    te(t, W);
  }, [q, t, te]);
  const Te = a.useCallback(W => {
    re(t, W);
  }, [t, re]);
  const be = a.useCallback(W => {
    if ($ != null) {
      $(t, W);
    }
  }, [t, $]);
  const ie = a.useCallback(() => {
    if (p && F) {
      F(p);
    }
  }, [p, F]);
  const Y = !!p && !!F;
  const K = h && M !== undefined;
  if (e.role === "user") {
    return <_Component2 message={e} queryNumber={o} hasAdminRetryActivity={s} isHighlighted={y} showTimestamp={A} isLatestUserMessage={L} areLatestUserActionsDisabled={N} retryLatestUserMessageTooltip={O} isMinimizeActionDisabled={de} onRetryLatestUserMessage={pe} onEditLatestUserMessage={Q} onMinimize={K ? G : undefined} onOpenAdminModelExecution={Y ? ie : undefined} onQuoteClick={ge} />;
  } else {
    return <_Component3 message={e} messageIndex={t} hasAdminRetryActivity={s} chatId={r} responseNumber={m} availableModels={I} proChatCallAdminUserId={d} areProChatCallActionsEnabled={h} areCitationPreviewsEnabled={S} areWriteupActionsEnabled={v} areWriteupExportsEnabled={w} areVariableHighlightsEnabled={H} areNextStepTooltipsDisabled={x} shouldPrepareWriteupPdf={f} writeupPdfPreparationPriority={_} isHighlighted={y} isBranchTourTarget={j} isBranching={k} isBranchActionDisabled={z} isFeedbackActionDisabled={ue} isBookmarked={U} isBookmarkActionDisabled={T} nextStepChoiceRunLabel={B} isNextStepsActionDisabled={i} isRunAllNextStepsDisabled={l} isRunAllNextStepsPending={g} onContentResizeInteraction={X} onBranch={h || q ? fe : undefined} onFeedbackChange={h ? Te : undefined} onBookmarkChange={h && $ && (!e.proChatCall || e.proChatCall.status === "completed") ? be : undefined} onSelectNextStep={h && !N ? me : undefined} onRunNextSteps={he} onRunAllNextSteps={xe} onOpenAdminModelExecution={Y ? ie : undefined} />;
  }
};
const Pt = a.memo(Ot);
const Ht = 92;
const Wt = 150;
const Ut = 260;
const Fe = 440;
const Me = 132;
const Bt = 680;
const $t = 88;
const Dt = 24;
const Ft = 1800;
const J = (e, r) => `${e.role}-${e.timestamp}-${r}`;
const _e = e => {
  let r = 0;
  for (let t = 0; t < e.length; t += 1) {
    r = Math.imul(r, 31) + e.charCodeAt(t) | 0;
  }
  return r.toString(36);
};
const ae = (e, r) => {
  var t;
  var s;
  return [J(e, r), _e(e.content), _e(((t = e.quote) == null ? undefined : t.text) ?? ""), _e(e.reasoning ?? ""), e.displayMode ?? "default", ((s = e.attachments) == null ? undefined : s.map(p => [p.kind, p.id ?? "", p.name].join(":")).join(",")) ?? "", e.isMinimized ? "minimized" : "expanded"].join("|");
};
const qt = (e, r, t) => {
  const s = [];
  const p = new Map();
  const M = o => {
    const m = s.length;
    s.push(o);
    for (const d of o.messageIndexes) {
      p.set(d, m);
    }
  };
  for (let o = 0; o < e.length; o += 1) {
    const m = e[o];
    const d = e[o + 1] ?? null;
    const f = e[o - 1] ?? null;
    const _ = t === o;
    const I = _ || t === o + 1;
    const h = r && m.role === "user" && (d == null ? undefined : d.role) === "assistant" && d.isMinimized && !I ? d : null;
    const S = m.role === "user" && (d == null ? undefined : d.role) !== "assistant";
    const v = r && S && !!m.isMinimized && !_;
    if (!r || m.role !== "assistant" || !m.isMinimized || !!_ || t === o - 1 || (f == null ? undefined : f.role) !== "user") {
      if (v) {
        M({
          kind: "minimizedStandaloneUser",
          key: J(m, o),
          messageIndex: o,
          messageIndexes: [o],
          userMessageIndex: o,
          userMessage: m
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
          assistantMessageIndex: o + 1
        });
        continue;
      }
      M({
        kind: "message",
        key: J(m, o),
        messageIndex: o,
        messageIndexes: [o],
        userMessageIndex: m.role === "user" ? o : undefined,
        message: m,
        pairedAssistantMessageIndex: m.role === "user" ? (d == null ? undefined : d.role) === "assistant" ? o + 1 : null : undefined
      });
    }
  }
  return {
    messageIndexToRowIndex: p,
    rows: s
  };
};
const D = (e, {
  charsPerLine: r = $t,
  lineHeightPx: t = Dt,
  maxHeightPx: s = Ft
} = {}) => Math.min(s, Math.ceil(e.trim().length / r) * t);
const Vt = e => Array.isArray(e) ? e.reduce((r, t) => {
  if (!t || typeof t != "object" || Array.isArray(t)) {
    return r + Me;
  }
  const s = "prompt" in t && typeof t.prompt == "string" ? t.prompt : "";
  return r + Me + D(s, {
    maxHeightPx: 360
  });
}, 0) : Me;
const Ce = e => (e == null ? undefined : e.operation) === "writeup" && typeof e.writeup == "string" && e.writeup.trim().length > 0;
const Xt = e => {
  var r;
  return ((r = e.agentExecution) == null ? undefined : r.outputs.some(t => t.operation === "writeup" && Ce(t.response))) ?? false;
};
const Qt = e => e.role === "assistant" && (Ce(le(e.content)) || Xt(e));
const oe = e => e.kind === "minimizedStandaloneUser" ? `${e.kind}:${ae(e.userMessage, e.messageIndex)}` : e.kind === "minimizedPair" ? `${e.kind}:${ae(e.userMessage, e.messageIndex)}:${ae(e.assistantMessage, e.assistantMessageIndex)}` : `${e.kind}:${ae(e.message, e.messageIndex)}`;
const Gt = e => {
  var s;
  if (e.kind === "minimizedPair" || e.kind === "minimizedStandaloneUser") {
    return Ht;
  }
  const {
    message: r
  } = e;
  if (r.role === "user") {
    return Wt + D(r.content, {
      maxHeightPx: 520
    }) + D(((s = r.quote) == null ? undefined : s.text) ?? "", {
      maxHeightPx: 360
    });
  }
  const t = le(r.content);
  if (!t) {
    return Ut + D(r.content);
  }
  if (t.operation === "next-steps") {
    const p = typeof t.intuition == "string" ? t.intuition : "";
    return Fe + Vt(t.choices) + D(p, {
      maxHeightPx: 360
    });
  }
  if (Ce(t)) {
    const p = typeof t.writeup == "string" ? t.writeup : "";
    return Bt + D(p);
  }
  return Fe + D(r.content, {
    maxHeightPx: 900
  });
};
const Yt = 48;
const Kt = 8;
const ce = 180;
const Zt = 2;
const Jt = 2;
const er = 90;
const tr = 3;
const rr = 2;
const nr = e => e === "auto" ? "nearest" : e;
const ir = ({
  initialScrollToBottomKey: e,
  onVirtualRowsChange: r,
  rows: t,
  viewportRef: s
}) => {
  const [p, M] = a.useState(0);
  const o = a.useRef(null);
  const m = a.useRef(new Map());
  const d = a.useRef(null);
  const f = a.useRef(null);
  const _ = a.useRef(null);
  const I = a.useRef(null);
  const h = a.useCallback(() => {
    f.current = null;
    if (d.current !== null) {
      window.cancelAnimationFrame(d.current);
      d.current = null;
    }
  }, []);
  a.useEffect(() => () => {
    h();
    if (I.current !== null) {
      window.cancelAnimationFrame(I.current);
      I.current = null;
    }
  }, [h]);
  a.useEffect(() => {
    const i = new Set(t.map(oe));
    for (const l of m.current.keys()) {
      if (!i.has(l)) {
        m.current.delete(l);
      }
    }
  }, [t]);
  a.useLayoutEffect(() => {
    const i = s.current;
    if (!i) {
      return;
    }
    const l = () => {
      M(i.clientHeight);
    };
    l();
    if (typeof ResizeObserver === "undefined") {
      return;
    }
    const g = new ResizeObserver(l);
    g.observe(i);
    return () => {
      g.disconnect();
    };
  }, [s]);
  a.useEffect(() => {
    const i = s.current;
    if (i) {
      i.addEventListener("wheel", h, {
        passive: true
      });
      i.addEventListener("touchstart", h, {
        passive: true
      });
      i.addEventListener("pointerdown", h, {
        passive: true
      });
      return () => {
        i.removeEventListener("wheel", h);
        i.removeEventListener("touchstart", h);
        i.removeEventListener("pointerdown", h);
      };
    }
  }, [h, s]);
  const S = a.useCallback(() => {
    if (!!r && I.current === null) {
      I.current = window.requestAnimationFrame(() => {
        I.current = null;
        r();
      });
    }
  }, [r]);
  const v = a.useMemo(() => {
    const i = new Map();
    for (const l of t) {
      i.set(oe(l), Gt(l));
    }
    return i;
  }, [t]);
  const w = a.useCallback(i => {
    const l = t[i];
    if (!l) {
      return ce;
    }
    const g = oe(l);
    return m.current.get(g) ?? v.get(g) ?? ce;
  }, [v, t]);
  const H = a.useMemo(() => t.reduce((i, l, g) => i + w(g), 0), [w, t]);
  const x = a.useCallback((i, l) => {
    const g = (l == null ? undefined : l.contentRect.height) ?? i.getBoundingClientRect().height;
    const k = Number(i.dataset.index);
    const z = Number.isInteger(k) ? t[k] : undefined;
    if (z) {
      m.current.set(oe(z), g);
    }
    return g;
  }, [t]);
  const A = p || ce * 4;
  const y = t.length > Yt || H > A * Kt;
  const U = Math.max(Zt, Math.ceil(A / ce * ((Jt - 1) / 2)));
  const T = gt({
    count: y ? t.length : 0,
    estimateSize: w,
    getItemKey: i => {
      var l;
      return ((l = t[i]) == null ? undefined : l.key) ?? i;
    },
    getScrollElement: () => s.current,
    initialOffset: y && e ? () => {
      const i = s.current;
      const l = (i == null ? undefined : i.clientHeight) ?? p;
      return Math.max(0, H - l);
    } : 0,
    measureElement: x,
    overscan: U,
    useAnimationFrameWithResizeObserver: true,
    onChange: (i, l) => {
      if (y && !l) {
        S();
      }
    }
  });
  a.useLayoutEffect(() => {
    if (y || typeof ResizeObserver === "undefined") {
      return;
    }
    const i = o.current;
    if (!i) {
      return;
    }
    const l = new ResizeObserver(() => {
      S();
    });
    l.observe(i);
    return () => {
      l.disconnect();
    };
  }, [S, y]);
  const j = a.useCallback((i = "auto") => {
    const l = s.current;
    if (!l || t.length === 0) {
      return false;
    } else {
      T.scrollToIndex(t.length - 1, {
        align: "end",
        behavior: i
      });
      l.scrollTo({
        top: Number.MAX_SAFE_INTEGER,
        behavior: i
      });
      return true;
    }
  }, [T, t.length, s]);
  const L = a.useCallback((i, {
    align: l = "center",
    behavior: g = "smooth"
  } = {}) => {
    var z;
    if (i < 0 || i >= t.length) {
      return false;
    }
    const k = (z = o.current) == null ? undefined : z.querySelector(`[data-thread-row-index="${i}"]`);
    if (k) {
      k.scrollIntoView({
        behavior: g,
        block: nr(l),
        inline: "nearest"
      });
      return true;
    } else {
      return false;
    }
  }, [t.length]);
  const N = a.useCallback((i = "auto") => {
    if (y) {
      return j(i);
    }
    const l = s.current;
    if (!l || t.length === 0) {
      return false;
    } else {
      l.scrollTo({
        top: l.scrollHeight,
        behavior: i
      });
      return true;
    }
  }, [t.length, j, y, s]);
  const O = a.useCallback(i => {
    h();
    f.current = {
      frameCount: 0,
      key: i,
      stableFrameCount: 0
    };
    const l = () => {
      d.current = window.requestAnimationFrame(() => {
        d.current = null;
        const g = f.current;
        if (!g || g.key !== i || _.current !== i) {
          f.current = null;
          d.current = null;
          return;
        }
        if (!N("auto")) {
          f.current = null;
          return;
        }
        const k = s.current;
        const z = k ? k.scrollHeight - k.scrollTop - k.clientHeight : 0;
        g.frameCount += 1;
        g.stableFrameCount = z <= rr ? g.stableFrameCount + 1 : 0;
        if (g.frameCount < er && g.stableFrameCount < tr) {
          l();
          return;
        }
        f.current = null;
      });
    };
    l();
  }, [h, N, s]);
  a.useLayoutEffect(() => {
    if (!e) {
      h();
      return;
    }
    if (t.length !== 0 && _.current !== e) {
      _.current = e;
      N("auto");
      O(e);
    }
  }, [h, e, t.length, O, N]);
  const B = a.useCallback((i, {
    align: l = "center",
    behavior: g = "smooth"
  } = {}) => i < 0 || i >= t.length ? false : y ? (T.scrollToIndex(i, {
    align: l,
    behavior: g
  }), true) : L(i, {
    align: l,
    behavior: g
  }), [T, t.length, L, y]);
  return {
    listRootRef: o,
    rowVirtualizer: T,
    scrollToRowIndex: B,
    shouldVirtualize: y,
    virtualItems: T.getVirtualItems()
  };
};
const sr = e => ({
  width: "min(100%, 68rem)",
  marginInline: "auto",
  padding: e.spacing(0.35, 0, 1.25)
});
const ar = e => ({
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
    content: "\"\"",
    position: "absolute",
    insetBlock: 0,
    insetInlineStart: 0,
    width: "0.2rem",
    backgroundColor: e.palette.primary.main
  }
});
const or = e => ({
  width: "1.85rem",
  height: "1.85rem",
  flex: "0 0 1.85rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginInlineStart: e.spacing(0.25),
  borderRadius: "50%",
  color: e.palette.primary.main,
  backgroundColor: b(e.palette.primary.main, 0.12)
});
const cr = e => ({
  minWidth: "9rem",
  flex: "1 1 12rem",
  display: "grid",
  gap: e.spacing(0.05)
});
const Re = e => ({
  minWidth: 0,
  maxWidth: "min(100%, 19rem)",
  flex: "0 1 auto",
  justifyContent: "flex-start",
  paddingInline: e.spacing(0.8),
  borderColor: b(e.palette.primary.main, 0.2),
  backgroundColor: b(e.palette.background.paper, 0.74),
  "& .MuiButton-startIcon, & .MuiButton-endIcon": {
    flex: "0 0 auto"
  }
});
const lr = {
  maxWidth: "22rem",
  minWidth: "16rem"
};
const Se = (e, r) => ({
  messageIndex: r,
  "branch-space-id": e,
  "workspace-panel": undefined,
  "latex-document-id": undefined,
  "latex-file-id": undefined,
  "latex-create-project": undefined
});
const ur = e => {
  const r = e.children.length;
  if (e.parent && r > 0) {
    return {
      title: "Branch junction",
      detail: `This chat begins here · ${r} ${r === 1 ? "branch begins" : "branches begin"} here`
    };
  } else if (e.parent) {
    return {
      title: "Branch origin",
      detail: "This chat begins from this answer"
    };
  } else {
    return {
      title: "Branch point",
      detail: `${r} ${r === 1 ? "branch begins" : "branches begin"} from this answer`
    };
  }
};
const dr = ({
  branchSpaceId: e,
  lineage: r
}) => {
  const t = a.useId();
  const [s, p] = a.useState(null);
  const M = ur(r);
  const o = r.children.length === 1 ? r.children[0] : null;
  const m = a.useCallback(() => {
    p(null);
  }, []);
  const d = a.useCallback(f => {
    p(f.currentTarget);
  }, []);
  return <E sx={sr}><Ae variant="inset" sx={ar}><E aria-hidden="true" sx={or}><Ee size={17} strokeWidth={2.2} /></E><E sx={cr}><P variant="subtitle2">{M.title}</P><P variant="caption" color="textSecondary" noWrap={true}>{M.detail}</P></E>{r.parent && <He to="/chats/$chatId" params={{
        chatId: r.parent.chatId
      }} search={Se(e, r.parent.messageIndex)} size="small" color="secondary" variant="outlined" startIcon={<Ct size={15} />} tooltip={`Open branch source: ${r.parent.title}`} sx={Re}><P variant="body2" noWrap={true}>From {r.parent.title}</P></He>}{o && <He to="/chats/$chatId" params={{
        chatId: o.chatId
      }} search={Se(e, o.messageIndex)} size="small" color="secondary" variant="outlined" startIcon={<Ee size={15} />} tooltip={`Open child branch: ${o.title}`} sx={Re}><P variant="body2" noWrap={true}>To {o.title}</P></He>}{r.children.length > 1 && <Ke size="small" color="secondary" variant="outlined" endIcon={<_Component4 size={15} />} aria-controls={s ? t : undefined} aria-haspopup="menu" aria-expanded={s ? true : undefined} onClick={d} sx={Re}>{r.children.length} branches</Ke>}</Ae>{r.children.length > 1 && <It id={t} anchorEl={s} open={!!s} onClose={m} slotProps={{
      paper: {
        sx: lr
      }
    }}>{r.children.map(f => <_Component5 dense={true} to="/chats/$chatId" params={{
        chatId: f.chatId
      }} search={Se(e, f.messageIndex)} onClick={m} key={f.chatId}><Et><Ee size={17} /></Et><Mt primary={f.title} secondary="Starts from this answer" /></_Component5>)}</It>}</E>;
};
const _Component6 = a.memo(dr);
const mr = new Set();
const hr = new Map();
const xr = 4;
const ke = e => ({
  scrollMarginBlock: e.spacing(1.4)
});
const gr = {
  position: "relative",
  width: "100%",
  flex: "0 0 auto"
};
const fr = {
  width: "100%",
  flex: "0 0 auto"
};
const Tr = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%"
};
const Je = a.forwardRef(({
  chatId: e,
  branchSpaceId: r = null,
  branchLineageByMessageIndex: t = hr,
  messages: s,
  messageNumbersByIndex: p,
  markdownLatexMacrosByIndex: M,
  areVariableHighlightsEnabled: o = true,
  areNextStepTooltipsDisabled: m = false,
  shouldCollapseSavedMessagePairs: d = true,
  forcedVisibleMessageIndex: f = null,
  bookmarkedMessageIndexes: _ = mr,
  highlightedMessageIndex: I,
  initialScrollToBottomKey: h = null,
  latestUserMessageIndex: S,
  viewportRef: v,
  proChatCallAdminUserId: w = null,
  availableModels: H,
  areChatActionsEnabled: x = true,
  areCitationPreviewsEnabled: A = true,
  areWriteupActionsEnabled: y = x,
  areWriteupExportsEnabled: U = true,
  areLatestUserActionsVisible: T = true,
  showUserMessageTimestamps: j = false,
  isMessageSubmissionDisabled: L,
  isEditingLatestUserMessage: N,
  retryLatestUserMessageTooltip: O,
  nextStepChoiceRunLabel: B,
  nextStepsMessageIndex: i = null,
  runAllNextStepsMessageIndex: l = null,
  isNextStepsActionDisabled: g = false,
  isRunAllNextStepsDisabled: k = false,
  isRunAllNextStepsPending: z = false,
  branchingMessageIndex: ue,
  isBranchChatPending: de,
  isFeedbackActionPending: pe,
  bookmarkingMessageIndex: ee = null,
  areBookmarkActionsDisabled: te = false,
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
  onVirtualRowsChange: be
}, ie) => {
  const Y = ot();
  const K = s.reduce((c, u, R) => u.role === "assistant" ? R : c, -1);
  const W = a.useMemo(() => {
    const c = s[K];
    if (!c) {
      return [];
    }
    const u = le(c.content);
    if ((u == null ? undefined : u.operation) !== "lit-search" || !mt(u.bibliography)) {
      return [];
    } else {
      return Array.from(new Set(u.bibliography.flatMap(R => {
        var Z;
        const C = (Z = R.link) == null ? undefined : Z.trim();
        if (C) {
          return [C];
        } else {
          return [];
        }
      })));
    }
  }, [K, s]);
  a.useEffect(() => {
    if (!A || W.length === 0) {
      return;
    }
    const c = [...W];
    const u = async () => {
      while (true) {
        const C = c.shift();
        if (!C) {
          return;
        }
        await Y.prefetchQuery({
          ...xt(C),
          meta: ht
        });
      }
    };
    const R = Math.min(xr, c.length);
    Promise.all(Array.from({
      length: R
    }, () => u()));
  }, [A, W, Y]);
  const et = a.useMemo(() => s.reduce((c, u, R) => Qt(u) ? R : c, -1), [s]);
  const {
    messageIndexToRowIndex: Ie,
    rows: V
  } = a.useMemo(() => qt(s, d, f), [f, s, d]);
  const {
    listRootRef: ve,
    rowVirtualizer: je,
    scrollToRowIndex: se,
    shouldVirtualize: tt,
    virtualItems: rt
  } = ir({
    initialScrollToBottomKey: h,
    onVirtualRowsChange: be,
    rows: V,
    viewportRef: v
  });
  a.useImperativeHandle(ie, () => ({
    scrollToLastRow: (c = {}) => se(V.length - 1, {
      align: "end",
      ...c
    }),
    scrollToMessageIndex: (c, u = {}) => {
      const R = Ie.get(c);
      if (R === undefined) {
        return false;
      } else {
        return se(R, u);
      }
    },
    scrollToUserMessageIndex: (c, u = {}) => {
      const R = Ie.get(c);
      if (R === undefined) {
        return false;
      }
      const C = V[R];
      if ((C == null ? undefined : C.userMessageIndex) !== c) {
        return false;
      } else {
        return se(R, {
          align: "start",
          ...u
        });
      }
    }
  }), [Ie, V, se]);
  const Le = c => {
    var we;
    var ze;
    var Ne;
    var Oe;
    var Pe;
    const u = c.messageIndex;
    const R = c.kind === "minimizedPair" ? c.assistantMessageIndex : u;
    const C = t.get(R);
    if (C && !r) {
      throw new Error("Branch lineage requires a chat hierarchy id.");
    }
    const Z = C && r && <_Component6 branchSpaceId={r} lineage={C} />;
    const nt = x && T && u === S;
    if (c.kind === "minimizedStandaloneUser") {
      return <E data-message-index={c.messageIndex} data-user-message-index={c.userMessageIndex} sx={ke}><De userMessage={c.userMessage} queryNumber={(we = p.get(u)) == null ? undefined : we.queryNumber} isHighlighted={I === u} isRestoreDisabled={L} onRestore={() => {
          X(u, null, false);
        }} /></E>;
    } else if (c.kind === "minimizedPair") {
      return <E data-message-index={c.messageIndex} data-user-message-index={c.userMessageIndex} sx={ke}><De userMessage={c.userMessage} assistantMessage={c.assistantMessage} assistantMessageIndex={c.assistantMessageIndex} queryNumber={(ze = p.get(u)) == null ? undefined : ze.queryNumber} responseNumber={(Ne = p.get(c.assistantMessageIndex)) == null ? undefined : Ne.responseNumber} isHighlighted={c.messageIndexes.some(it => I === it)} isRestoreDisabled={L} onRestore={() => {
          X(u, c.assistantMessageIndex, false);
        }} />{Z}</E>;
    } else {
      return <E data-message-index={c.messageIndex} data-user-message-index={c.userMessageIndex} sx={ke}><_Component7 macros={M[u]}><Pt chatId={e} message={c.message} messageIndex={u} adminHasRetryActivity={Q != null && !!Q.get(u)} adminModelExecutionRunId={G == null ? undefined : G.get(u)} queryNumber={(Oe = p.get(u)) == null ? undefined : Oe.queryNumber} responseNumber={(Pe = p.get(u)) == null ? undefined : Pe.responseNumber} proChatCallAdminUserId={w} shouldPrepareWriteupPdf={y && u === et} isBranchTourTarget={u === K} writeupPdfPreparationPriority={u} availableModels={H} isHighlighted={I === u} isBookmarked={_.has(u)} isBookmarkActionPending={te || ee === u} areChatActionsEnabled={x} areCitationPreviewsEnabled={A} areWriteupActionsEnabled={y} areWriteupExportsEnabled={U} areVariableHighlightsEnabled={o} areNextStepTooltipsDisabled={m} showUserMessageTimestamp={j} isLatestUserMessage={nt} areLatestUserActionsDisabled={L || N} retryLatestUserMessageTooltip={O} nextStepChoiceRunLabel={B} isNextStepsActionDisabled={g} isRunAllNextStepsDisabled={k} isRunAllNextStepsPending={z} isBranching={ue === u} areBranchActionsDisabled={de} areFeedbackActionsDisabled={L || pe} areMinimizeActionsDisabled={L} minimizeAssistantMessageIndex={c.pairedAssistantMessageIndex} onRetryLatestUserMessage={re} onEditLatestUserMessage={$} onBranchAssistantMessage={me} onSetAssistantMessageFeedback={he} onSetAssistantMessageBookmark={xe} onSelectNextStep={ne} onRunNextSteps={u === i ? ge : undefined} onRunAllNextSteps={u === l ? F : undefined} onSetMessagePairMinimized={X} onJumpToMessageIndex={q} onOpenAdminModelExecution={fe} onContentResizeInteraction={Te} /></_Component7>{Z}</E>;
    }
  };
  if (tt) {
    return <E ref={ve} sx={gr} style={{
      height: `${je.getTotalSize()}px`
    }}>{rt.map(c => {
        const u = V[c.index];
        if (u) {
          return <E ref={je.measureElement} data-index={c.index} data-thread-row-index={c.index} sx={Tr} style={{
            transform: `translateY(${c.start}px)`
          }} key={c.key}>{Le(u)}</E>;
        } else {
          return null;
        }
      })}</E>;
  } else {
    return <E ref={ve} sx={fr}>{V.map((c, u) => <E data-thread-row-index={u} key={c.key}>{Le(c)}</E>)}</E>;
  }
});
Je.displayName = "ThreadMessageList";
const zn = a.memo(Je);
const br = [{
  name: "offset",
  options: {
    offset: [0, 10]
  }
}];
const Ir = e => ({
  zIndex: e.zIndex.tooltip
});
const _Component1 = ({
  selection: e,
  onQuote: r,
  onClose: t
}) => <Ze open={e !== null} anchorEl={(e == null ? undefined : e.anchorEl) ?? null} placement="top" modifiers={br} sx={Ir}>{e && <_t onClickAway={t}><E role="presentation" onMouseDown={s => {
      s.preventDefault();
    }}><Ke type="button" variant="contained" size="small" startIcon={<_Component8 />} onClick={() => {
        r(e.quote);
      }}>Quote response</Ke></E></_t>}</Ze>;
const Er = 140;
const Mr = 240;
const qe = 160;
const _r = e => ({
  position: "fixed",
  right: e.spacing(2.2),
  top: "50%",
  zIndex: e.zIndex.drawer - 1,
  transform: "translateY(-50%)"
});
const Rr = e => ({
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
    boxShadow: `0 10px 26px ${b(e.palette.text.primary, 0.1)}`
  }
});
const Sr = e => ({
  width: "min(26rem, calc(100vw - 2rem))",
  maxHeight: "min(28rem, calc(100vh - 3rem))",
  overflow: "hidden",
  borderRadius: e.shape.borderRadiusPx,
  border: `1px solid ${b(e.palette.text.primary, 0.08)}`,
  backgroundColor: b(e.palette.background.paper, 0.96),
  boxShadow: `0 24px 80px ${b(e.palette.text.primary, 0.14)}`,
  backdropFilter: "blur(18px)"
});
const kr = {
  minWidth: 0
};
const Ar = {
  minWidth: 0,
  maxHeight: "20rem",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  padding: 0
};
const Ve = e => ({
  minWidth: 0,
  alignItems: "flex-start",
  gap: e.spacing(1),
  borderRadius: 0,
  backgroundColor: b(e.palette.background.paper, 0.56),
  borderBottom: `1px solid ${b(e.palette.text.primary, 0.07)}`,
  "&:hover": {
    backgroundColor: b(e.palette.primary.main, 0.08)
  },
  "&:last-of-type": {
    borderBottom: 0
  }
});
const Xe = {
  minWidth: 0,
  flex: 1
};
const Cr = e => ({
  flexShrink: 0,
  alignSelf: "center",
  color: e.palette.primary.main
});
const vr = {
  width: "1.25rem",
  display: "grid",
  gap: "0.34rem",
  justifyItems: "end",
  pointerEvents: "none"
};
const jr = {
  height: "0.095rem",
  borderRadius: "999px",
  backgroundColor: "currentColor"
};
const Lr = [{
  width: "1.05rem",
  opacity: 0.5
}, {
  width: "1.05rem",
  opacity: 0.42
}, {
  width: "1.05rem",
  opacity: 0.5
}, {
  width: "1.05rem",
  opacity: 0.42
}, {
  width: "1.05rem",
  opacity: 0.5
}, {
  width: "1.05rem",
  opacity: 0.42
}, {
  width: "1.05rem",
  opacity: 0.5
}, {
  width: "1.05rem",
  opacity: 0.42
}];
const _Component10 = ({
  messages: e,
  triggerSx: r,
  triggerButtonSx: t,
  onSelectUserQuery: s
}) => {
  const p = Rt();
  const [M, o] = a.useState(false);
  const m = a.useRef(null);
  const d = a.useRef(null);
  const f = a.useMemo(() => {
    const x = [];
    let A = 0;
    for (const [y, U] of e.entries()) {
      if (U.role !== "user") {
        continue;
      }
      A += 1;
      const T = e[y + 1];
      const j = (T == null ? undefined : T.role) === "assistant" ? le(T.content) : null;
      const L = (T == null ? undefined : T.role) === "assistant" && typeof (j == null ? undefined : j.operation) == "string" ? j.operation : (T == null ? undefined : T.role) === "assistant" && (T.displayMode === "plain" || !T.displayMode && !j) ? "chat" : null;
      const O = Ye(U).slice(0, Mr).replace(/\s+/g, " ").trim();
      const B = O.length > qe ? `${O.slice(0, qe).trimEnd()}...` : O;
      x.push({
        messageIndex: y,
        queryNumber: A,
        preview: B || "Empty prompt",
        operation: L
      });
    }
    return x;
  }, [e]);
  const _ = f.length > 1;
  const I = M && _;
  const h = I ? "thread-user-query-navigator" : undefined;
  const S = () => {
    if (d.current !== null) {
      window.clearTimeout(d.current);
      d.current = null;
    }
  };
  const v = () => {
    if (_) {
      S();
      o(true);
    }
  };
  const w = () => {
    S();
    o(false);
  };
  const H = () => {
    S();
    d.current = window.setTimeout(() => {
      o(false);
      d.current = null;
    }, Er);
  };
  a.useEffect(() => () => {
    S();
  }, []);
  if (p) {
    return null;
  } else {
    return <E ref={m} data-thread-tour-target={ft.queryNavigator} sx={[_r, ...(Array.isArray(r) ? r : r ? [r] : [])]}><Ge tooltip={_ && !I ? "User queries" : undefined} sx={[Rr, ...(Array.isArray(t) ? t : t ? [t] : [])]} aria-label="User queries" aria-controls={h} aria-haspopup={_ ? "dialog" : undefined} aria-expanded={I ? "true" : undefined} disableRipple={true} onMouseEnter={() => {
        v();
      }} onMouseLeave={H} onFocus={() => {
        v();
      }} onClick={() => {
        v();
      }} onKeyDown={x => {
        if (x.key === "Escape") {
          w();
        }
      }}><E component="span" aria-hidden="true" sx={vr}>{Lr.map((x, A) => <E component="span" sx={[jr, {
            width: x.width,
            opacity: x.opacity
          }]} key={A} />)}</E></Ge>{I ? <Ze open={true} anchorEl={m.current} placement="left" modifiers={[{
        name: "offset",
        options: {
          offset: [0, -32]
        }
      }]} sx={x => ({
        zIndex: x.zIndex.drawer + 2
      })}><Ae variant="floating" id={h} role="dialog" aria-label="User queries in this chat" sx={Sr} onMouseEnter={S} onMouseLeave={H} onKeyDown={x => {
          if (x.key === "Escape") {
            w();
          }
        }}><_Component9 sx={kr}><_Component0 dense={true} disablePadding={true} aria-label="User queries in this chat" sx={Ar}>{f.length > 0 ? f.map(x => <We title={x.preview} sx={Ve} onClick={() => {
                w();
                s(x.messageIndex);
              }} key={x.messageIndex}>{x.operation && <E component="span" aria-hidden="true" sx={Cr}><Tt operation={x.operation} size={20} /></E>}<_Component9 sx={Xe}><P variant="caption" color="primary" noWrap={true}>Prompt {x.queryNumber}</P><P variant="body2" color="textPrimary" noWrap={true}>{x.preview}</P></_Component9></We>) : <We disabled={true} sx={Ve}><_Component9 sx={Xe}><P variant="caption" color="textSecondary" noWrap={true}>No prompts</P><P variant="body2" color="textPrimary" noWrap={true}>This chat is empty.</P></_Component9></We>}</_Component0></_Component9></Ae></Ze> : null}</E>;
  }
};
const Nn = ({
  messages: e,
  onCloseTextSelection: r,
  onQuoteSelection: t,
  onSelectUserQuery: s,
  textSelection: p
}) => <n.Fragment><_Component1 selection={p} onQuote={t} onClose={r} /><_Component10 messages={e} onSelectUserQuery={s} /></n.Fragment>;
export { Nn as ThreadHistoryControls, zn as default };
