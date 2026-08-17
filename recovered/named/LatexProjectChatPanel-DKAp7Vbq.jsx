import {
  E as re,
  ax as ie,
  aj as ce,
  g as O,
  r as n,
  b1 as le,
  j as e,
  B as _Component4,
  _ as M,
  T as _Component,
  C as _Component7,
  S as _Component2,
  p as de,
  b2 as me,
  t as G,
  ai as ue,
  s as X,
  V as _Component8,
} from "./index-BM3ZINIl.js";
import { u as xe } from "./useQuery-DM2qiUYb.js";
import { u as fe } from "./useMutation-C1SgG9wr.js";
import { t as ge, u as Ce } from "./chatsApi-Ck-JYICO.js";
import { r as je, n as ye } from "./chatQueryCache-DOdNJrP_.js";
import { u as be, f as ve, h as Se } from "./threadMessageListLazy-ghC-RLRq.js";
import {
  u as Ee,
  b as Pe,
  A as Ie,
  c as Ae,
} from "./ChatPanelMoreMenu-B1X9SOWN.js";
import { a as Me } from "./cache-BNzcfneg.js";
import { u as we } from "./OpenInNewRounded-D-7V5TzF.js";
import { M as Re } from "./MessageAttachments-nUg1LIry.js";
import { C as _Component5 } from "./ComposerAttachmentCard-BVMHeN2h.js";
import { M as Te, d as Le } from "./MessageBubble-DqxHrk03.js";
import { f as De } from "./useLatexQueries-DBpKOPUv.js";
import { L as _e } from "./latexProjectChatMessages-Cty9Jluh.js";
import { M as Be } from "./MChip-DiH8NXBU.js";
import { a as _Component3 } from "./Markdown-Dh8LhaRc.js";
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
 */
const We = [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu",
    },
  ],
];
const Oe = re("paperclip", We);
const Ve = (t) =>
  ie
    .post(ce, `latex/documents/${encodeURIComponent(t)}/chat`, {})
    .then((i) => ge(i));
const Ue = {
  minWidth: 0,
  minHeight: 0,
  height: "100%",
  display: "flex",
  flexDirection: "column",
};
const $e = (t) => ({
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: t.spacing(1),
  padding: t.spacing(1.2, 1.5),
  borderBottom: `1px solid ${O(t.palette.text.primary, 0.08)}`,
  backgroundColor: O(t.palette.background.paper, 0.7),
});
const Ke = (t) => ({
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: t.spacing(0.25),
});
const Ne = (t) => ({
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  gap: t.spacing(0.5),
});
const J = (t) => ({
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: t.spacing(1.2),
  padding: t.spacing(2),
});
const Qe = (t) => ({
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  gap: t.spacing(1.15),
  overflowX: "hidden",
  overflowY: "auto",
  padding: t.spacing(1.25),
  scrollbarGutter: "stable",
});
const qe = (t) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: t ? "flex-end" : "flex-start",
  contentVisibility: "auto",
  containIntrinsicSize: "auto 8rem",
  gap: 0.5,
});
const Ge = {
  width: "fit-content",
  maxWidth: "96%",
};
const Xe = (t) => ({
  flex: "0 0 auto",
  display: "flex",
  flexDirection: "column",
  gap: t.spacing(0.75),
  padding: t.spacing(1, 1.25),
  borderTop: `1px solid ${O(t.palette.text.primary, 0.08)}`,
  backgroundColor: O(t.palette.background.paper, 0.76),
});
const Ye = {
  minWidth: 0,
};
const Je = (t) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: t.spacing(0.75),
  maxHeight: "12rem",
  overflowY: "auto",
});
const Ze = (t) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: t.spacing(1),
});
const et = (t) => ({
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: t.spacing(0.5),
});
const tt = (t) => ({
  display: "flex",
  alignItems: "center",
  gap: t.spacing(0.75),
});
const st = 12;
const Z = 12;
const ot = ({ documentId: t, message: i }) => {
  const f = i.content.trim();
  const c = i.attachments ?? [];
  const l = De(t, i.latexEditProposalId ?? null).data;
  const m = i.role === "user";
  const S =
    i.markdownMathFormat === "canonical-v1" ? "canonical" : "compatibility";
  if (!f && c.length === 0 && !l) {
    return null;
  } else {
    return (
      <_Component4 sx={qe(m)}>
        <_Component2
          direction="row"
          spacing={0.5}
          sx={{
            alignItems: "center",
          }}
        >
          <_Component variant="caption" color="textSecondary">
            {m ? "You" : "Assistant"}
          </_Component>
          {l && (
            <Be
              size="xs"
              color={
                l.status === "pending"
                  ? "warning"
                  : l.status === "applied"
                    ? "success"
                    : "error"
              }
              label={`${l.status[0].toUpperCase()}${l.status.slice(1)} proposal`}
            />
          )}
        </_Component2>
        <Te type={m ? "user" : "assistant"} sx={Ge}>
          {c.length > 0 && <Re attachments={c} />}
          {f && (
            <_Component3
              content={f}
              mathSyntax={S}
              mode="compact"
              tone={m ? "user" : "assistant"}
            />
          )}
          {!m && <Le sources={i.sources} />}
        </Te>
      </_Component4>
    );
  }
};
const _Component6 = n.memo(ot);
const nt = ({ chat: t }) => {
  var q;
  const [i, f] = n.useState("");
  const [c, l] = n.useState(false);
  const [m, S] = n.useState(null);
  const [E, y] = n.useState(st);
  const r = m && m.messageRevision > t.messageRevision ? m : t;
  const x = n.useRef(null);
  const j = n.useRef(true);
  be(r.id, {
    markReadOnCompletedRun: false,
    pollWhenIdle: false,
  });
  const { error: a, executionModes: g, isLoading: L } = ve();
  const p = n.useMemo(() => {
    var T;
    const s =
      (T = [...r.messages].reverse().find((h) => h.role === "assistant")) ==
      null
        ? undefined
        : T.modelId;
    return (
      g.find((h) => h.id === s) ?? g.find((h) => h.isDefault) ?? g[0] ?? null
    );
  }, [r.messages, g]);
  const {
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
  } = Ee({
    selectedExecutionMode: p,
  });
  const {
    cancelRun: F,
    isCancelingRun: k,
    isSubmittingChat: o,
    sendMessage: b,
    submissionErrorMessage: U,
  } = Pe({
    chat: r,
    workflowMode: "single",
    selectedExecutionModeId: (p == null ? undefined : p.id) ?? "",
    selectedExecutionMode: p,
    selectedReasoningEffort:
      (p == null ? undefined : p.reasoningEfforts[0]) ?? "none",
    selectedOperation: "chat",
    onOptimisticChatChange: S,
  });
  const $ = Math.max(0, r.messages.length - E);
  const K = n.useMemo(() => r.messages.slice(-E), [r.messages, E]);
  const C = r.activeRun !== null;
  const N = le(r);
  const V =
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
    if (!!s && !!j.current) {
      s.scrollTop = s.scrollHeight;
    }
  }, [(q = r.activeRun) == null ? undefined : q.id, r.messages.length]);
  const te = n.useCallback(() => {
    const s = x.current;
    if (s) {
      j.current = s.scrollHeight - s.scrollTop - s.clientHeight <= 72;
    }
  }, []);
  const W = n.useCallback(async () => {
    const s = i.trim();
    if ((!!s || u.length !== 0) && !V && !_(u)) {
      l(true);
      j.current = true;
      try {
        const h = await R(u);
        w(h.composerAttachments);
        try {
          await b(s, h.chatAttachments, "chat");
          f("");
          w([]);
        } catch {
          f((ne) => ne || s);
        }
      } catch (h) {
        H(h instanceof Error ? h.message : "We couldn't prepare those files.");
      } finally {
        l(false);
      }
    }
  }, [u, i, _, V, b, w, H, R]);
  const se = n.useCallback(
    (s) => {
      s.preventDefault();
      W();
    },
    [W],
  );
  const Q = n.useCallback(
    (s) => {
      if (s.key === "Enter" && !s.shiftKey && !s.nativeEvent.isComposing) {
        s.preventDefault();
        W();
      }
    },
    [W],
  );
  const oe = n.useMemo(
    () => ({
      input: {
        disableUnderline: true,
      },
      htmlInput: {
        "aria-label": "Project chat message",
        onKeyDown: Q,
      },
    }),
    [Q],
  );
  const ae = n.useMemo(
    () =>
      u.map((s) => (
        <_Component5
          attachment={s}
          disabled={c || o}
          onRemove={() => I(s.id)}
          key={s.id}
        />
      )),
    [u, c, o, I],
  );
  return (
    <e.Fragment>
      <_Component4 ref={x} sx={Qe} onScroll={te}>
        {$ > 0 && (
          <M
            type="button"
            size="small"
            variant="text"
            onClick={() => {
              y((s) => s + Z);
            }}
          >
            Show {Math.min($, Z)} earlier messages
          </M>
        )}
        {r.messages.length === 0 && !C && (
          <_Component variant="body2" color="textSecondary" align="center">
            Ask about this project, or tell the chat to edit the contents of any
            text file. Proposed changes are shown for review before they are
            applied.
          </_Component>
        )}
        {K.map((s, T) => (
          <_Component6
            documentId={r.latexDocumentId}
            message={s}
            key={`${s.role}:${s.timestamp}:${r.messages.length - K.length + T}`}
          />
        ))}
        {N && <A severity="error">{N}</A>}
        {C && (
          <_Component4 sx={tt}>
            <_Component7 size={16} />
            <_Component variant="body2" color="textSecondary">
              Working with the project context…
            </_Component>
          </_Component4>
        )}
      </_Component4>
      <_Component4 component="form" sx={Xe} onSubmit={se}>
        <input
          ref={D}
          type="file"
          accept={Ie}
          multiple={true}
          disabled={C || o || c}
          hidden={true}
          onChange={B}
        />
        {!!a && <A severity="error">Chat modes could not be loaded.</A>}
        {C && <A severity="info">{_e}</A>}
        {U && <A severity="error">{U}</A>}
        {P && <A severity="error">{P}</A>}
        {u.length > 0 && <_Component4 sx={Je}>{ae}</_Component4>}
        <He
          sx={Ye}
          placeholder="Ask a question or describe the file edits you want"
          value={i}
          disabled={C || o || c}
          variant="standard"
          fullWidth={true}
          multiline={true}
          minRows={2}
          maxRows={6}
          slotProps={oe}
          onChange={(s) => {
            f(s.target.value);
          }}
        />
        <_Component4 sx={Ze}>
          <_Component4 sx={et}>
            <M
              type="button"
              size="small"
              variant="text"
              startIcon={<Oe size={16} />}
              disabled={C || o || c}
              onClick={z}
            >
              Attach
            </M>
            <_Component variant="caption" color="textSecondary">
              Enter to send · Shift+Enter for a new line
            </_Component>
          </_Component4>
          {!C && (
            <M type="submit" size="small" variant="contained" disabled={V}>
              {c ? "Uploading" : "Send"}
            </M>
          )}
          {C && (
            <M
              type="button"
              size="small"
              variant="outlined"
              disabled={k}
              onClick={() => {
                F();
              }}
            >
              {k ? "Canceling" : "Cancel"}
            </M>
          )}
        </_Component4>
      </_Component4>
    </e.Fragment>
  );
};
const _Component9 = n.memo(nt);
const it = ({
  documentId: t,
  documentRevision: i,
  isHideDisabled: f = false,
  onActiveRunChange: c,
  onEditProposalIdChange: l,
  prepareSubmission: m,
  refreshProject: S,
  onHide: E,
}) => {
  var R;
  var F;
  var k;
  const y = de();
  const r = xe({
    queryKey: ["latex", "documents", t, "chat"],
    queryFn: async () => {
      const o = await Ve(t);
      if (o.latexDocumentId !== t) {
        throw new Error("The loaded chat is not bound to this LaTeX project.");
      }
      X(y, o);
      return o;
    },
    retry: false,
    staleTime: Infinity,
  });
  const x = ((R = r.data) == null ? undefined : R.id) ?? null;
  const j = Se(x, {
    enabled: x !== null,
    markRead: false,
  });
  const a = j.data ?? r.data ?? null;
  const g = a !== null;
  const L = a != null && !!a.activeRun;
  const p = (a == null ? undefined : a.messages) ?? null;
  const D = n.useMemo(() => {
    if (!p) {
      return null;
    }
    for (let o = p.length - 1; o >= 0; o -= 1) {
      const b = p[o].latexEditProposalId;
      if (b) {
        return b;
      }
    }
    return null;
  }, [p]);
  n.useEffect(() => {
    if (g) {
      y.invalidateQueries({
        queryKey: Me.editProposals(t),
      });
    }
  }, [
    (F = a == null ? undefined : a.activeRun) == null ? undefined : F.id,
    (k = a == null ? undefined : a.latestRun) == null ? undefined : k.status,
    a == null ? undefined : a.messageRevision,
    t,
    g,
    y,
  ]);
  n.useEffect(() => {
    if (g) {
      l(D);
    }
  }, [g, D, l]);
  n.useEffect(
    () => () => {
      l(null);
    },
    [l],
  );
  n.useEffect(() => {
    c(L);
    return () => {
      c(false);
    };
  }, [L, c]);
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
  }, [m]);
  const P = n.useCallback(
    async (o) => {
      if (me(o)) {
        await S();
      }
    },
    [S],
  );
  const _ = n.useMemo(
    () => ({
      onSubmissionError: P,
      prepareSubmission: u,
    }),
    [P, u],
  );
  const B = r.isPending || (!!x && !!j.isPending);
  const z = r.isError || j.isError;
  const I = fe({
    mutationFn: (o) =>
      Ce(o.id, {
        messages: [],
        expectedRevision: o.messageRevision,
      }),
    onSuccess: (o) => {
      X(y, o);
      ye(o);
      G.success("Project chat cleared.");
    },
    onError: (o) => {
      if (x) {
        je(y, x, o);
      }
      G.error(ue(o, "The project chat could not be cleared."));
    },
  });
  const { activate: w, confirmationDialog: H } = we((o, b) => ({
    title: "Clear project chat?",
    message:
      "This permanently removes all previous messages and dismisses pending proposed edits. Your LaTeX project files are not changed.",
    confirmLabel: "Clear chat",
    pendingConfirmLabel: "Clearing...",
    confirmColor: "error",
    confirmStartIcon: <Y size={16} />,
    isPending: I.isPending,
    onConfirm: async () => {
      if (a) {
        try {
          await I.mutateAsync(a);
          b();
        } catch {}
      }
    },
  }));
  return (
    <_Component4 sx={Ue}>
      <_Component4 component="header" sx={$e}>
        <_Component4 sx={Ke}>
          <_Component variant="subtitle2" color="textPrimary">
            Project chat
          </_Component>
          <_Component variant="caption" color="textSecondary">
            Revision {i}
          </_Component>
        </_Component4>
        <_Component4 sx={Ne}>
          {a && a.messages.length > 0 && (
            <M
              type="button"
              size="small"
              variant="text"
              startIcon={<Y size={15} />}
              disabled={!!a.activeRun || I.isPending}
              onClick={() => {
                w("clear");
              }}
            >
              Clear
            </M>
          )}
          {E && (
            <_Component8
              tooltip="Hide project chat panel"
              aria-label="Hide project chat panel"
              disabled={f}
              onClick={E}
            >
              <Fe size={17} />
            </_Component8>
          )}
        </_Component4>
      </_Component4>
      {B && (
        <_Component4 sx={J}>
          <_Component7 size={24} />
          <_Component variant="body2" color="textSecondary">
            Opening project chat
          </_Component>
        </_Component4>
      )}
      {z && (
        <_Component4 sx={J}>
          <A severity="error">The project chat could not be opened.</A>
          <M
            type="button"
            size="small"
            variant="outlined"
            onClick={() => {
              r.refetch();
              if (x) {
                j.refetch();
              }
            }}
          >
            Retry
          </M>
        </_Component4>
      )}
      {!B && !z && a && (
        <Ae value={_}>
          <_Component9 chat={a} key={a.id} />
        </Ae>
      )}
      {H}
    </_Component4>
  );
};
const LatexProjectChatPanel = n.memo(it);
export { LatexProjectChatPanel };
