import { r as n, aJ as me, aK as xe, a_ as fe, a$ as V, E as he, j as t, B as I, _ as E, g as f, e as _Component1, S as _Component8, T as D, V as _Component0, X as _Component9 } from "./index-BM3ZINIl.js";
import { a as _Component4 } from "./Markdown-Dh8LhaRc.js";
import { g as ne } from "./assistantStructuredResponseLazy-CCAemx3W.js";
import { C as Se } from "./CopyButton-BcOsqrNJ.js";
import { M as _Component2 } from "./MChip-DiH8NXBU.js";
import { a as _Component, R as _Component6, c as _Component7 } from "./ThinkingElapsedLabel-DKCKD95O.js";
import { C as Ce } from "./Card-Bf0WPnf4.js";
import { T as _Component3 } from "./TextField-D8vc_sXz.js";
import { S as _Component5 } from "./save-Bre0AB4-.js";
import { P as Ee } from "./MarkdownHighlights-C-ZhT8z1.js";
import { S as Te } from "./send-CDdCro4v.js";
import { A as Re } from "./Alert-DnFVD8li.js";
import { P as J } from "./play-3zl_nde-.js";
import { F as Pe, C as Ie } from "./FormGroup-BsLWbxpH.js";
import { F as $e } from "./FormControlLabel-CQvCddOM.js";
function te(e) {
  return e.substring(2).toLowerCase();
}
function ze(e, a) {
  return a.documentElement.clientWidth < e.clientX || a.documentElement.clientHeight < e.clientY;
}
function Me(e) {
  const {
    children: a,
    disableReactTree: T = false,
    mouseEvent: x = "onClick",
    onClickAway: P,
    touchEvent: S = "onTouchEnd"
  } = e;
  const j = n.useRef(false);
  const i = n.useRef(null);
  const l = n.useRef(false);
  const R = n.useRef(false);
  n.useEffect(() => {
    setTimeout(() => {
      l.current = true;
    }, 0);
    return () => {
      l.current = false;
    };
  }, []);
  const b = me(xe(a), i);
  const o = fe(c => {
    const m = R.current;
    R.current = false;
    const y = V(i.current);
    if (!l.current || !i.current || "clientX" in c && ze(c, y)) {
      return;
    }
    if (j.current) {
      j.current = false;
      return;
    }
    let C;
    if (c.composedPath) {
      C = c.composedPath().includes(i.current);
    } else {
      C = !y.documentElement.contains(c.target) || i.current.contains(c.target);
    }
    if (!C && (T || !m)) {
      P(c);
    }
  });
  const k = c => m => {
    R.current = true;
    const y = a.props[c];
    if (y) {
      y(m);
    }
  };
  const h = {
    ref: b
  };
  if (S !== false) {
    h[S] = k(S);
  }
  n.useEffect(() => {
    if (S !== false) {
      const c = te(S);
      const m = V(i.current);
      const y = () => {
        j.current = true;
      };
      m.addEventListener(c, o);
      m.addEventListener("touchmove", y);
      return () => {
        m.removeEventListener(c, o);
        m.removeEventListener("touchmove", y);
      };
    }
  }, [o, S]);
  if (x !== false) {
    h[x] = k(x);
  }
  n.useEffect(() => {
    if (x !== false) {
      const c = te(x);
      const m = V(i.current);
      m.addEventListener(c, o);
      return () => {
        m.removeEventListener(c, o);
      };
    }
  }, [o, x]);
  return n.cloneElement(a, h);
}
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Le = [["path", {
  d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
  key: "1gvzjb"
}], ["path", {
  d: "M9 18h6",
  key: "x1upvd"
}], ["path", {
  d: "M10 22h4",
  key: "ceow96"
}]];
const _e = he("lightbulb", Le);
const Ae = 3;
const Y = 800;
const Fe = new Set(["chat", "referee", "question", "visualization", "writeup", "lit-search"]);
const Oe = e => typeof e == "string" && Fe.has(e);
const qe = e => {
  if (!e || typeof e != "object" || Array.isArray(e)) {
    return false;
  }
  const a = e;
  return Oe(a.operation) && typeof a.prompt == "string" && a.prompt.trim().length > 0 && a.prompt.length <= Y;
};
const re = e => Array.isArray(e) && e.length === Ae && e.every(qe);
const Ne = e => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: e.spacing(1)
});
const Be = e => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  gap: e.spacing(1.15),
  minWidth: 0,
  padding: e.spacing(1.5, 1.6),
  border: `1px solid ${f(e.palette.text.primary, 0.1)}`,
  borderRadius: e.shape.borderRadiusPx,
  backgroundColor: f(e.palette.background.paper, 0.58),
  boxShadow: `0 8px 22px ${f(e.palette.text.primary, 0.045)}`,
  transition: e.transitions.create(["background-color", "border-color", "box-shadow"], {
    duration: e.transitions.duration.shorter
  }),
  "&:hover": {
    borderColor: f(e.palette.primary.main, 0.46),
    backgroundColor: f(e.palette.primary.main, 0.08)
  }
});
const We = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: 0.75,
  minWidth: 0,
  width: "100%"
};
const De = e => ({
  ...e.typography.body1,
  color: e.palette.text.primary,
  minWidth: 0,
  width: "100%",
  "& > :where(p, h1, h2, h3, h4, h5, h6)": {
    margin: 0
  },
  "& > :where(p, h1, h2, h3, h4, h5, h6):not(:first-of-type)": {
    marginTop: e.spacing(0.72)
  },
  "& > :where(ul, ol, blockquote, pre, .markdown-table-scroll, hr)": {
    marginTop: e.spacing(0.72)
  },
  "& :where(.katex-display)": {
    margin: e.spacing(0.55, 0),
    padding: e.spacing(0.45, 0.65)
  }
});
const Xe = e => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: e.spacing(0.8),
  flexWrap: "wrap"
});
const He = e => ({
  width: "100%",
  "& .MuiInputBase-root": {
    backgroundColor: f(e.palette.background.paper, 0.78)
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: f(e.palette.primary.main, 0.18)
  }
});
const le = (e, a) => `${e.operation}-${e.prompt}-${a}`;
const oe = (e, a) => e.map((T, x) => ({
  ...T,
  prompt: a[le(T, x)] ?? T.prompt.trim()
}));
const Ge = ({
  choices: e,
  isPromptCompatibility: a,
  mathSyntax: T = "compatibility",
  runLabel: x,
  areTooltipsDisabled: P = false,
  areRunActionsDisabled: S = false,
  onSelectNextStep: j,
  onChoicesChange: i,
  onEditingChange: l
}) => {
  const [R, b] = n.useState(null);
  const [o, k] = n.useState("");
  const [h, c] = n.useState({});
  const m = n.useCallback((d, w) => {
    b(d);
    k(w);
    if (l != null) {
      l(true);
    }
  }, [l]);
  const y = n.useCallback(() => {
    b(null);
    k("");
    if (l != null) {
      l(false);
    }
  }, [l]);
  const C = n.useCallback((d, w) => {
    const p = o.trim();
    if (!p) {
      return;
    }
    const u = {
      ...h
    };
    if (p === w) {
      delete u[d];
    } else {
      u[d] = p;
    }
    c(u);
    if (i != null) {
      i(oe(e, u));
    }
    b(null);
    k("");
    if (l != null) {
      l(false);
    }
  }, [e, o, i, l, h]);
  const X = n.useCallback((d, w) => {
    if (h[d] !== undefined) {
      const p = {
        ...h
      };
      delete p[d];
      c(p);
      if (i != null) {
        i(oe(e, p));
      }
    }
    if (R === d) {
      k(w);
    }
  }, [e, R, i, h]);
  return <I sx={Ne}>{e.map((d, w) => {
      const p = le(d, w);
      const u = R === p;
      const $ = ne(d.operation);
      const _ = d.prompt.trim();
      const N = h[p];
      const A = N ?? _;
      const g = N !== undefined;
      const L = g || a != null && a(d, w) ? "compatibility" : T;
      const B = x && !P ? `Run ${$} operation with ${x}` : undefined;
      const F = P ? undefined : `Edit ${$} suggestion`;
      const z = P ? undefined : "Reset to the model-generated prompt";
      const M = u ? o.trim() : A;
      const W = S || !j || !M;
      const H = !o.trim();
      const G = g || u;
      return <Ce variant="inset" sx={Be} key={p}><I sx={We}><_Component2 size="small" variant="outlined" color="primary" icon={<_Component operation={d.operation} size={14} strokeWidth={2.4} />} label={$} />{u ? <_Component3 value={o} multiline={true} minRows={1} fullWidth={true} helperText={`${o.length}/${Y}`} slotProps={{
            htmlInput: {
              "aria-label": `Edit ${$} next-step prompt`,
              maxLength: Y
            }
          }} sx={He} onChange={K => {
            k(K.target.value);
          }} /> : <_Component4 content={A} mathSyntax={L} mode="compact" sx={De} />}</I><I sx={Xe}>{u ? <t.Fragment><E type="button" size="small" variant="outlined" color="secondary" onClick={y}>Cancel</E><E type="button" size="small" variant="outlined" color="primary" disabled={H} startIcon={<_Component5 size={15} />} onClick={() => {
              C(p, _);
            }}>Save</E></t.Fragment> : <E type="button" size="small" variant="outlined" color="secondary" tooltip={F} startIcon={<Ee size={15} />} onClick={() => {
            m(p, A);
          }}>Edit</E>}{G ? <E type="button" size="small" variant="outlined" color="secondary" tooltip={z} startIcon={<_Component6 size={15} />} onClick={() => {
            X(p, _);
          }}>Reset</E> : null}<Se content={M} label="Copy" tooltipLabel="Copy next-step prompt" message="Next-step prompt copied" size="small" variant="outlined" /><E type="button" size="small" variant="contained" color="primary" disabled={W} tooltip={B} startIcon={<Te size={15} />} onClick={() => {
            if (M) {
              if (j != null) {
                j(M, d.operation);
              }
            }
          }}>Run</E></I></Ce>;
    })}</I>;
};
const ae = 2000;
const Ke = [{
  label: "More technical",
  feedback: "Make the regenerated next steps more technical and rigorous."
}, {
  label: "More diverse",
  feedback: "Give me a wider spread of directions instead of nearby variants."
}, {
  label: "More concrete",
  feedback: "Prioritize next steps that are immediately actionable."
}, {
  label: "Higher risk",
  feedback: "Include bolder hypotheses or stress tests, even if speculative."
}];
const Qe = {
  display: "flex",
  flexDirection: "column",
  gap: 0
};
const Ue = e => ({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: e.spacing(1),
  flexWrap: "wrap",
  marginTop: e.spacing(1),
  [e.breakpoints.down(720)]: {
    marginTop: e.spacing(0.5)
  }
});
const Ve = e => ({
  position: "absolute",
  right: 0,
  bottom: `calc(100% + ${e.spacing(1)})`,
  left: 0,
  zIndex: Math.max(e.zIndex.drawer, e.zIndex.modal) + 1,
  width: "100%",
  padding: e.spacing(1.05),
  border: `1px solid ${f(e.palette.primary.main, 0.16)}`,
  borderRadius: e.shape.borderRadiusPx,
  backgroundColor: e.palette.background.paper,
  backgroundImage: `linear-gradient(135deg, ${f(e.palette.primary.main, 0.035)}, transparent 46%, ${f(e.palette.success.main, 0.025)})`,
  boxShadow: `inset 0 1px 0 ${f(e.palette.common.white, 0.38)}, 0 22px 70px ${f(e.palette.text.primary, 0.14)}`
});
const Je = {
  alignItems: "center",
  justifyContent: "space-between",
  gap: 1
};
const Ye = {
  alignItems: "flex-start",
  gap: 1,
  minWidth: 0
};
const Ze = e => ({
  flex: "0 0 auto",
  width: "1.9rem",
  height: "1.9rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: e.shape.radiusSmPx,
  color: e.palette.primary.main,
  backgroundColor: f(e.palette.primary.main, 0.1),
  boxShadow: `inset 0 0 0 1px ${f(e.palette.primary.main, 0.08)}`
});
const et = {
  gap: 1,
  marginTop: 1
};
const tt = {
  display: "flex",
  alignItems: "center",
  gap: 0.75,
  flexWrap: "wrap"
};
const rt = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 1,
  flexWrap: "wrap"
};
const ot = e => ({
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(0.7)
});
const at = e => ({
  alignItems: "flex-start",
  width: "100%",
  margin: 0,
  padding: e.spacing(0.85, 1),
  border: `1px solid ${f(e.palette.text.primary, 0.1)}`,
  borderRadius: e.shape.radiusSmPx,
  backgroundColor: f(e.palette.background.paper, 0.62)
});
const st = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: 0.35,
  minWidth: 0
};
const kt = ({
  areRunAllNextStepsDisabled: e = false,
  areRunAllNextStepsPending: a = false,
  areTooltipsDisabled: T = false,
  isNextStepsActionDisabled: x = false,
  mathSyntax: P = "compatibility",
  messageIndex: S,
  nextStepChoiceRunLabel: j,
  onRunAllNextSteps: i,
  onRunNextSteps: l,
  onSelectNextStep: R,
  choices: b
}) => {
  const [o, k] = n.useState(null);
  const [h, c] = n.useState([]);
  const [m, y] = n.useState("");
  const [C, X] = n.useState(false);
  const [d, w] = n.useState(null);
  const p = n.useMemo(() => re(b) ? b.map(r => ({
    ...r,
    prompt: r.prompt.trim()
  })) : null, [b]);
  const u = d && d.source === b ? d.choices : p;
  const $ = n.useCallback((r, s) => {
    const v = p == null ? undefined : p[s];
    return !v || v.operation !== r.operation || v.prompt !== r.prompt;
  }, [p]);
  const _ = n.useCallback(r => {
    w({
      source: b,
      choices: r
    });
  }, [b]);
  const N = !!l || !!i;
  const A = !!o;
  const g = (o == null ? undefined : o.mode) === "regenerate";
  const L = (o == null ? undefined : o.mode) === "run-all";
  const B = m.trim();
  const F = `next-steps-action-panel-${S}`;
  const z = h.length;
  const M = `${z} ${z === 1 ? "query" : "queries"}`;
  const W = g ? "Choose queries to regenerate" : "Choose queries to run";
  const H = g ? "Checked queries will be replaced. Unchecked queries will stay unchanged." : z === 1 ? "The checked query will run in this chat." : "A new chat hierarchy and one branch per checked query will be created.";
  const G = g ? `Regenerate ${M}` : `Run ${M}`;
  const K = z === 0 || C || (g ? x : e || a);
  const O = () => {
    k(null);
    c([]);
    y("");
  };
  const Q = () => {
    const r = o == null ? undefined : o.triggerEl;
    O();
    if (r != null) {
      r.focus();
    }
  };
  const Z = (r, s) => {
    if (u) {
      if ((o == null ? undefined : o.mode) === r) {
        O();
        return;
      }
      c(u.map((v, U) => U));
      y("");
      k({
        triggerEl: s.currentTarget,
        mode: r
      });
    }
  };
  const ce = r => {
    const s = r.target;
    if ((!(s instanceof Node) || o == null || !o.triggerEl.contains(s)) && (!(s instanceof Element) || !s.closest("[data-next-steps-action-trigger=\"true\"]"))) {
      O();
    }
  };
  const pe = r => {
    c(s => s.includes(r) ? s.filter(v => v !== r) : [...s, r].sort((v, U) => v - U));
  };
  const de = r => {
    y(s => {
      const v = s.trim();
      if (v) {
        return `${v}
${r}`;
      } else {
        return r;
      }
    });
  };
  const ue = r => {
    r.preventDefault();
    if (!o || !u || h.length === 0 || C) {
      return;
    }
    const s = {
      choices: u,
      selectedChoiceIndexes: h
    };
    if (o.mode === "regenerate") {
      if (x) {
        return;
      }
      if (l != null) {
        l({
          ...s,
          ...(B ? {
            feedback: B
          } : {})
        });
      }
      O();
      return;
    }
    if (!e && !a) {
      if (i != null) {
        i(S, s);
      }
      O();
    }
  };
  return <I sx={Qe}>{re(b) ? <Ge choices={b} isPromptCompatibility={$} mathSyntax={P} runLabel={j} areTooltipsDisabled={T} areRunActionsDisabled={x || a} onSelectNextStep={R} onChoicesChange={_} onEditingChange={X} /> : <Re severity="error">Next Steps response is missing valid choices.</Re>}{N && <I sx={Ue}>{l && <E type="button" size="small" variant="contained" color="primary" disabled={x || C || !u} tooltip="Regenerate next steps" startIcon={<_Component7 size={15} />} data-next-steps-action-trigger="true" aria-haspopup="dialog" aria-expanded={g} aria-controls={g ? F : undefined} onClick={r => {
        Z("regenerate", r);
      }}>Regenerate</E>}{i && <E type="button" size="small" variant="contained" color="primary" disabled={e || a || C || !u} loading={a} tooltip={u && u.length > 1 ? "A new chat hierarchy will be created to run the selected queries synchronously." : "Choose which next steps to run"} startIcon={<J size={15} />} data-next-steps-action-trigger="true" aria-haspopup="dialog" aria-expanded={L} aria-controls={L ? F : undefined} onClick={r => {
        Z("run-all", r);
      }}>Run Multiple</E>}{A && <Me onClickAway={ce}><_Component1 variant="floating" id={F} component="form" role="dialog" aria-label={W} sx={Ve} onSubmit={ue} onKeyDown={r => {
          if (r.key === "Escape") {
            r.preventDefault();
            Q();
          }
        }}><_Component8 direction="row" sx={Je}><_Component8 direction="row" sx={Ye}><I sx={Ze}>{g && <_e size={17} aria-hidden="true" />}{L && <J size={17} aria-hidden="true" />}</I><_Component8><D variant="subtitle2" color="textPrimary">{W}</D><D variant="body2" color="textSecondary">{H}</D></_Component8></_Component8><_Component0 type="button" tooltip="Close query selection" aria-label="Close query selection" size="small" onClick={Q}><_Component9 size={17} /></_Component0></_Component8><_Component8 sx={et}><Pe role="group" aria-label="Select next-step queries" sx={ot}>{(u ?? []).map((r, s) => <$e disableTypography={true} sx={at} control={<Ie autoFocus={s === 0} checked={h.includes(s)} size="small" onChange={() => {
                pe(s);
              }} />} label={<_Component8 sx={st}><D variant="subtitle2" color="textPrimary">Query {s + 1} · {ne(r.operation)}</D><_Component4 content={r.prompt} mathSyntax={$(r, s) ? "compatibility" : P} mode="compact" /></_Component8>} key={`${r.operation}-${r.prompt}-${s}`} />)}</Pe>{z === 0 && <D variant="caption" color="error">Select at least one query.</D>}{g && <t.Fragment><I sx={tt}>{Ke.map(r => <E type="button" size="small" variant="outlined" color="secondary" onClick={() => {
                  de(r.feedback);
                }} key={r.label}>{r.label}</E>)}</I><_Component3 fullWidth={true} multiline={true} minRows={3} label="Feedback or preferences (optional)" placeholder="For example: focus on computational checks, avoid literature search, and make each option testable." value={m} helperText={`${m.length}/${ae}`} slotProps={{
                htmlInput: {
                  maxLength: ae
                }
              }} onChange={r => {
                y(r.target.value);
              }} /></t.Fragment>}<I sx={rt}><E type="button" color="secondary" onClick={Q}>Cancel</E><E type="submit" variant="contained" disabled={K} loading={L && a} startIcon={g ? <_Component7 size={16} /> : <J size={16} />}>{G}</E></I></_Component8></_Component1></Me>}</I>}</I>;
};
export { Me as C, Ge as N, kt as a, re as i };
