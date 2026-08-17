import { r as l, j as r, B as _Component, a6 as _Component3, T as F, a5 as _Component2, aD as N, g as t } from "./index-BM3ZINIl.js";
import { a as P } from "./useAttachmentContent-15uaQfvd.js";
import { a as C, A as H } from "./AttachmentFileName-BwwbwxPg.js";
import { L as _ } from "./latexAttachmentPreviewLazy-DKgWJirC.js";
import { i as Y, d as z } from "./latexAttachment-C8umpCPo.js";
import { i as G } from "./ThinkingElapsedLabel-DKCKD95O.js";
import { C as _Component4 } from "./Card-Bf0WPnf4.js";
const q = (e, a) => `data:${e};base64,${a}`;
const $ = e => e.dataBase64 ? q(e.contentType || "application/octet-stream", e.dataBase64) : null;
const f = e => ({
  minWidth: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: e.spacing(1.4),
  padding: e.spacing(1.4, 1.6),
  borderRadius: e.shape.borderRadiusPx,
  border: `1px solid ${t(e.palette.text.primary, 0.08)}`,
  backgroundColor: t(e.palette.background.paper, 0.86),
  boxShadow: `0 10px 24px ${t(e.palette.text.primary, 0.05)}`,
  color: e.palette.text.primary,
  appearance: "none",
  font: "inherit",
  textAlign: "left",
  textDecoration: "none",
  cursor: "pointer",
  transition: e.transitions.create(["transform", "border-color", "background-color", "box-shadow"], {
    duration: e.transitions.duration.shorter
  }),
  "&:hover": {
    transform: "translateY(-1px)",
    borderColor: t(e.palette.primary.main, 0.18),
    backgroundColor: t(e.palette.background.paper, 0.92),
    boxShadow: `0 14px 28px ${t(e.palette.text.primary, 0.08)}`
  }
});
const k = e => ({
  minWidth: 0,
  overflow: "hidden",
  borderRadius: e.shape.borderRadiusPx,
  border: `1px solid ${t(e.palette.text.primary, 0.08)}`,
  backgroundColor: t(e.palette.background.paper, 0.9),
  boxShadow: `0 12px 28px ${t(e.palette.text.primary, 0.06)}`
});
const J = {
  display: "block",
  color: "inherit",
  textDecoration: "none"
};
const K = e => ({
  width: "100%",
  maxHeight: "28rem",
  display: "block",
  objectFit: "contain",
  backgroundColor: t(e.palette.text.primary, 0.03)
});
const L = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: 1.6,
  px: 1.8,
  pt: 1.6,
  pb: 1.7
};
const A = {
  minWidth: 0,
  flex: "1 1 12rem"
};
const Q = {
  minWidth: 0,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 0.25
};
const V = {
  display: "inline-flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 0.9,
  flex: "0 0 auto"
};
const D = e => ({
  display: "inline-flex",
  alignItems: "center",
  minHeight: e.spacing(4),
  padding: e.spacing(0.4, 1.4),
  borderRadius: e.shape.borderRadiusPx,
  border: `1px solid ${t(e.palette.primary.main, 0.14)}`,
  backgroundColor: t(e.palette.primary.main, 0.05),
  textDecoration: "none",
  transition: e.transitions.create(["transform", "border-color", "background-color"], {
    duration: e.transitions.duration.shorter
  }),
  "&:hover": {
    transform: "translateY(-1px)",
    borderColor: t(e.palette.primary.main, 0.24),
    backgroundColor: t(e.palette.primary.main, 0.09)
  }
});
const X = {
  display: "flex",
  flexDirection: "column",
  gap: 1.4,
  mb: 1.6
};
const Z = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(14rem, min(100%, 22rem)))",
  gap: 1.7,
  mb: 1.6
};
const _Component5 = ({
  attachment: e
}) => {
  const a = P(e.attachmentId, !e.dataBase64);
  const o = a.objectUrl ?? $(e);
  if (o) {
    return <_Component3 title={e.name} describeChild={true}><_Component sx={k}><_Component2 href={o} target="_blank" rel="noreferrer" underline="none" sx={J}><_Component component="img" src={o} alt={e.name} sx={K} /></_Component2><_Component sx={L}><_Component sx={A}><C name={e.name} /></_Component><_Component sx={V}><_Component2 href={o} target="_blank" rel="noreferrer" variant="button" color="primary" underline="none" sx={D}>Open</_Component2><_Component2 href={o} download={e.name} variant="button" color="primary" underline="none" sx={D}>Download</_Component2></_Component></_Component></_Component></_Component3>;
  } else {
    return <_Component3 title={e.name} describeChild={true}><_Component sx={k}><_Component sx={L}><_Component sx={A}><C name={e.name} /><F variant="caption" color={a.error || !e.attachmentId ? "error" : "textSecondary"}>{a.error && "Could not load image."}{!a.error && e.attachmentId && "Loading image..."}{!a.error && !e.attachmentId && "Image content is unavailable."}</F></_Component></_Component></_Component></_Component3>;
  }
};
const _Component6 = ({
  attachment: e
}) => {
  const a = P(e.attachmentId, false);
  const o = a.objectUrl ?? $(e);
  const n = Y(e.name);
  const c = G(e.name);
  const v = l.useMemo(() => !n || !e.dataBase64 ? null : z(e.dataBase64), [e.dataBase64, n]);
  const [B, E] = l.useState(null);
  const [R, y] = l.useState(null);
  const [T, h] = l.useState(false);
  const [p, S] = l.useState(false);
  const [M, w] = l.useState(null);
  const U = v ?? B;
  const W = i => {
    if (!i || !n || v) {
      h(false);
      return;
    }
    if (!e.attachmentId) {
      y("Preview source is unavailable for this attachment.");
      return;
    }
    y(null);
    h(true);
    a.load().then(d => d.text()).then(E).catch(d => {
      y(d instanceof Error ? d.message : `Could not load ${e.name}.`);
    }).finally(() => {
      h(false);
    });
  };
  const O = async () => {
    if (!e.attachmentId) {
      w("File content is unavailable.");
      return;
    }
    w(null);
    S(true);
    try {
      const i = await a.load();
      const d = URL.createObjectURL(i);
      const x = document.createElement("a");
      x.href = d;
      x.download = e.name;
      document.body.appendChild(x);
      x.click();
      x.remove();
      window.setTimeout(() => {
        URL.revokeObjectURL(d);
      }, 0);
    } catch (i) {
      w(i instanceof Error ? i.message : "Could not download file.");
    } finally {
      S(false);
    }
  };
  const I = M ?? a.error;
  const m = !!I || !o && !e.attachmentId;
  const u = <r.Fragment><H kind="file" name={e.name} href={o} /><_Component sx={Q}><C name={e.name} /><F variant="caption" color={m ? "error" : "textSecondary"}>{I && "Could not load file."}{!I && !o && !e.attachmentId && "File content is unavailable."}{!m && p && "Downloading file..."}{!m && !p && !c && "File"}{!m && !p && c && "Pasted text"}</F></_Component></r.Fragment>;
  if (n) {
    const i = <_Component4 component="button" type="button" variant="interactive" sx={f}>{u}</_Component4>;
    return <l.Suspense fallback={i}><_ name={e.name} source={U} isLoading={T} errorMessage={R} onOpenChange={W} triggerTooltip={e.name}>{i}</_></l.Suspense>;
  }
  if (o) {
    return <_Component3 title={e.name} describeChild={true}><_Component4 component={_Component2} variant="interactive" href={o} download={e.name} target="_blank" rel="noreferrer" underline="none" sx={f}>{u}</_Component4></_Component3>;
  } else if (e.attachmentId) {
    return <_Component4 component={N} variant="interactive" type="button" aria-label={`Download ${e.name}`} sx={f} disabled={p} onClick={() => {
      O();
    }}>{u}</_Component4>;
  } else {
    return <_Component3 title={e.name} describeChild={true}><_Component4 variant="inset" sx={f}>{u}</_Component4></_Component3>;
  }
};
const ne = ({
  attachments: e
}) => {
  const a = e.filter(n => n.kind === "image");
  const o = e.filter(n => n.kind === "file");
  return <r.Fragment>{a.length > 0 && <_Component sx={Z}>{a.map((n, c) => <_Component5 attachment={n} key={n.id ?? `${n.name}-${c}`} />)}</_Component>}{o.length > 0 && <_Component sx={X}>{o.map((n, c) => <_Component6 attachment={n} key={n.id ?? `${n.name}-${c}`} />)}</_Component>}</r.Fragment>;
};
const ce = l.memo(ne);
export { ce as M };
