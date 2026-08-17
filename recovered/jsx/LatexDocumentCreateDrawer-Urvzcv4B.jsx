const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["assets/source-editor-CGMzw50e.js", "assets/index-BM3ZINIl.js", "assets/index-DCmpUGyQ.css", "assets/SidebarTreeConnector-DsRNfBIo.js", "assets/MarkdownHighlights-C-ZhT8z1.js", "assets/TextField-D8vc_sXz.js", "assets/index-Yb6ONXKu.js", "assets/file-code-corner-DV79SyC0.js", "assets/Divider-BcuihGce.js", "assets/cache-BNzcfneg.js", "assets/useLatexQueries-DBpKOPUv.js", "assets/useQuery-DM2qiUYb.js", "assets/search-CE89ACSU.js", "assets/useMutation-C1SgG9wr.js", "assets/useInfiniteQuery-CdNTitqC.js", "assets/katex.min-ADdKj7O-.js", "assets/katex-CfVKi3_s.css", "assets/MChip-DiH8NXBU.js"]) => i.map(i => d[i]);
import { g as y, j as t, B as _Component2, T as _Component, C, r as n, $ as O, t as f, V, X as W, _ as T } from "./index-BM3ZINIl.js";
import { A as I } from "./Alert-DnFVD8li.js";
import { b as U } from "./latexPreview-B9IEPCtV.js";
import { a as Y } from "./Markdown-Dh8LhaRc.js";
import { T as K, a as X } from "./MarkdownHighlights-C-ZhT8z1.js";
import { u as Q, c as q, e as G, i as Z, j as ee } from "./useLatexQueries-DBpKOPUv.js";
import { a as k } from "./latexNaming-BAjxoZ-G.js";
import { u as te } from "./usePdfObjectUrl-Cd7ol8-S.js";
import { a as re } from "./useAttachmentContent-15uaQfvd.js";
import { u as ae } from "./useControlOrMetaShortcut-DL7j4WBM.js";
import { D as _Component7 } from "./Drawer-ByPJ5WV0.js";
import { T as _Component3 } from "./TextField-D8vc_sXz.js";
import { P as _Component5 } from "./play-3zl_nde-.js";
import { F as _Component6 } from "./file-plus-_oOf3yl8.js";
import "./latexTextPatterns-B444ow6Q.js";
import "./katex.min-ADdKj7O-.js";
import "./CopyButton-BcOsqrNJ.js";
import "./MChip-DiH8NXBU.js";
import "./index-DzMT-bSF.js";
import "./index-Yb6ONXKu.js";
import "./useQuery-DM2qiUYb.js";
import "./search-CE89ACSU.js";
import "./useMutation-C1SgG9wr.js";
import "./useInfiniteQuery-CdNTitqC.js";
import "./cache-BNzcfneg.js";
import "./attachmentsApi-BHgxfYft.js";
import "./authFetch-DXjDztUP.js";
const le = e => `${e.line ? `Line ${e.line}` : "Document"}: ${e.message}`;
const ce = {
  width: "min(100vw, 72rem)",
  maxWidth: "100vw",
  display: "flex",
  flexDirection: "column"
};
const de = e => ({
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: e.spacing(1),
  padding: e.spacing(1.5, 2),
  borderBottom: `1px solid ${y(e.palette.text.primary, 0.08)}`
});
const xe = e => ({
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(2),
  padding: e.spacing(2)
});
const pe = e => ({
  flex: 1,
  minHeight: 0,
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(20rem, 0.82fr)",
  gap: e.spacing(1.5),
  [e.breakpoints.down(900)]: {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "minmax(22rem, 1fr) minmax(18rem, 0.8fr)"
  }
});
const ue = {
  display: "flex",
  justifyContent: "flex-end",
  gap: 1
};
const M = e => ({
  minWidth: 0,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  border: `1px solid ${y(e.palette.text.primary, 0.08)}`,
  borderRadius: e.shape.borderRadiusPx,
  backgroundColor: y(e.palette.background.paper, 0.84)
});
const _ = e => ({
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: e.spacing(1),
  padding: e.spacing(1.1, 1.25),
  borderBottom: `1px solid ${y(e.palette.text.primary, 0.08)}`
});
const me = e => ({
  minHeight: 0,
  flex: "0 1 auto",
  maxWidth: "100%",
  "& .MuiTabs-list": {
    gap: e.spacing(0.4)
  },
  "& .MuiTab-root": {
    minHeight: "2rem",
    paddingInline: e.spacing(1.2)
  }
});
const fe = {
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column"
};
const ge = {
  flex: 1,
  minHeight: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
const be = e => ({
  flex: 1,
  minHeight: 0,
  overflowY: "auto",
  padding: e.spacing(1.4)
});
const he = {
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column"
};
const je = {
  flex: 1,
  minHeight: 0,
  width: "100%",
  border: 0
};
const S = e => ({
  flex: 1,
  minHeight: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: e.spacing(2)
});
const ye = e => ({
  flex: "0 0 auto",
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(0.75),
  maxHeight: "11rem",
  overflowY: "auto",
  padding: e.spacing(1),
  borderTop: `1px solid ${y(e.palette.text.primary, 0.08)}`
});
const Ce = (e, o) => o ? {
  message: "Compiling...",
  type: "textSecondary"
} : e ? e.success ? {
  message: `Compiled in ${e.durationMs} ms`,
  type: "success"
} : {
  message: "Compile failed",
  type: "error"
} : {
  message: "Not compiled",
  type: "textSecondary"
};
const _Component4 = ({
  compileResult: e,
  diagnostics: o,
  isCompiling: i,
  pdfUrl: x,
  isPdfLoading: p,
  hasPdfError: u
}) => {
  const c = Ce(e, i);
  return <_Component2 sx={M}><_Component2 sx={_}><_Component variant="subtitle2" color="textPrimary">Compiled PDF</_Component><_Component variant="caption" color={c.type}>{c.message}</_Component></_Component2><_Component2 sx={he}>{i && <_Component2 sx={S}><C size={28} /></_Component2>}{!i && x && <_Component2 component="iframe" title="Compiled LaTeX draft preview" src={x} sx={je} />}{!i && !x && p && <_Component2 sx={S}><C size={28} /></_Component2>}{!i && !x && !p && <_Component2 sx={S}><_Component variant="body2" color={u ? "error" : "textSecondary"} align="center">{u ? "Could not load the compiled PDF." : "No PDF preview available."}</_Component></_Component2>}{e && <_Component2 sx={ye}>{o.length === 0 && <I severity={e.success ? "success" : "info"} variant="outlined">{e.success ? "No compiler diagnostics." : "No diagnostics returned."}</I>}{o.map((l, s) => <I severity={l.severity === "error" ? "error" : "warning"} variant="outlined" key={`${l.severity}-${l.line ?? "doc"}-${s}`}>{le(l)}</I>)}</_Component2>}</_Component2></_Component2>;
};
const Le = n.lazy(() => O(() => import("./source-editor-CGMzw50e.js").then(e => e.p), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17])).then(e => ({
  default: e.LatexSourceEditor
})));
const Se = ({
  fileName: e,
  draftSource: o,
  diagnostics: i,
  isBusy: x,
  onSourceChange: p
}) => {
  const [u, c] = n.useState("source");
  const l = n.useMemo(() => U(o), [o]);
  return <_Component2 sx={M}><_Component2 sx={_}><_Component variant="subtitle2" color="textPrimary">Source</_Component><K value={u} variant="scrollable" scrollButtons={false} aria-label="LaTeX source views" sx={me} onChange={(s, m) => {
        c(m);
      }}><X disableRipple={true} value="source" label="Editing" id="latex-create-source-tab" aria-controls="latex-create-source-panel" /><X disableRipple={true} value="preview" label="Preview" id="latex-create-preview-tab" aria-controls="latex-create-preview-panel" /></K></_Component2><_Component2 sx={fe}>{u === "source" && <n.Suspense fallback={<_Component2 sx={ge}><C size={22} /></_Component2>}><Le value={o} fileName={e} diagnostics={i} editable={!x} role="tabpanel" id="latex-create-source-panel" ariaLabelledBy="latex-create-source-tab" onChange={p} /></n.Suspense>}{u === "preview" && <_Component2 sx={be} role="tabpanel" id="latex-create-preview-panel" aria-labelledby="latex-create-preview-tab">{l && <Y content={l} />}{!l && <_Component2 sx={S}><_Component variant="body2" color="textSecondary" align="center">No math expressions found in the source.</_Component></_Component2>}</_Component2>}</_Component2></_Component2>;
};
const Ze = ({
  open: e,
  initialName: o,
  onClose: i,
  onDocumentCreated: x
}) => {
  const [p, u] = n.useState(o);
  const [c, l] = n.useState("");
  const [s, m] = n.useState(null);
  const [F, $] = n.useState(null);
  const [g, v] = n.useState(null);
  const E = Q();
  const B = q();
  const w = G(g, {
    enabled: !!g
  });
  const d = w.data;
  const D = E.isPending;
  const L = B.isPending || !!g || Z(d);
  const b = D || L;
  const A = s !== null && F === c ? s.diagnostics : [];
  const P = re(s == null ? undefined : s.pdfAttachmentId);
  const z = te(s == null ? undefined : s.pdfBase64);
  const N = P.objectUrl ?? z;
  n.useEffect(() => {
    if (!!g && !!d) {
      if (d.status === "completed") {
        v(null);
        if (!d.result) {
          m(null);
          f.error("LaTeX compile job finished without a result.");
          return;
        }
        m(d.result);
        if (d.result.success) {
          f.success("LaTeX compiled.");
        } else {
          f.error("LaTeX compile failed. " + d.result.diagnostics.map(a => a.message).join(", "));
        }
        return;
      }
      if (d.status === "failed") {
        v(null);
        m(null);
        f.error("Could not compile LaTeX.");
      }
    }
  }, [d, g]);
  n.useEffect(() => {
    if (!!g && !!w.isError) {
      v(null);
      m(null);
      f.error("Could not load LaTeX compile job.");
    }
  }, [g, w.isError]);
  const H = async () => {
    if (!b) {
      try {
        k(p);
        const a = c;
        m(null);
        $(a);
        const h = await B.mutateAsync({
          input: {
            source: a
          }
        });
        v(h.id);
      } catch (a) {
        f.error(a instanceof Error ? a.message : "Could not compile LaTeX.");
      }
    }
  };
  ae({
    enabled: e && !b,
    keyCode: ["Enter", "KeyS"],
    onShortcut: H
  });
  const R = async a => {
    a.preventDefault();
    try {
      const h = k(p);
      const J = await E.mutateAsync({
        input: {
          name: h,
          source: c
        }
      });
      x(J);
      f.success("LaTeX project created.");
    } catch (h) {
      f.error(h instanceof Error ? h.message : "Could not create LaTeX project.");
    }
  };
  return <_Component7 anchor="right" open={e} onClose={i} slotProps={{
    paper: {
      variant: "panel",
      sx: ce
    }
  }}><_Component2 sx={de}><_Component variant="h6" color="textPrimary">Create LaTeX project</_Component><V aria-label="Close add LaTeX drawer" disableRipple={true} onClick={i}><W size={18} /></V></_Component2><_Component2 component="form" sx={xe} onSubmit={R}><_Component3 autoFocus={true} label="Project name" value={p} disabled={b} size="small" onChange={a => {
        u(a.target.value);
      }} /><_Component2 sx={pe}><Se fileName={ee} draftSource={c} diagnostics={A} isBusy={b} onSourceChange={a => {
          l(a);
          m(null);
        }} /><_Component4 compileResult={s} diagnostics={A} isCompiling={L} pdfUrl={N} isPdfLoading={P.isLoading} hasPdfError={!!P.error} /></_Component2><_Component2 sx={ue}><T type="button" variant="text" color="secondary" disableRipple={true} disabled={b} onClick={i}>Cancel</T><T type="button" variant="outlined" tooltip="Compile (Ctrl+Enter / Cmd+Enter / Ctrl+S / Cmd+S)" disableRipple={true} disabled={b} startIcon={L ? <C size={16} thickness={5} color="inherit" /> : <_Component5 size={16} />} onClick={() => {
          H();
        }}>{L ? "Compiling..." : "Compile"}</T><T type="submit" variant="contained" disableRipple={true} disabled={b} startIcon={D ? <C size={16} thickness={5} color="inherit" /> : <_Component6 size={16} />}>{D ? "Creating..." : "Create"}</T></_Component2></_Component2></_Component7>;
};
export { Ze as LatexDocumentCreateDrawer };
