import { ax as v, aj as y, r as b, j as e, S as D, V as F, X as R, T as _Component, _ as _Component2, t as h, q as T } from "./index-BM3ZINIl.js";
import { u as E } from "./useMutation-C1SgG9wr.js";
import { D as C, a as M, b as _, c as _Component3 } from "./MChip-DiH8NXBU.js";
import { a as A, F as I, T as P } from "./TextField-D8vc_sXz.js";
import { R as B, a as L } from "./RadioGroup-CvCoRbaB.js";
import { F as W } from "./FormControlLabel-CQvCddOM.js";
import { S as G } from "./send-CDdCro4v.js";
import "./FormGroup-BsLWbxpH.js";
const K = y;
const q = a => ({
  kind: a.kind,
  message: a.message,
  chat_id: a.chatId ?? null,
  page_url: a.pageUrl ?? null
});
const z = a => v.post(K, "reports/bug-feedback", q(a)).then(() => {});
const f = 4000;
const H = [{
  value: "bug",
  label: "Bug"
}, {
  value: "feedback",
  label: "Feedback"
}];
const O = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 1
};
const U = {
  display: "flex",
  flexDirection: "column",
  gap: 2
};
const ee = ({
  open: a,
  selectedChat: r,
  onClose: c
}) => {
  const [d, u] = b.useState("bug");
  const [s, p] = b.useState("");
  const n = E({
    mutationFn: z
  });
  const l = s.trim();
  const o = n.isPending;
  const m = () => {
    u("bug");
    p("");
    n.reset();
  };
  const i = () => {
    if (!o) {
      c();
      m();
    }
  };
  const j = t => {
    t.preventDefault();
    if (!l) {
      return;
    }
    const k = {
      kind: d,
      message: l,
      chatId: (r == null ? undefined : r.id) ?? null,
      pageUrl: window.location.href
    };
    n.mutate(k, {
      onSuccess: () => {
        h.success("Report sent. Thank you for the help.");
        c();
        m();
      },
      onError: S => {
        h.error(T(S) || "Could not send this report.");
      }
    });
  };
  return <C open={a} maxWidth="sm" fullWidth={true} onClose={i}><D component="form" onSubmit={j}><M sx={O}>Report bug or feedback<F tooltip="Close" aria-label="Close report dialog" disabled={o} onClick={i}><R size={18} /></F></M><_ sx={U}><_Component variant="body2" color="textSecondary">Share what broke, felt confusing, or would make Math Vision better.</_Component><A disabled={o}><I id="report-feedback-kind-label">Type</I><B row={true} aria-labelledby="report-feedback-kind-label" name="report-feedback-kind" value={d} onChange={t => {
            u(t.target.value);
          }}>{H.map(t => <W value={t.value} control={<L />} label={t.label} key={t.value} />)}</B></A><P autoFocus={true} fullWidth={true} required={true} multiline={true} minRows={5} label="Details" value={s} disabled={o} helperText={`${s.length}/${f}`} slotProps={{
          htmlInput: {
            maxLength: f
          }
        }} onChange={t => {
          p(t.target.value);
        }} />{r && <_Component variant="caption" color="textSecondary" noWrap={true}>Current chat will be attached to this report.</_Component>}</_><_Component3><_Component2 disabled={o} onClick={i}>Cancel</_Component2><_Component2 type="submit" variant="contained" startIcon={<G size={16} />} disabled={o || !l}>{o ? "Sending..." : "Send report"}</_Component2></_Component3></D></C>;
};
export { ee as ReportFeedbackDialog };
