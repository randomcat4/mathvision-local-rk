import {
  E as G,
  j as e,
  x as j,
  t as _,
  r as p,
  B as b,
  T as le,
  a6 as X,
  aD as U,
  bp as ce,
  V as de,
} from "./index-BM3ZINIl.js";
import {
  F as pe,
  w as xe,
  x as ue,
  e as he,
  c as me,
  d as fe,
  f as je,
  S as ge,
  p as J,
  h as be,
  g as we,
  i as ke,
  j as ye,
  k as Ee,
  u as Fe,
  l as Re,
  E as Le,
  n as Ce,
  m as ve,
  o as Te,
  y as Se,
  s as Pe,
  b as Me,
  z as De,
  v as Ie,
  B as Ae,
  r as ze,
  t as Be,
} from "./SidebarTreeConnector-DsRNfBIo.js";
import { u as $e } from "./useIsMobile-SdtLFChL.js";
import { M as Xe } from "./MChip-DiH8NXBU.js";
import { a as Oe } from "./file-input-BGVdGffy.js";
import { F as N, P as _e } from "./MarkdownHighlights-C-ZhT8z1.js";
import { a as Ne, c as We } from "./CopyButton-BcOsqrNJ.js";
import { b as Ke } from "./TextField-D8vc_sXz.js";
import { L as g } from "./ListItemIcon-CaLBil7Q.js";
import { F as Ve } from "./file-plus-_oOf3yl8.js";
import { D as He } from "./Divider-BcuihGce.js";
import { a as Ye } from "./useResizablePanelValue-D_NwbF9E.js";
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qe = [
    [
      "path",
      {
        d: "M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5",
        key: "4pqfef",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M8 12v-1", key: "1ej8lb" }],
    ["path", { d: "M8 18v-2", key: "qcmpov" }],
    ["path", { d: "M8 7V6", key: "1nbb54" }],
    ["circle", { cx: "8", cy: "20", r: "2", key: "ckkr5m" }],
  ],
  Ue = G("file-archive", qe);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ge = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  Je = G("star", Ge),
  O = (r, n) => r.localeCompare(n, void 0, { numeric: !0, sensitivity: "base" }),
  Qe = (r, n, o) => {
    const t = r.path.split("/"),
      i = n.path.split("/"),
      a = t.length === 1 && r.kind !== "folder",
      s = i.length === 1 && n.kind !== "folder";
    return a && s
      ? r.path === o
        ? -1
        : n.path === o
          ? 1
          : O(r.path, n.path)
      : a
        ? -1
        : s
          ? 1
          : O(t[0], i[0]) || O(r.path, n.path);
  },
  Ze = (r) => r.split("/").at(-1) ?? r,
  Q = (r) => {
    const n = r.lastIndexOf("/");
    return n === -1 ? "" : r.slice(0, n);
  },
  et = (r) => {
    const n = r.split("/");
    return n.slice(0, -1).map((o, t) => n.slice(0, t + 1).join("/"));
  },
  tt = (r, n) => {
    const o = [...r].sort((a, s) => Qe(a, s, n)),
      t = new Map();
    for (const a of o) {
      if (t.has(a.path)) throw new Error(`Duplicate LaTeX project path '${a.path}'.`);
      t.set(a.path, { children: [], file: a });
    }
    const i = [];
    for (const a of o) {
      const s = t.get(a.path);
      if (!s) throw new Error(`Missing LaTeX project tree node '${a.path}'.`);
      const d = Q(a.path);
      if (!d) {
        i.push(s);
        continue;
      }
      const c = t.get(d);
      if (!c) throw new Error(`LaTeX project item '${a.path}' is missing folder '${d}'.`);
      if (c.file.kind !== "folder") throw new Error(`LaTeX project path '${d}' isn't a folder.`);
      c.children.push(s);
    }
    return i;
  },
  rt = ({ file: r, isExpanded: n }) => {
    var o;
    return r.kind === "folder"
      ? n
        ? e.jsx(pe, { size: 16 })
        : e.jsx(xe, { size: 16 })
      : r.kind === "binary" && (o = r.contentType) != null && o.startsWith("image/")
        ? e.jsx(Oe, { size: 16 })
        : r.path.toLowerCase().endsWith(".pdf")
          ? e.jsx(N, { size: 16 })
          : r.path.toLowerCase().endsWith(".zip")
            ? e.jsx(Ue, { size: 16 })
            : r.kind === "text"
              ? e.jsx(N, { size: 16 })
              : e.jsx(ue, { size: 16 });
  },
  nt = ({
    actionsButtonId: r,
    actionsMenuId: n,
    anchorEl: o,
    canManage: t,
    contextMenuPosition: i,
    file: a,
    isExpanded: s,
    isOpen: d,
    isPending: c,
    isSelected: w,
    mainFilePath: k,
    name: L,
    onClose: h,
    onCreate: u,
    onDelete: m,
    onMove: C,
    onRename: M,
    onSelect: z,
    onSetMain: D,
    onToggleFolder: v,
  }) => {
    const y = a.kind === "folder",
      E = a.path === k,
      R = y && (k == null ? void 0 : k.startsWith(`${a.path}/`)) === !0;
    return e.jsxs(Ke, {
      id: n,
      open: d,
      anchorEl: i ? null : o,
      anchorPosition: i ?? void 0,
      anchorReference: i ? "anchorPosition" : "anchorEl",
      sx: je,
      slotProps: {
        list: { "aria-labelledby": r, sx: fe },
        paper: {
          "aria-label": "LaTeX project item actions",
          variant: "floating",
          sx: [he, i && me],
        },
      },
      onContextMenu: (f) => {
        Ee(f, h);
      },
      onClose: h,
      onClick: (f) => {
        f.stopPropagation();
      },
      children: [
        e.jsx(ge, { kind: y ? "folder" : "file", title: L }),
        !y &&
          !w &&
          e.jsxs(j, {
            dense: !0,
            disabled: c,
            onClick: () => {
              (h(), z(a));
            },
            children: [e.jsx(g, { children: e.jsx(N, { size: 16 }) }), "Open file"],
          }),
        y &&
          e.jsxs(j, {
            dense: !0,
            onClick: () => {
              (h(), v());
            },
            children: [
              e.jsx(g, { children: e.jsx(J, { isExpanded: s, size: 16 }) }),
              s && "Collapse folder",
              !s && "Expand folder",
            ],
          }),
        t &&
          y &&
          e.jsxs(e.Fragment, {
            children: [
              e.jsxs(j, {
                dense: !0,
                disabled: c,
                onClick: () => {
                  if ((h(), !u))
                    throw new Error("File creation actions are unavailable in this tree.");
                  u("text", a.path);
                },
                children: [e.jsx(g, { children: e.jsx(Ve, { size: 16 }) }), "New file here"],
              }),
              e.jsxs(j, {
                dense: !0,
                disabled: c,
                onClick: () => {
                  if ((h(), !u))
                    throw new Error("Folder creation actions are unavailable in this tree.");
                  u("folder", a.path);
                },
                children: [e.jsx(g, { children: e.jsx(be, { size: 16 }) }), "New folder here"],
              }),
            ],
          }),
        t &&
          a.kind === "text" &&
          a.path.toLowerCase().endsWith(".tex") &&
          !E &&
          e.jsxs(j, {
            dense: !0,
            disabled: c,
            onClick: () => {
              if ((h(), !D)) throw new Error("Main file actions are unavailable in this tree.");
              D(a);
            },
            children: [e.jsx(g, { children: e.jsx(Je, { size: 16 }) }), "Set as main document"],
          }),
        t &&
          e.jsxs(e.Fragment, {
            children: [
              e.jsxs(j, {
                dense: !0,
                disabled: c,
                onClick: M,
                children: [e.jsx(g, { children: e.jsx(_e, { size: 16 }) }), "Rename"],
              }),
              e.jsxs(j, {
                dense: !0,
                disabled: c,
                onClick: () => {
                  if ((h(), !C)) throw new Error("File move actions are unavailable in this tree.");
                  C(a);
                },
                children: [e.jsx(g, { children: e.jsx(we, { size: 16 }) }), "Move…"],
              }),
            ],
          }),
        e.jsxs(j, {
          dense: !0,
          onClick: () => {
            (h(),
              We(a.path).then((f) => {
                f && _.success("Project path copied.");
              }));
          },
          children: [e.jsx(g, { children: e.jsx(Ne, { size: 16 }) }), "Copy project path"],
        }),
        t &&
          e.jsxs(e.Fragment, {
            children: [
              e.jsx(He, {}),
              e.jsxs(j, {
                dense: !0,
                disabled: c || E || R,
                sx: ke,
                onClick: () => {
                  if ((h(), !m))
                    throw new Error("File delete actions are unavailable in this tree.");
                  m(a);
                },
                children: [
                  e.jsx(g, { children: e.jsx(ye, { size: 16 }) }),
                  E && "Delete (main document)",
                  R && "Delete (contains main document)",
                  !E && !R && "Delete",
                ],
              }),
            ],
          }),
      ],
    });
  },
  at = (r, n) => (o) => ({
    ...Ie({ isContextMenuOpen: r, isSelected: n })(o),
    display: "flex",
    alignItems: "center",
    color: n ? o.palette.primary.main : o.palette.text.primary,
    "& > .latex-file-row-actions": { opacity: 0, pointerEvents: "none" },
    "&:hover > .latex-file-row-actions": { opacity: 1, pointerEvents: "auto" },
  }),
  A = {
    width: "100%",
    flex: 1,
    minWidth: 0,
    minHeight: "2rem",
    display: "flex",
    alignItems: "center",
    gap: 0.7,
    padding: 0,
    paddingRight: "2rem",
    color: "inherit",
    textAlign: "left",
  },
  ot = {
    width: 14,
    flex: "0 0 14px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  st = (r) => (n) => ({
    flex: "0 0 auto",
    display: "inline-flex",
    alignItems: "center",
    color: r ? n.palette.primary.main : "inherit",
  }),
  it = {
    width: "100%",
    flex: 1,
    minWidth: 0,
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    overflow: "hidden",
  },
  lt = { ...Pe, right: "0.25rem", zIndex: 2 },
  ct = p.memo(function ({
    allowSingleClickRename: n,
    canManage: o = !0,
    file: t,
    isExpanded: i,
    itemCount: a,
    isPending: s,
    isSelected: d,
    mainFilePath: c,
    onCreate: w,
    onDelete: k,
    onMove: L,
    onRename: h,
    onSelect: u,
    onSetMain: m,
    onToggleFolder: C,
  }) {
    const M = $e(),
      { density: z } = Fe(),
      D = ve[z],
      v = p.useRef(null),
      [y, E] = p.useState(null),
      [R, f] = p.useState(null),
      T = !!(y || R),
      W = R !== null,
      F = t.kind === "folder",
      re = t.path === c,
      S = Ze(t.path);
    if (F !== (a !== null))
      throw new Error(`LaTeX project folder count does not match item '${t.path}'.`);
    const ne = a === 1 ? "item" : "items",
      K = `latex-file-actions-button-${t.id}`,
      V = `latex-file-actions-${t.id}`,
      B = p.useCallback(() => {
        (E(null), f(null));
      }, []),
      $ = p.useCallback(() => {
        if (!v.current) throw new Error(`LaTeX project item actions are missing for '${t.path}'.`);
        (f(null), E(v.current));
      }, [t.path]),
      H = p.useCallback(() => {
        C(t.path);
      }, [t.path, C]),
      ae = p.useCallback(
        async (l) => {
          if (!o || !h) throw new Error("File rename actions are unavailable in this tree.");
          const P = l.trim();
          if (!P) return (_.error("Project item name must not be blank."), !1);
          if (P.includes("/") || P.includes("\\"))
            return (_.error("Use Move to change this item's project folder."), !1);
          const Y = Q(t.path),
            q = Y ? `${Y}/${P}` : P;
          return q === t.path ? !0 : h(t, q);
        },
        [o, t, h],
      ),
      x = Re({
        isLabelActive: o && !M,
        isPending: s,
        isSingleClickRenameEnabled: d || n,
        value: S,
        onRename: ae,
      }),
      oe = p.useCallback(
        (l) => {
          x.isRenaming ||
            (l.preventDefault(),
            l.stopPropagation(),
            E(null),
            f({ left: l.clientX + 8, top: l.clientY + 8 }));
        },
        [x.isRenaming],
      ),
      se = p.useCallback(
        (l) => {
          x.handleRenameKeyDown(l) ||
            (l.key !== "ContextMenu" && !(l.shiftKey && l.key === "F10")) ||
            (l.preventDefault(), l.stopPropagation(), $());
        },
        [x, $],
      ),
      ie = p.useCallback(
        (l) => {
          if (s) {
            l.preventDefault();
            return;
          }
          l.defaultPrevented ||
            l.button !== 0 ||
            l.metaKey ||
            l.ctrlKey ||
            l.shiftKey ||
            l.altKey ||
            (l.preventDefault(), d || u(t));
        },
        [t, s, d, u],
      ),
      I = e.jsxs(e.Fragment, {
        children: [
          F &&
            e.jsx(b, {
              "aria-hidden": "true",
              "data-slot": "latex-file-tree-toggle",
              sx: ot,
              children: e.jsx(J, { isExpanded: i, size: 14 }),
            }),
          e.jsx(b, {
            "aria-hidden": "true",
            sx: st(F),
            children: e.jsx(rt, { file: t, isExpanded: i }),
          }),
          e.jsxs(b, {
            sx: it,
            children: [
              x.isRenaming &&
                e.jsx(Le, {
                  ariaLabel: `Rename ${S}`,
                  isPending: s,
                  value: x.renameDraft,
                  onCancel: x.cancelRename,
                  onChange: x.setRenameDraft,
                  onSubmit: x.submitRename,
                }),
              !x.isRenaming &&
                e.jsx(Ce, {
                  isEnabled: o && !M && !s,
                  onClick: x.handleLabelClick,
                  onDoubleClick: x.handleLabelDoubleClick,
                  children: e.jsx(le, { variant: D.labelVariant, noWrap: !0, children: S }),
                }),
              F && e.jsx(Te, { detail: `${a} ${ne}`, timestamp: t.lastUpdated }),
              !F && e.jsx(Se, { timestamp: t.lastUpdated }),
            ],
          }),
          re && e.jsx(Xe, { size: "small", color: "primary", label: "Main" }),
        ],
      });
    return e.jsxs(b, {
      "data-actions-open": T ? "true" : void 0,
      "data-context-menu-open": W ? "true" : void 0,
      "data-inline-renaming": x.isRenaming ? "true" : void 0,
      sx: at(W, d),
      onKeyDown: se,
      onContextMenu: oe,
      children: [
        x.isRenaming && e.jsx(b, { sx: A, children: I }),
        !x.isRenaming &&
          F &&
          e.jsx(X, {
            title: t.path,
            children: e.jsx(U, { "aria-expanded": i, sx: A, onClick: H, children: I }),
          }),
        !x.isRenaming &&
          !F &&
          t.kind === "text" &&
          e.jsx(X, {
            title: t.path,
            children: e.jsx(ce, {
              "aria-current": d ? "page" : void 0,
              "aria-disabled": s ? !0 : void 0,
              tabIndex: s ? -1 : void 0,
              to: "/chats",
              search: {
                "workspace-panel": "latex",
                "latex-document-id": t.documentId,
                "latex-file-id": t.id,
              },
              sx: A,
              onClick: ie,
              children: I,
            }),
          }),
        !x.isRenaming &&
          !F &&
          t.kind !== "text" &&
          e.jsx(X, {
            title: t.path,
            children: e.jsx(U, {
              "aria-current": d ? "page" : void 0,
              sx: A,
              onClick: () => {
                u(t);
              },
              children: I,
            }),
          }),
        !x.isRenaming &&
          e.jsx(b, {
            className: "latex-file-row-actions",
            sx: lt,
            children: e.jsx(de, {
              ref: v,
              id: K,
              "data-sidebar-row-action-trigger": "true",
              "aria-label": `Actions for ${S}`,
              "aria-controls": T ? V : void 0,
              "aria-expanded": T ? !0 : void 0,
              "aria-haspopup": "menu",
              sx: Me,
              onClick: (l) => {
                if ((l.preventDefault(), l.stopPropagation(), T)) {
                  B();
                  return;
                }
                $();
              },
              children: e.jsx(De, { size: 15 }),
            }),
          }),
        e.jsx(nt, {
          actionsButtonId: K,
          actionsMenuId: V,
          anchorEl: y,
          canManage: o,
          contextMenuPosition: R,
          file: t,
          isExpanded: i,
          isOpen: T,
          isPending: s,
          isSelected: d,
          mainFilePath: c,
          name: S,
          onClose: B,
          onCreate: w,
          onDelete: k,
          onMove: L,
          onRename: () => {
            (B(), x.beginRename());
          },
          onSelect: u,
          onSetMain: m,
          onToggleFolder: H,
        }),
      ],
    });
  }),
  Z = (r) => ({
    ...Ae(r),
    listStyle: "none",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
  }),
  dt = {
    width: "100%",
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.125rem",
    position: "relative",
    "--sidebar-explorer-tree-guide-offset": "0.6625rem",
  },
  ee = ({ allowSingleClickRename: r, node: n, selectedFilePath: o, tree: t }) => {
    const { file: i } = n,
      a = i.kind === "folder",
      s = a && t.expandedFolderPaths.has(i.path),
      d = i.id === t.selectedFileId,
      c = d || (a && (o == null ? void 0 : o.startsWith(`${i.path}/`)) === !0);
    return e.jsxs(b, {
      component: "li",
      "data-active-explorer-path": c ? "true" : void 0,
      sx: dt,
      children: [
        e.jsx(ct, {
          canManage: t.canManage,
          file: i,
          isExpanded: s,
          itemCount: a ? n.children.length : null,
          isPending: t.isPending,
          isSelected: d,
          allowSingleClickRename: r,
          mainFilePath: t.mainFilePath,
          onCreate: t.onCreate,
          onDelete: t.onDelete,
          onToggleFolder: t.onToggleFolder,
          onMove: t.onMove,
          onRename: t.onRename,
          onSelect: t.onSelect,
          onSetMain: t.onSetMain,
        }),
        a &&
          n.children.length > 0 &&
          e.jsxs(e.Fragment, {
            children: [
              e.jsx(ze, { gap: "0.125rem", isExpanded: s, isInActivePath: c }),
              e.jsx(Be, {
                isExpanded: s,
                children: e.jsx(b, {
                  component: "ul",
                  sx: Z,
                  children: n.children.map((w) =>
                    e.jsx(
                      ee,
                      { allowSingleClickRename: !1, node: w, selectedFilePath: o, tree: t },
                      w.file.id,
                    ),
                  ),
                }),
              }),
            ],
          }),
      ],
    });
  },
  Ct = p.memo(function ({
    allowRootItemSingleClickRename: n = !1,
    ariaLabel: o,
    expandedFolderPaths: t,
    files: i,
    onExpandedFolderPathsChange: a,
    ...s
  }) {
    var h;
    const d = p.useRef(t),
      c = p.useRef(a);
    ((d.current = t), (c.current = a));
    const w = p.useCallback((u) => {
        const m = new Set(d.current);
        (m.has(u) ? m.delete(u) : m.add(u), c.current(m));
      }, []),
      k = p.useMemo(() => tt(i, s.mainFilePath), [i, s.mainFilePath]),
      L = ((h = i.find((u) => u.id === s.selectedFileId)) == null ? void 0 : h.path) ?? null;
    return e.jsx(b, {
      component: "ul",
      "aria-label": o,
      sx: Z,
      children: k.map((u) =>
        e.jsx(
          ee,
          {
            allowSingleClickRename: n,
            node: u,
            selectedFilePath: L,
            tree: { ...s, expandedFolderPaths: t, onToggleFolder: w },
          },
          u.file.id,
        ),
      ),
    });
  }),
  pt = "workspace-explorer-latex-expanded-folder-paths",
  xt = {},
  vt = (r, n) => {
    if (!n) return r;
    const o = et(n);
    return o.every((t) => r.has(t)) ? r : new Set([...r, ...o]);
  },
  ut = (r) => {
    const n = JSON.parse(r);
    if (!n || typeof n != "object" || Array.isArray(n))
      throw new Error("Saved expanded LaTeX folder paths are invalid.");
    const o = {};
    for (const [t, i] of Object.entries(n)) {
      if (!Array.isArray(i) || !i.every((a) => typeof a == "string"))
        throw new Error(`Saved expanded folders for LaTeX project '${t}' are invalid.`);
      o[t] = new Set(i);
    }
    return o;
  },
  ht = (r) => JSON.stringify(Object.fromEntries(Object.entries(r).map(([n, o]) => [n, [...o]]))),
  te = p.createContext(null),
  Tt = ({ children: r }) => {
    const { value: n, updateValue: o } = Ye({
        storageKey: pt,
        defaultValue: xt,
        parse: ut,
        serialize: ht,
        readErrorMessage: "Could not read the saved expanded LaTeX folders.",
        writeErrorMessage: "Could not save the expanded LaTeX folders.",
      }),
      t = p.useCallback(
        (a, s) => {
          o((d) => {
            const c = { ...d };
            return (s.size > 0 ? (c[a] = s) : delete c[a], c);
          });
        },
        [o],
      ),
      i = p.useMemo(
        () => ({ expandedFolderPathsByDocument: n, setExpandedFolderPaths: t }),
        [n, t],
      );
    return e.jsx(te.Provider, { value: i, children: r });
  },
  St = () => {
    const r = p.useContext(te);
    if (!r) throw new Error("LaTeX project folder expansion requires its workspace provider.");
    return r;
  };
export { Ue as F, Ct as L, Tt as a, vt as g, St as u };
