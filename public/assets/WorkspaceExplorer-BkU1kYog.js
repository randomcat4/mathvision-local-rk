const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/dialogs-D-Okwmpa.js",
      "assets/index-BM3ZINIl.js",
      "assets/index-DCmpUGyQ.css",
      "assets/MChip-DiH8NXBU.js",
      "assets/TextField-D8vc_sXz.js",
      "assets/MarkdownHighlights-C-ZhT8z1.js",
      "assets/index-Yb6ONXKu.js",
      "assets/OpenInNewRounded-D-7V5TzF.js",
      "assets/FormControlLabel-CQvCddOM.js",
      "assets/Alert-DnFVD8li.js",
    ]),
) => i.map((i) => d[i]);
import {
  r as n,
  t as I,
  j as e,
  B as F,
  T as G,
  _ as Z,
  g as H,
  V as de,
  x as T,
  bc as pe,
  aD as xe,
  bp as ue,
  b4 as me,
  $ as oe,
  ai as B,
  C as je,
} from "./index-BM3ZINIl.js";
import {
  e as he,
  M as fe,
  f as Pe,
  g as ge,
  O as be,
  P as ve,
  C as Ce,
} from "./ChatPanelMoreMenu-B1X9SOWN.js";
import { W as ye, l as A } from "./route.lazy-B7bltzFg.js";
import {
  g as we,
  L as ke,
  F as Ee,
  u as Ie,
  a as Le,
} from "./LatexProjectFolderExpansionContext-DKFyp-6E.js";
import {
  s as De,
  b as Re,
  e as Se,
  c as Fe,
  d as Me,
  f as Te,
  S as Oe,
  g as _e,
  h as ze,
  A as $e,
  i as Xe,
  j as We,
  k as Be,
  u as Ue,
  l as Ne,
  m as Ve,
  E as Ke,
  n as He,
  o as qe,
  p as Ge,
  q as Je,
  r as Ye,
  t as Ze,
  v as Qe,
} from "./SidebarTreeConnector-DsRNfBIo.js";
import { b as Ae } from "./TextField-D8vc_sXz.js";
import { L as O } from "./ListItemIcon-CaLBil7Q.js";
import { F as er } from "./file-plus-_oOf3yl8.js";
import { U as rr } from "./upload-Df6L5ERk.js";
import { D as tr } from "./Divider-BcuihGce.js";
import { E as ar } from "./LoadingSection-wWBu2CqJ.js";
import { P as or } from "./MarkdownHighlights-C-ZhT8z1.js";
import { a as nr } from "./CopyButton-BcOsqrNJ.js";
import { F as sr } from "./file-input-BGVdGffy.js";
import { u as ir } from "./useIsMobile-SdtLFChL.js";
import { F as lr } from "./file-code-corner-DV79SyC0.js";
import {
  u as cr,
  b as dr,
  m as pr,
  n as xr,
  o as ur,
  p as mr,
  q as jr,
  r as hr,
  s as fr,
  t as Pr,
} from "./useLatexQueries-DBpKOPUv.js";
import { a as gr, b as br } from "./latexNaming-BAjxoZ-G.js";
import { O as ee, o as vr, u as Cr } from "./useLatexProjectCreation-BfZAUJk-.js";
import { d as yr } from "./downloadBlob-CusuPFei.js";
import { a as wr } from "./useResizablePanelValue-D_NwbF9E.js";
import "./useMutation-C1SgG9wr.js";
import "./chatsApi-Ck-JYICO.js";
import "./chatQueryCache-DOdNJrP_.js";
import "./threadMessageListLazy-ghC-RLRq.js";
import "./useQuery-DM2qiUYb.js";
import "./streamNdjson-sRiOwtSP.js";
import "./authFetch-DXjDztUP.js";
import "./useInfiniteQuery-CdNTitqC.js";
import "./FormControlLabel-CQvCddOM.js";
import "./OpenInNewRounded-D-7V5TzF.js";
import "./MChip-DiH8NXBU.js";
import "./ThinkingElapsedLabel-DKCKD95O.js";
import "./ListItemText-CBxudZz_.js";
import "./ChatInteractionOverrides-dyfOoEnd.js";
import "./DebouncedTextField-DEJkKI5N.js";
import "./useGetUserType-DlzkERhz.js";
import "./Alert-DnFVD8li.js";
import "./search-CE89ACSU.js";
import "./WorkspaceSidePanelFrame-BElEFQhq.js";
import "./useResizablePanelWidth-DfMwOMGi.js";
import "./LogoutRounded-BsETu1qq.js";
import "./LinkOffRounded-CKGtm4_4.js";
import "./attachmentsApi-BHgxfYft.js";
import "./AlertTitle-B2wnIUF2.js";
import "./chatMessageSelectors-CRUAC26Y.js";
import "./Badge-b-klHfWK.js";
import "./cache-BNzcfneg.js";
import "./circle-DSozMRKK.js";
import "./FormGroup-BsLWbxpH.js";
import "./TimeRelative-HYP_-RcH.js";
import "./panel-left-close-BNWX01EL.js";
import "./useLocation-BxGXieoN.js";
import "./Drawer-ByPJ5WV0.js";
import "./latexWorkspacePanelVisibility-BotBQ6b-.js";
import "./panel-left-open-BNgbA-Qm.js";
import "./pencil-DHia85Iy.js";
import "./index-Yb6ONXKu.js";
import "./latexTextPatterns-B444ow6Q.js";
const kr = async (t) => {
    const r = t.createReader(),
      s = [];
    for (;;) {
      const i = await new Promise((a, h) => {
        r.readEntries(a, h);
      });
      if (i.length === 0) return s;
      s.push(...i);
    }
  },
  ne = async (t) => {
    if (t.isDirectory) {
      const i = await kr(t);
      return (await Promise.all(i.map(ne))).flat();
    }
    if (!t.isFile) return [];
    const r = await new Promise((i, a) => {
        t.file(i, a);
      }),
      s = t.fullPath.replace(/^\/+/, "") || r.name;
    return (Object.defineProperty(r, "webkitRelativePath", { configurable: !0, value: s }), [r]);
  },
  Y = (t) =>
    Array.from(t.items).some((r) => r.kind === "file") ||
    Array.from(t.types).includes("Files") ||
    t.files.length > 0,
  Er = async (t) => {
    const r = Array.from(t.items)
      .filter((s) => s.kind === "file")
      .map((s) => s.webkitGetAsEntry())
      .filter((s) => s !== null);
    return r.length === 0 ? Array.from(t.files) : (await Promise.all(r.map(ne))).flat();
  },
  Ir = {
    width: "100%",
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  re = {
    width: "100%",
    minHeight: "3rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 0.75,
  },
  Lr = (t) => ({
    position: "absolute",
    inset: t.spacing(0.5),
    zIndex: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: `2px dashed ${t.palette.primary.main}`,
    borderRadius: t.shape.borderRadiusPx,
    backgroundColor: H(t.palette.background.paper, 0.94),
    pointerEvents: "none",
  }),
  Dr = n.memo(function ({
    document: r,
    files: s,
    expandedFolderPaths: i,
    fileActions: a,
    isNavigationDisabled: h,
    isProjectSelected: j,
    selectedFileId: f,
    onExpandedFolderPathsChange: b,
    onSelectFile: u,
  }) {
    const [d, E] = n.useState(!1),
      L = n.useMemo(() => {
        var c;
        return ((c = s.find((o) => o.id === f)) == null ? void 0 : c.path) ?? null;
      }, [s, f]),
      R = n.useMemo(() => we(i, L), [i, L]),
      y = n.useCallback((c) => (a ? a.selectFile(c) : u(r.id, c.id)), [r.id, a, u]),
      w = n.useCallback(
        (c) => {
          Y(c.dataTransfer) &&
            (c.preventDefault(),
            E(!1),
            !(!a || a.isUnavailable || h) &&
              Er(c.dataTransfer)
                .then(a.uploadFiles)
                .catch((o) => {
                  I.error(
                    o instanceof Error ? o.message : "Could not read the dropped project files.",
                  );
                }));
        },
        [a, h],
      ),
      D = a !== null && !a.isUnavailable && !h;
    return e.jsxs(F, {
      sx: Ir,
      onDragEnter: (c) => {
        D && Y(c.dataTransfer) && (c.preventDefault(), E(!0));
      },
      onDragOver: (c) => {
        D && Y(c.dataTransfer) && c.preventDefault();
      },
      onDragLeave: (c) => {
        c.currentTarget.contains(c.relatedTarget) || E(!1);
      },
      onDrop: w,
      children: [
        s.length === 0 &&
          e.jsx(F, {
            sx: re,
            children: e.jsxs(G, {
              variant: "caption",
              color: "textSecondary",
              align: "center",
              children: [
                a && "Create a file or drop project assets here.",
                !a && "This project has no files.",
              ],
            }),
          }),
        s.length > 0 &&
          e.jsx(ke, {
            ariaLabel: `Files in ${r.name}`,
            canManage: !!a,
            expandedFolderPaths: R,
            files: s,
            isPending: h || !!(a != null && a.isUnavailable),
            allowRootItemSingleClickRename: j,
            mainFilePath: r.mainFilePath,
            selectedFileId: f,
            onCreate: a == null ? void 0 : a.createNode,
            onDelete: a == null ? void 0 : a.deleteFile,
            onExpandedFolderPathsChange: b,
            onMove: a == null ? void 0 : a.moveFile,
            onRename: a == null ? void 0 : a.renameFile,
            onSelect: y,
            onSetMain: a == null ? void 0 : a.setMainFile,
          }),
        (a == null ? void 0 : a.isUnavailable) &&
          e.jsxs(F, {
            sx: re,
            children: [
              e.jsx(G, {
                variant: "caption",
                color: "textSecondary",
                align: "center",
                children: "Project file contents could not be loaded.",
              }),
              e.jsx(Z, { size: "small", onClick: a.retryLoad, children: "Try again" }),
            ],
          }),
        d &&
          e.jsx(F, {
            sx: Lr,
            children: e.jsx(G, {
              variant: "subtitle1",
              color: "primary",
              children: "Drop files to upload",
            }),
          }),
      ],
    });
  }),
  Rr = { ...De, zIndex: 2, gap: 0.35 },
  Sr = { width: "min(28rem, calc(100vw - 2rem))" },
  Fr = ({
    canManageFiles: t,
    contextMenuPosition: r,
    document: s,
    isPending: i,
    onOpenChange: a,
    onDelete: h,
    onExport: j,
    onFileAction: f,
    onMakeCopy: b,
    onMove: u,
    onOpenInOverleaf: d,
    onRename: E,
    onTogglePin: L,
  }) => {
    const [R, y] = n.useState(null),
      [w, D] = n.useState("menu"),
      c = !!R,
      o = `latex-project-actions-button-${s.id}`,
      l = `latex-project-actions-${s.id}`,
      v = (x) => {
        (y(x), a(!!x));
      },
      C = () => {
        (v(null), D("menu"));
      },
      p = (x) => {
        (C(), x());
      },
      S = (x) => {
        (x.preventDefault(), x.stopPropagation(), v(c ? null : x.currentTarget));
      },
      _ = async (x) => {
        (await u(x)) && C();
      };
    return e.jsxs(e.Fragment, {
      children: [
        e.jsxs(F, {
          className: "latex-project-row-actions",
          sx: Rr,
          children: [
            s.isPinned && e.jsx(he, { label: "Pinned LaTeX project" }),
            e.jsx(de, {
              id: o,
              className: "latex-project-menu-button",
              "data-sidebar-row-action-trigger": "true",
              "aria-label": `Project actions for ${s.name}`,
              "aria-controls": c ? l : void 0,
              "aria-expanded": c ? !0 : void 0,
              "aria-haspopup": "menu",
              disabled: i,
              sx: Re,
              onClick: S,
              children: e.jsx(fe, { fontSize: "small" }),
            }),
          ],
        }),
        e.jsxs(Ae, {
          id: l,
          open: c,
          anchorEl: r ? null : R,
          anchorPosition: r ?? void 0,
          anchorReference: r ? "anchorPosition" : "anchorEl",
          sx: Te,
          slotProps: {
            list: { "aria-labelledby": o, sx: Me },
            paper: {
              "aria-label": "LaTeX project actions",
              variant: "floating",
              sx: [Se, r && Fe, w === "move" && Sr],
            },
          },
          onContextMenu: (x) => {
            Be(x, C);
          },
          onClose: C,
          onClick: (x) => {
            x.stopPropagation();
          },
          children: [
            e.jsx(Oe, { kind: "latex-project", title: s.name }),
            w === "menu" &&
              e.jsxs(e.Fragment, {
                children: [
                  e.jsx(Pe, { disabled: i, isPinned: s.isPinned, onClick: () => p(L) }),
                  e.jsxs(T, {
                    dense: !0,
                    disabled: i,
                    onClick: () => D("move"),
                    children: [e.jsx(O, { children: e.jsx(_e, { size: 16 }) }), "Move to folder"],
                  }),
                  t &&
                    e.jsxs(e.Fragment, {
                      children: [
                        e.jsxs(T, {
                          dense: !0,
                          disabled: i,
                          onClick: () => p(() => f("new-file")),
                          children: [e.jsx(O, { children: e.jsx(er, { size: 16 }) }), "New file"],
                        }),
                        e.jsxs(T, {
                          dense: !0,
                          disabled: i,
                          onClick: () => p(() => f("new-folder")),
                          children: [e.jsx(O, { children: e.jsx(ze, { size: 16 }) }), "New folder"],
                        }),
                        e.jsxs(T, {
                          dense: !0,
                          disabled: i,
                          onClick: () => p(() => f("upload-files")),
                          children: [
                            e.jsx(O, { children: e.jsx(rr, { size: 16 }) }),
                            "Upload files",
                          ],
                        }),
                        e.jsxs(T, {
                          dense: !0,
                          disabled: i,
                          onClick: () => p(() => f("import-zip")),
                          children: [e.jsx(O, { children: e.jsx($e, { size: 16 }) }), "Import ZIP"],
                        }),
                        e.jsx(tr, {}),
                      ],
                    }),
                  e.jsxs(T, {
                    dense: !0,
                    component: "a",
                    href: pe(window.location.origin, s.id).href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: C,
                    children: [e.jsx(O, { children: e.jsx(ar, { size: 16 }) }), "Open in new tab"],
                  }),
                  e.jsxs(T, {
                    dense: !0,
                    disabled: i,
                    onClick: () => p(E),
                    children: [e.jsx(O, { children: e.jsx(or, { size: 16 }) }), "Rename"],
                  }),
                  e.jsxs(T, {
                    dense: !0,
                    disabled: i,
                    onClick: () => p(b),
                    children: [e.jsx(O, { children: e.jsx(nr, { size: 16 }) }), "Make a copy"],
                  }),
                  e.jsxs(T, {
                    dense: !0,
                    disabled: i,
                    onClick: () => p(j),
                    children: [
                      e.jsx(O, { children: e.jsx(Ee, { size: 16 }) }),
                      "Export project ZIP",
                    ],
                  }),
                  e.jsxs(T, {
                    dense: !0,
                    disabled: i,
                    onClick: () => p(d),
                    children: [e.jsx(O, { children: e.jsx(sr, { size: 16 }) }), "Open in Overleaf"],
                  }),
                  e.jsxs(T, {
                    dense: !0,
                    disabled: i,
                    sx: Xe,
                    onClick: () => p(h),
                    children: [e.jsx(O, { children: e.jsx(We, { size: 16 }) }), "Delete"],
                  }),
                ],
              }),
            w === "move" &&
              e.jsx(ye, {
                backLabel: "Back to project actions",
                currentFolderId: s.folderId,
                isPending: i,
                onBack: () => D("menu"),
                onMove: (x) => {
                  _(x);
                },
              }),
          ],
        }),
      ],
    });
  },
  Mr = n.lazy(() =>
    oe(
      () => import("./dialogs-D-Okwmpa.js").then((t) => t.e),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    ).then((t) => ({ default: t.LatexDeleteConfirmationDialog })),
  ),
  Tr = {
    width: "100%",
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.125rem",
    position: "relative",
    "--sidebar-explorer-tree-guide-offset": "0.925rem",
  },
  Or = (t, r, s) => (i) => ({
    ...Qe({ isContextMenuOpen: t, isInActivePath: r, isSelected: s })(i),
    display: "flex",
    alignItems: "center",
    gap: i.spacing(0.25),
    "& > .latex-project-row-actions .latex-project-menu-button": {
      opacity: 0,
      pointerEvents: "none",
    },
    "&:hover > .latex-project-row-actions .latex-project-menu-button": {
      opacity: 1,
      pointerEvents: "auto",
    },
  }),
  te = (t, r) => (s) => ({
    flex: 1,
    minWidth: 0,
    minHeight: "2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: s.spacing(0.55),
    padding: s.spacing(0, 0.1),
    paddingRight: r ? "3.25rem" : s.spacing(0.1),
    overflow: "hidden",
    color: t ? s.palette.primary.main : s.palette.text.primary,
    textAlign: "left",
    borderRadius: s.shape.radiusSmPx,
    "&:hover": { backgroundColor: "transparent" },
    "&:focus-visible": {
      outline: `2px solid ${H(s.palette.primary.main, 0.3)}`,
      outlineOffset: -1,
    },
  }),
  _r = (t) => ({
    flex: "0 0 auto",
    width: "1.5rem",
    minWidth: 0,
    height: "2rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: t.palette.text.primary,
    borderRadius: t.shape.radiusSmPx,
    "& svg": { strokeWidth: 2.25 },
    "&:hover": { backgroundColor: H(t.palette.primary.main, 0.08) },
    "&:focus-visible": { outline: `2px solid ${H(t.palette.primary.main, 0.2)}`, outlineOffset: 2 },
  }),
  zr = { flex: "0 0 auto", display: "inline-flex", alignItems: "center" },
  $r = {
    minWidth: 0,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingRight: "2rem",
    overflow: "hidden",
  },
  Xr = { width: "100%", position: "relative", minWidth: 0 },
  Wr = { width: "100%", "& .MuiCollapse-wrapperInner": { width: "100%" } },
  Br = n.memo(function ({
    document: r,
    expandedFolderPaths: s,
    fileActions: i,
    files: a,
    isActionDisabled: h,
    isExpanded: j,
    isInActivePath: f,
    isSelected: b,
    isNavigationDisabled: u,
    isActionPending: d,
    selectedFileId: E,
    onDeleteProject: L,
    onExportProject: R,
    onExpandedFolderPathsChange: y,
    onMakeCopy: w,
    onMoveProject: D,
    onOpenInOverleaf: c,
    onProjectFileAction: o,
    onRenameProject: l,
    onTogglePin: v,
    onSelectFile: C,
    onSelect: p,
    onToggle: S,
  }) {
    const _ = ir(),
      { density: x } = Ue(),
      z = Ve[x],
      [$, N] = n.useState(!1),
      [X, V] = n.useState(null),
      [K, U] = n.useState(!1),
      k = $ && X !== null,
      M = n.useCallback((g) => l(r, g), [r, l]),
      P = Ne({
        isLabelActive: !_,
        isPending: h,
        isSingleClickRenameEnabled: b,
        value: r.name,
        onRename: M,
      }),
      m = n.useCallback((g) => D(r, g), [r, D]),
      q = n.useMemo(
        () => ({
          kind: "latex-project",
          id: r.id,
          label: r.name,
          containerId: r.folderId,
          moveTo: m,
        }),
        [r.folderId, r.id, r.name, m],
      ),
      W = j || h || $ || u || P.isRenaming,
      { rowRef: J } = ge(q, W),
      se = n.useCallback((g) => {
        (N(g), g || V(null));
      }, []),
      ie = n.useCallback((g) => y(r.id, g), [r.id, y]),
      le = n.useCallback(
        (g) => {
          if (u) {
            g.preventDefault();
            return;
          }
          g.defaultPrevented ||
            g.button !== 0 ||
            g.metaKey ||
            g.ctrlKey ||
            g.shiftKey ||
            g.altKey ||
            (g.preventDefault(), j || S(r.id), b || p(r.id));
        },
        [r.id, j, u, b, p, S],
      ),
      ce = r.itemCount === 1 ? "item" : "items",
      Q = e.jsxs(e.Fragment, {
        children: [
          e.jsx(F, { "aria-hidden": "true", sx: zr, children: e.jsx(lr, { size: z.iconSize }) }),
          e.jsxs(F, {
            sx: $r,
            children: [
              P.isRenaming &&
                e.jsx(Ke, {
                  ariaLabel: `Rename ${r.name}`,
                  isPending: h,
                  value: P.renameDraft,
                  onCancel: P.cancelRename,
                  onChange: P.setRenameDraft,
                  onSubmit: P.submitRename,
                }),
              !P.isRenaming &&
                e.jsx(He, {
                  isEnabled: !_ && !h,
                  onClick: P.handleLabelClick,
                  onDoubleClick: P.handleLabelDoubleClick,
                  children: e.jsx(be, {
                    title: r.name,
                    children: e.jsx(G, {
                      variant: z.labelVariant,
                      color: "inherit",
                      noWrap: !0,
                      children: r.name,
                    }),
                  }),
                }),
              e.jsx(qe, { detail: `${r.itemCount} ${ce}`, timestamp: r.lastUpdated }),
            ],
          }),
        ],
      });
    return e.jsxs(F, {
      "data-active-explorer-path": f ? "true" : void 0,
      sx: Tr,
      children: [
        e.jsxs(F, {
          "data-actions-open": $ ? "true" : void 0,
          "data-context-menu-open": k ? "true" : void 0,
          "data-inline-renaming": P.isRenaming ? "true" : void 0,
          "data-sidebar-external-item-key": `latex-project:${r.id}`,
          sx: Or(k, f, b),
          onKeyDown: P.handleRenameKeyDown,
          onContextMenu: (g) => {
            P.isRenaming || Je(g, `LaTeX project '${r.id}'`, V);
          },
          children: [
            e.jsx(xe, {
              "aria-expanded": j,
              "aria-label": `${j ? "Collapse" : "Expand"} ${r.name}`,
              disableRipple: !0,
              sx: _r,
              onClick: (g) => {
                (g.stopPropagation(), S(r.id));
              },
              children: e.jsx(Ge, { isExpanded: j, size: 15 }),
            }),
            P.isRenaming && e.jsx(F, { sx: te(b, r.isPinned), children: Q }),
            !P.isRenaming &&
              e.jsx(ue, {
                ref: J,
                "aria-label": `Open LaTeX project ${r.name}`,
                "aria-current": b ? "page" : void 0,
                "aria-disabled": u ? !0 : void 0,
                tabIndex: u ? -1 : void 0,
                to: "/chats",
                search: me({}, r.id),
                sx: te(b, r.isPinned),
                onMouseEnter: () => {
                  A();
                },
                onFocus: () => {
                  A();
                },
                onClick: le,
                children: Q,
              }),
            !P.isRenaming &&
              e.jsx(Fr, {
                canManageFiles: !!i,
                contextMenuPosition: X,
                document: r,
                isPending: h,
                onOpenChange: se,
                onDelete: () => {
                  U(!0);
                },
                onExport: () => {
                  R(r);
                },
                onMakeCopy: () => {
                  w(r);
                },
                onMove: (g) => D(r, g),
                onOpenInOverleaf: () => {
                  c(r);
                },
                onFileAction: (g) => {
                  o(r.id, g);
                },
                onRename: P.beginRename,
                onTogglePin: () => {
                  v(r);
                },
              }),
          ],
        }),
        r.itemCount > 0 && e.jsx(Ye, { gap: "0.125rem", isExpanded: j, isInActivePath: f }),
        e.jsx(Ze, {
          isExpanded: j,
          sx: Wr,
          children: e.jsx(F, {
            sx: Xr,
            children: e.jsx(Dr, {
              document: r,
              files: a,
              expandedFolderPaths: s,
              fileActions: i,
              isNavigationDisabled: u,
              isProjectSelected: b,
              selectedFileId: E,
              onExpandedFolderPathsChange: ie,
              onSelectFile: C,
            }),
          }),
        }),
        K &&
          e.jsx(n.Suspense, {
            fallback: null,
            children: e.jsx(Mr, {
              isDeleting: d,
              open: !0,
              target: `project “${r.name}”`,
              onCancel: () => {
                d || U(!1);
              },
              onConfirm: async () => {
                (await L(r)) && U(!1);
              },
            }),
          }),
      ],
    });
  }),
  Ur = ({ documents: t, onSelectProject: r }) => {
    const { mutateAsync: s } = cr(),
      { mutateAsync: i } = dr(),
      { mutateAsync: a } = pr(),
      { mutateAsync: h } = xr(),
      { mutateAsync: j } = ur(),
      { mutateAsync: f } = mr(),
      [b, u] = n.useState(null),
      d = n.useCallback((o, l) => {
        u({ documentId: o, kind: l });
      }, []),
      E = n.useCallback(
        async (o, l) => {
          d(o.id, "rename");
          try {
            const v = gr(l);
            return (
              v === o.name ||
                (await f({ documentId: o.id, input: { name: v, expectedRevision: o.revision } }),
                I.success("Project renamed.")),
              !0
            );
          } catch (v) {
            return (I.error(B(v, "Could not rename the project.")), !1);
          } finally {
            u(null);
          }
        },
        [d, f],
      ),
      L = n.useCallback(
        async (o) => {
          d(o.id, "pin");
          try {
            (await f({
              documentId: o.id,
              input: { isPinned: !o.isPinned, expectedRevision: o.revision },
            }),
              I.success(o.isPinned ? "Project unpinned." : "Project pinned."));
          } catch (l) {
            I.error(B(l, "Could not update the project pin."));
          } finally {
            u(null);
          }
        },
        [d, f],
      ),
      R = n.useCallback(
        async (o) => {
          d(o.id, "export");
          try {
            const l = await a({ documentId: o.id });
            yr(l, `${o.name}.zip`);
          } catch (l) {
            I.error(B(l, "Could not export the project."));
          } finally {
            u(null);
          }
        },
        [d, a],
      ),
      y = n.useCallback(
        async (o) => {
          d(o.id, "copy");
          let l = null;
          try {
            const [v, C] = await Promise.all([a({ documentId: o.id }), jr(o.id)]),
              p = await s({
                input: {
                  name: br(t, o.name),
                  source: C.source,
                  compiler: o.compiler,
                  folderId: o.folderId,
                },
              });
            l = { id: p.id, revision: p.revision };
            const S = await h({
              documentId: p.id,
              file: new File([v], "project-copy.zip", { type: "application/zip" }),
              expectedRevision: p.revision,
              replace: !0,
            });
            ((l = { id: S.id, revision: S.revision }), await r(S.id), I.success("Project copied."));
          } catch (v) {
            const C = B(v, "Could not copy the LaTeX project.");
            if (!l) {
              I.error(C);
              return;
            }
            try {
              await i({ documentId: l.id, expectedRevision: l.revision });
            } catch (p) {
              I.error(
                `${C} The partially created project could not be removed: ${B(p, "project cleanup failed")}`,
              );
              return;
            }
            I.error(C);
          } finally {
            u(null);
          }
        },
        [d, s, i, t, a, h, r],
      ),
      w = n.useCallback(
        async (o, l) => {
          if (o.folderId === l) return !0;
          const v = o.folderId;
          d(o.id, "move");
          try {
            return (
              await j({ documentId: o.id, input: { folderId: l } }),
              I.success(l ? "Project moved to folder." : "Project moved to Explorer.", {
                action: (C) =>
                  n.createElement(
                    Z,
                    {
                      color: "inherit",
                      size: "small",
                      type: "button",
                      variant: "outlined",
                      onClick: () => {
                        (I.dismiss(C),
                          j({ documentId: o.id, input: { folderId: v } })
                            .then(() => {
                              I.success("Project move undone.");
                            })
                            .catch((p) => {
                              I.error(B(p, "Could not undo the project move."));
                            }));
                      },
                    },
                    "Undo",
                  ),
              }),
              !0
            );
          } catch (C) {
            return (I.error(B(C, "Could not move the project.")), !1);
          } finally {
            u(null);
          }
        },
        [d, j],
      ),
      D = n.useCallback(
        async (o) => {
          const l = window.open("", "_blank");
          if (!l) {
            I.error("Allow pop-ups to open this project in Overleaf.");
            return;
          }
          ((l.opener = null), d(o.id, "overleaf"));
          try {
            if ((await hr(o.id)).files.filter((S) => S.kind !== "folder").length > ee)
              throw new Error(
                `Overleaf accepts at most ${ee} files per upload. Remove files or export the project ZIP instead.`,
              );
            const p = await a({ documentId: o.id });
            if (l.closed)
              throw new Error("The Overleaf tab was closed before the project was ready.");
            await vr({
              archive: p,
              compiler: o.compiler,
              mainDocument: o.mainFilePath,
              name: o.name,
              targetWindow: l,
            });
          } catch (v) {
            (l.close(), I.error(B(v, "Could not open the project in Overleaf.")));
          } finally {
            u(null);
          }
        },
        [d, a],
      );
    return {
      deleteProject: n.useCallback(
        async (o) => {
          d(o.id, "delete");
          try {
            return (
              await i({ documentId: o.id, expectedRevision: o.revision }),
              I.success("Project deleted."),
              !0
            );
          } catch (l) {
            return (I.error(B(l, "Could not delete the project.")), !1);
          } finally {
            u(null);
          }
        },
        [d, i],
      ),
      exportProject: R,
      makeCopy: y,
      moveProject: w,
      openInOverleaf: D,
      renameProject: E,
      toggleProjectPin: L,
      pendingAction: b,
      isPending: b !== null,
    };
  },
  Nr = new Set(),
  ae = (t) => ({
    minHeight: "3.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: t.spacing(0.75),
    padding: t.spacing(1),
    border: `1px dashed ${H(t.palette.text.primary, 0.1)}`,
    borderRadius: t.shape.radiusSmPx,
    backgroundColor: H(t.palette.background.paper, 0.42),
  }),
  Vr = (t) =>
    e.jsx(ve, { kind: "latex-project", label: t.name, reserveTreeToggleSpace: !0 }, t.key),
  Kr = n.memo(function ({
    activeDocumentId: r,
    activeFileId: s,
    expandedProjectIds: i,
    isActionBusy: a,
    isLatexWorkspaceActive: h,
    isNavigationBusy: j,
    isProjectsError: f,
    isProjectsFetching: b,
    isProjectsPending: u,
    pendingProjects: d,
    projectFileActions: E,
    projects: L,
    children: R,
    onActionBusyChange: y,
    onProjectFileAction: w,
    onReload: D,
    onSelectFile: c,
    onSelectProject: o,
    onToggleProject: l,
  }) {
    const { expandedFolderPathsByDocument: v, setExpandedFolderPaths: C } = Ie(),
      p = n.useMemo(() => L.map((m) => m.document), [L]),
      {
        deleteProject: S,
        exportProject: _,
        isPending: x,
        makeCopy: z,
        moveProject: $,
        openInOverleaf: N,
        pendingAction: X,
        renameProject: V,
        toggleProjectPin: K,
      } = Ur({ documents: p, onSelectProject: o }),
      U = h ? r : null,
      k = h ? s : null;
    (n.useEffect(() => {
      y == null || y(x);
    }, [x, y]),
      n.useEffect(
        () => () => {
          y == null || y(!1);
        },
        [y],
      ));
    const M = n.useMemo(
        () => [
          ...d.map((m) => ({
            kind: "latex-project",
            key: m.key,
            folderId: m.folderId,
            label: m.name,
            searchText: m.name,
            activityTimestamp: Number.MAX_SAFE_INTEGER,
            isPinned: !1,
            pinnedAt: null,
            isPending: !0,
            isActive: !1,
            node: Vr(m),
          })),
          ...L.map(({ document: m, files: q }) => {
            const W = m.id === U,
              J = W && !!k;
            return {
              kind: "latex-project",
              key: `latex-project:${m.id}`,
              folderId: m.folderId,
              label: m.name,
              searchText: m.name,
              activityTimestamp: new Date(m.lastUpdated).getTime(),
              isPinned: m.isPinned,
              pinnedAt: m.pinnedAt,
              isPending: !1,
              isActive: W,
              node: e.jsx(
                Br,
                {
                  document: m,
                  expandedFolderPaths: v[m.id] ?? Nr,
                  fileActions: W && (E == null ? void 0 : E.documentId) === m.id ? E : null,
                  files: q,
                  isActionDisabled: a || j || x,
                  isActionPending: (X == null ? void 0 : X.documentId) === m.id,
                  isExpanded: i.has(m.id),
                  isInActivePath: J,
                  isSelected: W && !J,
                  isNavigationDisabled: j || x,
                  onDeleteProject: S,
                  onExportProject: _,
                  onExpandedFolderPathsChange: C,
                  onMakeCopy: z,
                  onMoveProject: $,
                  onOpenInOverleaf: N,
                  onProjectFileAction: w,
                  onRenameProject: V,
                  onTogglePin: K,
                  onSelectFile: c,
                  onSelect: o,
                  onToggle: l,
                  selectedFileId: W ? k : null,
                },
                m.id,
              ),
            };
          }),
        ],
        [v, i, S, _, a, j, x, z, $, w, N, c, o, l, d, X, E, L, V, U, k, C, K],
      ),
      P = n.useMemo(() => {
        if (u && d.length === 0) return e.jsx(F, { sx: ae, children: e.jsx(je, { size: 18 }) });
        if (f)
          return e.jsxs(F, {
            sx: ae,
            children: [
              e.jsx(G, {
                variant: "caption",
                color: "textSecondary",
                align: "center",
                children: "LaTeX projects could not be loaded.",
              }),
              e.jsx(Z, {
                size: "small",
                disabled: b,
                onClick: () => {
                  D();
                },
                children: "Try again",
              }),
            ],
          });
      }, [f, b, u, D, d.length]);
    return R({ items: M, statusContent: P });
  }),
  Hr = "workspace-explorer-latex-expanded-projects",
  qr = [],
  Gr = (t) => {
    const r = JSON.parse(t);
    if (!Array.isArray(r) || !r.every((s) => typeof s == "string"))
      throw new Error("Saved expanded LaTeX projects are invalid.");
    return [...new Set(r)];
  },
  Jr = n.lazy(() =>
    oe(
      () => import("./dialogs-D-Okwmpa.js").then((t) => t.e),
      __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
    ).then((t) => ({ default: t.LatexCreateProjectDialog })),
  ),
  Yr = ({
    isCreateLatexProjectAvailable: t,
    isCreatingLatexProject: r,
    isExplorerProjectActionBusy: s,
    isLatexProjectActionBusy: i,
    isLatexWorkspaceBusy: a,
    latexItems: h,
    latexStatusContent: j,
    notebookItems: f,
    notebookStatusContent: b,
    requestLatexProjectCreation: u,
    createNotebook: d,
    isCreatingNotebook: E,
    ...L
  }) => {
    const R = n.useMemo(() => [...h, ...f], [h, f]),
      y = n.useMemo(() => ({ "latex-project": j, notebook: b }), [j, b]),
      w = !t || r || i || a || s;
    return e.jsx(Ce, {
      ...L,
      createLatexProject: u,
      createNotebook: d,
      explorerItems: R,
      explorerStatusContent: y,
      isLatexProjectCreationDisabled: w,
      isNavigationDisabled: a || s,
      isNotebookCreationDisabled: E,
    });
  },
  Zr = ({
    activeLatexDocumentId: t,
    activeLatexFileId: r,
    isCreateLatexProjectAvailable: s,
    isExplorerSectionCollapsed: i,
    isLatexProjectActionBusy: a,
    isLatexWorkspaceActive: h,
    isLatexWorkspaceBusy: j,
    latexProjectExpansionControllerRef: f,
    latexProjectFileActions: b,
    onLatexProjectFileAction: u,
    onSelectLatexFile: d,
    onSelectLatexProject: E,
    renderNotebookExplorer: L,
    toggleExplorerSection: R,
    ...y
  }) => {
    const w = fr(),
      D = Pr(),
      c = n.useMemo(() => w.data ?? [], [w.data]),
      { value: o, updateValue: l } = wr({
        storageKey: Hr,
        defaultValue: qr,
        parse: Gr,
        readErrorMessage: "Could not read the saved expanded LaTeX projects.",
        writeErrorMessage: "Could not save the expanded LaTeX projects.",
      }),
      v = n.useMemo(() => new Set(o), [o]),
      C = n.useCallback(
        (k) => {
          l((M) => {
            const P = new Set(M);
            return (P.has(k) ? P.delete(k) : P.add(k), [...P]);
          });
        },
        [l],
      ),
      p = n.useCallback(
        (k) => {
          (i && R(), l((M) => (M.includes(k) ? M : [...M, k])));
        },
        [i, R, l],
      );
    n.useImperativeHandle(f, () => ({ expandProject: p }), [p]);
    const [S, _] = n.useState(!1),
      [x, z] = n.useState(null),
      { createProject: $, isCreatingProject: N } = Cr(),
      X = n.useCallback((k) => {
        _(k);
      }, []),
      V = n.useCallback((k = null) => {
        z({ folderId: k });
      }, []),
      K = n.useCallback(() => {
        z(null);
      }, []),
      U = n.useCallback(
        async (k) => {
          if (!x) throw new Error("A LaTeX project creation target is required.");
          return !!(await $({ ...k, folderId: x.folderId }));
        },
        [$, x],
      );
    return e.jsxs(e.Fragment, {
      children: [
        e.jsx(Kr, {
          activeDocumentId: t,
          activeFileId: r,
          expandedProjectIds: v,
          isActionBusy: a,
          isLatexWorkspaceActive: h,
          isNavigationBusy: j,
          isProjectsError: w.isError,
          isProjectsFetching: w.isFetching,
          isProjectsPending: w.isPending,
          pendingProjects: D,
          projectFileActions: b,
          projects: c,
          onActionBusyChange: X,
          onProjectFileAction: u,
          onReload: w.refetch,
          onSelectFile: d,
          onSelectProject: E,
          onToggleProject: C,
          children: ({ items: k, statusContent: M }) =>
            L(({ createNotebook: P, isCreatingNotebook: m, items: q, statusContent: W }) =>
              e.jsx(Yr, {
                ...y,
                createNotebook: P,
                isCreateLatexProjectAvailable: s,
                isCreatingLatexProject: N,
                isCreatingNotebook: m,
                isExplorerProjectActionBusy: S,
                isExplorerSectionCollapsed: i,
                isLatexProjectActionBusy: a,
                isLatexWorkspaceBusy: j,
                latexItems: k,
                latexStatusContent: M,
                notebookItems: q,
                notebookStatusContent: W,
                requestLatexProjectCreation: V,
                toggleExplorerSection: R,
              }),
            ),
        }),
        x &&
          e.jsx(n.Suspense, {
            fallback: null,
            children: e.jsx(Jr, { open: !0, isCreating: N, onClose: K, onCreate: U }),
          }),
      ],
    });
  },
  aa = (t) => e.jsx(Le, { children: e.jsx(Zr, { ...t }) });
export { aa as WorkspaceExplorer };
