import { m as yr } from "./assistantStructuredResponseLazy-CCAemx3W.jsx";
import { b as br, a as _Component0 } from "./Markdown-Dh8LhaRc.jsx";
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
  S as _Component7,
  V as $r,
  X as _Component8,
} from "./index-BM3ZINIl.jsx";
import {
  d as _r,
  T as Ar,
  a as _Component4,
  F as Er,
} from "./MarkdownHighlights-C-ZhT8z1.jsx";
import { C as Sr } from "./CopyButton-BcOsqrNJ.js";
import { D as Wt } from "./katex.min-ADdKj7O-.js";
import { F as Tr } from "./file-code-corner-DV79SyC0.js";
import { C as Ir } from "./code-xml-DmfSENe3.js";
import { D as Cr } from "./Drawer-ByPJ5WV0.jsx";
import { a as Mr } from "./useAttachmentContent-15uaQfvd.js";
import { C as _Component10 } from "./Card-Bf0WPnf4.jsx";
const Xt = j.createContext();
function Rr(e) {
  return te("MuiTable", e);
}
re("MuiTable", ["root", "stickyHeader"]);
const Nr = (e) => {
  const { classes: t, stickyHeader: r } = e;
  return se(
    {
      root: ["root", r && "stickyHeader"],
    },
    Rr,
    t,
  );
};
const _Component = ae("table", {
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
      {
        props: ({ ownerState: t }) => t.stickyHeader,
        style: {
          borderCollapse: "separate",
        },
      },
    ],
  })),
);
const Xe = "table";
const Or = j.forwardRef(function (t, r) {
  const s = ne({
    props: t,
    name: "MuiTable",
  });
  const {
    className: a,
    component: n = Xe,
    padding: o = "normal",
    size: d = "medium",
    stickyHeader: l = false,
    ...u
  } = s;
  const m = {
    ...s,
    component: n,
    padding: o,
    size: d,
    stickyHeader: l,
  };
  const b = Nr(m);
  const i = j.useMemo(
    () => ({
      padding: o,
      size: d,
      stickyHeader: l,
    }),
    [o, d, l],
  );
  return (
    <Xt.Provider value={i}>
      <_Component
        as={n}
        role={n === Xe ? null : "table"}
        ref={r}
        className={oe(b.root, a)}
        ownerState={m}
        {...u}
      />
    </Xt.Provider>
  );
});
const Me = j.createContext();
function Pr(e) {
  return te("MuiTableBody", e);
}
re("MuiTableBody", ["root"]);
const zr = (e) => {
  const { classes: t } = e;
  return se(
    {
      root: ["root"],
    },
    Pr,
    t,
  );
};
const Dr = ae("tbody", {
  name: "MuiTableBody",
  slot: "Root",
})({
  display: "table-row-group",
});
const Hr = {
  variant: "body",
};
const qe = "tbody";
const Lr = j.forwardRef(function (t, r) {
  const s = ne({
    props: t,
    name: "MuiTableBody",
  });
  const { className: a, component: n = qe, ...o } = s;
  const d = {
    ...s,
    component: n,
  };
  const l = zr(d);
  return (
    <Me.Provider value={Hr}>
      <Dr
        className={oe(l.root, a)}
        as={n}
        ref={r}
        role={n === qe ? null : "rowgroup"}
        ownerState={d}
        {...o}
      />
    </Me.Provider>
  );
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
]);
const Ur = (e) => {
  const {
    classes: t,
    variant: r,
    align: s,
    padding: a,
    size: n,
    stickyHeader: o,
  } = e;
  const d = {
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
};
const Wr = ae("td", {
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
        props: {
          variant: "head",
        },
        style: {
          color: (e.vars || e).palette.text.primary,
          lineHeight: e.typography.pxToRem(24),
          fontWeight: e.typography.fontWeightMedium,
        },
      },
      {
        props: {
          variant: "body",
        },
        style: {
          color: (e.vars || e).palette.text.primary,
        },
      },
      {
        props: {
          variant: "footer",
        },
        style: {
          color: (e.vars || e).palette.text.secondary,
          lineHeight: e.typography.pxToRem(21),
          fontSize: e.typography.pxToRem(12),
        },
      },
      {
        props: {
          size: "small",
        },
        style: {
          padding: "6px 16px",
          [`&.${Br.paddingCheckbox}`]: {
            width: 24,
            padding: "0 12px 0 16px",
            "& > *": {
              padding: 0,
            },
          },
        },
      },
      {
        props: {
          padding: "checkbox",
        },
        style: {
          width: 48,
          padding: "0 0 0 4px",
        },
      },
      {
        props: {
          padding: "none",
        },
        style: {
          padding: 0,
        },
      },
      {
        props: {
          align: "left",
        },
        style: {
          textAlign: "left",
        },
      },
      {
        props: {
          align: "center",
        },
        style: {
          textAlign: "center",
        },
      },
      {
        props: {
          align: "right",
        },
        style: {
          textAlign: "right",
          flexDirection: "row-reverse",
        },
      },
      {
        props: {
          align: "justify",
        },
        style: {
          textAlign: "justify",
        },
      },
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
);
const Ge = j.forwardRef(function (t, r) {
  const s = ne({
    props: t,
    name: "MuiTableCell",
  });
  const {
    align: a = "inherit",
    className: n,
    component: o,
    padding: d,
    scope: l,
    size: u,
    sortDirection: m,
    variant: b,
    ...i
  } = s;
  const c = j.useContext(Xt);
  const f = j.useContext(Me);
  const g = f && f.variant === "head";
  let y;
  if (o) {
    y = o;
  } else {
    y = g ? "th" : "td";
  }
  let _ = l;
  if (y === "td") {
    _ = undefined;
  } else if (!_ && g) {
    _ = "col";
  }
  const w = b || (f && f.variant);
  const S = {
    ...s,
    align: a,
    component: y,
    padding: d || (c && c.padding ? c.padding : "normal"),
    size: u || (c && c.size ? c.size : "medium"),
    sortDirection: m,
    stickyHeader: w === "head" && c && c.stickyHeader,
    variant: w,
  };
  const E = Ur(S);
  let x = null;
  if (m) {
    x = m === "asc" ? "ascending" : "descending";
  }
  return (
    <Wr
      as={y}
      ref={r}
      className={oe(E.root, n)}
      aria-sort={x}
      scope={_}
      ownerState={S}
      {...i}
    />
  );
});
function Xr(e) {
  return te("MuiTableContainer", e);
}
re("MuiTableContainer", ["root"]);
const qr = (e) => {
  const { classes: t } = e;
  return se(
    {
      root: ["root"],
    },
    Xr,
    t,
  );
};
const Gr = ae("div", {
  name: "MuiTableContainer",
  slot: "Root",
})({
  width: "100%",
  overflowX: "auto",
});
const Vr = j.forwardRef(function (t, r) {
  const s = ne({
    props: t,
    name: "MuiTableContainer",
  });
  const { className: a, component: n = "div", ...o } = s;
  const d = {
    ...s,
    component: n,
  };
  const l = qr(d);
  return <Gr ref={r} as={n} className={oe(l.root, a)} ownerState={d} {...o} />;
});
function Yr(e) {
  return te("MuiTableHead", e);
}
re("MuiTableHead", ["root"]);
const Kr = (e) => {
  const { classes: t } = e;
  return se(
    {
      root: ["root"],
    },
    Yr,
    t,
  );
};
const Jr = ae("thead", {
  name: "MuiTableHead",
  slot: "Root",
})({
  display: "table-header-group",
});
const Zr = {
  variant: "head",
};
const Ve = "thead";
const Qr = j.forwardRef(function (t, r) {
  const s = ne({
    props: t,
    name: "MuiTableHead",
  });
  const { className: a, component: n = Ve, ...o } = s;
  const d = {
    ...s,
    component: n,
  };
  const l = Kr(d);
  return (
    <Me.Provider value={Zr}>
      <Jr
        as={n}
        className={oe(l.root, a)}
        ref={r}
        role={n === Ve ? null : "rowgroup"}
        ownerState={d}
        {...o}
      />
    </Me.Provider>
  );
});
function en(e) {
  return te("MuiTableRow", e);
}
const Ye = re("MuiTableRow", ["root", "selected", "hover", "head", "footer"]);
const tn = (e) => {
  const { classes: t, selected: r, hover: s, head: a, footer: n } = e;
  return se(
    {
      root: ["root", r && "selected", s && "hover", a && "head", n && "footer"],
    },
    en,
    t,
  );
};
const _Component2 = ae("tr", {
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
    [`&.${Ye.hover}:hover`]: {
      backgroundColor: (e.vars || e).palette.action.hover,
    },
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
);
const Ke = "tr";
const Je = j.forwardRef(function (t, r) {
  const s = ne({
    props: t,
    name: "MuiTableRow",
  });
  const {
    className: a,
    component: n = Ke,
    hover: o = false,
    selected: d = false,
    ...l
  } = s;
  const u = j.useContext(Me);
  const m = {
    ...s,
    component: n,
    hover: o,
    selected: d,
    head: u && u.variant === "head",
    footer: u && u.variant === "footer",
  };
  const b = tn(m);
  return (
    <_Component2
      as={n}
      ref={r}
      className={oe(b.root, a)}
      role={n === Ke ? null : "row"}
      ownerState={m}
      {...l}
    />
  );
});
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nn = [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  [
    "circle",
    {
      cx: "9",
      cy: "9",
      r: "2",
      key: "af1f0g",
    },
  ],
  [
    "path",
    {
      d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
      key: "1xmnt7",
    },
  ],
];
const _Component9 = Ut("image", nn);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const sn = [
  [
    "path",
    {
      d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",
      key: "gugj83",
    },
  ],
];
const _Component3 = Ut("table-2", sn);
const _e = ".graph.json";
const de = "application/vnd.mathvision.graph.v1+json";
const Re = 1;
const Ze = 2097152;
const Qe = 5000;
const et = 20000;
const Ae = 32;
const tt = 128;
const rt = 64;
const nt = 2048;
const ot = 3;
const ze = ["preset", "circle", "concentric", "breadthfirst", "grid", "cose"];
const qt = new Set([
  "version",
  "directed",
  "multigraph",
  "graph",
  "nodes",
  "edges",
]);
const cn = qt;
const ln = new Set([
  "title",
  "description",
  "layout",
  "node_count",
  "edge_count",
]);
const un = new Set(["layout", "node_count", "edge_count"]);
const dn = new Set(ze);
const st = new Set(["id", "label", "group", "x", "y"]);
const pn = new Set(["id", "source", "target"]);
const mn = new Set([
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
]);
const fn = [
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
];
const hn =
  /<\s*\/?\s*[a-z][a-z0-9:-]*(?:(?:\s+|\/)[^<>]*)?>|(?:javascript|vbscript)\s*:|(?:https?|ftp|file|blob|mailto|tel):(?=\S)|\bdata:(?=[^\s,]*,)|\/\/[a-z0-9.-]+\.[a-z]{2,}\b|\bwww\.[a-z0-9.-]+\.[a-z]{2,}\b/i;
const he = (e) =>
  e !== null && typeof e == "object" && !Array.isArray(e) ? e : null;
const Gt = (e) => e.split(";", 1)[0].trim().toLowerCase();
const Vt = (e, t) => Object.keys(e).filter((r) => !t.has(r));
const Yt = (e, t) => [...t].filter((r) => !Object.hasOwn(e, r));
const at = (e, t) => {
  if (!Number.isInteger(e) || e < 0) {
    throw new Error(`Interactive graph ${t} must be a non-negative integer.`);
  }
  return e;
};
const Kt = (e, t) => {
  if (hn.test(e)) {
    throw new Error(
      `Interactive graph ${t} contains prohibited HTML, executable, or external-resource text.`,
    );
  }
};
const ye = (e, t) => {
  if (typeof e != "string") {
    throw new Error(`Interactive graph ${t} must be a string.`);
  }
  if (e.length > nt) {
    throw new Error(
      `Interactive graph ${t} exceeds the ${nt}-character string limit.`,
    );
  }
  Kt(e, t);
  return e;
};
const xe = (e, t) => {
  if (typeof e != "string") {
    throw new Error(
      `Interactive graph ${t} must already be a canonical string ID.`,
    );
  }
  if (!e.trim()) {
    throw new Error(`Interactive graph ${t} must not be blank.`);
  }
  if (e.length > tt) {
    throw new Error(
      `Interactive graph ${t} exceeds the ${tt}-character ID limit.`,
    );
  }
  Kt(e, t);
  return e;
};
const Oe = (e, t) => {
  if (typeof e != "number" || !Number.isFinite(e)) {
    throw new Error(`Interactive graph ${t} must be a finite number.`);
  }
  return e;
};
const Jt = (e, t) => {
  if (e === null || typeof e == "boolean") {
    return e;
  }
  if (typeof e == "string") {
    return ye(e, t);
  }
  if (typeof e == "number") {
    return Oe(e, t);
  }
  throw new Error(
    `Interactive graph ${t} must be null, a boolean, a finite number, or a string.`,
  );
};
const Zt = (e, t, r) => {
  if (!e || e.length > rt) {
    throw new Error(
      `Interactive graph attribute key ${t} must contain between 1 and ${rt} characters.`,
    );
  }
  if (r) {
    return;
  }
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
  ) {
    throw new Error(
      `Interactive graph attribute ${t} uses a reserved renderer or resource field.`,
    );
  }
  const o = e.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (a === "on" || fn.some((d) => o.startsWith(`on${d}`))) {
    throw new Error(
      `Interactive graph attribute ${t} uses a prohibited event-handler field.`,
    );
  }
};
const yn = (e) => {
  const t = [
    {
      depth: 0,
      value: e,
    },
  ];
  while (t.length > 0) {
    const r = t.pop();
    if (r.depth > ot) {
      throw new Error(
        `Interactive graph exceeds the ${ot}-level nesting limit.`,
      );
    }
    if (Array.isArray(r.value)) {
      r.value.forEach((a) =>
        t.push({
          depth: r.depth + 1,
          value: a,
        }),
      );
      continue;
    }
    const s = he(r.value);
    if (s) {
      Object.values(s).forEach((a) =>
        t.push({
          depth: r.depth + 1,
          value: a,
        }),
      );
    }
  }
};
const bn = (e, t, r) => {
  const s = Yt(e, un);
  if (s.length > 0) {
    throw new Error(
      `Interactive graph metadata is missing required fields: ${s.join(", ")}.`,
    );
  }
  const a = Vt(e, ln);
  if (a.length > 0) {
    throw new Error(
      `Interactive graph metadata contains unsupported fields: ${a.join(", ")}.`,
    );
  }
  const n = e.layout;
  if (typeof n != "string" || !dn.has(n)) {
    throw new Error(
      `Interactive graph layout must be one of ${ze.join(", ")}.`,
    );
  }
  const o = at(e.node_count, "graph.node_count");
  const d = at(e.edge_count, "graph.edge_count");
  if (o !== t) {
    throw new Error(
      `Interactive graph node count does not match its nodes: declared=${o}, actual=${t}.`,
    );
  }
  if (d !== r) {
    throw new Error(
      `Interactive graph edge count does not match its edges: declared=${d}, actual=${r}.`,
    );
  }
  return {
    layout: n,
    nodeCount: o,
    edgeCount: d,
    ...(Object.hasOwn(e, "title")
      ? {
          title: ye(e.title, "graph.title"),
        }
      : {}),
    ...(Object.hasOwn(e, "description")
      ? {
          description: ye(e.description, "graph.description"),
        }
      : {}),
  };
};
const gn = (e, t) => {
  const r = new Set();
  const s = e.map((a, n) => {
    const o = `nodes[${n}]`;
    const d = he(a);
    if (!d) {
      throw new Error(`Interactive graph ${o} must be an object.`);
    }
    if (!Object.hasOwn(d, "id")) {
      throw new Error(`Interactive graph ${o} must include id.`);
    }
    const l = xe(d.id, `${o}.id`);
    if (r.has(l)) {
      throw new Error(`Interactive graph contains duplicate node ID ${l}.`);
    }
    r.add(l);
    if (Object.keys(d).filter((_) => !st.has(_)).length > Ae) {
      throw new Error(
        `Interactive graph ${o} exceeds the ${Ae}-additional-attribute limit.`,
      );
    }
    const m = Object.hasOwn(d, "x");
    const b = Object.hasOwn(d, "y");
    if (m !== b) {
      throw new Error(`Interactive graph ${o} must provide x and y together.`);
    }
    if (t === "preset" && !m) {
      throw new Error(
        `Interactive graph ${o} must provide finite x and y for preset layout.`,
      );
    }
    const i = {};
    let c;
    let f;
    let g;
    let y;
    for (const [_, w] of Object.entries(d)) {
      if (_ !== "id") {
        Zt(_, `${o}.${_}`, st.has(_));
        if (_ === "label") {
          c = ye(w, `${o}.label`);
        } else if (_ === "group") {
          f = ye(w, `${o}.group`);
        } else if (_ === "x") {
          g = Oe(w, `${o}.x`);
        } else if (_ === "y") {
          y = Oe(w, `${o}.y`);
        } else {
          i[_] = Jt(w, `${o}.${_}`);
        }
      }
    }
    return {
      id: l,
      attributes: i,
      ...(c !== undefined
        ? {
            label: c,
          }
        : {}),
      ...(f !== undefined
        ? {
            group: f,
          }
        : {}),
      ...(g !== undefined && y !== undefined
        ? {
            position: {
              x: g,
              y,
            },
          }
        : {}),
    };
  });
  return {
    nodeIds: r,
    nodes: s,
  };
};
const wn = (e, t, r, s) => {
  const a = new Set(t);
  const n = new Set();
  return e.map((o, d) => {
    const l = `edges[${d}]`;
    const u = he(o);
    if (!u) {
      throw new Error(`Interactive graph ${l} must be an object.`);
    }
    const m = ["id", "source", "target"].filter((y) => !Object.hasOwn(u, y));
    if (m.length > 0) {
      throw new Error(
        `Interactive graph ${l} is missing canonical fields: ${m.join(", ")}.`,
      );
    }
    const b = xe(u.id, `${l}.id`);
    const i = xe(u.source, `${l}.source`);
    const c = xe(u.target, `${l}.target`);
    if (a.has(b)) {
      throw new Error(
        `Interactive graph contains duplicate global element ID ${b}.`,
      );
    }
    a.add(b);
    if (!t.has(i)) {
      throw new Error(
        `Interactive graph ${l}.source references unknown node ID ${i}.`,
      );
    }
    if (!t.has(c)) {
      throw new Error(
        `Interactive graph ${l}.target references unknown node ID ${c}.`,
      );
    }
    if (!s) {
      const y =
        r || i <= c
          ? `${i.length}:${i}${c.length}:${c}`
          : `${c.length}:${c}${i.length}:${i}`;
      if (n.has(y)) {
        throw new Error(
          `Interactive graph non-multigraph contains duplicate edge endpoints ${i}, ${c}.`,
        );
      }
      n.add(y);
      if (Object.hasOwn(u, "key")) {
        throw new Error(
          `Interactive graph ${l}.key is supported only for multigraphs.`,
        );
      }
    }
    const f = Object.keys(u).filter((y) => !pn.has(y));
    if (f.length > Ae) {
      throw new Error(
        `Interactive graph ${l} exceeds the ${Ae}-additional-attribute limit.`,
      );
    }
    const g = {};
    for (const y of f) {
      Zt(y, `${l}.${y}`, false);
      g[y] = Jt(u[y], `${l}.${y}`);
    }
    return {
      id: b,
      source: i,
      target: c,
      attributes: g,
    };
  });
};
const Qt = (e) => e.name.toLowerCase().endsWith(_e) && Gt(e.mimeType) === de;
const os = async (e, t) => {
  if (!Qt(t)) {
    throw new Error(
      `Interactive graph artifacts must use a ${_e} filename and ${de} content type.`,
    );
  }
  if (Gt(e.type) !== de) {
    throw new Error(`Interactive graph attachment content must use ${de}.`);
  }
  if (e.size === 0) {
    throw new Error("Interactive graph attachment content was empty.");
  }
  if (e.size > Ze) {
    throw new Error(
      `Interactive graph attachment exceeds the ${Ze}-byte limit.`,
    );
  }
  if (t.sizeBytes !== null && t.sizeBytes !== e.size) {
    throw new Error(
      `Interactive graph attachment size did not match its ${t.sizeBytes}-byte metadata.`,
    );
  }
  let r;
  try {
    r = new TextDecoder("utf-8", {
      fatal: true,
    }).decode(await e.arrayBuffer());
  } catch (i) {
    throw new Error("Interactive graph attachment must be valid UTF-8 JSON.", {
      cause: i,
    });
  }
  let s;
  try {
    s = JSON.parse(r);
  } catch (i) {
    throw new Error("Interactive graph attachment contained malformed JSON.", {
      cause: i,
    });
  }
  const a = he(s);
  if (!a) {
    throw new Error(
      "Interactive graph attachment must contain a top-level JSON object.",
    );
  }
  yn(a);
  const n = Yt(a, cn);
  if (n.length > 0) {
    throw new Error(
      `Interactive graph attachment is missing required fields: ${n.join(", ")}.`,
    );
  }
  const o = Vt(a, qt);
  if (o.length > 0) {
    throw new Error(
      `Interactive graph attachment contains unsupported fields: ${o.join(", ")}.`,
    );
  }
  if (a.version !== Re) {
    throw new Error(`Interactive graph version must be the integer ${Re}.`);
  }
  if (typeof a.directed != "boolean") {
    throw new Error("Interactive graph directed must be a boolean.");
  }
  if (typeof a.multigraph != "boolean") {
    throw new Error("Interactive graph multigraph must be a boolean.");
  }
  const d = he(a.graph);
  if (!d) {
    throw new Error("Interactive graph graph metadata must be an object.");
  }
  if (!Array.isArray(a.nodes)) {
    throw new Error("Interactive graph nodes must be an array.");
  }
  if (!Array.isArray(a.edges)) {
    throw new Error("Interactive graph edges must be an array.");
  }
  if (a.nodes.length > Qe) {
    throw new Error(`Interactive graph exceeds the ${Qe}-node limit.`);
  }
  if (a.edges.length > et) {
    throw new Error(`Interactive graph exceeds the ${et}-edge limit.`);
  }
  const l = bn(d, a.nodes.length, a.edges.length);
  const { nodeIds: u, nodes: m } = gn(a.nodes, l.layout);
  const b = wn(a.edges, u, a.directed, a.multigraph);
  return {
    version: Re,
    directed: a.directed,
    multigraph: a.multigraph,
    metadata: l,
    nodes: m,
    edges: b,
  };
};
const ss = (e) => [
  ...e.nodes.map((t) => ({
    group: "nodes",
    data: {
      id: t.id,
      ...(t.label !== undefined
        ? {
            label: t.label,
          }
        : {}),
      ...(t.group !== undefined
        ? {
            group: t.group,
          }
        : {}),
      ...t.attributes,
    },
    ...(t.position
      ? {
          position: t.position,
        }
      : {}),
  })),
  ...e.edges.map((t) => ({
    group: "edges",
    data: {
      id: t.id,
      source: t.source,
      target: t.target,
      ...t.attributes,
    },
  })),
];
const $n = (e, t) =>
  t
    ? {
        display: "contents",
      }
    : {
        display: "flex",
        flexDirection: "column",
        gap: e.spacing(1),
        marginTop: e.spacing(0.9),
        minWidth: 0,
      };
const xn = {
  width: "100%",
  flexBasis: "100%",
};
const _n = (e) => ({
  maxWidth: "100%",
  maxHeight: "24rem",
  overflow: "auto",
  border: `1px solid ${z(e.palette.text.primary, 0.1)}`,
  borderRadius: e.shape.borderRadiusPx,
});
const An = {
  minWidth: "max-content",
};
const vn = (e) => ({
  minHeight: "2.4rem",
  borderBottom: `1px solid ${z(e.palette.text.primary, 0.1)}`,
  "& .MuiTab-root": {
    minHeight: "2.4rem",
    paddingBlock: e.spacing(0.6),
  },
});
const En = (e, t, r) => (
  <L variant="caption" color="textSecondary">
    Showing {e} preview {e === 1 ? "row" : "rows"} · {t}{" "}
    {t === 1 ? "column" : "columns"}
    {r && " · More data exists"}
  </L>
);
const er = (e) =>
  e !== null && typeof e == "object" && !Array.isArray(e) ? e : null;
const be = (e) => (typeof e == "string" ? e : null);
const Sn = (e) => (typeof e == "number" && Number.isFinite(e) ? e : null);
const ee = (e) => (typeof e == "boolean" ? e : null);
const X = (e) =>
  typeof e == "number" && Number.isInteger(e) && e >= 0 ? e : null;
const Tn = (e) =>
  !Array.isArray(e) || e.some((t) => typeof t != "string") ? null : e;
const In = (e) => {
  if (!Array.isArray(e)) {
    return null;
  }
  const t = [];
  for (const r of e) {
    if (!Array.isArray(r) || r.some((s) => typeof s != "string")) {
      return null;
    }
    t.push(r);
  }
  return t;
};
const tr = (e) => {
  const t = Tn(e.columns);
  const r = In(e.rows);
  const s = ee(e.has_header);
  const a = ee(e.truncated);
  if (!t || !r || s === null || a === null) {
    return null;
  } else {
    return {
      kind: "table",
      columns: t,
      rows: r,
      hasHeader: s,
      truncated: a,
    };
  }
};
const Cn = (e) => {
  const t = e.sheets;
  const r = Sn(e.sheet_count);
  const s = ee(e.truncated);
  if (!Array.isArray(t) || r === null || s === null) {
    return null;
  }
  const a = [];
  for (const n of t) {
    const o = er(n);
    const d = be(o == null ? undefined : o.name);
    const l = o
      ? tr({
          ...o,
        })
      : null;
    if (!d || !l) {
      return null;
    }
    a.push({
      name: d,
      columns: l.columns,
      rows: l.rows,
      hasHeader: l.hasHeader,
      truncated: l.truncated,
    });
  }
  return {
    kind: "workbook",
    sheets: a,
    sheetCount: r,
    truncated: s,
  };
};
const Mn = (e) => {
  const t = X(e.node_count);
  const r = X(e.edge_count);
  const s = ee(e.directed);
  const a = ee(e.multigraph);
  const n = be(e.layout);
  if (
    t === null ||
    r === null ||
    s === null ||
    a === null ||
    !n ||
    !ze.includes(n)
  ) {
    return null;
  } else {
    return {
      kind: "graph",
      nodeCount: t,
      edgeCount: r,
      directed: s,
      multigraph: a,
      layout: n,
    };
  }
};
const jn = (e) => {
  const t = X(e.version);
  const r = be(e.title);
  const s = X(e.parameter_count);
  const a = X(e.dataset_count);
  const n = X(e.computation_count);
  const o = X(e.panel_count);
  const d = X(e.geometry_2d_count);
  const l = X(e.geometry_3d_count);
  const u = X(e.chart_count);
  const m = ee(e.has_timeline);
  if (
    t !== 1 ||
    r === null ||
    s === null ||
    a === null ||
    n === null ||
    o === null ||
    d === null ||
    l === null ||
    u === null ||
    m === null
  ) {
    return null;
  } else {
    return {
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
  }
};
const Rn = (e) => {
  const t = er(e);
  const r = be(t == null ? undefined : t.kind);
  if (!t || !r) {
    return null;
  }
  if (r === "table") {
    return tr(t);
  }
  if (r === "workbook") {
    return Cn(t);
  }
  if (r === "graph") {
    return Mn(t);
  }
  if (r === "scene") {
    return jn(t);
  }
  if (r === "unavailable") {
    const s = be(t.reason);
    if (s) {
      return {
        kind: r,
        reason: s,
      };
    } else {
      return null;
    }
  }
  return null;
};
const _Component5 = ({ preview: e, label: t }) => (
  <h.Fragment>
    {En(e.rows.length, e.columns.length, e.truncated)}
    <Vr sx={_n}>
      <Or size="small" stickyHeader={true} aria-label={t} sx={An}>
        <caption>{t}</caption>
        <Qr>
          <Je>
            {e.columns.map((r, s) => (
              <Ge scope="col" key={`${r}-${s}`}>
                {r}
              </Ge>
            ))}
          </Je>
        </Qr>
        <Lr>
          {e.rows.map((r, s) => (
            <Je key={`preview-row-${s}`}>
              {e.columns.map((a, n) => (
                <Ge key={`preview-cell-${s}-${n}`}>{r[n] ?? ""}</Ge>
              ))}
            </Je>
          ))}
        </Lr>
      </Or>
    </Vr>
  </h.Fragment>
);
const _Component6 = ({ children: e, label: t, inlineAction: r = false }) => {
  const [s, a] = j.useState(false);
  const n = j.useId();
  return (
    <P sx={(o) => $n(o, r)}>
      <P>
        <Ce
          type="button"
          size="small"
          variant="outlined"
          color="primary"
          startIcon={<_Component3 size={16} />}
          disableRipple={true}
          aria-expanded={s}
          aria-controls={n}
          onClick={() => a((o) => !o)}
        >
          Preview
        </Ce>
      </P>
      <_r in={s} timeout="auto" id={n} sx={r ? xn : undefined}>
        <P component="section" aria-label={t}>
          {e}
        </P>
      </_r>
    </P>
  );
};
const Nn = ({ preview: e, inlineAction: t = false }) => {
  const [r, s] = j.useState(0);
  const a = Math.min(r, Math.max(e.sheets.length - 1, 0));
  const n = e.sheets[a];
  return (
    <_Component6 label="Workbook data preview" inlineAction={t}>
      <L variant="caption" color="textSecondary">
        {e.sheetCount} {e.sheetCount === 1 ? "sheet" : "sheets"}
        {e.truncated && " · Preview is bounded"}
      </L>
      {e.sheets.length > 0 && (
        <Ar
          value={a}
          onChange={(o, d) => {
            s(d);
          }}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Workbook sheets"
          sx={vn}
        >
          {e.sheets.map((o, d) => (
            <_Component4 label={o.name} value={d} key={`${o.name}-${d}`} />
          ))}
        </Ar>
      )}
      {n && <_Component5 preview={n} label={`${n.name} data preview`} />}
      {e.sheets.length === 0 && (
        <L variant="body2" color="textSecondary">
          This workbook does not contain any previewable sheets.
        </L>
      )}
    </_Component6>
  );
};
const _Component1 = ({ preview: e, label: t, inlineAction: r = false }) =>
  e.kind === "table" ? (
    <_Component6 label={t} inlineAction={r}>
      <_Component5 preview={e} label={t} />
    </_Component6>
  ) : e.kind === "workbook" ? (
    <Nn preview={e} inlineAction={r} />
  ) : null;
const ve = ".plotly.json";
const pe = "application/vnd.mathvision.plotly.v1+json";
const it = "3.7.0";
const ct = 2097152;
const lt = 200;
const ut = 500;
const dt = 64;
const pt = 250000;
const On = new Set(["data", "layout", "frames"]);
const Pn = new Set([
  "choropleth",
  "choroplethmap",
  "choroplethmapbox",
  "densitymap",
  "densitymapbox",
  "scattergeo",
  "scattermap",
  "scattermapbox",
]);
const zn = new Set(["geo", "map", "mapbox"]);
const Dn = new Set([
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
]);
const Hn = /^data:image\/(?:jpeg|png|webp);base64,([A-Za-z0-9+/]+={0,2})$/i;
const Ln =
  /<\s*(?:script|iframe|object|embed|link|meta|style|svg|math|img)\b|\b(?:href|src|srcdoc|style|on[a-z]+)\s*=|(?:javascript|vbscript)\s*:|data\s*:\s*text\/html/i;
const as = {
  responsive: false,
  displaylogo: false,
  editable: false,
  typesetMath: false,
  showLink: false,
  sendData: false,
  showSendToCloud: false,
  showEditInChartStudio: false,
  plotlyServerURL: "",
  scrollZoom: true,
  showAxisDragHandles: true,
  doubleClick: false,
  displayModeBar: true,
  modeBarButtonsToRemove: [
    "sendDataToCloud",
    "editInChartStudio",
    "resetCameraLastSave3d",
    "zoomIn2d",
    "zoomOut2d",
    "autoScale2d",
  ],
};
const D = (e) =>
  e !== null && typeof e == "object" && !Array.isArray(e) ? e : null;
const or = (e) => e.split(";", 1)[0].trim().toLowerCase();
const sr = (e) => e.name.toLowerCase().endsWith(ve) && or(e.mimeType) === pe;
const is = (e) => {
  if (e !== it) {
    throw new Error(
      `Interactive Plotly viewer requires Plotly.js ${it}, but loaded ${e ?? "an unknown version"}.`,
    );
  }
};
const cs = async (e, t) => {
  if (!sr(t)) {
    throw new Error(
      `Interactive Plotly artifacts must use a ${ve} filename and ${pe} content type.`,
    );
  }
  if (or(e.type) !== pe) {
    throw new Error(`Interactive Plotly attachment content must use ${pe}.`);
  }
  if (e.size === 0) {
    throw new Error("Interactive Plotly attachment content was empty.");
  }
  if (e.size > ct) {
    throw new Error(
      `Interactive Plotly attachment exceeds the ${ct}-byte limit.`,
    );
  }
  if (t.sizeBytes !== null && t.sizeBytes !== e.size) {
    throw new Error(
      `Interactive Plotly attachment size did not match its ${t.sizeBytes}-byte metadata.`,
    );
  }
  let r;
  try {
    r = new TextDecoder("utf-8", {
      fatal: true,
    }).decode(await e.arrayBuffer());
  } catch (b) {
    throw new Error("Interactive Plotly attachment must be valid UTF-8 JSON.", {
      cause: b,
    });
  }
  let s;
  try {
    s = JSON.parse(r);
  } catch (b) {
    throw new Error("Interactive Plotly attachment contained malformed JSON.", {
      cause: b,
    });
  }
  const a = D(s);
  if (!a) {
    throw new Error(
      "Interactive Plotly attachment must contain a top-level JSON object.",
    );
  }
  const n = Object.keys(a).filter((b) => !On.has(b));
  if (n.length > 0) {
    throw new Error(
      `Interactive Plotly attachment contains unsupported top-level fields: ${n.join(", ")}.`,
    );
  }
  if (!Object.hasOwn(a, "data") || !Object.hasOwn(a, "layout")) {
    throw new Error(
      "Interactive Plotly attachment must include data and layout fields.",
    );
  }
  if (!Array.isArray(a.data)) {
    throw new Error("Interactive Plotly data must be an array of traces.");
  }
  const o = a.data.map((b, i) => {
    const c = D(b);
    if (!c) {
      throw new Error(`Interactive Plotly data[${i}] must be an object.`);
    }
    return c;
  });
  const d = D(a.layout);
  if (!d) {
    throw new Error("Interactive Plotly layout must be an object.");
  }
  const l = Object.hasOwn(a, "frames") ? a.frames : [];
  if (!Array.isArray(l)) {
    throw new Error(
      "Interactive Plotly frames must be an array when provided.",
    );
  }
  const u = l.map((b, i) => {
    const c = D(b);
    if (!c) {
      throw new Error(`Interactive Plotly frames[${i}] must be an object.`);
    }
    return c;
  });
  if (o.length > lt) {
    throw new Error(
      `Interactive Plotly attachment exceeds the ${lt}-trace limit.`,
    );
  }
  if (u.length > ut) {
    throw new Error(
      `Interactive Plotly attachment exceeds the ${ut}-frame limit.`,
    );
  }
  const m = Fn(a);
  mt(o, "data");
  ft(d, "layout");
  u.forEach((b, i) => {
    const c = b.data;
    if (c !== undefined) {
      if (!Array.isArray(c)) {
        throw new Error(
          `Interactive Plotly frames[${i}].data must be an array.`,
        );
      }
      mt(c, `frames[${i}].data`);
    }
    const f = b.layout;
    if (f !== undefined) {
      const g = D(f);
      if (!g) {
        throw new Error(
          `Interactive Plotly frames[${i}].layout must be an object.`,
        );
      }
      ft(g, `frames[${i}].layout`);
    }
  });
  Un(a);
  return {
    data: o,
    layout: d,
    frames: u,
    nodeCount: m,
  };
};
const Fn = (e) => {
  const t = [
    {
      value: e,
      depth: 0,
    },
  ];
  let r = 0;
  while (t.length > 0) {
    const s = t.pop();
    r += 1;
    if (r > pt) {
      throw new Error(
        `Interactive Plotly attachment exceeds the ${pt}-node limit.`,
      );
    }
    if (s.depth > dt) {
      throw new Error(
        `Interactive Plotly attachment exceeds the ${dt}-level nesting limit.`,
      );
    }
    if (Array.isArray(s.value)) {
      s.value.forEach((n) => {
        t.push({
          value: n,
          depth: s.depth + 1,
        });
      });
      continue;
    }
    const a = D(s.value);
    if (a) {
      Object.values(a).forEach((n) => {
        t.push({
          value: n,
          depth: s.depth + 1,
        });
      });
    }
  }
  return r;
};
const mt = (e, t) => {
  e.forEach((r, s) => {
    const a = D(r);
    if (!a) {
      throw new Error(`Interactive Plotly ${t}[${s}] must be an object.`);
    }
    const n = typeof a.type == "string" ? a.type.toLowerCase() : null;
    if (n && Pn.has(n)) {
      throw new Error(
        `Interactive Plotly ${t}[${s}] uses unsupported network-dependent trace type ${n}.`,
      );
    }
    if (n === "image") {
      De(a.source, `${t}[${s}].source`);
    }
  });
};
const ft = (e, t) => {
  const r = Object.keys(e).filter((o) => zn.has(o));
  if (r.length > 0) {
    throw new Error(
      `Interactive Plotly ${t} uses unsupported network-dependent fields: ${r.join(", ")}.`,
    );
  }
  ht(e.images, `${t}.images`);
  const s = D(e.template);
  const a = D(s == null ? undefined : s.data);
  if ((s == null ? undefined : s.data) !== undefined && !a) {
    throw new Error(`Interactive Plotly ${t}.template.data must be an object.`);
  }
  if (a) {
    Bn(a.image, `${t}.template.data.image`);
  }
  const n = D(s == null ? undefined : s.layout);
  if (n) {
    ht(n.images, `${t}.template.layout.images`);
  }
};
const Bn = (e, t) => {
  if (e !== undefined) {
    if (!Array.isArray(e)) {
      throw new Error(`Interactive Plotly ${t} must be an array.`);
    }
    e.forEach((r, s) => {
      const a = D(r);
      if (!a) {
        throw new Error(`Interactive Plotly ${t}[${s}] must be an object.`);
      }
      De(a.source, `${t}[${s}].source`);
    });
  }
};
const ht = (e, t) => {
  if (e !== undefined) {
    if (!Array.isArray(e)) {
      throw new Error(`Interactive Plotly ${t} must be an array.`);
    }
    e.forEach((r, s) => {
      const a = D(r);
      if (!a) {
        throw new Error(`Interactive Plotly ${t}[${s}] must be an object.`);
      }
      De(a.source, `${t}[${s}].source`);
    });
  }
};
const De = (e, t) => {
  if (e === undefined) {
    return;
  }
  if (typeof e != "string") {
    throw new Error(`Interactive Plotly ${t} must be a string.`);
  }
  const r = e.trim().match(Hn);
  if (!r || r[1].length % 4 !== 0) {
    throw new Error(
      `Interactive Plotly ${t} must be an embedded PNG, JPEG, or WebP data URL.`,
    );
  }
  try {
    atob(r[1]);
  } catch (s) {
    throw new Error(
      `Interactive Plotly ${t} contains invalid base64 image data.`,
      {
        cause: s,
      },
    );
  }
};
const Un = (e) => {
  const t = [e];
  while (t.length > 0) {
    const r = t.pop();
    if (Array.isArray(r)) {
      t.push(...r);
      continue;
    }
    const s = D(r);
    if (s) {
      Object.entries(s).forEach(([a, n]) => {
        if (Dn.has(a.toLowerCase())) {
          Wn(n, a);
        }
        t.push(n);
      });
    }
  }
};
const Wn = (e, t) => {
  const r = [e];
  while (r.length > 0) {
    const s = r.pop();
    if (typeof s == "string") {
      if (Ln.test(s)) {
        throw new Error(
          `Interactive Plotly field ${t} contains prohibited executable or resource-loading HTML text.`,
        );
      }
      continue;
    }
    if (Array.isArray(s)) {
      r.push(...s);
      continue;
    }
    const a = D(s);
    if (a) {
      r.push(...Object.values(a));
    }
  }
};
const yt = 32;
const bt = 2048;
const gt = 25000;
const Xn = /^[A-Za-z][A-Za-z0-9_-]*$/;
const qn = 64;
const wt = 128;
const N = (e, t) => {
  throw new Error(`Math Scene ${e}: ${t}`);
};
const Gn = (e, t) =>
  typeof e != "string" || e.length === 0 || e.length > qn || !Xn.test(e)
    ? N(
        t,
        "must start with a letter and contain only letters, numbers, underscores, or hyphens.",
      )
    : e;
const Vn = (e, t) =>
  Number.isFinite(e) ? e : N(t, "must be a finite number.");
const Yn = new Set([
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
]);
const Kn = new Set([
  "add",
  "sub",
  "mul",
  "div",
  "pow",
  "mod",
  "min",
  "max",
  "atan2",
]);
const $t = new Set(["lt", "le", "gt", "ge"]);
const Ne = new Set(["and", "or"]);
const Y = (e, t, r) => {
  if (e !== t) {
    N(r, `must evaluate to ${t}, not ${e}.`);
  }
};
const B = (e, t, r, s) => {
  let a = 0;
  const n = new Set();
  const o = new Set();
  const d = (u, m, b) => {
    var c;
    if (b > yt) {
      return N(m, `exceeds the maximum AST depth of ${yt}.`);
    }
    a += 1;
    r.totalNodeCount.value += 1;
    if (a > bt) {
      N(t, `exceeds the ${bt}-node limit.`);
    }
    if (r.totalNodeCount.value > gt) {
      N(t, `causes the document to exceed ${gt} AST nodes.`);
    }
    if (typeof u == "number") {
      return {
        expression: Vn(u, m),
        type: "number",
      };
    }
    if (typeof u == "boolean") {
      return {
        expression: u,
        type: "boolean",
      };
    }
    if (typeof u == "string") {
      if ([...u].length > wt) {
        return N(m, `must not exceed ${wt} characters.`);
      } else {
        return {
          expression: u,
          type: "string",
        };
      }
    }
    if (!Array.isArray(u) || u.length === 0) {
      return N(m, "must be a scalar literal or prefix AST array.");
    }
    const i = u[0];
    if (typeof i != "string") {
      return N(`${m}/0`, "must be an expression operator.");
    }
    if (i === "var" || i === "param" || i === "const") {
      if (u.length !== 2 || typeof u[1] != "string") {
        return N(m, `${i} requires exactly one string name.`);
      }
      const f = Gn(u[1], `${m}/1`);
      if (i === "var") {
        if (r.variables.has(f)) {
          o.add(f);
          return {
            expression: [i, f],
            type:
              ((c = r.variableTypes) == null ? undefined : c.get(f)) ??
              "number",
          };
        } else {
          return N(`${m}/1`, `references undeclared variable ${f}.`);
        }
      }
      if (i === "param") {
        const g = r.parameterTypes.get(f);
        if (g) {
          n.add(f);
          return {
            expression: [i, f],
            type: g,
          };
        } else {
          return N(`${m}/1`, `references undeclared parameter ${f}.`);
        }
      }
      if (f !== "pi" && f !== "e" && f !== "tau") {
        return N(`${m}/1`, "must be pi, e, or tau.");
      } else {
        return {
          expression: [i, f],
          type: "number",
        };
      }
    }
    if (Yn.has(i) || i === "not") {
      if (u.length !== 2) {
        return N(m, `${i} requires exactly one argument.`);
      }
      const f = d(u[1], `${m}/1`, b + 1);
      const g = i === "not" ? "boolean" : "number";
      Y(f.type, g, `${m}/1`);
      return {
        expression: [i, f.expression],
        type: i === "not" ? "boolean" : "number",
      };
    }
    if (Kn.has(i) || $t.has(i) || Ne.has(i) || i === "eq" || i === "ne") {
      if (u.length !== 3) {
        return N(m, `${i} requires exactly two arguments.`);
      }
      const f = d(u[1], `${m}/1`, b + 1);
      const g = d(u[2], `${m}/2`, b + 1);
      if (i === "eq" || i === "ne") {
        if (f.type !== g.type) {
          N(m, `${i} arguments must have matching types.`);
        }
        return {
          expression: [i, f.expression, g.expression],
          type: "boolean",
        };
      }
      const y = Ne.has(i) ? "boolean" : "number";
      Y(f.type, y, `${m}/1`);
      Y(g.type, y, `${m}/2`);
      return {
        expression: [i, f.expression, g.expression],
        type: $t.has(i) || Ne.has(i) ? "boolean" : "number",
      };
    }
    if (i === "clamp" || i === "select") {
      if (u.length !== 4) {
        return N(m, `${i} requires exactly three arguments.`);
      }
      const f = d(u[1], `${m}/1`, b + 1);
      const g = d(u[2], `${m}/2`, b + 1);
      const y = d(u[3], `${m}/3`, b + 1);
      if (i === "clamp") {
        Y(f.type, "number", `${m}/1`);
        Y(g.type, "number", `${m}/2`);
        Y(y.type, "number", `${m}/3`);
        return {
          expression: [i, f.expression, g.expression, y.expression],
          type: "number",
        };
      } else {
        Y(f.type, "boolean", `${m}/1`);
        if (g.type !== y.type) {
          N(m, "select result branches must have matching types.");
        }
        return {
          expression: [i, f.expression, g.expression, y.expression],
          type: g.type,
        };
      }
    }
    return N(`${m}/0`, `uses unsupported operator ${i}.`);
  };
  const l = d(e, t, 0);
  if (s) {
    Y(l.type, s, t);
  }
  return {
    ...l,
    nodeCount: a,
    parameterIds: n,
    variableIds: o,
  };
};
const $ = (e) => e;
const J = (e) => e;
const Jn = (e) => (Number.isFinite(e) ? e : Number.NaN);
const T = (e) => (t, r) => Jn($(e(t, r)));
const Zn = (e) => {
  if (!Number.isFinite(e)) {
    return e;
  }
  const t = Math.floor(e);
  const r = e - t;
  if (r < 0.5) {
    return t;
  } else if (r > 0.5) {
    return t + 1;
  } else if (t % 2 === 0) {
    return t;
  } else {
    return t + 1;
  }
};
const me = (e) => {
  if (!Array.isArray(e)) {
    return () => e;
  }
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
    const n = e[1];
    const o = n === "pi" ? Math.PI : n === "tau" ? Math.PI * 2 : Math.E;
    return () => o;
  }
  const r = me(e[1]);
  if (t === "neg") {
    return T((n, o) => -$(r(n, o)));
  }
  if (t === "abs") {
    return T((n, o) => Math.abs($(r(n, o))));
  }
  if (t === "sqrt") {
    return T((n, o) => Math.sqrt($(r(n, o))));
  }
  if (t === "exp") {
    return T((n, o) => Math.exp($(r(n, o))));
  }
  if (t === "log") {
    return T((n, o) => Math.log($(r(n, o))));
  }
  if (t === "log10") {
    return T((n, o) => Math.log10($(r(n, o))));
  }
  if (t === "sin") {
    return T((n, o) => Math.sin($(r(n, o))));
  }
  if (t === "cos") {
    return T((n, o) => Math.cos($(r(n, o))));
  }
  if (t === "tan") {
    return T((n, o) => Math.tan($(r(n, o))));
  }
  if (t === "asin") {
    return T((n, o) => Math.asin($(r(n, o))));
  }
  if (t === "acos") {
    return T((n, o) => Math.acos($(r(n, o))));
  }
  if (t === "atan") {
    return T((n, o) => Math.atan($(r(n, o))));
  }
  if (t === "sinh") {
    return T((n, o) => Math.sinh($(r(n, o))));
  }
  if (t === "cosh") {
    return T((n, o) => Math.cosh($(r(n, o))));
  }
  if (t === "tanh") {
    return T((n, o) => Math.tanh($(r(n, o))));
  }
  if (t === "floor") {
    return T((n, o) => Math.floor($(r(n, o))));
  }
  if (t === "ceil") {
    return T((n, o) => Math.ceil($(r(n, o))));
  }
  if (t === "round") {
    return T((n, o) => Zn($(r(n, o))));
  }
  if (t === "sign") {
    return T((n, o) => Math.sign($(r(n, o))));
  }
  if (t === "not") {
    return (n, o) => !J(r(n, o));
  }
  const s = me(e[2]);
  if (t === "add") {
    return T((n, o) => $(r(n, o)) + $(s(n, o)));
  }
  if (t === "sub") {
    return T((n, o) => $(r(n, o)) - $(s(n, o)));
  }
  if (t === "mul") {
    return T((n, o) => $(r(n, o)) * $(s(n, o)));
  }
  if (t === "div") {
    return T((n, o) => $(r(n, o)) / $(s(n, o)));
  }
  if (t === "pow") {
    return T((n, o) => Math.pow($(r(n, o)), $(s(n, o))));
  }
  if (t === "mod") {
    return T((n, o) => {
      const d = $(r(n, o));
      const l = $(s(n, o));
      return d - Math.floor(d / l) * l;
    });
  }
  if (t === "min") {
    return T((n, o) => Math.min($(r(n, o)), $(s(n, o))));
  }
  if (t === "max") {
    return T((n, o) => Math.max($(r(n, o)), $(s(n, o))));
  }
  if (t === "atan2") {
    return T((n, o) => Math.atan2($(r(n, o)), $(s(n, o))));
  }
  if (t === "eq") {
    return (n, o) => r(n, o) === s(n, o);
  }
  if (t === "ne") {
    return (n, o) => r(n, o) !== s(n, o);
  }
  if (t === "lt") {
    return (n, o) => $(r(n, o)) < $(s(n, o));
  }
  if (t === "le") {
    return (n, o) => $(r(n, o)) <= $(s(n, o));
  }
  if (t === "gt") {
    return (n, o) => $(r(n, o)) > $(s(n, o));
  }
  if (t === "ge") {
    return (n, o) => $(r(n, o)) >= $(s(n, o));
  }
  if (t === "and") {
    return (n, o) => J(r(n, o)) && J(s(n, o));
  }
  if (t === "or") {
    return (n, o) => J(r(n, o)) || J(s(n, o));
  }
  const a = me(e[3]);
  if (t === "clamp") {
    return T((n, o) => Math.min($(a(n, o)), Math.max($(s(n, o)), $(r(n, o)))));
  }
  if (t === "select") {
    return (n, o) => (J(r(n, o)) ? s(n, o) : a(n, o));
  }
  throw new Error(`Unsupported validated Math Scene operator ${t}.`);
};
const xt = 16;
const _t = 128;
const we = 50000;
const At = 200000;
const vt = 2000000;
const Et = 32;
const Ee = ".mvscene.json";
const fe = "application/vnd.mathvision.scene.v1+json";
const St = 2097152;
const Tt = 32;
const It = 32;
const Ct = 16;
const Se = 4;
const Mt = 64;
const jt = 32;
const Rt = 50000;
const Nt = 1000000;
const kt = 262144;
const Ot = 10000000;
const Pt = 1000000;
const zt = 2048;
const Dt = 512;
const Te = 129;
const Qn = /^#[0-9A-Fa-f]{6}(?:[0-9A-Fa-f]{2})?$/;
const Ht = 32;
const eo = /^[A-Za-z][A-Za-z0-9_-]*$/;
const to = /<\s*\/?\s*[a-z][a-z0-9:-]*(?:(?:\s+|\/)[^<>]*)?>/i;
const ro = /[\u0000-\u001F\u007F]/;
const ar = 64;
const ir = 200;
const G = 120;
const He = 2000;
const p = (e, t) => {
  throw new Error(`Math Scene ${e}: ${t}`);
};
const C = (e, t) =>
  e === null || typeof e != "object" || Array.isArray(e)
    ? p(t, "must be an object.")
    : e;
const A = (e, t, r, s = []) => {
  for (const o of r) {
    if (!Object.hasOwn(e, o)) {
      p(t, `is missing required field ${o}.`);
    }
  }
  const a = new Set([...r, ...s]);
  const n = Object.keys(e).filter((o) => !a.has(o));
  if (n.length > 0) {
    p(t, `contains unsupported fields: ${n.join(", ")}.`);
  }
};
const K = (e, t) => (typeof e != "boolean" ? p(t, "must be a boolean.") : e);
const U = (e, t) =>
  typeof e != "number" || !Number.isFinite(e)
    ? p(t, "must be a finite number.")
    : e;
const F = (e, t) => {
  const r = U(e, t);
  if (Number.isSafeInteger(r)) {
    return r;
  } else {
    return p(t, "must be a safe integer.");
  }
};
const k = (e, t, r) =>
  typeof e != "string"
    ? p(t, "must be a string.")
    : [...e].length > r
      ? p(t, `must contain no more than ${r} characters.`)
      : ro.test(e) || to.test(e)
        ? p(t, "contains unsupported markup or control characters.")
        : e;
const O = (e, t) =>
  typeof e != "string" || e.length === 0 || e.length > ar || !eo.test(e)
    ? p(
        t,
        "must start with a letter and contain only letters, numbers, underscores, or hyphens.",
      )
    : e;
const ue = (e, t, r) =>
  !Array.isArray(e) || e.length !== r
    ? p(t, `must contain exactly ${r} numbers.`)
    : e.map((s, a) => U(s, `${t}/${a}`));
const no = (e) => {
  const t = C(e, "/metadata");
  A(t, "/metadata", ["title"], ["description"]);
  const r = Object.hasOwn(t, "description")
    ? k(t.description, "/metadata/description", He)
    : undefined;
  return {
    title: k(t.title, "/metadata/title", ir),
    ...(r === undefined
      ? {}
      : {
          description: r,
        }),
  };
};
const oo = (e, t) =>
  e === undefined
    ? "live"
    : e !== "live" && e !== "commit"
      ? p(t, "must be live or commit.")
      : e;
const so = (e) => {
  if (!Array.isArray(e)) {
    return p("/parameters", "must be an array.");
  }
  if (e.length > Tt) {
    p("/parameters", `exceeds the ${Tt}-parameter limit.`);
  }
  const t = new Set();
  return e.map((r, s) => {
    const a = `/parameters/${s}`;
    const n = C(r, a);
    const o = O(n.id, `${a}/id`);
    if (t.has(o)) {
      p(`${a}/id`, `duplicates parameter id ${o}.`);
    }
    t.add(o);
    const d = k(n.label, `${a}/label`, G);
    const l = oo(n.update, `${a}/update`);
    const u = {
      id: o,
      label: d,
      update: l,
    };
    if (n.type === "float" || n.type === "int") {
      A(
        n,
        a,
        ["id", "label", "type", "default"],
        ["update", "minimum", "maximum", "slider", "unit"],
      );
      const m = n.type === "int" ? F : U;
      const b = m(n.default, `${a}/default`);
      const i = Object.hasOwn(n, "minimum")
        ? m(n.minimum, `${a}/minimum`)
        : undefined;
      const c = Object.hasOwn(n, "maximum")
        ? m(n.maximum, `${a}/maximum`)
        : undefined;
      if (i !== undefined && c !== undefined && i > c) {
        p(a, "minimum must not exceed maximum.");
      }
      if (i !== undefined && b < i) {
        p(`${a}/default`, "must not be below minimum.");
      }
      if (c !== undefined && b > c) {
        p(`${a}/default`, "must not exceed maximum.");
      }
      let f;
      if (Object.hasOwn(n, "slider")) {
        const y = `${a}/slider`;
        const _ = C(n.slider, y);
        A(_, y, ["min", "max", "step"], ["scale"]);
        const w = m(_.min, `${y}/min`);
        const S = m(_.max, `${y}/max`);
        const E = m(_.step, `${y}/step`);
        const v = _.scale ?? "linear";
        if (w >= S) {
          p(`${y}/max`, "must be greater than min.");
        }
        if (E <= 0) {
          p(`${y}/step`, "must be positive.");
        }
        if (v !== "linear" && v !== "log") {
          p(`${y}/scale`, "must be linear or log.");
        }
        if (v === "log" && w <= 0) {
          p(`${y}/min`, "must be positive for a log slider.");
        }
        f = {
          min: w,
          max: S,
          step: E,
          scale: v,
        };
      }
      const g = Object.hasOwn(n, "unit")
        ? k(n.unit, `${a}/unit`, ar)
        : undefined;
      return {
        ...u,
        type: n.type,
        default: b,
        ...(i === undefined
          ? {}
          : {
              minimum: i,
            }),
        ...(c === undefined
          ? {}
          : {
              maximum: c,
            }),
        ...(f === undefined
          ? {}
          : {
              slider: f,
            }),
        ...(g === undefined
          ? {}
          : {
              unit: g,
            }),
      };
    }
    if (n.type === "bool") {
      A(n, a, ["id", "label", "type", "default"], ["update"]);
      return {
        ...u,
        type: "bool",
        default: K(n.default, `${a}/default`),
      };
    }
    if (n.type === "enum") {
      A(n, a, ["id", "label", "type", "default", "options"], ["update"]);
      if (
        !Array.isArray(n.options) ||
        n.options.length < 1 ||
        n.options.length > Ht
      ) {
        p(`${a}/options`, `must contain 1 to ${Ht} options.`);
      }
      const m = n.options.map((i, c) => k(i, `${a}/options/${c}`, 128));
      if (new Set(m).size !== m.length) {
        p(`${a}/options`, "must not contain duplicates.");
      }
      const b = k(n.default, `${a}/default`, 128);
      if (!m.includes(b)) {
        p(`${a}/default`, "must match one of the enum options.");
      }
      return {
        ...u,
        type: "enum",
        default: b,
        options: m,
      };
    }
    return p(`${a}/type`, "must be float, int, bool, or enum.");
  });
};
const cr = (e) =>
  new Map(
    e.map((t) => [
      t.id,
      t.type === "float" || t.type === "int"
        ? "number"
        : t.type === "bool"
          ? "boolean"
          : "string",
    ]),
  );
const ge = (e, t, r) => ({
  parameterTypes: cr(e),
  totalNodeCount: r,
  variables: t,
});
const ao = (e, t, r) => {
  if (!Array.isArray(e)) {
    return p("/constraints", "must be an array.");
  }
  if (e.length > It) {
    p("/constraints", `exceeds the ${It}-constraint limit.`);
  }
  const s = new Set();
  return e.map((a, n) => {
    const o = `/constraints/${n}`;
    const d = C(a, o);
    A(d, o, ["id", "message", "expression"]);
    const l = O(d.id, `${o}/id`);
    if (s.has(l)) {
      p(`${o}/id`, `duplicates constraint id ${l}.`);
    }
    s.add(l);
    const u = B(
      d.expression,
      `${o}/expression`,
      ge(t, new Set(), r),
      "boolean",
    );
    return {
      id: l,
      message: k(d.message, `${o}/message`, He),
      expression: u.expression,
      parameterIds: [...u.parameterIds],
    };
  });
};
const io = (e, t, r) => {
  if (e === null) {
    return null;
  }
  if (t === "number") {
    return U(e, r);
  }
  if (t === "boolean") {
    return K(e, r);
  }
  const s = k(e, r, He);
  if (t === "date") {
    const a = new Date(`${s}T00:00:00Z`);
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(s) ||
      s.startsWith("0000-") ||
      Number.isNaN(a.valueOf()) ||
      a.toISOString().slice(0, 10) !== s
    ) {
      p(r, "must be an ISO date in YYYY-MM-DD form.");
    }
  }
  return s;
};
const Ie = (e, t, r) => {
  const s = O(e, r);
  if (!Object.hasOwn(t, s)) {
    p(r, `references unknown column ${s}.`);
  }
  return s;
};
const Z = (e, t, r) => {
  const s = Ie(e, t, r);
  if (t[s] !== "number") {
    p(r, "must reference a numeric column.");
  }
  return s;
};
const ke = (e, t, r) => {
  const s = O(e, r);
  if (Object.hasOwn(t, s)) {
    p(r, `duplicates column ${s}.`);
  }
  return s;
};
const Lt = (e, t, r) => {
  const s = new Map(
    Object.entries(t).map(([a, n]) => [a, n === "date" ? "string" : n]),
  );
  return {
    parameterTypes: cr(e),
    totalNodeCount: r,
    variables: new Set(s.keys()),
    variableTypes: s,
  };
};
const $e = (e, t, r, s = 0) => {
  e.columns += t;
  e.cells += r;
  e.work += s;
  if (e.columns > _t) {
    p("/datasets", `exceeds the ${_t}-column limit.`);
  }
  if (e.cells > At) {
    p("/datasets", `exceeds the ${At}-cell limit.`);
  }
  if (e.work > vt) {
    p("/datasets", `exceeds the ${vt}-unit work limit.`);
  }
};
const co = (e, t, r) => {
  if (!Array.isArray(e)) {
    return p("/datasets", "must be an array.");
  }
  if (e.length > xt) {
    p("/datasets", `exceeds the ${xt}-dataset limit.`);
  }
  const s = [];
  const a = new Map();
  const n = {
    cells: 0,
    columns: 0,
    work: 0,
  };
  for (const [o, d] of e.entries()) {
    const l = `/datasets/${o}`;
    const u = C(d, l);
    const m = O(u.id, `${l}/id`);
    if (a.has(m)) {
      p(`${l}/id`, `duplicates dataset id ${m}.`);
    }
    const b = k(u.label, `${l}/label`, G);
    if (u.type === "table") {
      A(u, l, ["id", "type", "label", "columns"]);
      if (!Array.isArray(u.columns) || u.columns.length === 0) {
        p(`${l}/columns`, "must be a non-empty array.");
      }
      const f = {};
      let g;
      const y = u.columns.map((w, S) => {
        const E = `${l}/columns/${S}`;
        const x = C(w, E);
        A(x, E, ["id", "label", "type", "values"]);
        const v = O(x.id, `${E}/id`);
        if (Object.hasOwn(f, v)) {
          p(`${E}/id`, `duplicates column ${v}.`);
        }
        if (
          x.type !== "number" &&
          x.type !== "string" &&
          x.type !== "boolean" &&
          x.type !== "date"
        ) {
          p(`${E}/type`, "must be number, string, boolean, or date.");
        }
        if (!Array.isArray(x.values)) {
          p(`${E}/values`, "must be an array.");
        }
        const R = x.values;
        if (R.length > we) {
          p(`${E}/values`, `exceeds the ${we}-row limit.`);
        }
        g ??= R.length;
        if (R.length !== g) {
          p(`${E}/values`, "must have the same length as the other columns.");
        }
        const M = x.type;
        f[v] = M;
        return {
          id: v,
          label: k(x.label, `${E}/label`, G),
          type: M,
          values: R.map((H, I) => io(H, M, `${E}/values/${I}`)),
        };
      });
      const _ = {
        id: m,
        type: "table",
        label: b,
        columns: y,
        parameterIds: [],
        rowCount: g ?? 0,
        schema: f,
      };
      $e(n, y.length, _.rowCount * y.length);
      s.push(_);
      a.set(m, _);
      continue;
    }
    const i = O(u.source, `${l}/source`);
    const c = a.get(i);
    if (!c) {
      p(`${l}/source`, "must reference an earlier dataset.");
    }
    if (u.type === "transform") {
      A(u, l, ["id", "type", "label", "source", "operations"]);
      if (
        !Array.isArray(u.operations) ||
        u.operations.length < 1 ||
        u.operations.length > Et
      ) {
        p(`${l}/operations`, `must contain 1 to ${Et} operations.`);
      }
      const f = {
        ...c.schema,
      };
      const g = new Set(c.parameterIds);
      let y = 0;
      const _ = u.operations.map((S, E) => {
        const x = `${l}/operations/${E}`;
        const v = C(S, x);
        if (v.type === "filter") {
          A(v, x, ["type", "expression"]);
          const R = B(v.expression, `${x}/expression`, Lt(t, f, r), "boolean");
          R.parameterIds.forEach((M) => g.add(M));
          y += c.rowCount * R.nodeCount;
          return {
            type: "filter",
            expression: R.expression,
            expressionNodeCount: R.nodeCount,
            parameterIds: [...R.parameterIds],
            variableIds: [...R.variableIds],
          };
        }
        if (v.type === "sort") {
          A(v, x, ["type", "column", "direction"]);
          if (v.direction !== "ascending" && v.direction !== "descending") {
            p(`${x}/direction`, "must be ascending or descending.");
          }
          const R = v.direction;
          y +=
            c.rowCount *
            Math.max(1, Math.ceil(Math.log2(Math.max(2, c.rowCount))));
          return {
            type: "sort",
            column: Ie(v.column, f, `${x}/column`),
            direction: R,
          };
        }
        if (v.type === "derive") {
          A(v, x, ["type", "id", "label", "expression"]);
          const R = ke(v.id, f, `${x}/id`);
          const M = B(v.expression, `${x}/expression`, Lt(t, f, r));
          f[R] = M.type;
          M.parameterIds.forEach((H) => g.add(H));
          y += c.rowCount * M.nodeCount;
          return {
            type: "derive",
            id: R,
            label: k(v.label, `${x}/label`, G),
            expression: M.expression,
            expressionNodeCount: M.nodeCount,
            parameterIds: [...M.parameterIds],
            variableIds: [...M.variableIds],
            valueType: M.type,
          };
        }
        if (v.type === "rolling_mean") {
          A(v, x, ["type", "column", "output", "label", "window"]);
          const R = Z(v.column, f, `${x}/column`);
          const M = ke(v.output, f, `${x}/output`);
          const H = F(v.window, `${x}/window`);
          if (H < 1 || H > we) {
            p(`${x}/window`, `must be between 1 and ${we}.`);
          }
          f[M] = "number";
          y += c.rowCount;
          return {
            type: "rolling_mean",
            column: R,
            output: M,
            label: k(v.label, `${x}/label`, G),
            window: H,
          };
        }
        if (v.type === "linear_regression") {
          A(v, x, ["type", "x", "y", "output", "label"]);
          const R = Z(v.x, f, `${x}/x`);
          const M = Z(v.y, f, `${x}/y`);
          const H = ke(v.output, f, `${x}/output`);
          f[H] = "number";
          y += c.rowCount;
          return {
            type: "linear_regression",
            x: R,
            y: M,
            output: H,
            label: k(v.label, `${x}/label`, G),
          };
        }
        return p(
          `${x}/type`,
          "must be filter, sort, derive, rolling_mean, or linear_regression.",
        );
      });
      const w = {
        id: m,
        type: "transform",
        label: b,
        source: i,
        operations: _,
        parameterIds: [...g],
        rowCount: c.rowCount,
        schema: f,
      };
      $e(n, Object.keys(f).length, w.rowCount * Object.keys(f).length, y);
      s.push(w);
      a.set(m, w);
      continue;
    }
    if (u.type === "aggregate") {
      A(
        u,
        l,
        ["id", "type", "label", "source", "group_by", "operation"],
        ["column"],
      );
      const f = Ie(u.group_by, c.schema, `${l}/group_by`);
      if (
        u.operation !== "count" &&
        u.operation !== "sum" &&
        u.operation !== "mean" &&
        u.operation !== "min" &&
        u.operation !== "max"
      ) {
        p(`${l}/operation`, "must be count, sum, mean, min, or max.");
      }
      const g = u.operation;
      let y;
      if (u.operation === "count") {
        if (Object.hasOwn(u, "column")) {
          p(`${l}/column`, "is not used by count.");
        }
      } else {
        if (!Object.hasOwn(u, "column")) {
          p(`${l}/column`, "is required.");
        }
        y = Z(u.column, c.schema, `${l}/column`);
      }
      const _ = {
        id: m,
        type: "aggregate",
        label: b,
        source: i,
        groupBy: f,
        operation: g,
        ...(y
          ? {
              column: y,
            }
          : {}),
        parameterIds: [...c.parameterIds],
        rowCount: c.rowCount,
        schema: {
          group: c.schema[f],
          value: "number",
        },
      };
      $e(n, 2, _.rowCount * 2, c.rowCount);
      s.push(_);
      a.set(m, _);
      continue;
    }
    if (u.type === "histogram") {
      A(u, l, ["id", "type", "label", "source", "column", "bin_count"]);
      const f = Z(u.column, c.schema, `${l}/column`);
      const g = F(u.bin_count, `${l}/bin_count`);
      if (g < 1 || g > Te) {
        p(`${l}/bin_count`, `must be between 1 and ${Te}.`);
      }
      const y = {
        id: m,
        type: "histogram",
        label: b,
        source: i,
        column: f,
        binCount: g,
        parameterIds: [...c.parameterIds],
        rowCount: g,
        schema: {
          bin: "string",
          count: "number",
        },
      };
      $e(n, 2, g * 2, c.rowCount + g);
      s.push(y);
      a.set(m, y);
      continue;
    }
    p(`${l}/type`, "must be table, transform, aggregate, or histogram.");
  }
  return {
    datasets: s,
    totals: n,
  };
};
const Le = (e, t) => {
  const r = C(e, t);
  A(r, t, ["computation", "output"]);
  return {
    computation: O(r.computation, `${t}/computation`),
    output: O(r.output, `${t}/output`),
  };
};
const lr = (e) =>
  e.type === "brownian_bridge_flat_torus"
    ? {
        featured_path: "timeline_vector2",
        winding_u: "timeline_integer_samples",
        winding_v: "timeline_integer_samples",
      }
    : {
        bins: "static_scalar_vector",
        counts: "timeline_numeric_vector",
      };
const ur = (e, t) => {
  const r = e.find(({ id: s }) => s === t.computation);
  if (r) {
    return lr(r)[t.output];
  } else {
    return undefined;
  }
};
const lo = (e, t, r) => {
  if (e === null) {
    return null;
  }
  const s = C(e, "/timeline");
  A(s, "/timeline", ["duration", "steps", "speed", "loop", "autoplay"]);
  const a = ge(t, new Set(), r);
  const n = B(s.duration, "/timeline/duration", a, "number");
  const o = B(s.speed, "/timeline/speed", a, "number");
  const d = F(s.steps, "/timeline/steps");
  if (d < 2 || d > zt) {
    p("/timeline/steps", `must be between 2 and ${zt}.`);
  }
  return {
    autoplay: K(s.autoplay, "/timeline/autoplay"),
    duration: n.expression,
    loop: K(s.loop, "/timeline/loop"),
    speed: o.expression,
    steps: d,
    durationParameterIds: [...n.parameterIds],
    parameterIds: [...new Set([...n.parameterIds, ...o.parameterIds])],
    speedParameterIds: [...o.parameterIds],
  };
};
const uo = (e, t, r, s) => {
  if (!Array.isArray(e)) {
    return p("/computations", "must be an array.");
  }
  if (e.length > Ct) {
    p("/computations", `exceeds the ${Ct}-computation limit.`);
  }
  const a = new Set();
  const n = e.map((d, l) => {
    const u = `/computations/${l}`;
    const m = C(d, u);
    const b = O(m.id, `${u}/id`);
    if (a.has(b)) {
      p(`${u}/id`, `duplicates computation id ${b}.`);
    }
    a.add(b);
    if (m.type === "brownian_bridge_flat_torus") {
      A(m, u, [
        "id",
        "type",
        "path_count",
        "seed",
        "start",
        "featured_path",
        "diffusion",
        "winding_limit",
      ]);
      if (!r) {
        p(u, "requires a shared timeline.");
      }
      const i = F(m.path_count, `${u}/path_count`);
      if (i < 1 || i > Dt) {
        p(`${u}/path_count`, `must be between 1 and ${Dt}.`);
      }
      const c = F(m.featured_path, `${u}/featured_path`);
      if (c < 0 || c >= i) {
        p(`${u}/featured_path`, "must select one of the simulated paths.");
      }
      const f = F(m.winding_limit, `${u}/winding_limit`);
      if (f < 0 || f > 4096) {
        p(`${u}/winding_limit`, "must be between 0 and 4096.");
      }
      if (!Array.isArray(m.start) || m.start.length !== 2) {
        p(`${u}/start`, "must contain exactly two numeric expressions.");
      }
      const g = ge(t, new Set(), s);
      const y = B(m.seed, `${u}/seed`, g, "number");
      const _ = B(m.diffusion, `${u}/diffusion`, g, "number");
      const S = m.start.map((E, x) => B(E, `${u}/start/${x}`, g, "number"));
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
      if (i < 1 || i > Te) {
        p(`${u}/max_bins`, `must be between 1 and ${Te}.`);
      }
      return {
        id: b,
        type: "integer_histogram",
        maxBins: i,
        source: Le(m.source, `${u}/source`),
        parameterIds: [],
      };
    }
    return p(
      `${u}/type`,
      "must be brownian_bridge_flat_torus or integer_histogram.",
    );
  });
  const o = new Map(n.map((d) => [d.id, d]));
  for (const d of n) {
    if (d.type !== "integer_histogram") {
      continue;
    }
    const l = o.get(d.source.computation);
    if (!l) {
      p(
        `/computations/${d.id}/source`,
        `references unknown computation ${d.source.computation}.`,
      );
    }
    if (lr(l)[d.source.output] !== "timeline_integer_samples") {
      p(
        `/computations/${d.id}/source`,
        "must reference timeline integer samples.",
      );
    }
    d.parameterIds = [...l.parameterIds];
  }
  return n;
};
const dr = (e, t) => {
  const r = C(e, t);
  A(
    r,
    t,
    [],
    [
      "color",
      "opacity",
      "line_width",
      "point_size",
      "wireframe",
      "dash",
      "marker",
    ],
  );
  const s = {};
  if (Object.hasOwn(r, "color")) {
    const a = k(r.color, `${t}/color`, 9);
    if (!Qn.test(a)) {
      p(`${t}/color`, "must be a #RRGGBB or #RRGGBBAA color.");
    }
    s.color = a;
  }
  if (Object.hasOwn(r, "opacity")) {
    const a = U(r.opacity, `${t}/opacity`);
    if (a < 0 || a > 1) {
      p(`${t}/opacity`, "must be between 0 and 1.");
    }
    s.opacity = a;
  }
  if (Object.hasOwn(r, "line_width")) {
    const a = U(r.line_width, `${t}/line_width`);
    if (a <= 0) {
      p(`${t}/line_width`, "must be positive.");
    }
    s.lineWidth = a;
  }
  if (Object.hasOwn(r, "point_size")) {
    const a = U(r.point_size, `${t}/point_size`);
    if (a <= 0) {
      p(`${t}/point_size`, "must be positive.");
    }
    s.pointSize = a;
  }
  if (Object.hasOwn(r, "wireframe")) {
    s.wireframe = K(r.wireframe, `${t}/wireframe`);
  }
  if (Object.hasOwn(r, "dash")) {
    if (r.dash !== "solid" && r.dash !== "dash" && r.dash !== "dot") {
      p(`${t}/dash`, "must be solid, dash, or dot.");
    }
    s.dash = r.dash;
  }
  if (Object.hasOwn(r, "marker")) {
    if (
      r.marker !== "circle" &&
      r.marker !== "square" &&
      r.marker !== "diamond" &&
      r.marker !== "cross"
    ) {
      p(`${t}/marker`, "must be circle, square, diamond, or cross.");
    }
    s.marker = r.marker;
  }
  return s;
};
const po = (e, t, r) => {
  if (!Array.isArray(e) || e.length !== r) {
    return p(t, `must contain exactly ${r} domain entries.`);
  }
  const s = new Set();
  return e.map((a, n) => {
    const o = `${t}/${n}`;
    const d = C(a, o);
    A(d, o, ["variable", "min", "max"]);
    const l = O(d.variable, `${o}/variable`);
    if (s.has(l)) {
      p(`${o}/variable`, `duplicates variable ${l}.`);
    }
    s.add(l);
    const u = U(d.min, `${o}/min`);
    const m = U(d.max, `${o}/max`);
    if (u >= m) {
      p(`${o}/max`, "must be greater than min.");
    }
    return {
      variable: l,
      min: u,
      max: m,
    };
  });
};
const mo = (e, t) => {
  const r = C(e, t);
  A(r, t, ["preview", "final"]);
  const s = F(r.preview, `${t}/preview`);
  const a = F(r.final, `${t}/final`);
  if (s < 2 || s > 128) {
    p(`${t}/preview`, "must be between 2 and 128.");
  }
  if (a < s || a > 512) {
    p(`${t}/final`, "must be between preview and 512.");
  }
  return {
    preview: s,
    final: a,
  };
};
const fo = (e, t, r, s, a, n, o, d, l) => {
  if (!Array.isArray(e)) {
    return p(t, "must be an array.");
  }
  l.objects += e.length;
  if (l.objects > Mt) {
    p(t, `causes the document to exceed ${Mt} objects.`);
  }
  const u = new Set();
  return e.map((m, b) => {
    const i = `${t}/${b}`;
    const c = C(m, i);
    const f = ["id", "type", "label", "visible", "style"];
    const g = O(c.id, `${i}/id`);
    if (u.has(g)) {
      p(`${i}/id`, `duplicates object id ${g}.`);
    }
    u.add(g);
    const y = {
      id: g,
      label: k(c.label, `${i}/label`, G),
      visible: K(c.visible, `${i}/visible`),
      style: dr(c.style, `${i}/style`),
    };
    if (c.type === "points") {
      A(c, i, [...f, "points"]);
      if (!Array.isArray(c.points)) {
        p(`${i}/points`, "must be an array.");
      }
      const I = c.points;
      l.points += I.length;
      l.finalSamples += I.length;
      if (l.points > Rt) {
        p(`${i}/points`, `causes the document to exceed ${Rt} points.`);
      }
      return {
        ...y,
        type: "points",
        points: I.map((W, V) => ue(W, `${i}/points/${V}`, r)),
      };
    }
    if (c.type === "data_points" || c.type === "data_curve") {
      A(c, i, [...f, "source", "coordinates"]);
      const I = O(c.source, `${i}/source`);
      const W = n.find((ie) => ie.id === I);
      if (!W) {
        p(`${i}/source`, `references unknown dataset ${I}.`);
      }
      if (!Array.isArray(c.coordinates) || c.coordinates.length !== r) {
        p(`${i}/coordinates`, `must contain exactly ${r} numeric columns.`);
      }
      const V = c.coordinates.map((ie, Be) =>
        Z(ie, W.schema, `${i}/coordinates/${Be}`),
      );
      l.finalSamples += W.rowCount;
      return {
        ...y,
        type: c.type,
        source: I,
        coordinates: V,
      };
    }
    if (c.type === "computed_curve") {
      A(c, i, [...f, "source", "variables", "expressions", "reveal"]);
      const I = Le(c.source, `${i}/source`);
      if (ur(a, I) !== "timeline_vector2") {
        p(`${i}/source`, "must reference a timeline vector2 output.");
      }
      if (!Array.isArray(c.variables) || c.variables.length !== 2) {
        p(`${i}/variables`, "must contain exactly two variable names.");
      }
      const V = c.variables.map((q, ce) => O(q, `${i}/variables/${ce}`));
      if (new Set(V).size !== V.length) {
        p(`${i}/variables`, "must not contain duplicates.");
      }
      if (!Array.isArray(c.expressions) || c.expressions.length !== r) {
        p(`${i}/expressions`, `must contain exactly ${r} expressions.`);
      }
      if (c.reveal !== "all" && c.reveal !== "timeline_prefix") {
        p(`${i}/reveal`, "must be all or timeline_prefix.");
      }
      if (c.reveal === "timeline_prefix" && !o) {
        p(`${i}/reveal`, "requires a shared timeline.");
      }
      const ie = ge(s, new Set(V), d);
      const je = c.expressions.map((q, ce) =>
        B(q, `${i}/expressions/${ce}`, ie, "number"),
      );
      const Ue = je.reduce((q, ce) => q + ce.nodeCount, 0);
      const We = (o == null ? undefined : o.steps) ?? 0;
      l.finalSamples += We;
      l.work += We * Ue;
      return {
        ...y,
        type: "computed_curve",
        source: I,
        variables: V,
        expressions: je.map(({ expression: q }) => q),
        reveal: c.reveal,
        expressionNodeCount: Ue,
        parameterIds: [...new Set(je.flatMap(({ parameterIds: q }) => [...q]))],
      };
    }
    const _ = c.type === "explicit_surface" || c.type === "parametric_surface";
    const w = c.type === "explicit_curve" || c.type === "parametric_curve";
    if (!_ && !w) {
      return p(`${i}/type`, "uses an unsupported geometry object type.");
    }
    if (_ && r !== 3) {
      p(`${i}/type`, "surface objects require a 3D panel.");
    }
    if (c.type === "explicit_curve" && r !== 2) {
      p(`${i}/type`, "explicit curves require a 2D panel.");
    }
    const S = po(c.domain, `${i}/domain`, _ ? 2 : 1);
    const E = mo(c.sampling, `${i}/sampling`);
    const x = _ ? E.final ** 2 : E.final;
    l.finalSamples += x;
    if (_) {
      l.surfaces += x;
    }
    const v = ge(s, new Set(S.map(({ variable: I }) => I)), d);
    if (c.type === "explicit_curve" || c.type === "explicit_surface") {
      A(c, i, [...f, "domain", "sampling", "expression"]);
      const I = B(c.expression, `${i}/expression`, v, "number");
      l.work += x * I.nodeCount;
      return {
        ...y,
        type: c.type,
        domain: S,
        sampling: E,
        expression: I.expression,
        expressionNodeCount: I.nodeCount,
        parameterIds: [...I.parameterIds],
      };
    }
    A(c, i, [...f, "domain", "sampling", "expressions"]);
    if (!Array.isArray(c.expressions) || c.expressions.length !== r) {
      p(`${i}/expressions`, `must contain exactly ${r} expressions.`);
    }
    const M = c.expressions.map((I, W) =>
      B(I, `${i}/expressions/${W}`, v, "number"),
    );
    const H = M.reduce((I, W) => I + W.nodeCount, 0);
    l.work += x * H;
    return {
      ...y,
      type: c.type,
      domain: S,
      sampling: E,
      expressions: M.map(({ expression: I }) => I),
      expressionNodeCount: H,
      parameterIds: [...new Set(M.flatMap(({ parameterIds: I }) => [...I]))],
    };
  });
};
const pr = (e, t, r) => {
  const s = C(e, t);
  A(s, t, ["labels", "grid"]);
  if (!Array.isArray(s.labels) || s.labels.length !== r) {
    p(`${t}/labels`, `must contain exactly ${r} labels.`);
  }
  return {
    labels: s.labels.map((a, n) => k(a, `${t}/labels/${n}`, G)),
    grid: K(s.grid, `${t}/grid`),
  };
};
const ho = (e, t, r) => {
  const s = C(e, t);
  A(s, t, ["axes"], ["camera"]);
  const a = pr(s.axes, `${t}/axes`, r);
  if (!Object.hasOwn(s, "camera")) {
    return {
      axes: a,
    };
  }
  const n = C(s.camera, `${t}/camera`);
  if (r === 2) {
    A(n, `${t}/camera`, ["center", "zoom"]);
    const d = U(n.zoom, `${t}/camera/zoom`);
    if (d <= 0) {
      p(`${t}/camera/zoom`, "must be positive.");
    }
    return {
      axes: a,
      camera: {
        center: ue(n.center, `${t}/camera/center`, 2),
        zoom: d,
      },
    };
  }
  A(n, `${t}/camera`, ["position", "target", "up", "fov"]);
  const o = U(n.fov, `${t}/camera/fov`);
  if (o < 1 || o > 120) {
    p(`${t}/camera/fov`, "must be between 1 and 120.");
  }
  return {
    axes: a,
    camera: {
      position: ue(n.position, `${t}/camera/position`, 3),
      target: ue(n.target, `${t}/camera/target`, 3),
      up: ue(n.up, `${t}/camera/up`, 3),
      fov: o,
    },
  };
};
const yo = (e, t) => {
  const r = C(e, t);
  A(r, t, ["labels", "grid"], ["x_scale", "y_scale"]);
  const s = pr(
    {
      labels: r.labels,
      grid: r.grid,
    },
    t,
    2,
  );
  const a = r.x_scale ?? "linear";
  if (a !== "linear" && a !== "log" && a !== "category" && a !== "date") {
    p(`${t}/x_scale`, "must be linear, log, category, or date.");
  }
  const n = r.y_scale ?? "linear";
  if (n !== "linear" && n !== "log") {
    p(`${t}/y_scale`, "must be linear or log.");
  }
  return {
    ...s,
    xScale: a,
    yScale: n,
  };
};
const Ft = (e, t, r, s) => {
  const a = C(e, t);
  if (Object.hasOwn(a, "dataset") || Object.hasOwn(a, "column")) {
    A(a, t, ["dataset", "column"]);
    const l = O(a.dataset, `${t}/dataset`);
    const u = r.find(({ id: b }) => b === l);
    if (!u) {
      p(`${t}/dataset`, `references unknown dataset ${l}.`);
    }
    const m = Ie(a.column, u.schema, `${t}/column`);
    return {
      reference: {
        dataset: l,
        column: m,
      },
      kind: u.schema[m] === "number" ? "number" : "scalar",
      source: `dataset:${l}`,
    };
  }
  const n = Le(e, t);
  const o = ur(s, n);
  const d =
    o === "static_scalar_vector"
      ? "scalar"
      : o === "timeline_numeric_vector"
        ? "timeline_number"
        : undefined;
  if (!d) {
    p(t, "references unknown or incompatible computation output.");
  }
  return {
    reference: n,
    kind: d,
    source: `computation:${n.computation}`,
  };
};
const bo = (e, t, r, s, a, n) => {
  const o = C(e, t);
  const d = ["id", "type", "label", "visible", "style"];
  if (o.type === "scatter" || o.type === "line") {
    A(o, t, [...d, "x", "y"], ["error_y"]);
  } else if (o.type === "area" || o.type === "bar") {
    A(o, t, [...d, "x", "y"]);
  } else if (o.type === "band") {
    A(o, t, [...d, "x", "lower", "upper"]);
  } else if (o.type === "heatmap" || o.type === "contour") {
    A(o, t, [...d, "x", "y", "z"]);
  } else {
    return p(
      `${t}/type`,
      "must be scatter, line, area, bar, band, heatmap, or contour.",
    );
  }
  const l = O(o.id, `${t}/id`);
  if (r.has(l)) {
    p(`${t}/id`, `duplicates mark id ${l}.`);
  }
  r.add(l);
  const u = {
    id: l,
    label: k(o.label, `${t}/label`, G),
    visible: K(o.visible, `${t}/visible`),
    style: dr(o.style, `${t}/style`),
  };
  const m = Ft(o.x, `${t}/x`, s, a);
  if (m.kind !== "number" && m.kind !== "scalar") {
    p(`${t}/x`, "must reference static scalar data.");
  }
  const b = (c) => {
    const f = Ft(o[c], `${t}/${c}`, s, a);
    const g = o.type === "bar" && c === "y" && f.kind === "timeline_number";
    if (f.kind !== "number" && !g) {
      p(`${t}/${c}`, "must reference static numeric data.");
    }
    if (f.source !== m.source) {
      p(
        `${t}/${c}`,
        "must share the mark's data source (the same histogram or dataset).",
      );
    }
    if (f.kind === "timeline_number" && !n) {
      p(`${t}/${c}`, "requires a shared timeline.");
    }
    return f.reference;
  };
  if (o.type === "band") {
    return {
      ...u,
      type: "band",
      x: m.reference,
      lower: b("lower"),
      upper: b("upper"),
    };
  }
  if (o.type === "heatmap" || o.type === "contour") {
    return {
      ...u,
      type: o.type,
      x: m.reference,
      y: b("y"),
      z: b("z"),
    };
  }
  const i = Object.hasOwn(o, "error_y") ? b("error_y") : undefined;
  return {
    ...u,
    type: o.type,
    x: m.reference,
    y: b("y"),
    ...(i
      ? {
          errorY: i,
        }
      : {}),
  };
};
const go = (e, t, r, s, a, n) => {
  if (!Array.isArray(e)) {
    return p("/panels", "must be an array.");
  }
  if (e.length < 1 || e.length > Se) {
    p("/panels", `must contain 1 to ${Se} panels.`);
  }
  const o = new Set();
  const d = {
    finalSamples: 0,
    objects: 0,
    points: 0,
    surfaces: 0,
    work: 0,
  };
  let l = 0;
  const u = e.map((m, b) => {
    const i = `/panels/${b}`;
    const c = C(m, i);
    const f = O(c.id, `${i}/id`);
    if (o.has(f)) {
      p(`${i}/id`, `duplicates panel id ${f}.`);
    }
    o.add(f);
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
      A(c, i, ["id", "type", "title", "marks", "view"]);
      if (!Array.isArray(c.marks)) {
        p(`${i}/marks`, "must be an array.");
      }
      const y = c.marks;
      l += y.length;
      if (l > jt) {
        p(`${i}/marks`, `causes the document to exceed ${jt} marks.`);
      }
      const _ = new Set();
      const w = y.map((E, x) => bo(E, `${i}/marks/${x}`, _, s, r, a));
      const S = C(c.view, `${i}/view`);
      A(S, `${i}/view`, ["axes"]);
      return {
        id: f,
        type: "chart",
        title: g,
        marks: w,
        view: {
          axes: yo(S.axes, `${i}/view/axes`),
        },
      };
    }
    return p(`${i}/type`, "must be geometry_2d, geometry_3d, or chart.");
  });
  if (d.finalSamples > Nt) {
    p("/panels", `exceeds the ${Nt}-sample limit.`);
  }
  if (d.surfaces > kt) {
    p("/panels", `exceeds the ${kt}-surface-sample limit.`);
  }
  if (d.work > Ot) {
    p("/panels", `exceeds the ${Ot}-unit work limit.`);
  }
  return {
    panels: u,
    totals: d,
  };
};
const le = (e, t) => me(e)({}, t);
const wo = (e) => {
  const t = C(e, "/");
  A(t, "/", [
    "version",
    "metadata",
    "parameters",
    "constraints",
    "datasets",
    "computations",
    "timeline",
    "panels",
    "layout",
  ]);
  if (t.version !== 1) {
    p("/version", "must be the integer 1.");
  }
  const r = no(t.metadata);
  const s = so(t.parameters);
  const a = {
    value: 0,
  };
  const n = ao(t.constraints, s, a);
  const { datasets: o, totals: d } = co(t.datasets, s, a);
  const l = lo(t.timeline, s, a);
  const u = uo(t.computations, s, l, a);
  const { panels: m, totals: b } = go(t.panels, s, u, o, l, a);
  const i = C(t.layout, "/layout");
  A(i, "/layout", ["type", "columns"]);
  if (i.type !== "grid") {
    p("/layout/type", "must be grid.");
  }
  const c = F(i.columns, "/layout/columns");
  if (c < 1 || c > Se) {
    p("/layout/columns", `must be between 1 and ${Se}.`);
  }
  const f = Object.fromEntries(s.map((w) => [w.id, w.default]));
  for (const w of n) {
    if (me(w.expression)({}, f) !== true) {
      p(
        `/constraints/${w.id}/expression`,
        "must accept the default parameter state.",
      );
    }
  }
  let g = null;
  if (l) {
    const w = le(l.duration, f);
    const S = le(l.speed, f);
    if (!Number.isFinite(w) || w <= 0) {
      p(
        "/timeline/duration",
        "must be positive at the default parameter state.",
      );
    }
    if (!Number.isFinite(S) || S <= 0) {
      p("/timeline/speed", "must be positive at the default parameter state.");
    }
    g = w;
  }
  for (const w of u) {
    if (w.type !== "brownian_bridge_flat_torus") {
      continue;
    }
    const S = le(w.seed, f);
    const E = le(w.diffusion, f);
    const x = w.start.map((v) => le(v, f));
    if (!Number.isSafeInteger(S) || S < 0 || S > 4294967295) {
      p(
        `/computations/${w.id}/seed`,
        "must evaluate to an unsigned 32-bit integer by default.",
      );
    }
    if (!Number.isFinite(E) || E <= 0) {
      p(
        `/computations/${w.id}/diffusion`,
        "must evaluate to a positive number by default.",
      );
    }
    if (g === null || !Number.isFinite(E * g) || E * g <= 0) {
      p(
        `/computations/${w.id}/diffusion`,
        "must have a finite positive product with the default timeline duration.",
      );
    }
    if (!x.every(Number.isFinite)) {
      p(
        `/computations/${w.id}/start`,
        "must evaluate to finite numbers by default.",
      );
    }
  }
  const y = new Map(u.map((w) => [w.id, w]));
  const _ = l
    ? u.reduce((w, S) => {
        if (S.type === "brownian_bridge_flat_torus") {
          return w + S.pathCount * l.steps + (S.windingLimit * 2 + 1) * 2;
        }
        const E = y.get(S.source.computation);
        if (!E || E.type !== "brownian_bridge_flat_torus") {
          throw new Error(`Validated histogram ${S.id} has an invalid source.`);
        }
        return w + E.pathCount * l.steps + l.steps * S.maxBins;
      }, 0)
    : 0;
  if (_ > Pt) {
    p("/computations", `exceeds the ${Pt}-unit simulation work limit.`);
  }
  return {
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
    layout: {
      type: "grid",
      columns: c,
    },
    nodeCount: a.value,
    finalSampleCount: b.finalSamples,
    simulationWorkCount: _,
    hasThreeDimensions: m.some((w) => w.type === "geometry_3d"),
  };
};
const mr = (e) => e.split(";", 1)[0].trim().toLowerCase();
const fr = (e) => e.name.toLowerCase().endsWith(Ee) && mr(e.mimeType) === fe;
const $o = (e) => {
  let t = 0;
  const r = () => {
    while (/\s/.test(e[t] ?? "")) {
      t += 1;
    }
  };
  const s = () => {
    const n = t;
    for (t += 1; t < e.length;) {
      if (e[t] === "\\") {
        t += 2;
        continue;
      }
      if (e[t] === '"') {
        t += 1;
        return JSON.parse(e.slice(n, t));
      }
      t += 1;
    }
    throw new Error("Math Scene attachment contained malformed JSON.");
  };
  const a = () => {
    r();
    const n = e[t];
    if (n === '"') {
      s();
      return;
    }
    if (n === "[") {
      t += 1;
      r();
      if (e[t] === "]") {
        t += 1;
        return;
      }
      while (true) {
        a();
        r();
        if (e[t] === "]") {
          t += 1;
          return;
        }
        t += 1;
      }
    }
    if (n === "{") {
      t += 1;
      const d = new Set();
      r();
      if (e[t] === "}") {
        t += 1;
        return;
      }
      while (true) {
        r();
        const l = s();
        if (d.has(l)) {
          throw new Error(
            `Math Scene attachment contains duplicate object field ${l}.`,
          );
        }
        d.add(l);
        r();
        t += 1;
        a();
        r();
        if (e[t] === "}") {
          t += 1;
          return;
        }
        t += 1;
      }
    }
    const o = e
      .slice(t)
      .match(
        /^(?:-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?|true|false|null)/,
      );
    if (!o) {
      throw new Error("Math Scene attachment contained malformed JSON.");
    }
    t += o[0].length;
  };
  a();
};
const ls = async (e, t) => {
  if (!fr(t)) {
    throw new Error(
      `Math Scene artifacts must use a ${Ee} filename and ${fe} content type.`,
    );
  }
  if (mr(e.type) !== fe) {
    throw new Error(`Math Scene attachment content must use ${fe}.`);
  }
  if (e.size === 0) {
    throw new Error("Math Scene attachment content was empty.");
  }
  if (e.size > St) {
    throw new Error(`Math Scene attachment exceeds the ${St}-byte limit.`);
  }
  if (t.sizeBytes !== null && t.sizeBytes !== e.size) {
    throw new Error(
      `Math Scene attachment size did not match its ${t.sizeBytes}-byte metadata.`,
    );
  }
  let r;
  try {
    r = new TextDecoder("utf-8", {
      fatal: true,
    }).decode(await e.arrayBuffer());
  } catch (a) {
    throw new Error("Math Scene attachment must be valid UTF-8 JSON.", {
      cause: a,
    });
  }
  let s;
  try {
    s = JSON.parse(r);
  } catch (a) {
    throw new Error("Math Scene attachment contained malformed JSON.", {
      cause: a,
    });
  }
  $o(r);
  return wo(s);
};
const xo = new Set(["run_computation", "run_python"]);
const _o = (e) =>
  sr(e)
    ? "plotly"
    : Qt(e)
      ? "graph"
      : fr(e)
        ? "scene"
        : br(e.href ?? "") || e.mimeType.startsWith("image/")
          ? "image"
          : "file";
const Fe = (e, t) =>
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
  }));
const us = (e, t) => (t === "visualization" ? Fe(e) : []);
const ds = (e, t) => (t === "compute" ? Fe(e, xo) : []);
const ps = (e) => {
  const t = new Set((e.toolCalls ?? []).map((r) => r.toolName ?? ""));
  return Fe(e, t);
};
const ms = (e, t) => {
  const r = new Map();
  for (const o of t) {
    r.set(o.key, o);
    if (o.attachmentId) {
      r.set(o.attachmentId, o);
    }
  }
  const s = [];
  const a = new Set();
  const n = [];
  for (const o of e) {
    const d = r.get(o);
    if (!d) {
      n.push(o);
      continue;
    }
    if (!a.has(d.key)) {
      a.add(d.key);
      s.push(d);
    }
  }
  return {
    matchedArtifacts: s,
    missingArtifactRefs: n,
  };
};
const Ao = (e) => ({
  minWidth: 0,
  overflow: "hidden",
  border: `1px solid ${z(e.palette.primary.main, 0.22)}`,
  borderRadius: e.shape.borderRadiusPx,
  backgroundColor: z(e.palette.background.default, 0.58),
  boxShadow: `0 22px 55px ${z(e.palette.common.black, 0.14)}`,
});
const vo = (e) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: e.spacing(1),
  padding: e.spacing(1, 1.35),
  borderBottom: `1px solid ${z(e.palette.primary.main, 0.14)}`,
  color: e.palette.primary.dark,
  background: `linear-gradient(110deg, ${z(e.palette.primary.light, 0.2)}, ${z(e.palette.secondary.light, 0.12)})`,
});
const Eo = (e) => ({
  display: "flex",
  alignItems: "center",
  gap: e.spacing(0.75),
});
const So = (e) => ({
  maxWidth: "100%",
  overflow: "auto",
  padding: e.spacing(1.6, 1.8),
  color: e.palette.codeSource.text,
  backgroundColor: e.palette.codeSource.background,
  "& > pre": {
    minWidth: "max-content",
    margin: 0,
  },
});
const To = (e, t) => {
  const r = URL.createObjectURL(
    new Blob([e], {
      type: "text/x-python;charset=utf-8",
    }),
  );
  const s = document.createElement("a");
  s.href = r;
  s.download = t;
  document.body.appendChild(s);
  s.click();
  s.remove();
  URL.revokeObjectURL(r);
};
const Io = ({ fileName: e, source: t }) => (
  <_Component7
    direction="row"
    spacing={0.8}
    useFlexGap={true}
    sx={{
      flexWrap: "wrap",
    }}
  >
    <Sr
      content={t}
      label="Copy code"
      message="Code copied"
      size="small"
      variant="outlined"
    />
    <Ce
      type="button"
      size="small"
      variant="outlined"
      color="primary"
      startIcon={<Wt size={16} />}
      disableRipple={true}
      onClick={() => {
        To(t, e);
      }}
    >
      Download .py
    </Ce>
  </_Component7>
);
const Co = ({ languageLabel: e, source: t }) => {
  const r = t.split(/\r\n|\r|\n/).length;
  return (
    <P sx={Ao}>
      <P sx={vo}>
        <P sx={Eo}>
          <Tr size={17} />
          <L variant="subtitle2" color="inherit">
            {e}
          </L>
        </P>
        <L variant="caption" color="inherit">
          {r} {r === 1 ? "line" : "lines"}
        </L>
      </P>
      <P sx={So} tabIndex={0}>
        <L variant="code" component="pre" color="inherit">
          {t}
        </L>
      </P>
    </P>
  );
};
const Mo = j.memo(Co);
const jo = (e) => ({
  width: "min(100vw, 54rem)",
  maxWidth: "100vw",
  display: "flex",
  flexDirection: "column",
  backgroundColor: e.palette.background.paper,
  backgroundImage: `linear-gradient(145deg, ${z(e.palette.primary.main, 0.055)}, transparent 36%)`,
});
const Ro = (e) => ({
  flex: "0 0 auto",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: e.spacing(1.5),
  padding: e.spacing(1.8, 2),
  borderBottom: `1px solid ${z(e.palette.text.primary, 0.08)}`,
  [e.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "stretch",
  },
});
const No = {
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
};
const ko = (e) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: e.spacing(0.8),
  [e.breakpoints.down("sm")]: {
    justifyContent: "flex-start",
  },
});
const Oo = (e) => ({
  flex: 1,
  minHeight: 0,
  overflow: "auto",
  padding: e.spacing(2),
});
const Po = ({ fileName: e, source: t }) => {
  const [r, s] = j.useState(false);
  return (
    <h.Fragment>
      <Ce
        type="button"
        size="small"
        variant="outlined"
        color="primary"
        startIcon={<Ir size={16} />}
        disableRipple={true}
        aria-haspopup="dialog"
        aria-expanded={r}
        onClick={() => {
          s(true);
        }}
      >
        View code
      </Ce>
      <Cr
        anchor="right"
        open={r}
        onClose={() => {
          s(false);
        }}
        slotProps={{
          paper: {
            variant: "panel",
            sx: jo,
          },
        }}
        sx={{
          zIndex: 9999,
        }}
      >
        <P sx={Ro}>
          <P sx={No}>
            <L variant="h6" color="textPrimary" noWrap={true}>
              {e}
            </L>
            <L variant="caption" color="textSecondary">
              Exact Python source used to generate this artifact
            </L>
          </P>
          <P sx={ko}>
            <Io fileName={e} source={t} />
            <$r
              tooltip="Close Python source"
              aria-label="Close Python source"
              disableRipple={true}
              onClick={() => {
                s(false);
              }}
            >
              <_Component8 size={18} />
            </$r>
          </P>
        </P>
        <P sx={Oo}>
          <Mo languageLabel="Python" source={t} />
        </P>
      </Cr>
    </h.Fragment>
  );
};
const zo = (e) => {
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
};
const hr = (e) => {
  const t = zo(e);
  const r =
    e.name
      .replace(/[/\\?%*:|"<>]/g, "-")
      .replace(/\s+/g, " ")
      .trim() || "python-artifact";
  if (r.toLowerCase().endsWith(`.${t}`)) {
    return r;
  } else {
    return `${r}.${t}`;
  }
};
const Do = (e) => {
  const t = hr(e);
  if (t.toLowerCase().endsWith(ve)) {
    return `${t.slice(0, -ve.length)}.py`;
  }
  if (t.toLowerCase().endsWith(_e)) {
    return `${t.slice(0, -_e.length)}.py`;
  }
  if (t.toLowerCase().endsWith(Ee)) {
    return `${t.slice(0, -Ee.length)}.py`;
  }
  const r = t.lastIndexOf(".");
  return `${r > 0 ? t.slice(0, r) : t}.py`;
};
const Bt = (e, t) => {
  const r = document.createElement("a");
  r.href = t;
  r.download = hr(e);
  document.body.appendChild(r);
  r.click();
  r.remove();
};
const Ho = (e, t, r) => {
  const [s, a] = j.useState(null);
  const [n, o] = j.useState(false);
  return {
    download: j.useCallback(async () => {
      a(null);
      if (t) {
        Bt(e, t);
        return;
      }
      if (!e.attachmentId) {
        a("Artifact content is unavailable.");
        return;
      }
      o(true);
      try {
        const l = await r();
        const u = URL.createObjectURL(l);
        Bt(e, u);
        window.setTimeout(() => {
          URL.revokeObjectURL(u);
        }, 0);
      } catch (l) {
        a(l instanceof Error ? l.message : "Could not download artifact.");
      } finally {
        o(false);
      }
    }, [e, t, r]),
    downloadError: s,
    isDownloading: n,
  };
};
const Lo = (e, t) => {
  const r = Mr(e.attachmentId, t && !e.href);
  const s = r.objectUrl ?? e.href;
  const { download: a, downloadError: n, isDownloading: o } = Ho(e, s, r.load);
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
};
const fs = (e) => ({
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(2.4),
});
const hs = {
  minWidth: 0,
};
const ys = (e) => ({
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(5),
  paddingTop: e.spacing(1.2),
});
const bs = (e) => ({
  width: "100%",
  minWidth: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(1),
});
const gs = (e) => ({
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
});
const ws = {
  display: "block",
  width: "auto",
  height: "auto",
  maxWidth: "100%",
  maxHeight: "32rem",
  objectFit: "contain",
};
const $s = (e) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: e.spacing(1),
  color: e.palette.text.secondary,
});
const xs = (e) => ({
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(0.8),
});
const Fo = (e) => ({
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: e.spacing(1),
  padding: e.spacing(1.2),
  border: `1px solid ${z(e.palette.text.primary, 0.1)}`,
  borderRadius: e.shape.borderRadiusPx,
  backgroundColor: z(e.palette.background.paper, 0.74),
});
const Bo = (e) => ({
  width: "1.05rem",
  height: "1.05rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "0 0 auto",
  color: e.palette.primary.main,
});
const Uo = (e) => ({
  minWidth: 0,
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: e.spacing(0.45),
});
const Wo = (e) => ({
  width: "100%",
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  gap: e.spacing(0.65),
});
const Xo = (e) => ({
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: e.spacing(0.8),
  alignSelf: "flex-start",
});
const qo = (e) =>
  e === null
    ? null
    : e < 1024
      ? `${e} B`
      : e < 1048576
        ? `${(e / 1024).toFixed(1)} KB`
        : `${(e / 1048576).toFixed(1)} MB`;
const _s = j.memo(function ({
  artifact: t,
  caption: r,
  mathSyntax: s,
  pythonCode: a,
  supportingFileNumber: n,
}) {
  var i;
  var c;
  const o = qo(t.sizeBytes);
  const d = t.kind === "scene";
  const l =
    ((i = t.preview) == null ? undefined : i.kind) === "unavailable"
      ? null
      : t.preview;
  const { artifact: u, download: m, isLoading: b } = Lo(t, false);
  return (
    <_Component10 variant="inset" sx={Fo}>
      <P sx={Uo}>
        <P sx={Wo}>
          <P sx={Bo}>
            {t.kind === "image" && <_Component9 size={16} />}
            {t.kind !== "image" && <Er size={16} />}
          </P>
          <L variant="body2" color="textPrimary" noWrap={true}>
            {t.name}
          </L>
        </P>
        <_Component0
          content={`Supporting file ${n}. ${r}`}
          mathSyntax={s}
          mode="compact"
        />
        <L variant="caption" color="textSecondary" noWrap={true}>
          {[t.mimeType, o].filter(Boolean).join(" · ")}
        </L>
        {t.omittedReason && (
          <L variant="caption" color="error">
            {t.omittedReason}
          </L>
        )}
        {u.contentError && (
          <L variant="caption" color="error">
            {u.contentError}
          </L>
        )}
        {((c = t.preview) == null ? undefined : c.kind) === "unavailable" && (
          <L variant="caption" color="textSecondary">
            Preview unavailable: {t.preview.reason}
          </L>
        )}
        {(!d || l) && (
          <P sx={Xo}>
            {!d && (
              <Ce
                type="button"
                size="small"
                variant="outlined"
                color="primary"
                startIcon={<Wt size={16} />}
                disableRipple={true}
                disabled={b || (!u.attachmentId && !u.href)}
                onClick={() => {
                  m();
                }}
              >
                Download
              </Ce>
            )}
            {!d && a && <Po fileName={Do(t)} source={a} />}
            {l && (
              <_Component1
                preview={l}
                label={`${t.name} data preview`}
                inlineAction={true}
              />
            )}
          </P>
        )}
      </P>
    </_Component10>
  );
});
export {
  Mo as A,
  ze as G,
  _Component9 as I,
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
