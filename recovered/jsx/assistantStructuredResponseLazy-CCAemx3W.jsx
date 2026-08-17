const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["assets/AssistantStructuredResponse-CZDMu2rs.js", "assets/index-BM3ZINIl.js", "assets/index-DCmpUGyQ.css", "assets/CopyButton-BcOsqrNJ.js", "assets/MChip-DiH8NXBU.js", "assets/TextField-D8vc_sXz.js", "assets/NextStepsResponse-NcFjw3w7.js", "assets/Markdown-Dh8LhaRc.js", "assets/katex.min-ADdKj7O-.js", "assets/katex-CfVKi3_s.css", "assets/MarkdownHighlights-C-ZhT8z1.js", "assets/index-Yb6ONXKu.js", "assets/index-DzMT-bSF.js", "assets/ThinkingElapsedLabel-DKCKD95O.js", "assets/Card-Bf0WPnf4.js", "assets/save-Bre0AB4-.js", "assets/send-CDdCro4v.js", "assets/Alert-DnFVD8li.js", "assets/play-3zl_nde-.js", "assets/FormGroup-BsLWbxpH.js", "assets/FormControlLabel-CQvCddOM.js", "assets/StructuredMarkdown-DAWLLRpf.js", "assets/MessageBubble-DqxHrk03.js", "assets/OpenInNewRounded-D-7V5TzF.js"]) => i.map(i => d[i]);
import { E as _e, bG as ye, r as c, j as n, B as _Component3, V as _Component2, X as _Component, _ as F, ag as X, T as S, C as _Component5, g as m, ax as Ae, aj as Se, a as Te, bH as oe, p as Ee, e as _Component1, $ as Re } from "./index-BM3ZINIl.js";
import { u as Ce } from "./useQuery-DM2qiUYb.js";
import { T as z } from "./triangle-alert-C5eP7BuB.js";
import { C as ve } from "./circle-check-B9fquZbm.js";
import { M as U } from "./MChip-DiH8NXBU.js";
import { D as Me } from "./Divider-BcuihGce.js";
import { E as $e, L as Ie } from "./LoadingSection-wWBu2CqJ.js";
import { c as _Component6, b as Oe, d as Le } from "./ThinkingElapsedLabel-DKCKD95O.js";
import { q as Ne } from "./streamNdjson-sRiOwtSP.js";
import { A as ke, e as Pe, f as _Component9, E as De, h as Be } from "./MessageBubble-DqxHrk03.js";
import { P as He } from "./TextField-D8vc_sXz.js";
import { i as Ke, a as _Component0 } from "./Markdown-Dh8LhaRc.js";
import { t as E } from "./MarkdownHighlights-C-ZhT8z1.js";
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const We = [["path", {
  d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",
  key: "4b9dqc"
}], ["path", {
  d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",
  key: "22nnkd"
}], ["path", {
  d: "M6 6h.01",
  key: "1utrut"
}], ["path", {
  d: "M6 18h.01",
  key: "uhywen"
}], ["path", {
  d: "m13 6-4 6h6l-4 6",
  key: "14hqih"
}]];
const Ge = _e("server-crash", We);
const ae = "Open source";
const ie = {
  success: {
    icon: ve,
    title: "Source metadata loaded.",
    description: "Source metadata loaded.",
    color: "success",
    retry: false
  },
  notFound: {
    icon: z,
    title: "Source not found.",
    description: "We couldn’t load a preview for this source.",
    color: "warning",
    retry: false
  },
  tooLarge: {
    icon: z,
    title: "Source too large to preview.",
    description: "We couldn’t load a preview for this source.",
    color: "warning",
    retry: false
  },
  unavailable: {
    icon: z,
    title: "Source preview unavailable.",
    description: "We couldn’t load a preview for this source.",
    color: "warning",
    retry: false
  },
  serverError: {
    icon: Ge,
    title: "Metadata service unavailable.",
    description: "We couldn’t load a preview for this source. Please try again.",
    color: "error",
    retry: true
  },
  limitExceeded: {
    icon: z,
    title: "Background task limit reached.",
    description: "Wait for another background task to finish, then try again.",
    color: "error",
    retry: true
  }
};
const ce = e => {
  try {
    return new URL(e).hostname.replace(/^www\./i, "") || e;
  } catch {
    return e;
  }
};
const Ue = e => ce(e);
const Ve = e => {
  var t;
  var r;
  return e.status === "success" && (t = e.title) != null && !!t.trim() && (r = e.abstract) != null && !!r.trim();
};
const Fe = e => {
  var r;
  const t = (r = e.referenceLabel) == null ? undefined : r.trim();
  return t || (e.year === null || e.year === undefined ? null : `Published ${e.year}`);
};
const Ze = e => {
  var t;
  return ((t = e == null ? undefined : e.pdfLabel) == null ? undefined : t.trim()) || ae;
};
const qe = e => {
  var t;
  return (t = e == null ? undefined : e.pdfLabel) != null && !!t.trim();
};
const Xe = e => {
  var r;
  if (typeof e != "object" || e === null) {
    return null;
  } else {
    return ((r = e.response) == null ? undefined : r.status) ?? null;
  }
};
const Qe = e => {
  if (ye(e)) {
    return "limitExceeded";
  }
  const t = Xe(e);
  if (t === 404) {
    return "notFound";
  } else if (t === 413) {
    return "tooLarge";
  } else if (t !== null && t >= 400 && t < 500) {
    return "unavailable";
  } else {
    return "serverError";
  }
};
const Ye = e => t => {
  const r = e ? t.palette[ie[e].color].main : t.palette.text.primary;
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: t.spacing(1.5),
    px: 2,
    py: 1,
    borderBottom: `1px solid ${m(r, 0.16)}`
  };
};
const Je = e => ({
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(1.2),
  padding: e.spacing(2),
  maxHeight: 250
});
const V = e => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: e.spacing(1.15),
  minHeight: "13rem",
  padding: e.spacing(3, 2.6),
  height: "100%"
});
const et = e => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: e.spacing(1),
  width: "100%",
  maxWidth: 380,
  padding: e.spacing(2),
  borderRadius: e.shape.borderRadiusPx
});
const tt = e => t => ({
  position: "relative",
  maxHeight: e ? "16rem" : "6.6rem",
  overflow: "auto",
  paddingRight: e ? t.spacing(0.75) : 0,
  scrollbarGutter: e ? "stable" : "auto",
  "&::after": {
    content: "\"\"",
    display: e ? "none" : "block",
    position: "absolute",
    insetInline: 0,
    bottom: 0,
    height: "2.1rem",
    background: `linear-gradient(180deg, ${m(t.palette.background.paper, 0)}, ${t.palette.background.paper})`
  }
});
const rt = e => ({
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(1.1),
  padding: e.spacing(1.45, 2.6, 2.3)
});
const nt = {
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: 1
};
const ot = e => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: e.spacing(1.1)
});
const st = e => ({
  minHeight: "2rem",
  padding: e.spacing(0.25, 0.75),
  gap: 0.5,
  color: e.palette.primary.main
});
const B = ({
  href: e,
  label: t = ae
}) => <F component="a" href={e} target="_blank" rel="noopener noreferrer" variant="outlined" color="primary" endIcon={<$e />}>{t}</F>;
const D = ({
  label: e,
  onClose: t,
  status: r
}) => {
  const o = c.useMemo(() => Ye(r), [r]);
  return <n.Fragment><_Component3 sx={o}><U label={e} size="small" /><_Component2 aria-label="Close source preview" onClick={t}><_Component /></_Component2></_Component3><Me /></n.Fragment>;
};
const Q = ({
  href: e,
  status: t,
  isRetryDisabled: r = false,
  isRetrying: o = false,
  onRetry: s,
  retryAvailableInSeconds: i = null
}) => {
  const l = c.useMemo(() => ie[t], [t]);
  const _Component4 = c.useMemo(() => l.icon, [l]);
  const u = c.useMemo(() => i === null ? "Try again" : `Try again ${i}s`, [i]);
  if (l.retry) {
    return <_Component3 sx={V}><_Component3 sx={et}><X variant={l.color}><_Component4 size={24} aria-hidden="true" /></X><S variant="subtitle2" align="center" color={l.color}>{l.title}</S><S variant="body2" align="center" color="textSecondary">{l.description}</S><div>{l.retry && s ? <F type="button" variant="outlined" color="secondary" disabled={r} onClick={s} endIcon={o ? <_Component5 aria-label="Retrying source preview" color="inherit" size={16} /> : i ? null : <_Component6 />} sx={{
            mr: 1
          }}>{u}</F> : null}<B href={e} /></div></_Component3></_Component3>;
  } else {
    return <_Component3 sx={V}><X variant={l.color}><_Component4 size={24} aria-hidden="true" /></X><S variant="subtitle2" color={l.color}>{l.title}</S><S variant="body2" color="textSecondary">{l.description}</S><B href={e} /></_Component3>;
  }
};
const at = Se;
const it = e => ({
  status: e.status ?? "success",
  title: e.title,
  abstract: e.abstract,
  year: e.year ?? null,
  pdfLabel: e.pdfLabel ?? null,
  referenceLabel: e.referenceLabel ?? null
});
const ct = e => Ae.post(at, "article-metadata", {
  url: e
}).then(it);
const lt = 600000;
const ut = {
  [oe]: true
};
const le = e => Ne({
  queryKey: Te.articleMetadata(e),
  queryFn: () => ct(e),
  staleTime: lt
});
const dt = 5000;
const _Component7 = ({
  href: e,
  isOpen: t,
  onClose: r
}) => {
  const o = c.useMemo(() => le(e), [e]);
  const s = c.useMemo(() => ({
    [oe]: false
  }), []);
  const i = Ce({
    ...o,
    enabled: t,
    meta: s,
    retryOnMount: true
  });
  const l = i.refetch;
  const [a, u] = c.useState(0);
  const [p, d] = c.useState(() => Date.now());
  const y = Math.max(0, a - p);
  const T = Math.ceil(y / 1000);
  const f = T > 0;
  const b = i.isFetching || f;
  const h = !i.isFetching && f ? T : null;
  const w = c.useMemo(() => ce(e), [e]);
  const $ = c.useMemo(() => Ue(e), [e]);
  const N = c.useMemo(() => Qe(i.error), [i.error]);
  const k = c.useCallback(() => {
    if (b) {
      return;
    }
    const v = Date.now();
    d(v);
    u(v + dt);
    l();
  }, [b, l]);
  c.useEffect(() => {
    if (a <= 0) {
      return;
    }
    const v = () => {
      const G = Date.now();
      d(G);
      if (G >= a) {
        u(0);
      }
    };
    const M = a - Date.now();
    if (M <= 0) {
      u(0);
      return;
    }
    const O = window.setInterval(v, 250);
    const W = window.setTimeout(() => {
      v();
    }, M);
    return () => {
      window.clearInterval(O);
      window.clearTimeout(W);
    };
  }, [a]);
  const A = c.useMemo(() => i.data, [i.data]);
  const x = c.useMemo(() => A && Ve(A) ? A : null, [A]);
  const _ = c.useMemo(() => x ? Fe(x) : null, [x]);
  const P = c.useMemo(() => qe(x), [x]);
  const C = c.useMemo(() => x ? `https://scholar.google.com/scholar?hl=en&as_sdt=0%2C5&q=${encodeURIComponent(x.title)}&btnG=` : undefined, [x]);
  const j = c.useMemo(() => Ze(x), [x]);
  if (i.isPending) {
    return <n.Fragment><D label={w} onClose={r} /><_Component3 sx={V}><Ie title="" subtitle="Loading source metadata..." /><B href={e} /></_Component3></n.Fragment>;
  }
  if (i.isError) {
    return <n.Fragment><D label={w} onClose={r} status={N} /><Q href={e} status={N} isRetryDisabled={b} isRetrying={i.isFetching} onRetry={k} retryAvailableInSeconds={h} /></n.Fragment>;
  }
  if (!A) {
    throw new Error("Citation metadata query completed without data.");
  }
  if (A.status !== "success") {
    return <n.Fragment><D label={w} onClose={r} status={A.status} /><Q href={e} status={A.status} isRetryDisabled={b} isRetrying={i.isFetching} onRetry={k} retryAvailableInSeconds={h} /></n.Fragment>;
  }
  if (!x) {
    throw new Error("Citation metadata response succeeded without title or abstract.");
  }
  return <n.Fragment><D label={$} onClose={r} status="success" /><_Component3 sx={Je}><_Component3><S variant="subtitle1" color="primary">{x.title}</S>{_ ? <S variant="caption">{_}</S> : null}</_Component3><_Component3 sx={tt(true)}><S variant="body1">{x.abstract}</S></_Component3></_Component3><_Component3 sx={rt}>{P ? <_Component3 sx={nt}><F type="button" variant="text" color="primary" sx={st} component="a" href={C} target="_blank" rel="noopener noreferrer">Google Scholar</F></_Component3> : null}<_Component3 sx={ot}><B href={e} label={j} /></_Component3></_Component3></n.Fragment>;
};
const mt = 180;
const gt = {
  pointerEvents: "auto",
  overflowX: "hidden",
  overflowY: "auto",
  width: "min(600px, calc(100vw - 32px))",
  height: 425
};
const ft = {
  pointerEvents: "none"
};
const xt = {
  display: "inline-flex",
  verticalAlign: "baseline"
};
const _t = e => c.Children.toArray(e).map(t => typeof t == "string" || typeof t == "number" ? String(t) : "").join("");
const yt = e => e === ke;
const _Component8 = ({
  accessibleLabel: e,
  className: t,
  href: r,
  id: o,
  isPreviewEnabled: s = true,
  label: i,
  title: l = r
}) => {
  const a = c.useId();
  const u = c.useRef(null);
  const p = c.useRef(null);
  const d = Ee();
  const [y, T] = c.useState(null);
  const f = c.useMemo(() => e || _t(i) || r, [e, r, i]);
  const b = c.useMemo(() => `Open source ${f}`, [f]);
  const h = c.useMemo(() => !!y, [y]);
  const w = c.useMemo(() => h ? "true" : undefined, [h]);
  const $ = c.useMemo(() => h ? `${a}-assistant-citation-preview` : undefined, [a, h]);
  const N = c.useMemo(() => ({
    vertical: "bottom",
    horizontal: "left"
  }), []);
  const k = c.useMemo(() => ({
    vertical: "top",
    horizontal: "left"
  }), []);
  const A = c.useMemo(() => le(r), [r]);
  const x = c.useCallback(() => {
    d.prefetchQuery({
      ...A,
      meta: ut
    });
  }, [A, d]);
  const _ = c.useCallback(() => {
    if (p.current !== null) {
      window.clearTimeout(p.current);
      p.current = null;
    }
  }, []);
  const P = c.useCallback(M => {
    _();
    T(M.currentTarget);
  }, [_]);
  const C = c.useCallback(() => {
    _();
    p.current = window.setTimeout(() => {
      p.current = null;
      T(null);
    }, mt);
  }, [_]);
  const j = c.useCallback(() => {
    _();
    T(null);
  }, [_]);
  const v = c.useMemo(() => ({
    root: {
      sx: ft
    },
    paper: {
      onBlur: C,
      onFocus: _,
      onMouseEnter: _,
      onMouseLeave: C,
      role: "dialog",
      variant: "floating",
      sx: gt
    }
  }), [_, C]);
  c.useEffect(() => () => {
    _();
  }, [_]);
  c.useEffect(() => {
    if (!s) {
      return;
    }
    const M = u.current;
    if (!M) {
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      x();
      return;
    }
    const O = new IntersectionObserver(W => {
      if (W.some(xe => xe.isIntersecting)) {
        x();
        O.disconnect();
      }
    });
    O.observe(M);
    return () => {
      O.disconnect();
    };
  }, [s, x]);
  if (s) {
    return <n.Fragment><_Component3 component="span" ref={u} sx={xt}><U className={t} id={o} title={l} aria-label={b} aria-controls={$} aria-haspopup="dialog" aria-expanded={w} label={i} clickable={true} color="primary" variant="outlined" size="xs" link={r} onBlur={C} onClick={j} onFocus={P} onMouseEnter={P} onMouseLeave={C} /></_Component3><He id={$} anchorEl={y} open={h} onClose={j} anchorOrigin={N} transformOrigin={k} disableAutoFocus={true} disableEnforceFocus={true} disableRestoreFocus={true} disableScrollLock={true} slotProps={v}><_Component3 data-source-url={r}><_Component7 href={r} isOpen={h} onClose={j} /></_Component3></He></n.Fragment>;
  } else {
    return <U className={t} id={o} title={l} aria-label={b} label={i} clickable={true} color="primary" variant="outlined" size="xs" link={r} />;
  }
};
const ue = (e = {}) => {
  const t = e.isPreviewEnabled ?? true;
  return {
    a: ({
      node: o,
      title: s,
      href: i,
      children: l,
      ...a
    }) => {
      if (yt(s) && i) {
        const {
          className: u,
          id: p
        } = a;
        return <_Component8 className={u} id={p} isPreviewEnabled={t} label={l} href={i} />;
      }
      return <a {...a} href={i} title={s}>{l}</a>;
    }
  };
};
const Cr = ue();
const vr = ue({
  isPreviewEnabled: false
});
const ht = /^data:([^;,]+);base64,/;
const At = new Set(["coding_agent", "compile_latex", "run_computation", "run_python"]);
const Y = e => e !== null && typeof e == "object" && !Array.isArray(e) ? e : null;
const I = e => typeof e == "string" ? e : null;
const St = e => typeof e == "number" ? e : null;
const Tt = e => {
  var t;
  return ((t = e == null ? undefined : e.match(ht)) == null ? undefined : t[1]) ?? null;
};
const J = e => {
  if (!e) {
    return null;
  }
  const t = e.match(/\]\((data:[^)]+)\)$/);
  const r = (t == null ? undefined : t[1]) ?? e;
  if (Ke(r)) {
    return r;
  } else {
    return null;
  }
};
const Mr = (e, t = At) => {
  var o;
  const r = new Map();
  for (const [s, i] of (e.toolCalls ?? []).entries()) {
    if (i.toolType !== "function_call_output" || !t.has(i.toolName ?? "")) {
      continue;
    }
    const l = Y(i.arguments.output);
    const a = l == null ? undefined : l.artifacts;
    if (Array.isArray(a)) {
      for (const [u, p] of a.entries()) {
        const d = Y(p);
        if (!d) {
          continue;
        }
        const y = I(d.markdown_image);
        const T = I(d.markdown_link);
        const f = I(d.attachment_id);
        const b = J(y) ?? J(T);
        const h = ((o = I(d.name)) == null ? undefined : o.trim()) || `Generated artifact ${u + 1}`;
        const w = f ?? `${i.callId ?? s}:${u}`;
        const $ = I(d.mime_type) ?? Tt(b) ?? "application/octet-stream";
        r.set(w, {
          key: w,
          originatingCallId: i.callId ?? null,
          attachmentId: f,
          name: h,
          mimeType: $,
          sizeBytes: St(d.size_bytes),
          href: b,
          omittedReason: I(d.data_url_omitted_reason),
          frontendPreview: d.frontend_preview
        });
      }
    }
  }
  return [...r.values()];
};
const $r = "Unable to complete request";
const Ir = "Agent execution stopped because of ";
const de = ["alpha", "beta", "gamma", "delta", "epsilon", "theta", "lambda", "mu", "nu", "pi", "rho", "sigma", "tau", "phi", "omega"];
const Et = {
  α: "\\alpha",
  β: "\\beta",
  γ: "\\gamma",
  δ: "\\delta",
  ε: "\\epsilon",
  θ: "\\theta",
  λ: "\\lambda",
  μ: "\\mu",
  ν: "\\nu",
  π: "\\pi",
  ρ: "\\rho",
  σ: "\\sigma",
  τ: "\\tau",
  φ: "\\phi",
  Φ: "\\Phi",
  ω: "\\omega"
};
const wt = /<br\s*\/?>/gi;
const ee = /(?:[ \t]*<br\s*\/?>[ \t]*)+/gi;
const pe = /^ {0,3}(?:>[ \t]*)*\|.*\|[ \t]*$/;
const Rt = /(^|\n)`([^`\n]*\$[^$\n]+\$[^`\n]*)`(?=\n|$)/g;
const Ct = /(^|\n)([ \t]*)(\d+)\.\s+([A-Z][^:.\n]{2,72}:)/g;
const vt = /(^|\n)([ \t]*)\\begin\{(theorem|thm|lemma|lem|proposition|prop|corollary|cor|definition|defn|remark|example|proof)\*?\}([^\n]*)/gi;
const Mt = /(^|\n)[ \t]*\\end\{(?:theorem|thm|lemma|lem|proposition|prop|corollary|cor|definition|defn|remark|example|proof)\*?\}[ \t]*(?=\n|$)/gi;
const $t = /\\label\{[^}\n]*\}/g;
const It = /^(?:\[([^\]\n]*)\]|\(([^)\n]*)\))$/;
const jt = /\\r\\n|\\n|\\r/g;
const Ot = {
  theorem: "Theorem",
  thm: "Theorem",
  lemma: "Lemma",
  lem: "Lemma",
  proposition: "Proposition",
  prop: "Proposition",
  corollary: "Corollary",
  cor: "Corollary",
  definition: "Definition",
  defn: "Definition",
  remark: "Remark",
  example: "Example",
  proof: "Proof"
};
const R = e => {
  let t = e.replace(/−/g, "-").replace(/≤/g, "\\le ").replace(/≥/g, "\\ge ").replace(/∈/g, "\\in ").replace(/≠/g, "\\ne ").replace(/≈/g, "\\approx ").replace(/·/g, "\\cdot ").replace(/√\s*([A-Za-z0-9]+)/g, "\\sqrt{$1}").replace(/\bsum_\{/g, "\\sum_{").replace(/\bprod_\{/g, "\\prod_{").replace(/\bint_\{/g, "\\int_{").replace(/\bspec(?=\s*\()/g, "\\operatorname{spec}").replace(/_([A-Za-z0-9]{2,})\b/g, "_{$1}").replace(/\^([A-Za-z0-9]{2,})\b/g, "^{$1}").replace(/<\s*([^<>]+?)\s*>/g, "\\langle $1\\rangle");
  for (const [r, o] of Object.entries(Et)) {
    t = t.replaceAll(r, o);
  }
  for (const r of de) {
    t = t.replace(new RegExp(`\\\\?\\b${r}(?=\\b|_)`, "g"), `\\${r}`);
  }
  return t;
};
const me = e => E(e, t => t.replace(jt, `
`));
const Lt = e => E(e, t => t.split(`
`).map(r => pe.test(r) ? r.replace(ee, " ") : r.replace(ee, o => {
  var i;
  if ((((i = o.match(wt)) == null ? undefined : i.length) ?? 0) > 1) {
    return `

`;
  } else {
    return `\\
`;
  }
})).join(`
`), {
  protectStandaloneHtmlTags: false
});
const Nt = e => {
  const t = e.replace($t, "").trim();
  const r = t.match(It);
  const o = ((r == null ? undefined : r[1]) ?? (r == null ? undefined : r[2]) ?? t).trim();
  if (o) {
    return ` (${o})`;
  } else {
    return "";
  }
};
const kt = e => E(e, t => t.replace(vt, (r, o, s, i, l) => {
  const a = Ot[i.toLowerCase()];
  const u = Nt(l);
  return `${o}${s}**${a}${u}.**`;
}).replace(Mt, ""));
const Pt = e => {
  let t = "";
  while (e.includes(t)) {
    t += "";
  }
  let r = "";
  while (e.includes(r) || r === t) {
    r += "";
  }
  const o = [];
  const s = e.replace(Rt, (a, u, p) => {
    const d = `${t}${o.length}${r}`;
    o.push({
      content: p,
      marker: d
    });
    return `${u}${d}`;
  });
  if (o.length === 0) {
    return e;
  }
  let l = E(s, a => {
    let u = a;
    for (const {
      content: p,
      marker: d
    } of o) {
      u = u.replaceAll(d, () => p);
    }
    return u;
  });
  for (const {
    content: a,
    marker: u
  } of o) {
    l = l.replaceAll(u, () => `\`${a}\``);
  }
  return l;
};
const zt = e => {
  let t = E(e, r => r.replace(/(^|\n)([ \t]*)([^\n]+?)(?=\n|$)/g, (o, s, i, l) => {
    var p;
    const a = l.trim().replace(/[.,;:]$/, "");
    const u = ((p = a.match(/\b[A-Za-z]{3,}\b/g)) == null ? undefined : p.filter(d => d !== "spec" && !de.includes(d))) ?? [];
    if (/^(?:#{1,6}|>|[-+*]|\d+\.)\s/.test(a) || pe.test(l) || !/[=≤≥]/.test(a) || u.length > 0 || !/[0-9_^{}()√γλΦ+\-−/·]|\bspec\b/.test(a)) {
      return o;
    } else {
      return `${s}${i}$$${R(a)}$$`;
    }
  }));
  t = E(t, r => r.replace(/\b([A-Za-z]\s*∈\s*\{[^}\n]+\})/g, (o, s) => `$${R(s.trim()).replace(/\\in\s*\{([^{}]*)\}/, "\\in \\{$1\\}")}$`).replace(/\b(spec\([^()\n]+\)\s*=\s*\{[^}\n]+\})/g, (o, s) => `$${R(s.trim()).replace(/(=\s*)\{(.*)\}$/, "$1\\{$2\\}")}$`).replace(/((?:[A-Za-z]|[α-ωΑ-Ω])(?:_[A-Za-z0-9{}]+)?(?:\([^()\n]{1,80}\))?\s*(?:=|≤|≥|≠|≈|<|>)\s*.+?)(?=\s+(?!(?:sin|cos|tan|log|ln|exp|max|min|mod)\b)[A-Za-z]{2,}\b|\s+\(|[,;:.\n]|$)/g, (o, s) => `$${R(s.trim())}$`));
  t = E(t, r => r.replace(/\(([^()\n]{1,120}(?:=|\\sum|sum_\{|\\lambda|lambda\b|_[A-Za-z{]|\^|\*)[^()\n]{0,120})\)/g, (o, s) => `$${R(s.trim())}$`).replace(/\b([A-Za-z][A-Za-z0-9_]*(?:\s+[A-Za-z][A-Za-z0-9_]*)?\s*=\s*[^,.;\n]*(?:\\sum|sum_\{|\\lambda|lambda\b|<[^>]+>|_[A-Za-z{]|\^)[^,.;\n]*)/g, (o, s) => `$${R(s.trim())}$`).replace(/\bK\(H\)/g, "$K(H)$"));
  return E(t, r => r.replace(/\b([A-Za-z](?:_[A-Za-z0-9{}]+)+)(?=\b|[^A-Za-z0-9])/g, (o, s) => `$${R(s)}$`).replace(/([α-ωΑ-Ω](?:_[A-Za-z0-9{}]+)?(?:\([^()\n]{1,80}\))?)/g, (o, s) => `$${R(s)}$`));
};
const Dt = (e, {
  unwrapCodeWrappedMath: t
}) => {
  const r = me(e);
  const o = kt(Lt(t ? Pt(r) : r));
  return E(o, s => s.replace(Ct, (i, l, a, u, p) => `${l}${a}${u}. **${p}** `).replace(/[ \t]+\n/g, `
`)).trim();
};
const te = (e, {
  normalizeMath: t
}) => {
  const r = Dt(e, {
    unwrapCodeWrappedMath: t
  });
  if (t) {
    return zt(r);
  } else {
    return r;
  }
};
const jr = (e, t) => {
  const r = t === "canonical-v1";
  if (typeof e == "string") {
    return te(e, {
      normalizeMath: !r
    });
  } else if (typeof e == "number" || typeof e == "boolean") {
    return String(e);
  } else if (Array.isArray(e) && e.every(o => typeof o == "string")) {
    return e.map(o => `- ${te(o, {
      normalizeMath: !r
    })}`).join(`
`);
  } else {
    return `\`\`\`json
${JSON.stringify(e, null, 2)}
\`\`\``;
  }
};
const K = e => !!e && typeof e == "object" && !Array.isArray(e);
const Or = e => Array.isArray(e) && e.every(t => K(t) && typeof t.symbol == "string" && typeof t.meaning == "string");
const Lr = e => Array.isArray(e) && e.every(t => K(t) && typeof t.source_id == "string" && typeof t.authors == "string" && typeof t.title == "string" && typeof t.source_type == "string" && typeof t.relevance == "string");
const L = "  ";
const re = (e, t) => {
  const r = L.repeat(t);
  return e.split(`
`).map(o => `${r}${o}`).join(`
`);
};
const H = (e, t = 0) => e == null ? "" : typeof e == "string" ? me(e) : typeof e == "number" || typeof e == "boolean" ? String(e) : Array.isArray(e) ? e.map(r => {
  const o = H(r, t + 1);
  if (o.trim()) {
    if (o.includes(`
`)) {
      return `${L.repeat(t)}-
${re(o, t + 1)}`;
    } else {
      return `${L.repeat(t)}- ${o}`;
    }
  } else {
    return null;
  }
}).filter(r => r !== null).join(`
`) : K(e) ? Object.entries(e).map(([r, o]) => {
  const s = H(o, t + 1);
  if (s.trim()) {
    if (s.includes(`
`)) {
      return `${L.repeat(t)}${r}:
${re(s, t + 1)}`;
    } else {
      return `${L.repeat(t)}${r}: ${s}`;
    }
  } else {
    return null;
  }
}).filter(r => r !== null).join(`
`) : String(e);
const Bt = {
  variable_defs: "Definitions",
  proof_basics: "Proof basics",
  reconstruction_plan: "Plan",
  gaps: "Gaps",
  gaps_and_ambiguities: "Gaps",
  counterexample: "Counterexample",
  examples: "Examples",
  worked_examples: "Examples",
  review: "Review",
  referee_review: "Review",
  referee_revised: "Revision",
  edge_cases: "Edge cases",
  assumptions: "Assumptions",
  explanation: "Explanation",
  code: "Code",
  visualization: "Visualization",
  stress_test: "Stress test",
  analysis: "Analysis",
  referee_feedback: "Analysis",
  research_plan: "Research plan",
  findings: "Findings",
  theorems: "Theorems",
  relevance: "Relevance",
  bibliography: "Bibliography",
  state_of_the_art: "State of the art",
  next_actions: "Next actions",
  choices: "Next Steps"
};
const Ht = ["answer", "intuition", "variable_defs", "examples", "assumptions"];
const Kt = ["decision", "gaps", "review", "intuition", "variable_defs", "worked_examples"];
const Wt = ["visualization", "intuition", "variable_defs"];
const Gt = ["explanation", "code"];
const Ut = ["writeup", "intuition", "variable_defs", "analysis"];
const Vt = ["findings", "bibliography", "variable_defs"];
const Ft = ["choices", "intuition", "variable_defs"];
const Zt = {
  question: {
    sectionOrder: Ht,
    legacyGroups: [{
      targetKey: "examples",
      sourceKeys: ["worked_examples", "edge_cases"],
      labels: {
        worked_examples: "Examples",
        edge_cases: "Edge cases"
      }
    }, {
      targetKey: "assumptions",
      sourceKeys: ["stress_test"],
      labels: {
        stress_test: "Stress test"
      }
    }]
  },
  referee: {
    sectionOrder: Kt,
    hiddenKeys: ["decision_severity"],
    legacyGroups: [{
      targetKey: "gaps",
      sourceKeys: ["gaps_and_ambiguities", "counterexample"],
      labels: {
        gaps_and_ambiguities: "Gaps",
        counterexample: "Counterexample"
      }
    }, {
      targetKey: "review",
      sourceKeys: ["referee_review", "referee_revised"],
      labels: {
        referee_review: "Review",
        referee_revised: "Revision"
      }
    }]
  },
  compute: {
    sectionOrder: Gt,
    hiddenKeys: ["evidence_kind", "status", "variable_defs"]
  },
  visualization: {
    sectionOrder: Wt,
    hiddenKeys: ["artifact_refs"]
  },
  writeup: {
    sectionOrder: Ut,
    legacyGroups: [{
      targetKey: "analysis",
      sourceKeys: ["referee_feedback"],
      labels: {
        referee_feedback: "Referee pass"
      }
    }]
  },
  "lit-search": {
    sectionOrder: Vt,
    hiddenKeys: ["scope", "intuition"],
    legacyGroups: [{
      targetKey: "findings",
      sourceKeys: ["theorems", "relevance", "state_of_the_art", "next_actions", "research_plan"],
      labels: {
        theorems: "Theorems",
        relevance: "Relevance",
        state_of_the_art: "State of the art",
        next_actions: "Next actions",
        research_plan: "Research plan"
      }
    }]
  },
  "next-steps": {
    sectionOrder: Ft
  }
};
const Z = e => e.replace(/[-_]+/g, " ").replace(/\b\w/g, t => t.toUpperCase());
const qt = (e, t) => t === "question" && e === "variable_defs" ? "Definitions" : t === "compute" && e === "code" ? "Code Execution" : Bt[e] ?? Z(e);
const q = e => e == null ? false : typeof e == "string" ? e.trim().length > 0 : Array.isArray(e) ? e.length > 0 : K(e) ? Object.keys(e).length > 0 : true;
const Nr = e => {
  var t;
  return ((t = Oe.find(r => r.value === e)) == null ? undefined : t.label) ?? Z(e);
};
const Xt = (e, t) => {
  const r = t.sourceKeys.map(o => {
    const s = e[o];
    if (!q(s)) {
      return null;
    }
    const i = H(s).trim();
    if (i) {
      return `## ${t.labels[o] ?? Z(o)}

${i}`;
    } else {
      return null;
    }
  }).filter(o => o !== null);
  if (r.length > 0) {
    return r.join(`

`);
  } else {
    return null;
  }
};
const Qt = (e, t) => {
  var o;
  if ((o = t == null ? undefined : t.legacyGroups) == null || !o.length) {
    return e;
  }
  let r = e;
  for (const s of t.legacyGroups) {
    const i = Xt(e, s);
    if (i === null) {
      continue;
    }
    const l = r[s.targetKey];
    const a = q(l) ? [H(l).trim(), i].filter(u => u.length > 0).join(`

`) : i;
    r = {
      ...r,
      [s.targetKey]: a
    };
  }
  return r;
};
const kr = e => {
  const t = typeof e.operation == "string" ? e.operation : undefined;
  const r = t ? Zt[t] : undefined;
  const o = Qt(e, r);
  const s = new Set(["operation", "result_title"]);
  for (const a of (r == null ? undefined : r.hiddenKeys) ?? []) {
    s.add(a);
  }
  for (const a of (r == null ? undefined : r.legacyGroups) ?? []) {
    for (const u of a.sourceKeys) {
      s.add(u);
    }
  }
  const i = (r == null ? undefined : r.sectionOrder) ?? ["intuition", "variable_defs"];
  return [...i.filter(a => a in o || t === "compute" && a === "code"), ...Object.keys(o).filter(a => !s.has(a) && !i.includes(a))].filter(a => t === "compute" && a === "code" || q(o[a])).map(a => ({
    key: a,
    label: qt(a, t).toUpperCase(),
    value: o[a]
  }));
};
const Yt = e => {
  if (e == null) {
    return "—";
  }
  if (e < 60) {
    return `${e.toFixed(e < 10 ? 1 : 0)}s`;
  }
  const t = Math.round(e);
  const r = Math.floor(t / 3600);
  const o = Math.floor(t % 3600 / 60);
  const s = t % 60;
  if (r > 0) {
    return `${r}h ${o}m ${s.toString().padStart(2, "0")}s`;
  } else {
    return `${o}m ${s.toString().padStart(2, "0")}s`;
  }
};
const Jt = (e = "default") => t => ({
  marginBottom: t.spacing(1.9),
  borderRadius: t.shape.borderRadiusPx,
  backgroundColor: e === "error" ? m(t.palette.error.main, 0.06) : m(t.palette.primary.main, 0.07),
  border: `1px solid ${e === "error" ? m(t.palette.error.main, 0.12) : m(t.palette.primary.main, 0.14)}`
});
const er = (e = false) => t => ({
  display: "flex",
  alignItems: "flex-start",
  width: "100%",
  justifyContent: "space-between",
  gap: t.spacing(1.5),
  ...(e ? {
    padding: t.spacing(1.56, 1.9)
  } : {})
});
const tr = e => ({
  flex: "1 1 auto",
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  gap: e.spacing(1.5)
});
const rr = {
  flex: "0 0 auto"
};
const nr = {
  flex: "0 0 auto"
};
const or = {
  flex: "1 1 auto",
  minWidth: 0
};
const sr = {
  flex: "0 0 auto"
};
const ar = 24;
const ir = /([^\s])(\*\*[^*\r\n]+?\*\*[ \t]*(?:\r?\n){2,})/g;
const ge = e => e.replace(ir, `$1

$2`);
const cr = e => ({
  marginBottom: e.spacing(1.25),
  borderRadius: e.shape.borderRadiusPx,
  border: `1px solid ${m(e.palette.text.primary, 0.08)}`,
  backgroundColor: m(e.palette.background.paper, 0.42),
  boxShadow: "none",
  "&::before": {
    display: "none"
  },
  "&.Mui-expanded": {
    margin: `0 0 ${e.spacing(1.25)}`
  }
});
const lr = e => ({
  minHeight: "2.35rem",
  padding: e.spacing(0, 1.25),
  color: e.palette.text.secondary,
  "&.Mui-expanded": {
    minHeight: "2.35rem"
  },
  "& .MuiAccordionSummary-content": {
    alignItems: "center",
    justifyContent: "space-between",
    gap: e.spacing(1.25),
    minWidth: 0,
    margin: e.spacing(0.65, 0)
  },
  "& .MuiAccordionSummary-content.Mui-expanded": {
    margin: e.spacing(0.65, 0)
  },
  "& .MuiAccordionSummary-expandIconWrapper": {
    color: e.palette.text.secondary
  }
});
const ur = e => ({
  padding: e.spacing(0, 1.25, 1.05)
});
const fe = e => ({
  maxHeight: "min(32rem, 60dvh)",
  overflowY: "auto",
  margin: 0,
  padding: e.spacing(0.15, 0.15, 0.2),
  color: e.palette.text.secondary,
  fontSize: "0.82rem",
  fontWeight: 400,
  lineHeight: 1.58,
  "& :where(p, ul, ol, blockquote, pre, table, hr)": {
    margin: "0.68rem 0 0"
  },
  "& :where(h1, h2, h3, h4, h5, h6)": {
    margin: "0.85rem 0 0.35rem",
    color: m(e.palette.text.primary, 0.78),
    fontSize: "0.92rem",
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: 1.35
  },
  "& :where(h1, h2)": {
    fontSize: "0.98rem"
  },
  "& :where(strong)": {
    color: m(e.palette.text.primary, 0.8),
    fontWeight: 700
  },
  "& :where(a)": {
    color: e.palette.text.secondary,
    textDecorationColor: m(e.palette.text.secondary, 0.4)
  },
  "& :where(blockquote)": {
    color: e.palette.text.secondary,
    borderLeftColor: m(e.palette.text.primary, 0.14)
  },
  "& :where(:not(pre) > code)": {
    background: m(e.palette.text.primary, 0.045),
    color: m(e.palette.text.primary, 0.78)
  },
  "& :where(pre)": {
    maxHeight: "14rem",
    padding: e.spacing(0.85, 1),
    background: m(e.palette.text.primary, 0.035),
    color: m(e.palette.text.primary, 0.78),
    boxShadow: `inset 0 0 0 1px ${m(e.palette.text.primary, 0.05)}`
  },
  "& :where(pre code)": {
    fontSize: "0.78rem",
    lineHeight: 1.55
  },
  "& :where(th)": {
    background: m(e.palette.text.primary, 0.04)
  },
  "& :where(th, td)": {
    borderColor: m(e.palette.text.primary, 0.08)
  },
  "& :where(.katex-display)": {
    padding: e.spacing(0.7, 0.9),
    background: m(e.palette.text.primary, 0.035)
  }
});
const dr = e => ({
  maxHeight: "min(32rem, 60dvh)",
  overflowY: "auto",
  overscrollBehavior: "contain",
  scrollbarGutter: "stable",
  backgroundColor: m(e.palette.background.paper, 0.42)
});
const pr = {
  maxHeight: "none",
  overflowY: "visible",
  padding: 2,
  backgroundColor: "transparent"
};
const Pr = ({
  reasoning: e,
  durationSeconds: t
}) => {
  const r = c.useId();
  const o = c.useId();
  const s = ge(e);
  return <Pe disableGutters={true} elevation={0} sx={cr}><_Component9 expandIcon={<De />} aria-controls={r} id={o} sx={lr}><_Component3 sx={{
        display: "flex"
      }}><S variant="subtitle2" color="textPrimary">Reasoning</S></_Component3><S variant="caption">{Yt(t)}</S></_Component9><Be id={r} aria-labelledby={o} sx={ur}><_Component0 content={s} mode="compact" sx={fe} /></Be></Pe>;
};
const zr = ({
  runId: e,
  startedAt: t,
  streamText: r = "",
  statusLabel: o = "Waiting for model output...",
  showStatusLabel: s = true,
  headingLabel: i = "Thinking",
  ariaLive: l = "polite",
  onContentChange: a
}) => {
  const u = c.useRef(null);
  const p = c.useRef(e);
  const d = c.useRef(true);
  const y = r.trim() ? ge(r) : null;
  const T = c.useCallback(() => {
    const f = u.current;
    if (!f) {
      return;
    }
    const b = f.scrollHeight - f.scrollTop - f.clientHeight;
    d.current = b <= ar;
  }, []);
  c.useLayoutEffect(() => {
    if (p.current !== e) {
      p.current = e;
      d.current = true;
    }
    if (!y) {
      d.current = true;
    }
    const f = u.current;
    if (f && d.current) {
      f.scrollTop = f.scrollHeight;
    }
    if (a != null) {
      a();
    }
  }, [a, e, o, y]);
  return <_Component1 variant="inset" sx={Jt()} aria-live={l}><_Component3 sx={er(true)}><_Component3 sx={tr}><_Component5 size={14} thickness={5} sx={rr} /><S variant="subtitle2" color="primary" noWrap={true} sx={nr}>{i}</S>{s && <S variant="subtitle2" color="textSecondary" sx={or}>{o}</S>}</_Component3><_Component3 sx={sr}><Le runId={e} startedAt={t} color="primary" variant="elapsedTime" /></_Component3></_Component3>{y && <_Component3 ref={u} sx={dr} onScroll={T}><_Component0 content={y} mode="compact" sx={[fe, pr]} /></_Component3>}</_Component1>;
};
const mr = () => Re(() => import("./AssistantStructuredResponse-CZDMu2rs.js").then(e => e.A), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23])).then(e => ({
  default: e.AssistantStructuredResponse
}));
const Dr = c.lazy(mr);
export { $r as A, Dr as L, Cr as a, Ir as b, _Component8 as c, zr as d, Yt as e, jr as f, Nr as g, Lr as h, Or as i, kr as j, ut as k, le as l, Mr as m, Pr as n, vr as p, H as s };
