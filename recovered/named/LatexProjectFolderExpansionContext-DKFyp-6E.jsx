import {
  E as G,
  j as e,
  x as _Component6,
  t as _,
  r as p,
  B as _Component0,
  T as _Component10,
  a6 as X,
  aD as U,
  bp as _Component11,
  V as _Component12,
} from "./index-BM3ZINIl.js";
import {
  F as _Component,
  w as _Component2,
  x as _Component3,
  e as he,
  c as me,
  d as fe,
  f as je,
  S as _Component4,
  p as J,
  h as _Component7,
  g as _Component8,
  i as ke,
  j as _Component9,
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
  r as _Component15,
  t as Be,
} from "./SidebarTreeConnector-DsRNfBIo.js";
import { u as $e } from "./useIsMobile-SdtLFChL.js";
import { M as Xe } from "./MChip-DiH8NXBU.js";
import { a as Oe } from "./file-input-BGVdGffy.js";
import { F as N, P as _e } from "./MarkdownHighlights-C-ZhT8z1.js";
import { a as Ne, c as We } from "./CopyButton-BcOsqrNJ.js";
import { b as Ke } from "./TextField-D8vc_sXz.js";
import { L as _Component5 } from "./ListItemIcon-CaLBil7Q.js";
import { F as Ve } from "./file-plus-_oOf3yl8.js";
import { D as He } from "./Divider-BcuihGce.js";
import { a as Ye } from "./useResizablePanelValue-D_NwbF9E.js";
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = [
  [
    "path",
    {
      d: "M13.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v11.5",
      key: "4pqfef",
    },
  ],
  [
    "path",
    {
      d: "M14 2v5a1 1 0 0 0 1 1h5",
      key: "wfsgrz",
    },
  ],
  [
    "path",
    {
      d: "M8 12v-1",
      key: "1ej8lb",
    },
  ],
  [
    "path",
    {
      d: "M8 18v-2",
      key: "qcmpov",
    },
  ],
  [
    "path",
    {
      d: "M8 7V6",
      key: "1nbb54",
    },
  ],
  [
    "circle",
    {
      cx: "8",
      cy: "20",
      r: "2",
      key: "ckkr5m",
    },
  ],
];
const Ue = G("file-archive", qe);
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s",
    },
  ],
];
const Je = G("star", Ge);
const O = (r, n) =>
  r.localeCompare(n, undefined, {
    numeric: true,
    sensitivity: "base",
  });
const Qe = (r, n, o) => {
  const t = r.path.split("/");
  const i = n.path.split("/");
  const a = t.length === 1 && r.kind !== "folder";
  const s = i.length === 1 && n.kind !== "folder";
  if (a && s) {
    if (r.path === o) {
      return -1;
    } else if (n.path === o) {
      return 1;
    } else {
      return O(r.path, n.path);
    }
  } else if (a) {
    return -1;
  } else if (s) {
    return 1;
  } else {
    return O(t[0], i[0]) || O(r.path, n.path);
  }
};
const Ze = (r) => r.split("/").at(-1) ?? r;
const Q = (r) => {
  const n = r.lastIndexOf("/");
  if (n === -1) {
    return "";
  } else {
    return r.slice(0, n);
  }
};
const et = (r) => {
  const n = r.split("/");
  return n.slice(0, -1).map((o, t) => n.slice(0, t + 1).join("/"));
};
const tt = (r, n) => {
  const o = [...r].sort((a, s) => Qe(a, s, n));
  const t = new Map();
  for (const a of o) {
    if (t.has(a.path)) {
      throw new Error(`Duplicate LaTeX project path '${a.path}'.`);
    }
    t.set(a.path, {
      children: [],
      file: a,
    });
  }
  const i = [];
  for (const a of o) {
    const s = t.get(a.path);
    if (!s) {
      throw new Error(`Missing LaTeX project tree node '${a.path}'.`);
    }
    const d = Q(a.path);
    if (!d) {
      i.push(s);
      continue;
    }
    const c = t.get(d);
    if (!c) {
      throw new Error(
        `LaTeX project item '${a.path}' is missing folder '${d}'.`,
      );
    }
    if (c.file.kind !== "folder") {
      throw new Error(`LaTeX project path '${d}' isn't a folder.`);
    }
    c.children.push(s);
  }
  return i;
};
const _Component1 = ({ file: r, isExpanded: n }) => {
  var o;
  if (r.kind === "folder") {
    if (n) {
      return <_Component size={16} />;
    } else {
      return <_Component2 size={16} />;
    }
  } else if (
    r.kind === "binary" &&
    (o = r.contentType) != null &&
    o.startsWith("image/")
  ) {
    return <Oe size={16} />;
  } else if (r.path.toLowerCase().endsWith(".pdf")) {
    return <N size={16} />;
  } else if (r.path.toLowerCase().endsWith(".zip")) {
    return <Ue size={16} />;
  } else if (r.kind === "text") {
    return <N size={16} />;
  } else {
    return <_Component3 size={16} />;
  }
};
const _Component13 = ({
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
  const y = a.kind === "folder";
  const E = a.path === k;
  const R = y && (k == null ? undefined : k.startsWith(`${a.path}/`)) === true;
  return (
    <Ke
      id={n}
      open={d}
      anchorEl={i ? null : o}
      anchorPosition={i ?? undefined}
      anchorReference={i ? "anchorPosition" : "anchorEl"}
      sx={je}
      slotProps={{
        list: {
          "aria-labelledby": r,
          sx: fe,
        },
        paper: {
          "aria-label": "LaTeX project item actions",
          variant: "floating",
          sx: [he, i && me],
        },
      }}
      onContextMenu={(f) => {
        Ee(f, h);
      }}
      onClose={h}
      onClick={(f) => {
        f.stopPropagation();
      }}
    >
      <_Component4 kind={y ? "folder" : "file"} title={L} />
      {!y && !w && (
        <_Component6
          dense={true}
          disabled={c}
          onClick={() => {
            h();
            z(a);
          }}
        >
          <_Component5>
            <N size={16} />
          </_Component5>
          Open file
        </_Component6>
      )}
      {y && (
        <_Component6
          dense={true}
          onClick={() => {
            h();
            v();
          }}
        >
          <_Component5>
            <J isExpanded={s} size={16} />
          </_Component5>
          {s && "Collapse folder"}
          {!s && "Expand folder"}
        </_Component6>
      )}
      {t && y && (
        <e.Fragment>
          <_Component6
            dense={true}
            disabled={c}
            onClick={() => {
              h();
              if (!u) {
                throw new Error(
                  "File creation actions are unavailable in this tree.",
                );
              }
              u("text", a.path);
            }}
          >
            <_Component5>
              <Ve size={16} />
            </_Component5>
            New file here
          </_Component6>
          <_Component6
            dense={true}
            disabled={c}
            onClick={() => {
              h();
              if (!u) {
                throw new Error(
                  "Folder creation actions are unavailable in this tree.",
                );
              }
              u("folder", a.path);
            }}
          >
            <_Component5>
              <_Component7 size={16} />
            </_Component5>
            New folder here
          </_Component6>
        </e.Fragment>
      )}
      {t &&
        a.kind === "text" &&
        a.path.toLowerCase().endsWith(".tex") &&
        !E && (
          <_Component6
            dense={true}
            disabled={c}
            onClick={() => {
              h();
              if (!D) {
                throw new Error(
                  "Main file actions are unavailable in this tree.",
                );
              }
              D(a);
            }}
          >
            <_Component5>
              <Je size={16} />
            </_Component5>
            Set as main document
          </_Component6>
        )}
      {t && (
        <e.Fragment>
          <_Component6 dense={true} disabled={c} onClick={M}>
            <_Component5>
              <_e size={16} />
            </_Component5>
            Rename
          </_Component6>
          <_Component6
            dense={true}
            disabled={c}
            onClick={() => {
              h();
              if (!C) {
                throw new Error(
                  "File move actions are unavailable in this tree.",
                );
              }
              C(a);
            }}
          >
            <_Component5>
              <_Component8 size={16} />
            </_Component5>
            Move…
          </_Component6>
        </e.Fragment>
      )}
      <_Component6
        dense={true}
        onClick={() => {
          h();
          We(a.path).then((f) => {
            if (f) {
              _.success("Project path copied.");
            }
          });
        }}
      >
        <_Component5>
          <Ne size={16} />
        </_Component5>
        Copy project path
      </_Component6>
      {t && (
        <e.Fragment>
          <He />
          <_Component6
            dense={true}
            disabled={c || E || R}
            sx={ke}
            onClick={() => {
              h();
              if (!m) {
                throw new Error(
                  "File delete actions are unavailable in this tree.",
                );
              }
              m(a);
            }}
          >
            <_Component5>
              <_Component9 size={16} />
            </_Component5>
            {E && "Delete (main document)"}
            {R && "Delete (contains main document)"}
            {!E && !R && "Delete"}
          </_Component6>
        </e.Fragment>
      )}
    </Ke>
  );
};
const at = (r, n) => (o) => ({
  ...Ie({
    isContextMenuOpen: r,
    isSelected: n,
  })(o),
  display: "flex",
  alignItems: "center",
  color: n ? o.palette.primary.main : o.palette.text.primary,
  "& > .latex-file-row-actions": {
    opacity: 0,
    pointerEvents: "none",
  },
  "&:hover > .latex-file-row-actions": {
    opacity: 1,
    pointerEvents: "auto",
  },
});
const A = {
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
};
const ot = {
  width: 14,
  flex: "0 0 14px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};
const st = (r) => (n) => ({
  flex: "0 0 auto",
  display: "inline-flex",
  alignItems: "center",
  color: r ? n.palette.primary.main : "inherit",
});
const it = {
  width: "100%",
  flex: 1,
  minWidth: 0,
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  overflow: "hidden",
};
const lt = {
  ...Pe,
  right: "0.25rem",
  zIndex: 2,
};
const _Component14 = p.memo(function ({
  allowSingleClickRename: n,
  canManage: o = true,
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
  const M = $e();
  const { density: z } = Fe();
  const D = ve[z];
  const v = p.useRef(null);
  const [y, E] = p.useState(null);
  const [R, f] = p.useState(null);
  const T = !!y || !!R;
  const W = R !== null;
  const F = t.kind === "folder";
  const re = t.path === c;
  const S = Ze(t.path);
  if (F !== (a !== null)) {
    throw new Error(
      `LaTeX project folder count does not match item '${t.path}'.`,
    );
  }
  const ne = a === 1 ? "item" : "items";
  const K = `latex-file-actions-button-${t.id}`;
  const V = `latex-file-actions-${t.id}`;
  const B = p.useCallback(() => {
    E(null);
    f(null);
  }, []);
  const $ = p.useCallback(() => {
    if (!v.current) {
      throw new Error(
        `LaTeX project item actions are missing for '${t.path}'.`,
      );
    }
    f(null);
    E(v.current);
  }, [t.path]);
  const H = p.useCallback(() => {
    C(t.path);
  }, [t.path, C]);
  const ae = p.useCallback(
    async (l) => {
      if (!o || !h) {
        throw new Error("File rename actions are unavailable in this tree.");
      }
      const P = l.trim();
      if (!P) {
        _.error("Project item name must not be blank.");
        return false;
      }
      if (P.includes("/") || P.includes("\\")) {
        _.error("Use Move to change this item's project folder.");
        return false;
      }
      const Y = Q(t.path);
      const q = Y ? `${Y}/${P}` : P;
      if (q === t.path) {
        return true;
      } else {
        return h(t, q);
      }
    },
    [o, t, h],
  );
  const x = Re({
    isLabelActive: o && !M,
    isPending: s,
    isSingleClickRenameEnabled: d || n,
    value: S,
    onRename: ae,
  });
  const oe = p.useCallback(
    (l) => {
      if (!x.isRenaming) {
        l.preventDefault();
        l.stopPropagation();
        E(null);
        f({
          left: l.clientX + 8,
          top: l.clientY + 8,
        });
      }
    },
    [x.isRenaming],
  );
  const se = p.useCallback(
    (l) => {
      if (
        !x.handleRenameKeyDown(l) &&
        (l.key === "ContextMenu" || (!!l.shiftKey && l.key === "F10"))
      ) {
        l.preventDefault();
        l.stopPropagation();
        $();
      }
    },
    [x, $],
  );
  const ie = p.useCallback(
    (l) => {
      if (s) {
        l.preventDefault();
        return;
      }
      if (
        !l.defaultPrevented &&
        l.button === 0 &&
        !l.metaKey &&
        !l.ctrlKey &&
        !l.shiftKey &&
        !l.altKey
      ) {
        l.preventDefault();
        if (!d) {
          u(t);
        }
      }
    },
    [t, s, d, u],
  );
  const I = (
    <e.Fragment>
      {F && (
        <_Component0
          aria-hidden="true"
          data-slot="latex-file-tree-toggle"
          sx={ot}
        >
          <J isExpanded={i} size={14} />
        </_Component0>
      )}
      <_Component0 aria-hidden="true" sx={st(F)}>
        <_Component1 file={t} isExpanded={i} />
      </_Component0>
      <_Component0 sx={it}>
        {x.isRenaming && (
          <Le
            ariaLabel={`Rename ${S}`}
            isPending={s}
            value={x.renameDraft}
            onCancel={x.cancelRename}
            onChange={x.setRenameDraft}
            onSubmit={x.submitRename}
          />
        )}
        {!x.isRenaming && (
          <Ce
            isEnabled={o && !M && !s}
            onClick={x.handleLabelClick}
            onDoubleClick={x.handleLabelDoubleClick}
          >
            <_Component10 variant={D.labelVariant} noWrap={true}>
              {S}
            </_Component10>
          </Ce>
        )}
        {F && <Te detail={`${a} ${ne}`} timestamp={t.lastUpdated} />}
        {!F && <Se timestamp={t.lastUpdated} />}
      </_Component0>
      {re && <Xe size="small" color="primary" label="Main" />}
    </e.Fragment>
  );
  return (
    <_Component0
      data-actions-open={T ? "true" : undefined}
      data-context-menu-open={W ? "true" : undefined}
      data-inline-renaming={x.isRenaming ? "true" : undefined}
      sx={at(W, d)}
      onKeyDown={se}
      onContextMenu={oe}
    >
      {x.isRenaming && <_Component0 sx={A}>{I}</_Component0>}
      {!x.isRenaming && F && (
        <X title={t.path}>
          <U aria-expanded={i} sx={A} onClick={H}>
            {I}
          </U>
        </X>
      )}
      {!x.isRenaming && !F && t.kind === "text" && (
        <X title={t.path}>
          <_Component11
            aria-current={d ? "page" : undefined}
            aria-disabled={s ? true : undefined}
            tabIndex={s ? -1 : undefined}
            to="/chats"
            search={{
              "workspace-panel": "latex",
              "latex-document-id": t.documentId,
              "latex-file-id": t.id,
            }}
            sx={A}
            onClick={ie}
          >
            {I}
          </_Component11>
        </X>
      )}
      {!x.isRenaming && !F && t.kind !== "text" && (
        <X title={t.path}>
          <U
            aria-current={d ? "page" : undefined}
            sx={A}
            onClick={() => {
              u(t);
            }}
          >
            {I}
          </U>
        </X>
      )}
      {!x.isRenaming && (
        <_Component0 className="latex-file-row-actions" sx={lt}>
          <_Component12
            ref={v}
            id={K}
            data-sidebar-row-action-trigger="true"
            aria-label={`Actions for ${S}`}
            aria-controls={T ? V : undefined}
            aria-expanded={T ? true : undefined}
            aria-haspopup="menu"
            sx={Me}
            onClick={(l) => {
              l.preventDefault();
              l.stopPropagation();
              if (T) {
                B();
                return;
              }
              $();
            }}
          >
            <De size={15} />
          </_Component12>
        </_Component0>
      )}
      <_Component13
        actionsButtonId={K}
        actionsMenuId={V}
        anchorEl={y}
        canManage={o}
        contextMenuPosition={R}
        file={t}
        isExpanded={i}
        isOpen={T}
        isPending={s}
        isSelected={d}
        mainFilePath={c}
        name={S}
        onClose={B}
        onCreate={w}
        onDelete={k}
        onMove={L}
        onRename={() => {
          B();
          x.beginRename();
        }}
        onSelect={u}
        onSetMain={m}
        onToggleFolder={H}
      />
    </_Component0>
  );
});
const Z = (r) => ({
  ...Ae(r),
  listStyle: "none",
  marginTop: 0,
  marginRight: 0,
  marginBottom: 0,
  paddingTop: 0,
  paddingRight: 0,
  paddingBottom: 0,
});
const dt = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.125rem",
  position: "relative",
  "--sidebar-explorer-tree-guide-offset": "0.6625rem",
};
const _Component16 = ({
  allowSingleClickRename: r,
  node: n,
  selectedFilePath: o,
  tree: t,
}) => {
  const { file: i } = n;
  const a = i.kind === "folder";
  const s = a && t.expandedFolderPaths.has(i.path);
  const d = i.id === t.selectedFileId;
  const c =
    d || (a && (o == null ? undefined : o.startsWith(`${i.path}/`)) === true);
  return (
    <_Component0
      component="li"
      data-active-explorer-path={c ? "true" : undefined}
      sx={dt}
    >
      <_Component14
        canManage={t.canManage}
        file={i}
        isExpanded={s}
        itemCount={a ? n.children.length : null}
        isPending={t.isPending}
        isSelected={d}
        allowSingleClickRename={r}
        mainFilePath={t.mainFilePath}
        onCreate={t.onCreate}
        onDelete={t.onDelete}
        onToggleFolder={t.onToggleFolder}
        onMove={t.onMove}
        onRename={t.onRename}
        onSelect={t.onSelect}
        onSetMain={t.onSetMain}
      />
      {a && n.children.length > 0 && (
        <e.Fragment>
          <_Component15 gap="0.125rem" isExpanded={s} isInActivePath={c} />
          <Be isExpanded={s}>
            <_Component0 component="ul" sx={Z}>
              {n.children.map((w) => (
                <_Component16
                  allowSingleClickRename={false}
                  node={w}
                  selectedFilePath={o}
                  tree={t}
                  key={w.file.id}
                />
              ))}
            </_Component0>
          </Be>
        </e.Fragment>
      )}
    </_Component0>
  );
};
const Ct = p.memo(function ({
  allowRootItemSingleClickRename: n = false,
  ariaLabel: o,
  expandedFolderPaths: t,
  files: i,
  onExpandedFolderPathsChange: a,
  ...s
}) {
  var h;
  const d = p.useRef(t);
  const c = p.useRef(a);
  d.current = t;
  c.current = a;
  const w = p.useCallback((u) => {
    const m = new Set(d.current);
    if (m.has(u)) {
      m.delete(u);
    } else {
      m.add(u);
    }
    c.current(m);
  }, []);
  const k = p.useMemo(() => tt(i, s.mainFilePath), [i, s.mainFilePath]);
  const L =
    ((h = i.find((u) => u.id === s.selectedFileId)) == null
      ? undefined
      : h.path) ?? null;
  return (
    <_Component0 component="ul" aria-label={o} sx={Z}>
      {k.map((u) => (
        <_Component16
          allowSingleClickRename={n}
          node={u}
          selectedFilePath={L}
          tree={{
            ...s,
            expandedFolderPaths: t,
            onToggleFolder: w,
          }}
          key={u.file.id}
        />
      ))}
    </_Component0>
  );
});
const pt = "workspace-explorer-latex-expanded-folder-paths";
const xt = {};
const vt = (r, n) => {
  if (!n) {
    return r;
  }
  const o = et(n);
  if (o.every((t) => r.has(t))) {
    return r;
  } else {
    return new Set([...r, ...o]);
  }
};
const ut = (r) => {
  const n = JSON.parse(r);
  if (!n || typeof n != "object" || Array.isArray(n)) {
    throw new Error("Saved expanded LaTeX folder paths are invalid.");
  }
  const o = {};
  for (const [t, i] of Object.entries(n)) {
    if (!Array.isArray(i) || !i.every((a) => typeof a == "string")) {
      throw new Error(
        `Saved expanded folders for LaTeX project '${t}' are invalid.`,
      );
    }
    o[t] = new Set(i);
  }
  return o;
};
const ht = (r) =>
  JSON.stringify(
    Object.fromEntries(Object.entries(r).map(([n, o]) => [n, [...o]])),
  );
const te = p.createContext(null);
const Tt = ({ children: r }) => {
  const { value: n, updateValue: o } = Ye({
    storageKey: pt,
    defaultValue: xt,
    parse: ut,
    serialize: ht,
    readErrorMessage: "Could not read the saved expanded LaTeX folders.",
    writeErrorMessage: "Could not save the expanded LaTeX folders.",
  });
  const t = p.useCallback(
    (a, s) => {
      o((d) => {
        const c = {
          ...d,
        };
        if (s.size > 0) {
          c[a] = s;
        } else {
          delete c[a];
        }
        return c;
      });
    },
    [o],
  );
  const i = p.useMemo(
    () => ({
      expandedFolderPathsByDocument: n,
      setExpandedFolderPaths: t,
    }),
    [n, t],
  );
  return <te.Provider value={i}>{r}</te.Provider>;
};
const St = () => {
  const r = p.useContext(te);
  if (!r) {
    throw new Error(
      "LaTeX project folder expansion requires its workspace provider.",
    );
  }
  return r;
};
export { Ue as F, Ct as L, Tt as a, vt as g, St as u };
