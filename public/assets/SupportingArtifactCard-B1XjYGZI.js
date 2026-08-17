import { m as yr } from "./assistantStructuredResponseLazy-CCAemx3W.js";
import { b as br, a as gr } from "./Markdown-Dh8LhaRc.js";
import {
  r as j,
  ab as te,
  am as re,
  F as ne,
  j as h,
  H as oe,
  I as se,
  K as ae,
  a3 as Pe,
  a8 as Q,
  E as Ut,
  B as P,
  _ as Ce,
  T as L,
  g as z,
  S as wr,
  V as $r,
  X as xr,
} from "./index-BM3ZINIl.js";
import { d as _r, T as Ar, a as vr, F as Er } from "./MarkdownHighlights-C-ZhT8z1.js";
import { C as Sr } from "./CopyButton-BcOsqrNJ.js";
import { D as Wt } from "./katex.min-ADdKj7O-.js";
import { F as Tr } from "./file-code-corner-DV79SyC0.js";
import { C as Ir } from "./code-xml-DmfSENe3.js";
import { D as Cr } from "./Drawer-ByPJ5WV0.js";
import { a as Mr } from "./useAttachmentContent-15uaQfvd.js";
import { C as jr } from "./Card-Bf0WPnf4.js";
const Xt = j.createContext();
function Rr(e) {
  return te("MuiTable", e);
}
re("MuiTable", ["root", "stickyHeader"]);
const Nr = (e) => {
    const { classes: t, stickyHeader: r } = e;
    return se({ root: ["root", r && "stickyHeader"] }, Rr, t);
  },
  kr = ae("table", {
    name: "MuiTable",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.stickyHeader && t.stickyHeader];
    },
  })(
    Pe(({ theme: e }) => ({
      display: "table",
      width: "100%",
      borderCollapse: "collapse",
      borderSpacing: 0,
      "& caption": {
        ...e.typography.body2,
        padding: e.spacing(2),
        color: (e.vars || e).palette.text.secondary,
        textAlign: "left",
        captionSide: "bottom",
      },
      variants: [
        { props: ({ ownerState: t }) => t.stickyHeader, style: { borderCollapse: "separate" } },
      ],
    })),
  ),
  Xe = "table",
  Or = j.forwardRef(function (t, r) {
    const s = ne({ props: t, name: "MuiTable" }),
      {
        className: a,
        component: n = Xe,
        padding: o = "normal",
        size: d = "medium",
        stickyHeader: l = !1,
        ...u
      } = s,
      m = { ...s, component: n, padding: o, size: d, stickyHeader: l },
      b = Nr(m),
      i = j.useMemo(() => ({ padding: o, size: d, stickyHeader: l }), [o, d, l]);
    return h.jsx(Xt.Provider, {
      value: i,
      children: h.jsx(kr, {
        as: n,
        role: n === Xe ? null : "table",
        ref: r,
        className: oe(b.root, a),
        ownerState: m,
        ...u,
      }),
    });
  }),
  Me = j.createContext();
function Pr(e) {
  return te("MuiTableBody", e);
}
re("MuiTableBody", ["root"]);
const zr = (e) => {
    const { classes: t } = e;
    return se({ root: ["root"] }, Pr, t);
  },
  Dr = ae("tbody", { name: "MuiTableBody", slot: "Root" })({ display: "table-row-group" }),
  Hr = { variant: "body" },
  qe = "tbody",
  Lr = j.forwardRef(function (t, r) {
    const s = ne({ props: t, name: "MuiTableBody" }),
      { className: a, component: n = qe, ...o } = s,
      d = { ...s, component: n },
      l = zr(d);
    return h.jsx(Me.Provider, {
      value: Hr,
      children: h.jsx(Dr, {
        className: oe(l.root, a),
        as: n,
        ref: r,
        role: n === qe ? null : "rowgroup",
        ownerState: d,
        ...o,
      }),
    });
  });
function Fr(e) {
  return te("MuiTableCell", e);
}
const Br = re("MuiTableCell", [
    "root",
    "head",
    "body",
    "footer",
    "sizeSmall",
    "sizeMedium",
    "paddingCheckbox",
    "paddingNone",
    "alignLeft",
    "alignCenter",
    "alignRight",
    "alignJustify",
    "stickyHeader",
  ]),
  Ur = (e) => {
    const { classes: t, variant: r, align: s, padding: a, size: n, stickyHeader: o } = e,
      d = {
        root: [
          "root",
          r,
          o && "stickyHeader",
          s !== "inherit" && `align${Q(s)}`,
          a !== "normal" && `padding${Q(a)}`,
          `size${Q(n)}`,
        ],
      };
    return se(d, Fr, t);
  },
  Wr = ae("td", {
    name: "MuiTableCell",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [
        t.root,
        t[r.variant],
        t[`size${Q(r.size)}`],
        r.padding !== "normal" && t[`padding${Q(r.padding)}`],
        r.align !== "inherit" && t[`align${Q(r.align)}`],
        r.stickyHeader && t.stickyHeader,
      ];
    },
  })(
    Pe(({ theme: e }) => ({
      ...e.typography.body2,
      display: "table-cell",
      verticalAlign: "inherit",
      borderBottom: e.vars
        ? `1px solid ${e.vars.palette.TableCell.border}`
        : `1px solid
    ${e.palette.mode === "light" ? e.lighten(e.alpha(e.palette.divider, 1), 0.88) : e.darken(e.alpha(e.palette.divider, 1), 0.68)}`,
      textAlign: "left",
      padding: 16,
      variants: [
        {
          props: { variant: "head" },
          style: {
            color: (e.vars || e).palette.text.primary,
            lineHeight: e.typography.pxToRem(24),
            fontWeight: e.typography.fontWeightMedium,
          },
        },
        { props: { variant: "body" }, style: { color: (e.vars || e).palette.text.primary } },
        {
          props: { variant: "footer" },
          style: {
            color: (e.vars || e).palette.text.secondary,
            lineHeight: e.typography.pxToRem(21),
            fontSize: e.typography.pxToRem(12),
          },
        },
        {
          props: { size: "small" },
          style: {
            padding: "6px 16px",
            [`&.${Br.paddingCheckbox}`]: {
              width: 24,
              padding: "0 12px 0 16px",
              "& > *": { padding: 0 },
            },
          },
        },
        { props: { padding: "checkbox" }, style: { width: 48, padding: "0 0 0 4px" } },
        { props: { padding: "none" }, style: { padding: 0 } },
        { props: { align: "left" }, style: { textAlign: "left" } },
        { props: { align: "center" }, style: { textAlign: "center" } },
        { props: { align: "right" }, style: { textAlign: "right", flexDirection: "row-reverse" } },
        { props: { align: "justify" }, style: { textAlign: "justify" } },
        {
          props: ({ ownerState: t }) => t.stickyHeader,
          style: {
            position: "sticky",
            top: 0,
            zIndex: 2,
            backgroundColor: (e.vars || e).palette.background.default,
          },
        },
      ],
    })),
  ),
  Ge = j.forwardRef(function (t, r) {
    const s = ne({ props: t, name: "MuiTableCell" }),
      {
        align: a = "inherit",
        className: n,
        component: o,
        padding: d,
        scope: l,
        size: u,
        sortDirection: m,
        variant: b,
        ...i
      } = s,
      c = j.useContext(Xt),
      f = j.useContext(Me),
      g = f && f.variant === "head";
    let y;
    o ? (y = o) : (y = g ? "th" : "td");
    let _ = l;
    y === "td" ? (_ = void 0) : !_ && g && (_ = "col");
    const w = b || (f && f.variant),
      S = {
        ...s,
        align: a,
        component: y,
        padding: d || (c && c.padding ? c.padding : "normal"),
        size: u || (c && c.size ? c.size : "medium"),
        sortDirection: m,
        stickyHeader: w === "head" && c && c.stickyHeader,
        variant: w,
      },
      E = Ur(S);
    let x = null;
    return (
      m && (x = m === "asc" ? "ascending" : "descending"),
      h.jsx(Wr, {
        as: y,
        ref: r,
        className: oe(E.root, n),
        "aria-sort": x,
        scope: _,
        ownerState: S,
        ...i,
      })
    );
  });
function Xr(e) {
  return te("MuiTableContainer", e);
}
re("MuiTableContainer", ["root"]);
const qr = (e) => {
    const { classes: t } = e;
    return se({ root: ["root"] }, Xr, t);
  },
  Gr = ae("div", { name: "MuiTableContainer", slot: "Root" })({ width: "100%", overflowX: "auto" }),
  Vr = j.forwardRef(function (t, r) {
    const s = ne({ props: t, name: "MuiTableContainer" }),
      { className: a, component: n = "div", ...o } = s,
      d = { ...s, component: n },
      l = qr(d);
    return h.jsx(Gr, { ref: r, as: n, className: oe(l.root, a), ownerState: d, ...o });
  });
function Yr(e) {
  return te("MuiTableHead", e);
}
re("MuiTableHead", ["root"]);
const Kr = (e) => {
    const { classes: t } = e;
    return se({ root: ["root"] }, Yr, t);
  },
  Jr = ae("thead", { name: "MuiTableHead", slot: "Root" })({ display: "table-header-group" }),
  Zr = { variant: "head" },
  Ve = "thead",
  Qr = j.forwardRef(function (t, r) {
    const s = ne({ props: t, name: "MuiTableHead" }),
      { className: a, component: n = Ve, ...o } = s,
      d = { ...s, component: n },
      l = Kr(d);
    return h.jsx(Me.Provider, {
      value: Zr,
      children: h.jsx(Jr, {
        as: n,
        className: oe(l.root, a),
        ref: r,
        role: n === Ve ? null : "rowgroup",
        ownerState: d,
        ...o,
      }),
    });
  });
function en(e) {
  return te("MuiTableRow", e);
}
const Ye = re("MuiTableRow", ["root", "selected", "hover", "head", "footer"]),
  tn = (e) => {
    const { classes: t, selected: r, hover: s, head: a, footer: n } = e;
    return se({ root: ["root", r && "selected", s && "hover", a && "head", n && "footer"] }, en, t);
  },
  rn = ae("tr", {
    name: "MuiTableRow",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: r } = e;
      return [t.root, r.head && t.head, r.footer && t.footer];
    },
  })(
    Pe(({ theme: e }) => ({
      color: "inherit",
      display: "table-row",
      verticalAlign: "middle",
      outline: 0,
      [`&.${Ye.hover}:hover`]: { backgroundColor: (e.vars || e).palette.action.hover },
      [`&.${Ye.selected}`]: {
        backgroundColor: e.alpha(
          (e.vars || e).palette.primary.main,
          (e.vars || e).palette.action.selectedOpacity,
        ),
        "&:hover": {
          backgroundColor: e.alpha(
            (e.vars || e).palette.primary.main,
            `${(e.vars || e).palette.action.selectedOpacity} + ${(e.vars || e).palette.action.hoverOpacity}`,
          ),
        },
      },
    })),
  ),
  Ke = "tr",
  Je = j.forwardRef(function (t, r) {
    const s = ne({ props: t, name: "MuiTableRow" }),
      { className: a, component: n = Ke, hover: o = !1, selected: d = !1, ...l } = s,
      u = j.useContext(Me),
      m = {
        ...s,
        component: n,
        hover: o,
        selected: d,
        head: u && u.variant === "head",
        footer: u && u.variant === "footer",
      },
      b = tn(m);
    return h.jsx(rn, {
      as: n,
      ref: r,
      className: oe(b.root, a),
      role: n === Ke ? null : "row",
      ownerState: m,
      ...l,
    });
  });
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nn = [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ],
  on = Ut("image", nn);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sn = [
    [
      "path",
      {
        d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
        key: "gugj83",
      },
    ],
  ],
  an = Ut("table-2", sn),
  _e = ".graph.json",
  de = "application/vnd.mathvision.graph.v1+json",
  Re = 1,
  Ze = 2 * 1024 * 1024,
  Qe = 5e3,
  et = 2e4,
  Ae = 32,
  tt = 128,
  rt = 64,
  nt = 2048,
  ot = 3,
  ze = ["preset", "circle", "concentric", "breadthfirst", "grid", "cose"],
  qt = new Set(["version", "directed", "multigraph", "graph", "nodes", "edges"]),
  cn = qt,
  ln = new Set(["title", "description", "layout", "node_count", "edge_count"]),
  un = new Set(["layout", "node_count", "edge_count"]),
  dn = new Set(ze),
  st = new Set(["id", "label", "group", "x", "y"]),
  pn = new Set(["id", "source", "target"]),
  mn = new Set([
    "callback",
    "class",
    "classes",
    "css",
    "extension",
    "href",
    "html",
    "image",
    "layout",
    "plugin",
    "renderer",
    "src",
    "style",
    "stylesheet",
    "url",
  ]),
  fn = [
    "add",
    "click",
    "drag",
    "error",
    "free",
    "grab",
    "key",
    "layout",
    "load",
    "mouse",
    "move",
    "pan",
    "pointer",
    "position",
    "ready",
    "remove",
    "render",
    "resize",
    "select",
    "tap",
    "touch",
    "unselect",
    "zoom",
  ],
  hn =
    /<\s*\/?\s*[a-z][a-z0-9:-]*(?:(?:\s+|\/)[^<>]*)?>|(?:javascript|vbscript)\s*:|(?:https?|ftp|file|blob|mailto|tel):(?=\S)|\bdata:(?=[^\s,]*,)|\/\/[a-z0-9.-]+\.[a-z]{2,}\b|\bwww\.[a-z0-9.-]+\.[a-z]{2,}\b/i,
  he = (e) => (e !== null && typeof e == "object" && !Array.isArray(e) ? e : null),
  Gt = (e) => e.split(";", 1)[0].trim().toLowerCase(),
  Vt = (e, t) => Object.keys(e).filter((r) => !t.has(r)),
  Yt = (e, t) => [...t].filter((r) => !Object.hasOwn(e, r)),
  at = (e, t) => {
    if (!Number.isInteger(e) || e < 0)
      throw new Error(`Interactive graph ${t} must be a non-negative integer.`);
    return e;
  },
  Kt = (e, t) => {
    if (hn.test(e))
      throw new Error(
        `Interactive graph ${t} contains prohibited HTML, executable, or external-resource text.`,
      );
  },
  ye = (e, t) => {
    if (typeof e != "string") throw new Error(`Interactive graph ${t} must be a string.`);
    if (e.length > nt)
      throw new Error(`Interactive graph ${t} exceeds the ${nt}-character string limit.`);
    return (Kt(e, t), e);
  },
  xe = (e, t) => {
    if (typeof e != "string")
      throw new Error(`Interactive graph ${t} must already be a canonical string ID.`);
    if (!e.trim()) throw new Error(`Interactive graph ${t} must not be blank.`);
    if (e.length > tt)
      throw new Error(`Interactive graph ${t} exceeds the ${tt}-character ID limit.`);
    return (Kt(e, t), e);
  },
  Oe = (e, t) => {
    if (typeof e != "number" || !Number.isFinite(e))
      throw new Error(`Interactive graph ${t} must be a finite number.`);
    return e;
  },
  Jt = (e, t) => {
    if (e === null || typeof e == "boolean") return e;
    if (typeof e == "string") return ye(e, t);
    if (typeof e == "number") return Oe(e, t);
    throw new Error(
      `Interactive graph ${t} must be null, a boolean, a finite number, or a string.`,
    );
  },
  Zt = (e, t, r) => {
    if (!e || e.length > rt)
      throw new Error(
        `Interactive graph attribute key ${t} must contain between 1 and ${rt} characters.`,
      );
    if (r) return;
    const a = e
      .replace(new RegExp("(?<=[a-z0-9])(?=[A-Z])", "g"), "_")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
    if (
      a
        .split("_")
        .filter(Boolean)
        .some((d) => mn.has(d))
    )
      throw new Error(
        `Interactive graph attribute ${t} uses a reserved renderer or resource field.`,
      );
    const o = e.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (a === "on" || fn.some((d) => o.startsWith(`on${d}`)))
      throw new Error(`Interactive graph attribute ${t} uses a prohibited event-handler field.`);
  },
  yn = (e) => {
    const t = [{ depth: 0, value: e }];
    for (; t.length > 0;) {
      const r = t.pop();
      if (r.depth > ot) throw new Error(`Interactive graph exceeds the ${ot}-level nesting limit.`);
      if (Array.isArray(r.value)) {
        r.value.forEach((a) => t.push({ depth: r.depth + 1, value: a }));
        continue;
      }
      const s = he(r.value);
      s && Object.values(s).forEach((a) => t.push({ depth: r.depth + 1, value: a }));
    }
  },
  bn = (e, t, r) => {
    const s = Yt(e, un);
    if (s.length > 0)
      throw new Error(`Interactive graph metadata is missing required fields: ${s.join(", ")}.`);
    const a = Vt(e, ln);
    if (a.length > 0)
      throw new Error(`Interactive graph metadata contains unsupported fields: ${a.join(", ")}.`);
    const n = e.layout;
    if (typeof n != "string" || !dn.has(n))
      throw new Error(`Interactive graph layout must be one of ${ze.join(", ")}.`);
    const o = at(e.node_count, "graph.node_count"),
      d = at(e.edge_count, "graph.edge_count");
    if (o !== t)
      throw new Error(
        `Interactive graph node count does not match its nodes: declared=${o}, actual=${t}.`,
      );
    if (d !== r)
      throw new Error(
        `Interactive graph edge count does not match its edges: declared=${d}, actual=${r}.`,
      );
    return {
      layout: n,
      nodeCount: o,
      edgeCount: d,
      ...(Object.hasOwn(e, "title") ? { title: ye(e.title, "graph.title") } : {}),
      ...(Object.hasOwn(e, "description")
        ? { description: ye(e.description, "graph.description") }
        : {}),
    };
  },
  gn = (e, t) => {
    const r = new Set(),
      s = e.map((a, n) => {
        const o = `nodes[${n}]`,
          d = he(a);
        if (!d) throw new Error(`Interactive graph ${o} must be an object.`);
        if (!Object.hasOwn(d, "id")) throw new Error(`Interactive graph ${o} must include id.`);
        const l = xe(d.id, `${o}.id`);
        if (r.has(l)) throw new Error(`Interactive graph contains duplicate node ID ${l}.`);
        if ((r.add(l), Object.keys(d).filter((_) => !st.has(_)).length > Ae))
          throw new Error(`Interactive graph ${o} exceeds the ${Ae}-additional-attribute limit.`);
        const m = Object.hasOwn(d, "x"),
          b = Object.hasOwn(d, "y");
        if (m !== b) throw new Error(`Interactive graph ${o} must provide x and y together.`);
        if (t === "preset" && !m)
          throw new Error(`Interactive graph ${o} must provide finite x and y for preset layout.`);
        const i = {};
        let c, f, g, y;
        for (const [_, w] of Object.entries(d))
          _ !== "id" &&
            (Zt(_, `${o}.${_}`, st.has(_)),
            _ === "label"
              ? (c = ye(w, `${o}.label`))
              : _ === "group"
                ? (f = ye(w, `${o}.group`))
                : _ === "x"
                  ? (g = Oe(w, `${o}.x`))
                  : _ === "y"
                    ? (y = Oe(w, `${o}.y`))
                    : (i[_] = Jt(w, `${o}.${_}`)));
        return {
          id: l,
          attributes: i,
          ...(c !== void 0 ? { label: c } : {}),
          ...(f !== void 0 ? { group: f } : {}),
          ...(g !== void 0 && y !== void 0 ? { position: { x: g, y } } : {}),
        };
      });
    return { nodeIds: r, nodes: s };
  },
  wn = (e, t, r, s) => {
    const a = new Set(t),
      n = new Set();
    return e.map((o, d) => {
      const l = `edges[${d}]`,
        u = he(o);
      if (!u) throw new Error(`Interactive graph ${l} must be an object.`);
      const m = ["id", "source", "target"].filter((y) => !Object.hasOwn(u, y));
      if (m.length > 0)
        throw new Error(`Interactive graph ${l} is missing canonical fields: ${m.join(", ")}.`);
      const b = xe(u.id, `${l}.id`),
        i = xe(u.source, `${l}.source`),
        c = xe(u.target, `${l}.target`);
      if (a.has(b)) throw new Error(`Interactive graph contains duplicate global element ID ${b}.`);
      if ((a.add(b), !t.has(i)))
        throw new Error(`Interactive graph ${l}.source references unknown node ID ${i}.`);
      if (!t.has(c))
        throw new Error(`Interactive graph ${l}.target references unknown node ID ${c}.`);
      if (!s) {
        const y =
          r || i <= c ? `${i.length}:${i}${c.length}:${c}` : `${c.length}:${c}${i.length}:${i}`;
        if (n.has(y))
          throw new Error(
            `Interactive graph non-multigraph contains duplicate edge endpoints ${i}, ${c}.`,
          );
        if ((n.add(y), Object.hasOwn(u, "key")))
          throw new Error(`Interactive graph ${l}.key is supported only for multigraphs.`);
      }
      const f = Object.keys(u).filter((y) => !pn.has(y));
      if (f.length > Ae)
        throw new Error(`Interactive graph ${l} exceeds the ${Ae}-additional-attribute limit.`);
      const g = {};
      for (const y of f) (Zt(y, `${l}.${y}`, !1), (g[y] = Jt(u[y], `${l}.${y}`)));
      return { id: b, source: i, target: c, attributes: g };
    });
  },
  Qt = (e) => e.name.toLowerCase().endsWith(_e) && Gt(e.mimeType) === de,
  os = async (e, t) => {
    if (!Qt(t))
      throw new Error(
        `Interactive graph artifacts must use a ${_e} filename and ${de} content type.`,
      );
    if (Gt(e.type) !== de) throw new Error(`Interactive graph attachment content must use ${de}.`);
    if (e.size === 0) throw new Error("Interactive graph attachment content was empty.");
    if (e.size > Ze) throw new Error(`Interactive graph attachment exceeds the ${Ze}-byte limit.`);
    if (t.sizeBytes !== null && t.sizeBytes !== e.size)
      throw new Error(
        `Interactive graph attachment size did not match its ${t.sizeBytes}-byte metadata.`,
      );
    let r;
    try {
      r = new TextDecoder("utf-8", { fatal: !0 }).decode(await e.arrayBuffer());
    } catch (i) {
      throw new Error("Interactive graph attachment must be valid UTF-8 JSON.", { cause: i });
    }
    let s;
    try {
      s = JSON.parse(r);
    } catch (i) {
      throw new Error("Interactive graph attachment contained malformed JSON.", { cause: i });
    }
    const a = he(s);
    if (!a) throw new Error("Interactive graph attachment must contain a top-level JSON object.");
    yn(a);
    const n = Yt(a, cn);
    if (n.length > 0)
      throw new Error(`Interactive graph attachment is missing required fields: ${n.join(", ")}.`);
    const o = Vt(a, qt);
    if (o.length > 0)
      throw new Error(`Interactive graph attachment contains unsupported fields: ${o.join(", ")}.`);
    if (a.version !== Re) throw new Error(`Interactive graph version must be the integer ${Re}.`);
    if (typeof a.directed != "boolean")
      throw new Error("Interactive graph directed must be a boolean.");
    if (typeof a.multigraph != "boolean")
      throw new Error("Interactive graph multigraph must be a boolean.");
    const d = he(a.graph);
    if (!d) throw new Error("Interactive graph graph metadata must be an object.");
    if (!Array.isArray(a.nodes)) throw new Error("Interactive graph nodes must be an array.");
    if (!Array.isArray(a.edges)) throw new Error("Interactive graph edges must be an array.");
    if (a.nodes.length > Qe) throw new Error(`Interactive graph exceeds the ${Qe}-node limit.`);
    if (a.edges.length > et) throw new Error(`Interactive graph exceeds the ${et}-edge limit.`);
    const l = bn(d, a.nodes.length, a.edges.length),
      { nodeIds: u, nodes: m } = gn(a.nodes, l.layout),
      b = wn(a.edges, u, a.directed, a.multigraph);
    return {
      version: Re,
      directed: a.directed,
      multigraph: a.multigraph,
      metadata: l,
      nodes: m,
      edges: b,
    };
  },
  ss = (e) => [
    ...e.nodes.map((t) => ({
      group: "nodes",
      data: {
        id: t.id,
        ...(t.label !== void 0 ? { label: t.label } : {}),
        ...(t.group !== void 0 ? { group: t.group } : {}),
        ...t.attributes,
      },
      ...(t.position ? { position: t.position } : {}),
    })),
    ...e.edges.map((t) => ({
      group: "edges",
      data: { id: t.id, source: t.source, target: t.target, ...t.attributes },
    })),
  ],
  $n = (e, t) =>
    t
      ? { display: "contents" }
      : {
          display: "flex",
          flexDirection: "column",
          gap: e.spacing(1),
          marginTop: e.spacing(0.9),
          minWidth: 0,
        },
  xn = { width: "100%", flexBasis: "100%" },
  _n = (e) => ({
    maxWidth: "100%",
    maxHeight: "24rem",
    overflow: "auto",
    border: `1px solid ${z(e.palette.text.primary, 0.1)}`,
    borderRadius: e.shape.borderRadiusPx,
  }),
  An = { minWidth: "max-content" },
  vn = (e) => ({
    minHeight: "2.4rem",
    borderBottom: `1px solid ${z(e.palette.text.primary, 0.1)}`,
    "& .MuiTab-root": { minHeight: "2.4rem", paddingBlock: e.spacing(0.6) },
  }),
  En = (e, t, r) =>
    h.jsxs(L, {
      variant: "caption",
      color: "textSecondary",
      children: [
        "Showing ",
        e,
        " preview",
        " ",
        e === 1 ? "row" : "rows",
        " · ",
        t,
        " ",
        t === 1 ? "column" : "columns",
        r && " · More data exists",
      ],
    }),
  er = (e) => (e !== null && typeof e == "object" && !Array.isArray(e) ? e : null),
  be = (e) => (typeof e == "string" ? e : null),
  Sn = (e) => (typeof e == "number" && Number.isFinite(e) ? e : null),
  ee = (e) => (typeof e == "boolean" ? e : null),
  X = (e) => (typeof e == "number" && Number.isInteger(e) && e >= 0 ? e : null),
  Tn = (e) => (!Array.isArray(e) || e.some((t) => typeof t != "string") ? null : e),
  In = (e) => {
    if (!Array.isArray(e)) return null;
    const t = [];
    for (const r of e) {
      if (!Array.isArray(r) || r.some((s) => typeof s != "string")) return null;
      t.push(r);
    }
    return t;
  },
  tr = (e) => {
    const t = Tn(e.columns),
      r = In(e.rows),
      s = ee(e.has_header),
      a = ee(e.truncated);
    return !t || !r || s === null || a === null
      ? null
      : { kind: "table", columns: t, rows: r, hasHeader: s, truncated: a };
  },
  Cn = (e) => {
    const t = e.sheets,
      r = Sn(e.sheet_count),
      s = ee(e.truncated);
    if (!Array.isArray(t) || r === null || s === null) return null;
    const a = [];
    for (const n of t) {
      const o = er(n),
        d = be(o == null ? void 0 : o.name),
        l = o ? tr({ ...o }) : null;
      if (!d || !l) return null;
      a.push({
        name: d,
        columns: l.columns,
        rows: l.rows,
        hasHeader: l.hasHeader,
        truncated: l.truncated,
      });
    }
    return { kind: "workbook", sheets: a, sheetCount: r, truncated: s };
  },
  Mn = (e) => {
    const t = X(e.node_count),
      r = X(e.edge_count),
      s = ee(e.directed),
      a = ee(e.multigraph),
      n = be(e.layout);
    return t === null || r === null || s === null || a === null || !n || !ze.includes(n)
      ? null
      : { kind: "graph", nodeCount: t, edgeCount: r, directed: s, multigraph: a, layout: n };
  },
  jn = (e) => {
    const t = X(e.version),
      r = be(e.title),
      s = X(e.parameter_count),
      a = X(e.dataset_count),
      n = X(e.computation_count),
      o = X(e.panel_count),
      d = X(e.geometry_2d_count),
      l = X(e.geometry_3d_count),
      u = X(e.chart_count),
      m = ee(e.has_timeline);
    return t !== 1 ||
      r === null ||
      s === null ||
      a === null ||
      n === null ||
      o === null ||
      d === null ||
      l === null ||
      u === null ||
      m === null
      ? null
      : {
          kind: "scene",
          version: t,
          title: r,
          chartCount: u,
          computationCount: n,
          datasetCount: a,
          geometry2DCount: d,
          geometry3DCount: l,
          hasTimeline: m,
          parameterCount: s,
          panelCount: o,
        };
  },
  Rn = (e) => {
    const t = er(e),
      r = be(t == null ? void 0 : t.kind);
    if (!t || !r) return null;
    if (r === "table") return tr(t);
    if (r === "workbook") return Cn(t);
    if (r === "graph") return Mn(t);
    if (r === "scene") return jn(t);
    if (r === "unavailable") {
      const s = be(t.reason);
      return s ? { kind: r, reason: s } : null;
    }
    return null;
  },
  rr = ({ preview: e, label: t }) =>
    h.jsxs(h.Fragment, {
      children: [
        En(e.rows.length, e.columns.length, e.truncated),
        h.jsx(Vr, {
          sx: _n,
          children: h.jsxs(Or, {
            size: "small",
            stickyHeader: !0,
            "aria-label": t,
            sx: An,
            children: [
              h.jsx("caption", { children: t }),
              h.jsx(Qr, {
                children: h.jsx(Je, {
                  children: e.columns.map((r, s) =>
                    h.jsx(Ge, { scope: "col", children: r }, `${r}-${s}`),
                  ),
                }),
              }),
              h.jsx(Lr, {
                children: e.rows.map((r, s) =>
                  h.jsx(
                    Je,
                    {
                      children: e.columns.map((a, n) =>
                        h.jsx(Ge, { children: r[n] ?? "" }, `preview-cell-${s}-${n}`),
                      ),
                    },
                    `preview-row-${s}`,
                  ),
                ),
              }),
            ],
          }),
        }),
      ],
    }),
  nr = ({ children: e, label: t, inlineAction: r = !1 }) => {
    const [s, a] = j.useState(!1),
      n = j.useId();
    return h.jsxs(P, {
      sx: (o) => $n(o, r),
      children: [
        h.jsx(P, {
          children: h.jsx(Ce, {
            type: "button",
            size: "small",
            variant: "outlined",
            color: "primary",
            startIcon: h.jsx(an, { size: 16 }),
            disableRipple: !0,
            "aria-expanded": s,
            "aria-controls": n,
            onClick: () => a((o) => !o),
            children: "Preview",
          }),
        }),
        h.jsx(_r, {
          in: s,
          timeout: "auto",
          id: n,
          sx: r ? xn : void 0,
          children: h.jsx(P, { component: "section", "aria-label": t, children: e }),
        }),
      ],
    });
  },
  Nn = ({ preview: e, inlineAction: t = !1 }) => {
    const [r, s] = j.useState(0),
      a = Math.min(r, Math.max(e.sheets.length - 1, 0)),
      n = e.sheets[a];
    return h.jsxs(nr, {
      label: "Workbook data preview",
      inlineAction: t,
      children: [
        h.jsxs(L, {
          variant: "caption",
          color: "textSecondary",
          children: [
            e.sheetCount,
            " ",
            e.sheetCount === 1 ? "sheet" : "sheets",
            e.truncated && " · Preview is bounded",
          ],
        }),
        e.sheets.length > 0 &&
          h.jsx(Ar, {
            value: a,
            onChange: (o, d) => {
              s(d);
            },
            variant: "scrollable",
            scrollButtons: "auto",
            "aria-label": "Workbook sheets",
            sx: vn,
            children: e.sheets.map((o, d) =>
              h.jsx(vr, { label: o.name, value: d }, `${o.name}-${d}`),
            ),
          }),
        n && h.jsx(rr, { preview: n, label: `${n.name} data preview` }),
        e.sheets.length === 0 &&
          h.jsx(L, {
            variant: "body2",
            color: "textSecondary",
            children: "This workbook does not contain any previewable sheets.",
          }),
      ],
    });
  },
  kn = ({ preview: e, label: t, inlineAction: r = !1 }) =>
    e.kind === "table"
      ? h.jsx(nr, { label: t, inlineAction: r, children: h.jsx(rr, { preview: e, label: t }) })
      : e.kind === "workbook"
        ? h.jsx(Nn, { preview: e, inlineAction: r })
        : null,
  ve = ".plotly.json",
  pe = "application/vnd.mathvision.plotly.v1+json",
  it = "3.7.0",
  ct = 2 * 1024 * 1024,
  lt = 200,
  ut = 500,
  dt = 64,
  pt = 25e4,
  On = new Set(["data", "layout", "frames"]),
  Pn = new Set([
    "choropleth",
    "choroplethmap",
    "choroplethmapbox",
    "densitymap",
    "densitymapbox",
    "scattergeo",
    "scattermap",
    "scattermapbox",
  ]),
  zn = new Set(["geo", "map", "mapbox"]),
  Dn = new Set([
    "customdata",
    "hovertemplate",
    "hovertext",
    "label",
    "labels",
    "meta",
    "name",
    "prefix",
    "suffix",
    "text",
    "texttemplate",
    "ticktext",
    "title",
  ]),
  Hn = /^data:image\/(?:jpeg|png|webp);base64,([A-Za-z0-9+/]+={0,2})$/i,
  Ln =
    /<\s*(?:script|iframe|object|embed|link|meta|style|svg|math|img)\b|\b(?:href|src|srcdoc|style|on[a-z]+)\s*=|(?:javascript|vbscript)\s*:|data\s*:\s*text\/html/i,
  as = {
    responsive: !1,
    displaylogo: !1,
    editable: !1,
    typesetMath: !1,
    showLink: !1,
    sendData: !1,
    showSendToCloud: !1,
    showEditInChartStudio: !1,
    plotlyServerURL: "",
    scrollZoom: !0,
    showAxisDragHandles: !0,
    doubleClick: !1,
    displayModeBar: !0,
    modeBarButtonsToRemove: [
      "sendDataToCloud",
      "editInChartStudio",
      "resetCameraLastSave3d",
      "zoomIn2d",
      "zoomOut2d",
      "autoScale2d",
    ],
  },
  D = (e) => (e !== null && typeof e == "object" && !Array.isArray(e) ? e : null),
  or = (e) => e.split(";", 1)[0].trim().toLowerCase(),
  sr = (e) => e.name.toLowerCase().endsWith(ve) && or(e.mimeType) === pe,
  is = (e) => {
    if (e !== it)
      throw new Error(
        `Interactive Plotly viewer requires Plotly.js ${it}, but loaded ${e ?? "an unknown version"}.`,
      );
  },
  cs = async (e, t) => {
    if (!sr(t))
      throw new Error(
        `Interactive Plotly artifacts must use a ${ve} filename and ${pe} content type.`,
      );
    if (or(e.type) !== pe) throw new Error(`Interactive Plotly attachment content must use ${pe}.`);
    if (e.size === 0) throw new Error("Interactive Plotly attachment content was empty.");
    if (e.size > ct) throw new Error(`Interactive Plotly attachment exceeds the ${ct}-byte limit.`);
    if (t.sizeBytes !== null && t.sizeBytes !== e.size)
      throw new Error(
        `Interactive Plotly attachment size did not match its ${t.sizeBytes}-byte metadata.`,
      );
    let r;
    try {
      r = new TextDecoder("utf-8", { fatal: !0 }).decode(await e.arrayBuffer());
    } catch (b) {
      throw new Error("Interactive Plotly attachment must be valid UTF-8 JSON.", { cause: b });
    }
    let s;
    try {
      s = JSON.parse(r);
    } catch (b) {
      throw new Error("Interactive Plotly attachment contained malformed JSON.", { cause: b });
    }
    const a = D(s);
    if (!a) throw new Error("Interactive Plotly attachment must contain a top-level JSON object.");
    const n = Object.keys(a).filter((b) => !On.has(b));
    if (n.length > 0)
      throw new Error(
        `Interactive Plotly attachment contains unsupported top-level fields: ${n.join(", ")}.`,
      );
    if (!Object.hasOwn(a, "data") || !Object.hasOwn(a, "layout"))
      throw new Error("Interactive Plotly attachment must include data and layout fields.");
    if (!Array.isArray(a.data))
      throw new Error("Interactive Plotly data must be an array of traces.");
    const o = a.data.map((b, i) => {
        const c = D(b);
        if (!c) throw new Error(`Interactive Plotly data[${i}] must be an object.`);
        return c;
      }),
      d = D(a.layout);
    if (!d) throw new Error("Interactive Plotly layout must be an object.");
    const l = Object.hasOwn(a, "frames") ? a.frames : [];
    if (!Array.isArray(l))
      throw new Error("Interactive Plotly frames must be an array when provided.");
    const u = l.map((b, i) => {
      const c = D(b);
      if (!c) throw new Error(`Interactive Plotly frames[${i}] must be an object.`);
      return c;
    });
    if (o.length > lt)
      throw new Error(`Interactive Plotly attachment exceeds the ${lt}-trace limit.`);
    if (u.length > ut)
      throw new Error(`Interactive Plotly attachment exceeds the ${ut}-frame limit.`);
    const m = Fn(a);
    return (
      mt(o, "data"),
      ft(d, "layout"),
      u.forEach((b, i) => {
        const c = b.data;
        if (c !== void 0) {
          if (!Array.isArray(c))
            throw new Error(`Interactive Plotly frames[${i}].data must be an array.`);
          mt(c, `frames[${i}].data`);
        }
        const f = b.layout;
        if (f !== void 0) {
          const g = D(f);
          if (!g) throw new Error(`Interactive Plotly frames[${i}].layout must be an object.`);
          ft(g, `frames[${i}].layout`);
        }
      }),
      Un(a),
      { data: o, layout: d, frames: u, nodeCount: m }
    );
  },
  Fn = (e) => {
    const t = [{ value: e, depth: 0 }];
    let r = 0;
    for (; t.length > 0;) {
      const s = t.pop();
      if (((r += 1), r > pt))
        throw new Error(`Interactive Plotly attachment exceeds the ${pt}-node limit.`);
      if (s.depth > dt)
        throw new Error(`Interactive Plotly attachment exceeds the ${dt}-level nesting limit.`);
      if (Array.isArray(s.value)) {
        s.value.forEach((n) => {
          t.push({ value: n, depth: s.depth + 1 });
        });
        continue;
      }
      const a = D(s.value);
      a &&
        Object.values(a).forEach((n) => {
          t.push({ value: n, depth: s.depth + 1 });
        });
    }
    return r;
  },
  mt = (e, t) => {
    e.forEach((r, s) => {
      const a = D(r);
      if (!a) throw new Error(`Interactive Plotly ${t}[${s}] must be an object.`);
      const n = typeof a.type == "string" ? a.type.toLowerCase() : null;
      if (n && Pn.has(n))
        throw new Error(
          `Interactive Plotly ${t}[${s}] uses unsupported network-dependent trace type ${n}.`,
        );
      n === "image" && De(a.source, `${t}[${s}].source`);
    });
  },
  ft = (e, t) => {
    const r = Object.keys(e).filter((o) => zn.has(o));
    if (r.length > 0)
      throw new Error(
        `Interactive Plotly ${t} uses unsupported network-dependent fields: ${r.join(", ")}.`,
      );
    ht(e.images, `${t}.images`);
    const s = D(e.template),
      a = D(s == null ? void 0 : s.data);
    if ((s == null ? void 0 : s.data) !== void 0 && !a)
      throw new Error(`Interactive Plotly ${t}.template.data must be an object.`);
    a && Bn(a.image, `${t}.template.data.image`);
    const n = D(s == null ? void 0 : s.layout);
    n && ht(n.images, `${t}.template.layout.images`);
  },
  Bn = (e, t) => {
    if (e !== void 0) {
      if (!Array.isArray(e)) throw new Error(`Interactive Plotly ${t} must be an array.`);
      e.forEach((r, s) => {
        const a = D(r);
        if (!a) throw new Error(`Interactive Plotly ${t}[${s}] must be an object.`);
        De(a.source, `${t}[${s}].source`);
      });
    }
  },
  ht = (e, t) => {
    if (e !== void 0) {
      if (!Array.isArray(e)) throw new Error(`Interactive Plotly ${t} must be an array.`);
      e.forEach((r, s) => {
        const a = D(r);
        if (!a) throw new Error(`Interactive Plotly ${t}[${s}] must be an object.`);
        De(a.source, `${t}[${s}].source`);
      });
    }
  },
  De = (e, t) => {
    if (e === void 0) return;
    if (typeof e != "string") throw new Error(`Interactive Plotly ${t} must be a string.`);
    const r = e.trim().match(Hn);
    if (!r || r[1].length % 4 !== 0)
      throw new Error(`Interactive Plotly ${t} must be an embedded PNG, JPEG, or WebP data URL.`);
    try {
      atob(r[1]);
    } catch (s) {
      throw new Error(`Interactive Plotly ${t} contains invalid base64 image data.`, { cause: s });
    }
  },
  Un = (e) => {
    const t = [e];
    for (; t.length > 0;) {
      const r = t.pop();
      if (Array.isArray(r)) {
        t.push(...r);
        continue;
      }
      const s = D(r);
      s &&
        Object.entries(s).forEach(([a, n]) => {
          (Dn.has(a.toLowerCase()) && Wn(n, a), t.push(n));
        });
    }
  },
  Wn = (e, t) => {
    const r = [e];
    for (; r.length > 0;) {
      const s = r.pop();
      if (typeof s == "string") {
        if (Ln.test(s))
          throw new Error(
            `Interactive Plotly field ${t} contains prohibited executable or resource-loading HTML text.`,
          );
        continue;
      }
      if (Array.isArray(s)) {
        r.push(...s);
        continue;
      }
      const a = D(s);
      a && r.push(...Object.values(a));
    }
  },
  yt = 32,
  bt = 2048,
  gt = 25e3,
  Xn = /^[A-Za-z][A-Za-z0-9_-]*$/,
  qn = 64,
  wt = 128,
  N = (e, t) => {
    throw new Error(`Math Scene ${e}: ${t}`);
  },
  Gn = (e, t) =>
    typeof e != "string" || e.length === 0 || e.length > qn || !Xn.test(e)
      ? N(t, "must start with a letter and contain only letters, numbers, underscores, or hyphens.")
      : e,
  Vn = (e, t) => (Number.isFinite(e) ? e : N(t, "must be a finite number.")),
  Yn = new Set([
    "neg",
    "abs",
    "sqrt",
    "exp",
    "log",
    "log10",
    "sin",
    "cos",
    "tan",
    "asin",
    "acos",
    "atan",
    "sinh",
    "cosh",
    "tanh",
    "floor",
    "ceil",
    "round",
    "sign",
  ]),
  Kn = new Set(["add", "sub", "mul", "div", "pow", "mod", "min", "max", "atan2"]),
  $t = new Set(["lt", "le", "gt", "ge"]),
  Ne = new Set(["and", "or"]),
  Y = (e, t, r) => {
    e !== t && N(r, `must evaluate to ${t}, not ${e}.`);
  },
  B = (e, t, r, s) => {
    let a = 0;
    const n = new Set(),
      o = new Set(),
      d = (u, m, b) => {
        var c;
        if (b > yt) return N(m, `exceeds the maximum AST depth of ${yt}.`);
        if (
          ((a += 1),
          (r.totalNodeCount.value += 1),
          a > bt && N(t, `exceeds the ${bt}-node limit.`),
          r.totalNodeCount.value > gt && N(t, `causes the document to exceed ${gt} AST nodes.`),
          typeof u == "number")
        )
          return { expression: Vn(u, m), type: "number" };
        if (typeof u == "boolean") return { expression: u, type: "boolean" };
        if (typeof u == "string")
          return [...u].length > wt
            ? N(m, `must not exceed ${wt} characters.`)
            : { expression: u, type: "string" };
        if (!Array.isArray(u) || u.length === 0)
          return N(m, "must be a scalar literal or prefix AST array.");
        const i = u[0];
        if (typeof i != "string") return N(`${m}/0`, "must be an expression operator.");
        if (i === "var" || i === "param" || i === "const") {
          if (u.length !== 2 || typeof u[1] != "string")
            return N(m, `${i} requires exactly one string name.`);
          const f = Gn(u[1], `${m}/1`);
          if (i === "var")
            return r.variables.has(f)
              ? (o.add(f),
                {
                  expression: [i, f],
                  type: ((c = r.variableTypes) == null ? void 0 : c.get(f)) ?? "number",
                })
              : N(`${m}/1`, `references undeclared variable ${f}.`);
          if (i === "param") {
            const g = r.parameterTypes.get(f);
            return g
              ? (n.add(f), { expression: [i, f], type: g })
              : N(`${m}/1`, `references undeclared parameter ${f}.`);
          }
          return f !== "pi" && f !== "e" && f !== "tau"
            ? N(`${m}/1`, "must be pi, e, or tau.")
            : { expression: [i, f], type: "number" };
        }
        if (Yn.has(i) || i === "not") {
          if (u.length !== 2) return N(m, `${i} requires exactly one argument.`);
          const f = d(u[1], `${m}/1`, b + 1),
            g = i === "not" ? "boolean" : "number";
          return (
            Y(f.type, g, `${m}/1`),
            { expression: [i, f.expression], type: i === "not" ? "boolean" : "number" }
          );
        }
        if (Kn.has(i) || $t.has(i) || Ne.has(i) || i === "eq" || i === "ne") {
          if (u.length !== 3) return N(m, `${i} requires exactly two arguments.`);
          const f = d(u[1], `${m}/1`, b + 1),
            g = d(u[2], `${m}/2`, b + 1);
          if (i === "eq" || i === "ne")
            return (
              f.type !== g.type && N(m, `${i} arguments must have matching types.`),
              { expression: [i, f.expression, g.expression], type: "boolean" }
            );
          const y = Ne.has(i) ? "boolean" : "number";
          return (
            Y(f.type, y, `${m}/1`),
            Y(g.type, y, `${m}/2`),
            {
              expression: [i, f.expression, g.expression],
              type: $t.has(i) || Ne.has(i) ? "boolean" : "number",
            }
          );
        }
        if (i === "clamp" || i === "select") {
          if (u.length !== 4) return N(m, `${i} requires exactly three arguments.`);
          const f = d(u[1], `${m}/1`, b + 1),
            g = d(u[2], `${m}/2`, b + 1),
            y = d(u[3], `${m}/3`, b + 1);
          return i === "clamp"
            ? (Y(f.type, "number", `${m}/1`),
              Y(g.type, "number", `${m}/2`),
              Y(y.type, "number", `${m}/3`),
              { expression: [i, f.expression, g.expression, y.expression], type: "number" })
            : (Y(f.type, "boolean", `${m}/1`),
              g.type !== y.type && N(m, "select result branches must have matching types."),
              { expression: [i, f.expression, g.expression, y.expression], type: g.type });
        }
        return N(`${m}/0`, `uses unsupported operator ${i}.`);
      },
      l = d(e, t, 0);
    return (s && Y(l.type, s, t), { ...l, nodeCount: a, parameterIds: n, variableIds: o });
  },
  $ = (e) => e,
  J = (e) => e,
  Jn = (e) => (Number.isFinite(e) ? e : Number.NaN),
  T = (e) => (t, r) => Jn($(e(t, r))),
  Zn = (e) => {
    if (!Number.isFinite(e)) return e;
    const t = Math.floor(e),
      r = e - t;
    return r < 0.5 ? t : r > 0.5 ? t + 1 : t % 2 === 0 ? t : t + 1;
  },
  me = (e) => {
    if (!Array.isArray(e)) return () => e;
    const t = e[0];
    if (t === "var") {
      const n = e[1];
      return (o) => o[n];
    }
    if (t === "param") {
      const n = e[1];
      return (o, d) => d[n];
    }
    if (t === "const") {
      const n = e[1],
        o = n === "pi" ? Math.PI : n === "tau" ? Math.PI * 2 : Math.E;
      return () => o;
    }
    const r = me(e[1]);
    if (t === "neg") return T((n, o) => -$(r(n, o)));
    if (t === "abs") return T((n, o) => Math.abs($(r(n, o))));
    if (t === "sqrt") return T((n, o) => Math.sqrt($(r(n, o))));
    if (t === "exp") return T((n, o) => Math.exp($(r(n, o))));
    if (t === "log") return T((n, o) => Math.log($(r(n, o))));
    if (t === "log10") return T((n, o) => Math.log10($(r(n, o))));
    if (t === "sin") return T((n, o) => Math.sin($(r(n, o))));
    if (t === "cos") return T((n, o) => Math.cos($(r(n, o))));
    if (t === "tan") return T((n, o) => Math.tan($(r(n, o))));
    if (t === "asin") return T((n, o) => Math.asin($(r(n, o))));
    if (t === "acos") return T((n, o) => Math.acos($(r(n, o))));
    if (t === "atan") return T((n, o) => Math.atan($(r(n, o))));
    if (t === "sinh") return T((n, o) => Math.sinh($(r(n, o))));
    if (t === "cosh") return T((n, o) => Math.cosh($(r(n, o))));
    if (t === "tanh") return T((n, o) => Math.tanh($(r(n, o))));
    if (t === "floor") return T((n, o) => Math.floor($(r(n, o))));
    if (t === "ceil") return T((n, o) => Math.ceil($(r(n, o))));
    if (t === "round") return T((n, o) => Zn($(r(n, o))));
    if (t === "sign") return T((n, o) => Math.sign($(r(n, o))));
    if (t === "not") return (n, o) => !J(r(n, o));
    const s = me(e[2]);
    if (t === "add") return T((n, o) => $(r(n, o)) + $(s(n, o)));
    if (t === "sub") return T((n, o) => $(r(n, o)) - $(s(n, o)));
    if (t === "mul") return T((n, o) => $(r(n, o)) * $(s(n, o)));
    if (t === "div") return T((n, o) => $(r(n, o)) / $(s(n, o)));
    if (t === "pow") return T((n, o) => Math.pow($(r(n, o)), $(s(n, o))));
    if (t === "mod")
      return T((n, o) => {
        const d = $(r(n, o)),
          l = $(s(n, o));
        return d - Math.floor(d / l) * l;
      });
    if (t === "min") return T((n, o) => Math.min($(r(n, o)), $(s(n, o))));
    if (t === "max") return T((n, o) => Math.max($(r(n, o)), $(s(n, o))));
    if (t === "atan2") return T((n, o) => Math.atan2($(r(n, o)), $(s(n, o))));
    if (t === "eq") return (n, o) => r(n, o) === s(n, o);
    if (t === "ne") return (n, o) => r(n, o) !== s(n, o);
    if (t === "lt") return (n, o) => $(r(n, o)) < $(s(n, o));
    if (t === "le") return (n, o) => $(r(n, o)) <= $(s(n, o));
    if (t === "gt") return (n, o) => $(r(n, o)) > $(s(n, o));
    if (t === "ge") return (n, o) => $(r(n, o)) >= $(s(n, o));
    if (t === "and") return (n, o) => J(r(n, o)) && J(s(n, o));
    if (t === "or") return (n, o) => J(r(n, o)) || J(s(n, o));
    const a = me(e[3]);
    if (t === "clamp") return T((n, o) => Math.min($(a(n, o)), Math.max($(s(n, o)), $(r(n, o)))));
    if (t === "select") return (n, o) => (J(r(n, o)) ? s(n, o) : a(n, o));
    throw new Error(`Unsupported validated Math Scene operator ${t}.`);
  },
  xt = 16,
  _t = 128,
  we = 5e4,
  At = 2e5,
  vt = 2e6,
  Et = 32,
  Ee = ".mvscene.json",
  fe = "application/vnd.mathvision.scene.v1+json",
  St = 2 * 1024 * 1024,
  Tt = 32,
  It = 32,
  Ct = 16,
  Se = 4,
  Mt = 64,
  jt = 32,
  Rt = 5e4,
  Nt = 1e6,
  kt = 262144,
  Ot = 1e7,
  Pt = 1e6,
  zt = 2048,
  Dt = 512,
  Te = 129,
  Qn = /^#[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?$/,
  Ht = 32,
  eo = /^[A-Za-z][A-Za-z0-9_-]*$/,
  to = /<\s*\/?\s*[a-z][a-z0-9:-]*(?:(?:\s+|\/)[^<>]*)?>/i,
  ro = /[\u0000-\u001F\u007F]/,
  ar = 64,
  ir = 200,
  G = 120,
  He = 2e3,
  p = (e, t) => {
    throw new Error(`Math Scene ${e}: ${t}`);
  },
  C = (e, t) =>
    e === null || typeof e != "object" || Array.isArray(e) ? p(t, "must be an object.") : e,
  A = (e, t, r, s = []) => {
    for (const o of r) Object.hasOwn(e, o) || p(t, `is missing required field ${o}.`);
    const a = new Set([...r, ...s]),
      n = Object.keys(e).filter((o) => !a.has(o));
    n.length > 0 && p(t, `contains unsupported fields: ${n.join(", ")}.`);
  },
  K = (e, t) => (typeof e != "boolean" ? p(t, "must be a boolean.") : e),
  U = (e, t) =>
    typeof e != "number" || !Number.isFinite(e) ? p(t, "must be a finite number.") : e,
  F = (e, t) => {
    const r = U(e, t);
    return Number.isSafeInteger(r) ? r : p(t, "must be a safe integer.");
  },
  k = (e, t, r) =>
    typeof e != "string"
      ? p(t, "must be a string.")
      : [...e].length > r
        ? p(t, `must contain no more than ${r} characters.`)
        : ro.test(e) || to.test(e)
          ? p(t, "contains unsupported markup or control characters.")
          : e,
  O = (e, t) =>
    typeof e != "string" || e.length === 0 || e.length > ar || !eo.test(e)
      ? p(t, "must start with a letter and contain only letters, numbers, underscores, or hyphens.")
      : e,
  ue = (e, t, r) =>
    !Array.isArray(e) || e.length !== r
      ? p(t, `must contain exactly ${r} numbers.`)
      : e.map((s, a) => U(s, `${t}/${a}`)),
  no = (e) => {
    const t = C(e, "/metadata");
    A(t, "/metadata", ["title"], ["description"]);
    const r = Object.hasOwn(t, "description")
      ? k(t.description, "/metadata/description", He)
      : void 0;
    return {
      title: k(t.title, "/metadata/title", ir),
      ...(r === void 0 ? {} : { description: r }),
    };
  },
  oo = (e, t) =>
    e === void 0 ? "live" : e !== "live" && e !== "commit" ? p(t, "must be live or commit.") : e,
  so = (e) => {
    if (!Array.isArray(e)) return p("/parameters", "must be an array.");
    e.length > Tt && p("/parameters", `exceeds the ${Tt}-parameter limit.`);
    const t = new Set();
    return e.map((r, s) => {
      const a = `/parameters/${s}`,
        n = C(r, a),
        o = O(n.id, `${a}/id`);
      (t.has(o) && p(`${a}/id`, `duplicates parameter id ${o}.`), t.add(o));
      const d = k(n.label, `${a}/label`, G),
        l = oo(n.update, `${a}/update`),
        u = { id: o, label: d, update: l };
      if (n.type === "float" || n.type === "int") {
        A(
          n,
          a,
          ["id", "label", "type", "default"],
          ["update", "minimum", "maximum", "slider", "unit"],
        );
        const m = n.type === "int" ? F : U,
          b = m(n.default, `${a}/default`),
          i = Object.hasOwn(n, "minimum") ? m(n.minimum, `${a}/minimum`) : void 0,
          c = Object.hasOwn(n, "maximum") ? m(n.maximum, `${a}/maximum`) : void 0;
        (i !== void 0 && c !== void 0 && i > c && p(a, "minimum must not exceed maximum."),
          i !== void 0 && b < i && p(`${a}/default`, "must not be below minimum."),
          c !== void 0 && b > c && p(`${a}/default`, "must not exceed maximum."));
        let f;
        if (Object.hasOwn(n, "slider")) {
          const y = `${a}/slider`,
            _ = C(n.slider, y);
          A(_, y, ["min", "max", "step"], ["scale"]);
          const w = m(_.min, `${y}/min`),
            S = m(_.max, `${y}/max`),
            E = m(_.step, `${y}/step`),
            v = _.scale ?? "linear";
          (w >= S && p(`${y}/max`, "must be greater than min."),
            E <= 0 && p(`${y}/step`, "must be positive."),
            v !== "linear" && v !== "log" && p(`${y}/scale`, "must be linear or log."),
            v === "log" && w <= 0 && p(`${y}/min`, "must be positive for a log slider."),
            (f = { min: w, max: S, step: E, scale: v }));
        }
        const g = Object.hasOwn(n, "unit") ? k(n.unit, `${a}/unit`, ar) : void 0;
        return {
          ...u,
          type: n.type,
          default: b,
          ...(i === void 0 ? {} : { minimum: i }),
          ...(c === void 0 ? {} : { maximum: c }),
          ...(f === void 0 ? {} : { slider: f }),
          ...(g === void 0 ? {} : { unit: g }),
        };
      }
      if (n.type === "bool")
        return (
          A(n, a, ["id", "label", "type", "default"], ["update"]),
          { ...u, type: "bool", default: K(n.default, `${a}/default`) }
        );
      if (n.type === "enum") {
        (A(n, a, ["id", "label", "type", "default", "options"], ["update"]),
          (!Array.isArray(n.options) || n.options.length < 1 || n.options.length > Ht) &&
            p(`${a}/options`, `must contain 1 to ${Ht} options.`));
        const m = n.options.map((i, c) => k(i, `${a}/options/${c}`, 128));
        new Set(m).size !== m.length && p(`${a}/options`, "must not contain duplicates.");
        const b = k(n.default, `${a}/default`, 128);
        return (
          m.includes(b) || p(`${a}/default`, "must match one of the enum options."),
          { ...u, type: "enum", default: b, options: m }
        );
      }
      return p(`${a}/type`, "must be float, int, bool, or enum.");
    });
  },
  cr = (e) =>
    new Map(
      e.map((t) => [
        t.id,
        t.type === "float" || t.type === "int"
          ? "number"
          : t.type === "bool"
            ? "boolean"
            : "string",
      ]),
    ),
  ge = (e, t, r) => ({ parameterTypes: cr(e), totalNodeCount: r, variables: t }),
  ao = (e, t, r) => {
    if (!Array.isArray(e)) return p("/constraints", "must be an array.");
    e.length > It && p("/constraints", `exceeds the ${It}-constraint limit.`);
    const s = new Set();
    return e.map((a, n) => {
      const o = `/constraints/${n}`,
        d = C(a, o);
      A(d, o, ["id", "message", "expression"]);
      const l = O(d.id, `${o}/id`);
      (s.has(l) && p(`${o}/id`, `duplicates constraint id ${l}.`), s.add(l));
      const u = B(d.expression, `${o}/expression`, ge(t, new Set(), r), "boolean");
      return {
        id: l,
        message: k(d.message, `${o}/message`, He),
        expression: u.expression,
        parameterIds: [...u.parameterIds],
      };
    });
  },
  io = (e, t, r) => {
    if (e === null) return null;
    if (t === "number") return U(e, r);
    if (t === "boolean") return K(e, r);
    const s = k(e, r, He);
    if (t === "date") {
      const a = new Date(`${s}T00:00:00Z`);
      (!/^\d{4}-\d{2}-\d{2}$/.test(s) ||
        s.startsWith("0000-") ||
        Number.isNaN(a.valueOf()) ||
        a.toISOString().slice(0, 10) !== s) &&
        p(r, "must be an ISO date in YYYY-MM-DD form.");
    }
    return s;
  },
  Ie = (e, t, r) => {
    const s = O(e, r);
    return (Object.hasOwn(t, s) || p(r, `references unknown column ${s}.`), s);
  },
  Z = (e, t, r) => {
    const s = Ie(e, t, r);
    return (t[s] !== "number" && p(r, "must reference a numeric column."), s);
  },
  ke = (e, t, r) => {
    const s = O(e, r);
    return (Object.hasOwn(t, s) && p(r, `duplicates column ${s}.`), s);
  },
  Lt = (e, t, r) => {
    const s = new Map(Object.entries(t).map(([a, n]) => [a, n === "date" ? "string" : n]));
    return {
      parameterTypes: cr(e),
      totalNodeCount: r,
      variables: new Set(s.keys()),
      variableTypes: s,
    };
  },
  $e = (e, t, r, s = 0) => {
    ((e.columns += t),
      (e.cells += r),
      (e.work += s),
      e.columns > _t && p("/datasets", `exceeds the ${_t}-column limit.`),
      e.cells > At && p("/datasets", `exceeds the ${At}-cell limit.`),
      e.work > vt && p("/datasets", `exceeds the ${vt}-unit work limit.`));
  },
  co = (e, t, r) => {
    if (!Array.isArray(e)) return p("/datasets", "must be an array.");
    e.length > xt && p("/datasets", `exceeds the ${xt}-dataset limit.`);
    const s = [],
      a = new Map(),
      n = { cells: 0, columns: 0, work: 0 };
    for (const [o, d] of e.entries()) {
      const l = `/datasets/${o}`,
        u = C(d, l),
        m = O(u.id, `${l}/id`);
      a.has(m) && p(`${l}/id`, `duplicates dataset id ${m}.`);
      const b = k(u.label, `${l}/label`, G);
      if (u.type === "table") {
        (A(u, l, ["id", "type", "label", "columns"]),
          (!Array.isArray(u.columns) || u.columns.length === 0) &&
            p(`${l}/columns`, "must be a non-empty array."));
        const f = {};
        let g;
        const y = u.columns.map((w, S) => {
            const E = `${l}/columns/${S}`,
              x = C(w, E);
            A(x, E, ["id", "label", "type", "values"]);
            const v = O(x.id, `${E}/id`);
            (Object.hasOwn(f, v) && p(`${E}/id`, `duplicates column ${v}.`),
              x.type !== "number" &&
                x.type !== "string" &&
                x.type !== "boolean" &&
                x.type !== "date" &&
                p(`${E}/type`, "must be number, string, boolean, or date."),
              Array.isArray(x.values) || p(`${E}/values`, "must be an array."));
            const R = x.values;
            (R.length > we && p(`${E}/values`, `exceeds the ${we}-row limit.`),
              g ?? (g = R.length),
              R.length !== g &&
                p(`${E}/values`, "must have the same length as the other columns."));
            const M = x.type;
            return (
              (f[v] = M),
              {
                id: v,
                label: k(x.label, `${E}/label`, G),
                type: M,
                values: R.map((H, I) => io(H, M, `${E}/values/${I}`)),
              }
            );
          }),
          _ = {
            id: m,
            type: "table",
            label: b,
            columns: y,
            parameterIds: [],
            rowCount: g ?? 0,
            schema: f,
          };
        ($e(n, y.length, _.rowCount * y.length), s.push(_), a.set(m, _));
        continue;
      }
      const i = O(u.source, `${l}/source`),
        c = a.get(i);
      if ((c || p(`${l}/source`, "must reference an earlier dataset."), u.type === "transform")) {
        (A(u, l, ["id", "type", "label", "source", "operations"]),
          (!Array.isArray(u.operations) || u.operations.length < 1 || u.operations.length > Et) &&
            p(`${l}/operations`, `must contain 1 to ${Et} operations.`));
        const f = { ...c.schema },
          g = new Set(c.parameterIds);
        let y = 0;
        const _ = u.operations.map((S, E) => {
            const x = `${l}/operations/${E}`,
              v = C(S, x);
            if (v.type === "filter") {
              A(v, x, ["type", "expression"]);
              const R = B(v.expression, `${x}/expression`, Lt(t, f, r), "boolean");
              return (
                R.parameterIds.forEach((M) => g.add(M)),
                (y += c.rowCount * R.nodeCount),
                {
                  type: "filter",
                  expression: R.expression,
                  expressionNodeCount: R.nodeCount,
                  parameterIds: [...R.parameterIds],
                  variableIds: [...R.variableIds],
                }
              );
            }
            if (v.type === "sort") {
              (A(v, x, ["type", "column", "direction"]),
                v.direction !== "ascending" &&
                  v.direction !== "descending" &&
                  p(`${x}/direction`, "must be ascending or descending."));
              const R = v.direction;
              return (
                (y += c.rowCount * Math.max(1, Math.ceil(Math.log2(Math.max(2, c.rowCount))))),
                { type: "sort", column: Ie(v.column, f, `${x}/column`), direction: R }
              );
            }
            if (v.type === "derive") {
              A(v, x, ["type", "id", "label", "expression"]);
              const R = ke(v.id, f, `${x}/id`),
                M = B(v.expression, `${x}/expression`, Lt(t, f, r));
              return (
                (f[R] = M.type),
                M.parameterIds.forEach((H) => g.add(H)),
                (y += c.rowCount * M.nodeCount),
                {
                  type: "derive",
                  id: R,
                  label: k(v.label, `${x}/label`, G),
                  expression: M.expression,
                  expressionNodeCount: M.nodeCount,
                  parameterIds: [...M.parameterIds],
                  variableIds: [...M.variableIds],
                  valueType: M.type,
                }
              );
            }
            if (v.type === "rolling_mean") {
              A(v, x, ["type", "column", "output", "label", "window"]);
              const R = Z(v.column, f, `${x}/column`),
                M = ke(v.output, f, `${x}/output`),
                H = F(v.window, `${x}/window`);
              return (
                (H < 1 || H > we) && p(`${x}/window`, `must be between 1 and ${we}.`),
                (f[M] = "number"),
                (y += c.rowCount),
                {
                  type: "rolling_mean",
                  column: R,
                  output: M,
                  label: k(v.label, `${x}/label`, G),
                  window: H,
                }
              );
            }
            if (v.type === "linear_regression") {
              A(v, x, ["type", "x", "y", "output", "label"]);
              const R = Z(v.x, f, `${x}/x`),
                M = Z(v.y, f, `${x}/y`),
                H = ke(v.output, f, `${x}/output`);
              return (
                (f[H] = "number"),
                (y += c.rowCount),
                {
                  type: "linear_regression",
                  x: R,
                  y: M,
                  output: H,
                  label: k(v.label, `${x}/label`, G),
                }
              );
            }
            return p(
              `${x}/type`,
              "must be filter, sort, derive, rolling_mean, or linear_regression.",
            );
          }),
          w = {
            id: m,
            type: "transform",
            label: b,
            source: i,
            operations: _,
            parameterIds: [...g],
            rowCount: c.rowCount,
            schema: f,
          };
        ($e(n, Object.keys(f).length, w.rowCount * Object.keys(f).length, y),
          s.push(w),
          a.set(m, w));
        continue;
      }
      if (u.type === "aggregate") {
        A(u, l, ["id", "type", "label", "source", "group_by", "operation"], ["column"]);
        const f = Ie(u.group_by, c.schema, `${l}/group_by`);
        u.operation !== "count" &&
          u.operation !== "sum" &&
          u.operation !== "mean" &&
          u.operation !== "min" &&
          u.operation !== "max" &&
          p(`${l}/operation`, "must be count, sum, mean, min, or max.");
        const g = u.operation;
        let y;
        u.operation === "count"
          ? Object.hasOwn(u, "column") && p(`${l}/column`, "is not used by count.")
          : (Object.hasOwn(u, "column") || p(`${l}/column`, "is required."),
            (y = Z(u.column, c.schema, `${l}/column`)));
        const _ = {
          id: m,
          type: "aggregate",
          label: b,
          source: i,
          groupBy: f,
          operation: g,
          ...(y ? { column: y } : {}),
          parameterIds: [...c.parameterIds],
          rowCount: c.rowCount,
          schema: { group: c.schema[f], value: "number" },
        };
        ($e(n, 2, _.rowCount * 2, c.rowCount), s.push(_), a.set(m, _));
        continue;
      }
      if (u.type === "histogram") {
        A(u, l, ["id", "type", "label", "source", "column", "bin_count"]);
        const f = Z(u.column, c.schema, `${l}/column`),
          g = F(u.bin_count, `${l}/bin_count`);
        (g < 1 || g > Te) && p(`${l}/bin_count`, `must be between 1 and ${Te}.`);
        const y = {
          id: m,
          type: "histogram",
          label: b,
          source: i,
          column: f,
          binCount: g,
          parameterIds: [...c.parameterIds],
          rowCount: g,
          schema: { bin: "string", count: "number" },
        };
        ($e(n, 2, g * 2, c.rowCount + g), s.push(y), a.set(m, y));
        continue;
      }
      p(`${l}/type`, "must be table, transform, aggregate, or histogram.");
    }
    return { datasets: s, totals: n };
  },
  Le = (e, t) => {
    const r = C(e, t);
    return (
      A(r, t, ["computation", "output"]),
      { computation: O(r.computation, `${t}/computation`), output: O(r.output, `${t}/output`) }
    );
  },
  lr = (e) =>
    e.type === "brownian_bridge_flat_torus"
      ? {
          featured_path: "timeline_vector2",
          winding_u: "timeline_integer_samples",
          winding_v: "timeline_integer_samples",
        }
      : { bins: "static_scalar_vector", counts: "timeline_numeric_vector" },
  ur = (e, t) => {
    const r = e.find(({ id: s }) => s === t.computation);
    return r ? lr(r)[t.output] : void 0;
  },
  lo = (e, t, r) => {
    if (e === null) return null;
    const s = C(e, "/timeline");
    A(s, "/timeline", ["duration", "steps", "speed", "loop", "autoplay"]);
    const a = ge(t, new Set(), r),
      n = B(s.duration, "/timeline/duration", a, "number"),
      o = B(s.speed, "/timeline/speed", a, "number"),
      d = F(s.steps, "/timeline/steps");
    return (
      (d < 2 || d > zt) && p("/timeline/steps", `must be between 2 and ${zt}.`),
      {
        autoplay: K(s.autoplay, "/timeline/autoplay"),
        duration: n.expression,
        loop: K(s.loop, "/timeline/loop"),
        speed: o.expression,
        steps: d,
        durationParameterIds: [...n.parameterIds],
        parameterIds: [...new Set([...n.parameterIds, ...o.parameterIds])],
        speedParameterIds: [...o.parameterIds],
      }
    );
  },
  uo = (e, t, r, s) => {
    if (!Array.isArray(e)) return p("/computations", "must be an array.");
    e.length > Ct && p("/computations", `exceeds the ${Ct}-computation limit.`);
    const a = new Set(),
      n = e.map((d, l) => {
        const u = `/computations/${l}`,
          m = C(d, u),
          b = O(m.id, `${u}/id`);
        if (
          (a.has(b) && p(`${u}/id`, `duplicates computation id ${b}.`),
          a.add(b),
          m.type === "brownian_bridge_flat_torus")
        ) {
          (A(m, u, [
            "id",
            "type",
            "path_count",
            "seed",
            "start",
            "featured_path",
            "diffusion",
            "winding_limit",
          ]),
            r || p(u, "requires a shared timeline."));
          const i = F(m.path_count, `${u}/path_count`);
          (i < 1 || i > Dt) && p(`${u}/path_count`, `must be between 1 and ${Dt}.`);
          const c = F(m.featured_path, `${u}/featured_path`);
          (c < 0 || c >= i) && p(`${u}/featured_path`, "must select one of the simulated paths.");
          const f = F(m.winding_limit, `${u}/winding_limit`);
          ((f < 0 || f > 4096) && p(`${u}/winding_limit`, "must be between 0 and 4096."),
            (!Array.isArray(m.start) || m.start.length !== 2) &&
              p(`${u}/start`, "must contain exactly two numeric expressions."));
          const g = ge(t, new Set(), s),
            y = B(m.seed, `${u}/seed`, g, "number"),
            _ = B(m.diffusion, `${u}/diffusion`, g, "number"),
            S = m.start.map((E, x) => B(E, `${u}/start/${x}`, g, "number"));
          return {
            id: b,
            type: "brownian_bridge_flat_torus",
            diffusion: _.expression,
            featuredPath: c,
            pathCount: i,
            seed: y.expression,
            start: [S[0].expression, S[1].expression],
            windingLimit: f,
            parameterIds: [
              ...new Set([
                ...y.parameterIds,
                ..._.parameterIds,
                ...S.flatMap((E) => [...E.parameterIds]),
                ...r.durationParameterIds,
              ]),
            ],
          };
        }
        if (m.type === "integer_histogram") {
          A(m, u, ["id", "type", "source", "max_bins"]);
          const i = F(m.max_bins, `${u}/max_bins`);
          return (
            (i < 1 || i > Te) && p(`${u}/max_bins`, `must be between 1 and ${Te}.`),
            {
              id: b,
              type: "integer_histogram",
              maxBins: i,
              source: Le(m.source, `${u}/source`),
              parameterIds: [],
            }
          );
        }
        return p(`${u}/type`, "must be brownian_bridge_flat_torus or integer_histogram.");
      }),
      o = new Map(n.map((d) => [d.id, d]));
    for (const d of n) {
      if (d.type !== "integer_histogram") continue;
      const l = o.get(d.source.computation);
      (l ||
        p(
          `/computations/${d.id}/source`,
          `references unknown computation ${d.source.computation}.`,
        ),
        lr(l)[d.source.output] !== "timeline_integer_samples" &&
          p(`/computations/${d.id}/source`, "must reference timeline integer samples."),
        (d.parameterIds = [...l.parameterIds]));
    }
    return n;
  },
  dr = (e, t) => {
    const r = C(e, t);
    A(r, t, [], ["color", "opacity", "line_width", "point_size", "wireframe", "dash", "marker"]);
    const s = {};
    if (Object.hasOwn(r, "color")) {
      const a = k(r.color, `${t}/color`, 9);
      (Qn.test(a) || p(`${t}/color`, "must be a #RRGGBB or #RRGGBBAA color."), (s.color = a));
    }
    if (Object.hasOwn(r, "opacity")) {
      const a = U(r.opacity, `${t}/opacity`);
      ((a < 0 || a > 1) && p(`${t}/opacity`, "must be between 0 and 1."), (s.opacity = a));
    }
    if (Object.hasOwn(r, "line_width")) {
      const a = U(r.line_width, `${t}/line_width`);
      (a <= 0 && p(`${t}/line_width`, "must be positive."), (s.lineWidth = a));
    }
    if (Object.hasOwn(r, "point_size")) {
      const a = U(r.point_size, `${t}/point_size`);
      (a <= 0 && p(`${t}/point_size`, "must be positive."), (s.pointSize = a));
    }
    return (
      Object.hasOwn(r, "wireframe") && (s.wireframe = K(r.wireframe, `${t}/wireframe`)),
      Object.hasOwn(r, "dash") &&
        (r.dash !== "solid" &&
          r.dash !== "dash" &&
          r.dash !== "dot" &&
          p(`${t}/dash`, "must be solid, dash, or dot."),
        (s.dash = r.dash)),
      Object.hasOwn(r, "marker") &&
        (r.marker !== "circle" &&
          r.marker !== "square" &&
          r.marker !== "diamond" &&
          r.marker !== "cross" &&
          p(`${t}/marker`, "must be circle, square, diamond, or cross."),
        (s.marker = r.marker)),
      s
    );
  },
  po = (e, t, r) => {
    if (!Array.isArray(e) || e.length !== r)
      return p(t, `must contain exactly ${r} domain entries.`);
    const s = new Set();
    return e.map((a, n) => {
      const o = `${t}/${n}`,
        d = C(a, o);
      A(d, o, ["variable", "min", "max"]);
      const l = O(d.variable, `${o}/variable`);
      (s.has(l) && p(`${o}/variable`, `duplicates variable ${l}.`), s.add(l));
      const u = U(d.min, `${o}/min`),
        m = U(d.max, `${o}/max`);
      return (
        u >= m && p(`${o}/max`, "must be greater than min."),
        { variable: l, min: u, max: m }
      );
    });
  },
  mo = (e, t) => {
    const r = C(e, t);
    A(r, t, ["preview", "final"]);
    const s = F(r.preview, `${t}/preview`),
      a = F(r.final, `${t}/final`);
    return (
      (s < 2 || s > 128) && p(`${t}/preview`, "must be between 2 and 128."),
      (a < s || a > 512) && p(`${t}/final`, "must be between preview and 512."),
      { preview: s, final: a }
    );
  },
  fo = (e, t, r, s, a, n, o, d, l) => {
    if (!Array.isArray(e)) return p(t, "must be an array.");
    ((l.objects += e.length),
      l.objects > Mt && p(t, `causes the document to exceed ${Mt} objects.`));
    const u = new Set();
    return e.map((m, b) => {
      const i = `${t}/${b}`,
        c = C(m, i),
        f = ["id", "type", "label", "visible", "style"],
        g = O(c.id, `${i}/id`);
      (u.has(g) && p(`${i}/id`, `duplicates object id ${g}.`), u.add(g));
      const y = {
        id: g,
        label: k(c.label, `${i}/label`, G),
        visible: K(c.visible, `${i}/visible`),
        style: dr(c.style, `${i}/style`),
      };
      if (c.type === "points") {
        (A(c, i, [...f, "points"]),
          Array.isArray(c.points) || p(`${i}/points`, "must be an array."));
        const I = c.points;
        return (
          (l.points += I.length),
          (l.finalSamples += I.length),
          l.points > Rt && p(`${i}/points`, `causes the document to exceed ${Rt} points.`),
          { ...y, type: "points", points: I.map((W, V) => ue(W, `${i}/points/${V}`, r)) }
        );
      }
      if (c.type === "data_points" || c.type === "data_curve") {
        A(c, i, [...f, "source", "coordinates"]);
        const I = O(c.source, `${i}/source`),
          W = n.find((ie) => ie.id === I);
        (W || p(`${i}/source`, `references unknown dataset ${I}.`),
          (!Array.isArray(c.coordinates) || c.coordinates.length !== r) &&
            p(`${i}/coordinates`, `must contain exactly ${r} numeric columns.`));
        const V = c.coordinates.map((ie, Be) => Z(ie, W.schema, `${i}/coordinates/${Be}`));
        return ((l.finalSamples += W.rowCount), { ...y, type: c.type, source: I, coordinates: V });
      }
      if (c.type === "computed_curve") {
        A(c, i, [...f, "source", "variables", "expressions", "reveal"]);
        const I = Le(c.source, `${i}/source`);
        (ur(a, I) !== "timeline_vector2" &&
          p(`${i}/source`, "must reference a timeline vector2 output."),
          (!Array.isArray(c.variables) || c.variables.length !== 2) &&
            p(`${i}/variables`, "must contain exactly two variable names."));
        const V = c.variables.map((q, ce) => O(q, `${i}/variables/${ce}`));
        (new Set(V).size !== V.length && p(`${i}/variables`, "must not contain duplicates."),
          (!Array.isArray(c.expressions) || c.expressions.length !== r) &&
            p(`${i}/expressions`, `must contain exactly ${r} expressions.`),
          c.reveal !== "all" &&
            c.reveal !== "timeline_prefix" &&
            p(`${i}/reveal`, "must be all or timeline_prefix."),
          c.reveal === "timeline_prefix" && !o && p(`${i}/reveal`, "requires a shared timeline."));
        const ie = ge(s, new Set(V), d),
          je = c.expressions.map((q, ce) => B(q, `${i}/expressions/${ce}`, ie, "number")),
          Ue = je.reduce((q, ce) => q + ce.nodeCount, 0),
          We = (o == null ? void 0 : o.steps) ?? 0;
        return (
          (l.finalSamples += We),
          (l.work += We * Ue),
          {
            ...y,
            type: "computed_curve",
            source: I,
            variables: V,
            expressions: je.map(({ expression: q }) => q),
            reveal: c.reveal,
            expressionNodeCount: Ue,
            parameterIds: [...new Set(je.flatMap(({ parameterIds: q }) => [...q]))],
          }
        );
      }
      const _ = c.type === "explicit_surface" || c.type === "parametric_surface",
        w = c.type === "explicit_curve" || c.type === "parametric_curve";
      if (!_ && !w) return p(`${i}/type`, "uses an unsupported geometry object type.");
      (_ && r !== 3 && p(`${i}/type`, "surface objects require a 3D panel."),
        c.type === "explicit_curve" &&
          r !== 2 &&
          p(`${i}/type`, "explicit curves require a 2D panel."));
      const S = po(c.domain, `${i}/domain`, _ ? 2 : 1),
        E = mo(c.sampling, `${i}/sampling`),
        x = _ ? E.final ** 2 : E.final;
      ((l.finalSamples += x), _ && (l.surfaces += x));
      const v = ge(s, new Set(S.map(({ variable: I }) => I)), d);
      if (c.type === "explicit_curve" || c.type === "explicit_surface") {
        A(c, i, [...f, "domain", "sampling", "expression"]);
        const I = B(c.expression, `${i}/expression`, v, "number");
        return (
          (l.work += x * I.nodeCount),
          {
            ...y,
            type: c.type,
            domain: S,
            sampling: E,
            expression: I.expression,
            expressionNodeCount: I.nodeCount,
            parameterIds: [...I.parameterIds],
          }
        );
      }
      (A(c, i, [...f, "domain", "sampling", "expressions"]),
        (!Array.isArray(c.expressions) || c.expressions.length !== r) &&
          p(`${i}/expressions`, `must contain exactly ${r} expressions.`));
      const M = c.expressions.map((I, W) => B(I, `${i}/expressions/${W}`, v, "number")),
        H = M.reduce((I, W) => I + W.nodeCount, 0);
      return (
        (l.work += x * H),
        {
          ...y,
          type: c.type,
          domain: S,
          sampling: E,
          expressions: M.map(({ expression: I }) => I),
          expressionNodeCount: H,
          parameterIds: [...new Set(M.flatMap(({ parameterIds: I }) => [...I]))],
        }
      );
    });
  },
  pr = (e, t, r) => {
    const s = C(e, t);
    return (
      A(s, t, ["labels", "grid"]),
      (!Array.isArray(s.labels) || s.labels.length !== r) &&
        p(`${t}/labels`, `must contain exactly ${r} labels.`),
      { labels: s.labels.map((a, n) => k(a, `${t}/labels/${n}`, G)), grid: K(s.grid, `${t}/grid`) }
    );
  },
  ho = (e, t, r) => {
    const s = C(e, t);
    A(s, t, ["axes"], ["camera"]);
    const a = pr(s.axes, `${t}/axes`, r);
    if (!Object.hasOwn(s, "camera")) return { axes: a };
    const n = C(s.camera, `${t}/camera`);
    if (r === 2) {
      A(n, `${t}/camera`, ["center", "zoom"]);
      const d = U(n.zoom, `${t}/camera/zoom`);
      return (
        d <= 0 && p(`${t}/camera/zoom`, "must be positive."),
        { axes: a, camera: { center: ue(n.center, `${t}/camera/center`, 2), zoom: d } }
      );
    }
    A(n, `${t}/camera`, ["position", "target", "up", "fov"]);
    const o = U(n.fov, `${t}/camera/fov`);
    return (
      (o < 1 || o > 120) && p(`${t}/camera/fov`, "must be between 1 and 120."),
      {
        axes: a,
        camera: {
          position: ue(n.position, `${t}/camera/position`, 3),
          target: ue(n.target, `${t}/camera/target`, 3),
          up: ue(n.up, `${t}/camera/up`, 3),
          fov: o,
        },
      }
    );
  },
  yo = (e, t) => {
    const r = C(e, t);
    A(r, t, ["labels", "grid"], ["x_scale", "y_scale"]);
    const s = pr({ labels: r.labels, grid: r.grid }, t, 2),
      a = r.x_scale ?? "linear";
    a !== "linear" &&
      a !== "log" &&
      a !== "category" &&
      a !== "date" &&
      p(`${t}/x_scale`, "must be linear, log, category, or date.");
    const n = r.y_scale ?? "linear";
    return (
      n !== "linear" && n !== "log" && p(`${t}/y_scale`, "must be linear or log."),
      { ...s, xScale: a, yScale: n }
    );
  },
  Ft = (e, t, r, s) => {
    const a = C(e, t);
    if (Object.hasOwn(a, "dataset") || Object.hasOwn(a, "column")) {
      A(a, t, ["dataset", "column"]);
      const l = O(a.dataset, `${t}/dataset`),
        u = r.find(({ id: b }) => b === l);
      u || p(`${t}/dataset`, `references unknown dataset ${l}.`);
      const m = Ie(a.column, u.schema, `${t}/column`);
      return {
        reference: { dataset: l, column: m },
        kind: u.schema[m] === "number" ? "number" : "scalar",
        source: `dataset:${l}`,
      };
    }
    const n = Le(e, t),
      o = ur(s, n),
      d =
        o === "static_scalar_vector"
          ? "scalar"
          : o === "timeline_numeric_vector"
            ? "timeline_number"
            : void 0;
    return (
      d || p(t, "references unknown or incompatible computation output."),
      { reference: n, kind: d, source: `computation:${n.computation}` }
    );
  },
  bo = (e, t, r, s, a, n) => {
    const o = C(e, t),
      d = ["id", "type", "label", "visible", "style"];
    if (o.type === "scatter" || o.type === "line") A(o, t, [...d, "x", "y"], ["error_y"]);
    else if (o.type === "area" || o.type === "bar") A(o, t, [...d, "x", "y"]);
    else if (o.type === "band") A(o, t, [...d, "x", "lower", "upper"]);
    else if (o.type === "heatmap" || o.type === "contour") A(o, t, [...d, "x", "y", "z"]);
    else return p(`${t}/type`, "must be scatter, line, area, bar, band, heatmap, or contour.");
    const l = O(o.id, `${t}/id`);
    (r.has(l) && p(`${t}/id`, `duplicates mark id ${l}.`), r.add(l));
    const u = {
        id: l,
        label: k(o.label, `${t}/label`, G),
        visible: K(o.visible, `${t}/visible`),
        style: dr(o.style, `${t}/style`),
      },
      m = Ft(o.x, `${t}/x`, s, a);
    m.kind !== "number" && m.kind !== "scalar" && p(`${t}/x`, "must reference static scalar data.");
    const b = (c) => {
      const f = Ft(o[c], `${t}/${c}`, s, a),
        g = o.type === "bar" && c === "y" && f.kind === "timeline_number";
      return (
        f.kind !== "number" && !g && p(`${t}/${c}`, "must reference static numeric data."),
        f.source !== m.source &&
          p(`${t}/${c}`, "must share the mark's data source (the same histogram or dataset)."),
        f.kind === "timeline_number" && !n && p(`${t}/${c}`, "requires a shared timeline."),
        f.reference
      );
    };
    if (o.type === "band")
      return { ...u, type: "band", x: m.reference, lower: b("lower"), upper: b("upper") };
    if (o.type === "heatmap" || o.type === "contour")
      return { ...u, type: o.type, x: m.reference, y: b("y"), z: b("z") };
    const i = Object.hasOwn(o, "error_y") ? b("error_y") : void 0;
    return { ...u, type: o.type, x: m.reference, y: b("y"), ...(i ? { errorY: i } : {}) };
  },
  go = (e, t, r, s, a, n) => {
    if (!Array.isArray(e)) return p("/panels", "must be an array.");
    (e.length < 1 || e.length > Se) && p("/panels", `must contain 1 to ${Se} panels.`);
    const o = new Set(),
      d = { finalSamples: 0, objects: 0, points: 0, surfaces: 0, work: 0 };
    let l = 0;
    const u = e.map((m, b) => {
      const i = `/panels/${b}`,
        c = C(m, i),
        f = O(c.id, `${i}/id`);
      (o.has(f) && p(`${i}/id`, `duplicates panel id ${f}.`), o.add(f));
      const g = k(c.title, `${i}/title`, ir);
      if (c.type === "geometry_2d" || c.type === "geometry_3d") {
        A(c, i, ["id", "type", "title", "objects", "view"]);
        const y = c.type === "geometry_2d" ? 2 : 3;
        return {
          id: f,
          type: c.type,
          title: g,
          dimension: y,
          objects: fo(c.objects, `${i}/objects`, y, t, r, s, a, n, d),
          view: ho(c.view, `${i}/view`, y),
        };
      }
      if (c.type === "chart") {
        (A(c, i, ["id", "type", "title", "marks", "view"]),
          Array.isArray(c.marks) || p(`${i}/marks`, "must be an array."));
        const y = c.marks;
        ((l += y.length), l > jt && p(`${i}/marks`, `causes the document to exceed ${jt} marks.`));
        const _ = new Set(),
          w = y.map((E, x) => bo(E, `${i}/marks/${x}`, _, s, r, a)),
          S = C(c.view, `${i}/view`);
        return (
          A(S, `${i}/view`, ["axes"]),
          { id: f, type: "chart", title: g, marks: w, view: { axes: yo(S.axes, `${i}/view/axes`) } }
        );
      }
      return p(`${i}/type`, "must be geometry_2d, geometry_3d, or chart.");
    });
    return (
      d.finalSamples > Nt && p("/panels", `exceeds the ${Nt}-sample limit.`),
      d.surfaces > kt && p("/panels", `exceeds the ${kt}-surface-sample limit.`),
      d.work > Ot && p("/panels", `exceeds the ${Ot}-unit work limit.`),
      { panels: u, totals: d }
    );
  },
  le = (e, t) => me(e)({}, t),
  wo = (e) => {
    const t = C(e, "/");
    (A(t, "/", [
      "version",
      "metadata",
      "parameters",
      "constraints",
      "datasets",
      "computations",
      "timeline",
      "panels",
      "layout",
    ]),
      t.version !== 1 && p("/version", "must be the integer 1."));
    const r = no(t.metadata),
      s = so(t.parameters),
      a = { value: 0 },
      n = ao(t.constraints, s, a),
      { datasets: o, totals: d } = co(t.datasets, s, a),
      l = lo(t.timeline, s, a),
      u = uo(t.computations, s, l, a),
      { panels: m, totals: b } = go(t.panels, s, u, o, l, a),
      i = C(t.layout, "/layout");
    (A(i, "/layout", ["type", "columns"]), i.type !== "grid" && p("/layout/type", "must be grid."));
    const c = F(i.columns, "/layout/columns");
    (c < 1 || c > Se) && p("/layout/columns", `must be between 1 and ${Se}.`);
    const f = Object.fromEntries(s.map((w) => [w.id, w.default]));
    for (const w of n)
      me(w.expression)({}, f) !== !0 &&
        p(`/constraints/${w.id}/expression`, "must accept the default parameter state.");
    let g = null;
    if (l) {
      const w = le(l.duration, f),
        S = le(l.speed, f);
      ((!Number.isFinite(w) || w <= 0) &&
        p("/timeline/duration", "must be positive at the default parameter state."),
        (!Number.isFinite(S) || S <= 0) &&
          p("/timeline/speed", "must be positive at the default parameter state."),
        (g = w));
    }
    for (const w of u) {
      if (w.type !== "brownian_bridge_flat_torus") continue;
      const S = le(w.seed, f),
        E = le(w.diffusion, f),
        x = w.start.map((v) => le(v, f));
      ((!Number.isSafeInteger(S) || S < 0 || S > 4294967295) &&
        p(`/computations/${w.id}/seed`, "must evaluate to an unsigned 32-bit integer by default."),
        (!Number.isFinite(E) || E <= 0) &&
          p(`/computations/${w.id}/diffusion`, "must evaluate to a positive number by default."),
        (g === null || !Number.isFinite(E * g) || E * g <= 0) &&
          p(
            `/computations/${w.id}/diffusion`,
            "must have a finite positive product with the default timeline duration.",
          ),
        x.every(Number.isFinite) ||
          p(`/computations/${w.id}/start`, "must evaluate to finite numbers by default."));
    }
    const y = new Map(u.map((w) => [w.id, w])),
      _ = l
        ? u.reduce((w, S) => {
            if (S.type === "brownian_bridge_flat_torus")
              return w + S.pathCount * l.steps + 2 * (2 * S.windingLimit + 1);
            const E = y.get(S.source.computation);
            if (!E || E.type !== "brownian_bridge_flat_torus")
              throw new Error(`Validated histogram ${S.id} has an invalid source.`);
            return w + E.pathCount * l.steps + l.steps * S.maxBins;
          }, 0)
        : 0;
    return (
      _ > Pt && p("/computations", `exceeds the ${Pt}-unit simulation work limit.`),
      {
        version: 1,
        metadata: r,
        parameters: s,
        constraints: n,
        datasets: o,
        dataCellCount: d.cells,
        dataWorkCount: d.work,
        computations: u,
        timeline: l,
        panels: m,
        layout: { type: "grid", columns: c },
        nodeCount: a.value,
        finalSampleCount: b.finalSamples,
        simulationWorkCount: _,
        hasThreeDimensions: m.some((w) => w.type === "geometry_3d"),
      }
    );
  },
  mr = (e) => e.split(";", 1)[0].trim().toLowerCase(),
  fr = (e) => e.name.toLowerCase().endsWith(Ee) && mr(e.mimeType) === fe,
  $o = (e) => {
    let t = 0;
    const r = () => {
        for (; /\s/.test(e[t] ?? "");) t += 1;
      },
      s = () => {
        const n = t;
        for (t += 1; t < e.length;) {
          if (e[t] === "\\") {
            t += 2;
            continue;
          }
          if (e[t] === '"') return ((t += 1), JSON.parse(e.slice(n, t)));
          t += 1;
        }
        throw new Error("Math Scene attachment contained malformed JSON.");
      },
      a = () => {
        r();
        const n = e[t];
        if (n === '"') {
          s();
          return;
        }
        if (n === "[") {
          if (((t += 1), r(), e[t] === "]")) {
            t += 1;
            return;
          }
          for (;;) {
            if ((a(), r(), e[t] === "]")) {
              t += 1;
              return;
            }
            t += 1;
          }
        }
        if (n === "{") {
          t += 1;
          const d = new Set();
          if ((r(), e[t] === "}")) {
            t += 1;
            return;
          }
          for (;;) {
            r();
            const l = s();
            if (d.has(l))
              throw new Error(`Math Scene attachment contains duplicate object field ${l}.`);
            if ((d.add(l), r(), (t += 1), a(), r(), e[t] === "}")) {
              t += 1;
              return;
            }
            t += 1;
          }
        }
        const o = e
          .slice(t)
          .match(/^(?:-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null)/);
        if (!o) throw new Error("Math Scene attachment contained malformed JSON.");
        t += o[0].length;
      };
    a();
  },
  ls = async (e, t) => {
    if (!fr(t))
      throw new Error(`Math Scene artifacts must use a ${Ee} filename and ${fe} content type.`);
    if (mr(e.type) !== fe) throw new Error(`Math Scene attachment content must use ${fe}.`);
    if (e.size === 0) throw new Error("Math Scene attachment content was empty.");
    if (e.size > St) throw new Error(`Math Scene attachment exceeds the ${St}-byte limit.`);
    if (t.sizeBytes !== null && t.sizeBytes !== e.size)
      throw new Error(`Math Scene attachment size did not match its ${t.sizeBytes}-byte metadata.`);
    let r;
    try {
      r = new TextDecoder("utf-8", { fatal: !0 }).decode(await e.arrayBuffer());
    } catch (a) {
      throw new Error("Math Scene attachment must be valid UTF-8 JSON.", { cause: a });
    }
    let s;
    try {
      s = JSON.parse(r);
    } catch (a) {
      throw new Error("Math Scene attachment contained malformed JSON.", { cause: a });
    }
    return ($o(r), wo(s));
  },
  xo = new Set(["run_computation", "run_python"]),
  _o = (e) =>
    sr(e)
      ? "plotly"
      : Qt(e)
        ? "graph"
        : fr(e)
          ? "scene"
          : br(e.href ?? "") || e.mimeType.startsWith("image/")
            ? "image"
            : "file",
  Fe = (e, t) =>
    yr(e, t).map((r) => ({
      key: r.key,
      originatingCallId: r.originatingCallId,
      attachmentId: r.attachmentId,
      name: r.name,
      mimeType: r.mimeType,
      sizeBytes: r.sizeBytes,
      href: r.href,
      contentError: null,
      omittedReason: r.omittedReason,
      preview: Rn(r.frontendPreview),
      kind: _o(r),
    })),
  us = (e, t) => (t === "visualization" ? Fe(e) : []),
  ds = (e, t) => (t === "compute" ? Fe(e, xo) : []),
  ps = (e) => {
    const t = new Set((e.toolCalls ?? []).map((r) => r.toolName ?? ""));
    return Fe(e, t);
  },
  ms = (e, t) => {
    const r = new Map();
    for (const o of t) (r.set(o.key, o), o.attachmentId && r.set(o.attachmentId, o));
    const s = [],
      a = new Set(),
      n = [];
    for (const o of e) {
      const d = r.get(o);
      if (!d) {
        n.push(o);
        continue;
      }
      a.has(d.key) || (a.add(d.key), s.push(d));
    }
    return { matchedArtifacts: s, missingArtifactRefs: n };
  },
  Ao = (e) => ({
    minWidth: 0,
    overflow: "hidden",
    border: `1px solid ${z(e.palette.primary.main, 0.22)}`,
    borderRadius: e.shape.borderRadiusPx,
    backgroundColor: z(e.palette.background.default, 0.58),
    boxShadow: `0 22px 55px ${z(e.palette.common.black, 0.14)}`,
  }),
  vo = (e) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: e.spacing(1),
    padding: e.spacing(1, 1.35),
    borderBottom: `1px solid ${z(e.palette.primary.main, 0.14)}`,
    color: e.palette.primary.dark,
    background: `linear-gradient(110deg, ${z(e.palette.primary.light, 0.2)}, ${z(e.palette.secondary.light, 0.12)})`,
  }),
  Eo = (e) => ({ display: "flex", alignItems: "center", gap: e.spacing(0.75) }),
  So = (e) => ({
    maxWidth: "100%",
    overflow: "auto",
    padding: e.spacing(1.6, 1.8),
    color: e.palette.codeSource.text,
    backgroundColor: e.palette.codeSource.background,
    "& > pre": { minWidth: "max-content", margin: 0 },
  }),
  To = (e, t) => {
    const r = URL.createObjectURL(new Blob([e], { type: "text/x-python;charset=utf-8" })),
      s = document.createElement("a");
    ((s.href = r),
      (s.download = t),
      document.body.appendChild(s),
      s.click(),
      s.remove(),
      URL.revokeObjectURL(r));
  },
  Io = ({ fileName: e, source: t }) =>
    h.jsxs(wr, {
      direction: "row",
      spacing: 0.8,
      useFlexGap: !0,
      sx: { flexWrap: "wrap" },
      children: [
        h.jsx(Sr, {
          content: t,
          label: "Copy code",
          message: "Code copied",
          size: "small",
          variant: "outlined",
        }),
        h.jsx(Ce, {
          type: "button",
          size: "small",
          variant: "outlined",
          color: "primary",
          startIcon: h.jsx(Wt, { size: 16 }),
          disableRipple: !0,
          onClick: () => {
            To(t, e);
          },
          children: "Download .py",
        }),
      ],
    }),
  Co = ({ languageLabel: e, source: t }) => {
    const r = t.split(/\r\n|\r|\n/).length;
    return h.jsxs(P, {
      sx: Ao,
      children: [
        h.jsxs(P, {
          sx: vo,
          children: [
            h.jsxs(P, {
              sx: Eo,
              children: [
                h.jsx(Tr, { size: 17 }),
                h.jsx(L, { variant: "subtitle2", color: "inherit", children: e }),
              ],
            }),
            h.jsxs(L, {
              variant: "caption",
              color: "inherit",
              children: [r, " ", r === 1 ? "line" : "lines"],
            }),
          ],
        }),
        h.jsx(P, {
          sx: So,
          tabIndex: 0,
          children: h.jsx(L, { variant: "code", component: "pre", color: "inherit", children: t }),
        }),
      ],
    });
  },
  Mo = j.memo(Co),
  jo = (e) => ({
    width: "min(100vw, 54rem)",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    backgroundColor: e.palette.background.paper,
    backgroundImage: `linear-gradient(145deg, ${z(e.palette.primary.main, 0.055)}, transparent 36%)`,
  }),
  Ro = (e) => ({
    flex: "0 0 auto",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: e.spacing(1.5),
    padding: e.spacing(1.8, 2),
    borderBottom: `1px solid ${z(e.palette.text.primary, 0.08)}`,
    [e.breakpoints.down("sm")]: { flexDirection: "column", alignItems: "stretch" },
  }),
  No = { minWidth: 0, display: "flex", flexDirection: "column" },
  ko = (e) => ({
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: e.spacing(0.8),
    [e.breakpoints.down("sm")]: { justifyContent: "flex-start" },
  }),
  Oo = (e) => ({ flex: 1, minHeight: 0, overflow: "auto", padding: e.spacing(2) }),
  Po = ({ fileName: e, source: t }) => {
    const [r, s] = j.useState(!1);
    return h.jsxs(h.Fragment, {
      children: [
        h.jsx(Ce, {
          type: "button",
          size: "small",
          variant: "outlined",
          color: "primary",
          startIcon: h.jsx(Ir, { size: 16 }),
          disableRipple: !0,
          "aria-haspopup": "dialog",
          "aria-expanded": r,
          onClick: () => {
            s(!0);
          },
          children: "View code",
        }),
        h.jsxs(Cr, {
          anchor: "right",
          open: r,
          onClose: () => {
            s(!1);
          },
          slotProps: { paper: { variant: "panel", sx: jo } },
          sx: { zIndex: 9999 },
          children: [
            h.jsxs(P, {
              sx: Ro,
              children: [
                h.jsxs(P, {
                  sx: No,
                  children: [
                    h.jsx(L, { variant: "h6", color: "textPrimary", noWrap: !0, children: e }),
                    h.jsx(L, {
                      variant: "caption",
                      color: "textSecondary",
                      children: "Exact Python source used to generate this artifact",
                    }),
                  ],
                }),
                h.jsxs(P, {
                  sx: ko,
                  children: [
                    h.jsx(Io, { fileName: e, source: t }),
                    h.jsx($r, {
                      tooltip: "Close Python source",
                      "aria-label": "Close Python source",
                      disableRipple: !0,
                      onClick: () => {
                        s(!1);
                      },
                      children: h.jsx(xr, { size: 18 }),
                    }),
                  ],
                }),
              ],
            }),
            h.jsx(P, { sx: Oo, children: h.jsx(Mo, { languageLabel: "Python", source: t }) }),
          ],
        }),
      ],
    });
  },
  zo = (e) => {
    switch (e.mimeType) {
      case "image/png":
        return "png";
      case "image/jpeg":
        return "jpg";
      case "image/svg+xml":
        return "svg";
      case "application/json":
        return "json";
      case "application/pdf":
        return "pdf";
      case "text/csv":
        return "csv";
      case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
        return "xlsx";
      case pe:
        return "plotly.json";
      case de:
        return "graph.json";
      case fe:
        return "mvscene.json";
      default:
        return "dat";
    }
  },
  hr = (e) => {
    const t = zo(e),
      r =
        e.name
          .replace(/[/\\?%*:|"<>]/g, "-")
          .replace(/\s+/g, " ")
          .trim() || "python-artifact";
    return r.toLowerCase().endsWith(`.${t}`) ? r : `${r}.${t}`;
  },
  Do = (e) => {
    const t = hr(e);
    if (t.toLowerCase().endsWith(ve)) return `${t.slice(0, -ve.length)}.py`;
    if (t.toLowerCase().endsWith(_e)) return `${t.slice(0, -_e.length)}.py`;
    if (t.toLowerCase().endsWith(Ee)) return `${t.slice(0, -Ee.length)}.py`;
    const r = t.lastIndexOf(".");
    return `${r > 0 ? t.slice(0, r) : t}.py`;
  },
  Bt = (e, t) => {
    const r = document.createElement("a");
    ((r.href = t), (r.download = hr(e)), document.body.appendChild(r), r.click(), r.remove());
  },
  Ho = (e, t, r) => {
    const [s, a] = j.useState(null),
      [n, o] = j.useState(!1);
    return {
      download: j.useCallback(async () => {
        if ((a(null), t)) {
          Bt(e, t);
          return;
        }
        if (!e.attachmentId) {
          a("Artifact content is unavailable.");
          return;
        }
        o(!0);
        try {
          const l = await r(),
            u = URL.createObjectURL(l);
          (Bt(e, u),
            window.setTimeout(() => {
              URL.revokeObjectURL(u);
            }, 0));
        } catch (l) {
          a(l instanceof Error ? l.message : "Could not download artifact.");
        } finally {
          o(!1);
        }
      }, [e, t, r]),
      downloadError: s,
      isDownloading: n,
    };
  },
  Lo = (e, t) => {
    const r = Mr(e.attachmentId, t && !e.href),
      s = r.objectUrl ?? e.href,
      { download: a, downloadError: n, isDownloading: o } = Ho(e, s, r.load);
    return {
      artifact: j.useMemo(
        () => ({
          ...e,
          href: s,
          contentError:
            n ??
            (!e.href && r.error
              ? r.error instanceof Error
                ? r.error.message
                : "Could not load artifact."
              : null),
        }),
        [e, n, s, r.error],
      ),
      download: a,
      isLoading: o || r.isLoading,
    };
  },
  fs = (e) => ({ display: "flex", flexDirection: "column", gap: e.spacing(2.4) }),
  hs = { minWidth: 0 },
  ys = (e) => ({
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: e.spacing(5),
    paddingTop: e.spacing(1.2),
  }),
  bs = (e) => ({
    width: "100%",
    minWidth: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: e.spacing(1),
  }),
  gs = (e) => ({
    width: "100%",
    minHeight: "10rem",
    maxHeight: "32rem",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `1px solid ${z(e.palette.text.primary, 0.1)}`,
    borderRadius: e.shape.borderRadiusPx,
    backgroundColor: z(e.palette.background.paper, 0.82),
    boxShadow: `0 12px 28px ${z(e.palette.text.primary, 0.06)}`,
  }),
  ws = {
    display: "block",
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "32rem",
    objectFit: "contain",
  },
  $s = (e) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: e.spacing(1),
    color: e.palette.text.secondary,
  }),
  xs = (e) => ({ display: "flex", flexDirection: "column", gap: e.spacing(0.8) }),
  Fo = (e) => ({
    width: "100%",
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: e.spacing(1),
    padding: e.spacing(1.2),
    border: `1px solid ${z(e.palette.text.primary, 0.1)}`,
    borderRadius: e.shape.borderRadiusPx,
    backgroundColor: z(e.palette.background.paper, 0.74),
  }),
  Bo = (e) => ({
    width: "1.05rem",
    height: "1.05rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 auto",
    color: e.palette.primary.main,
  }),
  Uo = (e) => ({
    minWidth: 0,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: e.spacing(0.45),
  }),
  Wo = (e) => ({
    width: "100%",
    minWidth: 0,
    display: "flex",
    alignItems: "center",
    gap: e.spacing(0.65),
  }),
  Xo = (e) => ({
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    gap: e.spacing(0.8),
    alignSelf: "flex-start",
  }),
  qo = (e) =>
    e === null
      ? null
      : e < 1024
        ? `${e} B`
        : e < 1024 * 1024
          ? `${(e / 1024).toFixed(1)} KB`
          : `${(e / (1024 * 1024)).toFixed(1)} MB`,
  _s = j.memo(function ({
    artifact: t,
    caption: r,
    mathSyntax: s,
    pythonCode: a,
    supportingFileNumber: n,
  }) {
    var i, c;
    const o = qo(t.sizeBytes),
      d = t.kind === "scene",
      l = ((i = t.preview) == null ? void 0 : i.kind) === "unavailable" ? null : t.preview,
      { artifact: u, download: m, isLoading: b } = Lo(t, !1);
    return h.jsx(jr, {
      variant: "inset",
      sx: Fo,
      children: h.jsxs(P, {
        sx: Uo,
        children: [
          h.jsxs(P, {
            sx: Wo,
            children: [
              h.jsxs(P, {
                sx: Bo,
                children: [
                  t.kind === "image" && h.jsx(on, { size: 16 }),
                  t.kind !== "image" && h.jsx(Er, { size: 16 }),
                ],
              }),
              h.jsx(L, { variant: "body2", color: "textPrimary", noWrap: !0, children: t.name }),
            ],
          }),
          h.jsx(gr, { content: `Supporting file ${n}. ${r}`, mathSyntax: s, mode: "compact" }),
          h.jsx(L, {
            variant: "caption",
            color: "textSecondary",
            noWrap: !0,
            children: [t.mimeType, o].filter(Boolean).join(" · "),
          }),
          t.omittedReason &&
            h.jsx(L, { variant: "caption", color: "error", children: t.omittedReason }),
          u.contentError &&
            h.jsx(L, { variant: "caption", color: "error", children: u.contentError }),
          ((c = t.preview) == null ? void 0 : c.kind) === "unavailable" &&
            h.jsxs(L, {
              variant: "caption",
              color: "textSecondary",
              children: ["Preview unavailable: ", t.preview.reason],
            }),
          (!d || l) &&
            h.jsxs(P, {
              sx: Xo,
              children: [
                !d &&
                  h.jsx(Ce, {
                    type: "button",
                    size: "small",
                    variant: "outlined",
                    color: "primary",
                    startIcon: h.jsx(Wt, { size: 16 }),
                    disableRipple: !0,
                    disabled: b || (!u.attachmentId && !u.href),
                    onClick: () => {
                      m();
                    },
                    children: "Download",
                  }),
                !d && a && h.jsx(Po, { fileName: Do(t), source: a }),
                l && h.jsx(kn, { preview: l, label: `${t.name} data preview`, inlineAction: !0 }),
              ],
            }),
        ],
      }),
    });
  });
export {
  Mo as A,
  ze as G,
  on as I,
  Ee as M,
  as as P,
  _s as S,
  Po as V,
  hs as a,
  ys as b,
  Io as c,
  ds as d,
  ps as e,
  Rn as f,
  us as g,
  me as h,
  xs as i,
  Xo as j,
  Do as k,
  Lo as l,
  ms as m,
  hr as n,
  gs as o,
  os as p,
  ws as q,
  is as r,
  cs as s,
  ss as t,
  Ho as u,
  fs as v,
  ls as w,
  $s as x,
  bs as y,
};
