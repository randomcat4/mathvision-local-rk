import {
  j as e,
  r as p,
  B as _Component,
  ac as T,
  ad as _Component3,
  M as _Component2,
  ae as S,
  q as P,
  af as A,
  S as _Component5,
  ag as I,
  T as _Component4,
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
});
const x = {
  width: "100%",
  maxWidth: "76rem",
  minHeight: "100dvh",
  mx: "auto",
  px: {
    xs: 1.5,
    sm: 2.5,
    md: 4,
  },
  py: {
    xs: 2,
    md: 3,
  },
};
const K = (t) => ({
  alignItems: {
    xs: "flex-start",
    sm: "center",
  },
  justifyContent: "space-between",
  gap: t.spacing(2),
  py: t.spacing(1.5),
});
const O = (t) => ({
  alignItems: "center",
  minWidth: 0,
  gap: t.spacing(1.4),
});
const z = (t) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: t.spacing(0.65),
});
const G = {
  mt: 0.45,
};
const V = {
  mt: 0.65,
};
const Y = (t) => ({
  pt: t.spacing(1.5),
  pb: t.spacing(5),
  borderTop: `1px solid ${L(t.palette.text.primary, 0.08)}`,
});
const b = {
  minHeight: "calc(100dvh - 4rem)",
};
const M = () => {};
const J = (t, o) => `${t.role}-${t.timestamp}-${o}`;
const X = (t) => {
  const o = new Date(t);
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(o);
};
function Z({ chatId: t }) {
  const o = H({
    queryKey: k.sharedChat(t),
    queryFn: () => _(t),
    retry: false,
    gcTime: q,
  });
  const r = o.data ?? null;
  const u = p.useRef(null);
  const g = p.useMemo(() => (r ? X(r.lastUpdated) : null), [r]);
  const w = p.useCallback(
    (s) => {
      var m;
      const a = r == null ? undefined : r.messages[s];
      if (!a || !["user", "assistant"].includes(a.role)) {
        throw new Error(`Could not find quoted source message ${s}.`);
      }
      const c =
        (m = u.current) == null
          ? undefined
          : m.querySelector(`[data-message-index="${s}"]`);
      if (!c) {
        throw new Error(`Could not render quoted source message ${s}.`);
      }
      c.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    },
    [r],
  );
  if (o.isPending) {
    return (
      <_Component sx={h}>
        <_Component sx={x}>
          <T
            text="Opening shared chat"
            subtext="Fetching the chat snapshot."
            tone="shared"
            sx={b}
          />
        </_Component>
      </_Component>
    );
  }
  if (o.isError || !r) {
    const s = o.error ?? new Error("Shared chat was not returned.");
    return (
      <_Component sx={h}>
        <_Component sx={x}>
          <_Component3
            title="Shared chat unavailable"
            subtitle={P(s)}
            icon={<U />}
            sx={b}
          >
            <_Component2
              to="/"
              variant="contained"
              startIcon={<S fontSize="small" />}
              sx={{
                mt: 1,
              }}
            >
              Back to App
            </_Component2>
          </_Component3>
        </_Component>
      </_Component>
    );
  }
  const E = r.title ?? A;
  const d = r.messages;
  const f = Q(d);
  const v = F(d);
  return (
    <_Component sx={h}>
      <_Component5 sx={x}>
        <_Component5 component="header" direction="row" sx={K}>
          <_Component5 direction="row" sx={O}>
            <I>
              <C />
            </I>
            <_Component5
              sx={{
                minWidth: 0,
              }}
            >
              <_Component5 component="span" direction="row" sx={z}>
                <B
                  color="primary"
                  sx={{
                    fontSize: "1rem",
                  }}
                />
                <_Component4
                  component="span"
                  variant="sharedPageEyebrow"
                  color="primary"
                >
                  Shared chat
                </_Component4>
              </_Component5>
              <_Component sx={G}>
                <_Component4 component="h1" variant="sharedPageTitle">
                  {E}
                </_Component4>
              </_Component>
              {g ? (
                <_Component sx={V}>
                  <_Component4
                    component="p"
                    variant="sharedPageMeta"
                    color="textSecondary"
                  >
                    Updated {g}
                  </_Component4>
                </_Component>
              ) : null}
            </_Component5>
          </_Component5>
          <_Component2
            to="/"
            variant="outlined"
            startIcon={<S fontSize="small" />}
            sx={{
              flex: "0 0 auto",
            }}
          >
            Open app
          </_Component2>
        </_Component5>
        {d.length > 0 ? (
          <_Component5 ref={u} component="main" spacing={0.35} sx={Y}>
            {d.map((s, a) => {
              var c;
              var m;
              return (
                <div data-message-index={a} key={J(s, a)}>
                  <N macros={v[a]}>
                    {s.role === "assistant" ? (
                      <W
                        message={s}
                        messageIndex={a}
                        responseNumber={
                          (c = f.get(a)) == null ? undefined : c.responseNumber
                        }
                        availableModels={[]}
                        areCitationPreviewsEnabled={false}
                        areWriteupActionsEnabled={false}
                      />
                    ) : (
                      <D
                        message={s}
                        queryNumber={
                          (m = f.get(a)) == null ? undefined : m.queryNumber
                        }
                        isLatestUserMessage={false}
                        areLatestUserActionsDisabled={true}
                        onRetryLatestUserMessage={M}
                        onEditLatestUserMessage={M}
                        onQuoteClick={w}
                      />
                    )}
                  </N>
                </div>
              );
            })}
          </_Component5>
        ) : (
          <_Component3
            title="No messages yet"
            subtitle="This shared chat does not contain any messages."
            icon={<C />}
            sx={{
              minHeight: "28rem",
              mt: 2,
            }}
          />
        )}
      </_Component5>
    </_Component>
  );
}
function _Component6({ chatId: t }) {
  return (
    <$ chatId={t}>
      <Z chatId={t} />
    </$>
  );
}
function Je() {
  const { chatId: t } = R.useParams();
  return <_Component6 chatId={t} />;
}
export { Je as component };
