const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["assets/dialogs-D-Okwmpa.js", "assets/index-BM3ZINIl.js", "assets/index-DCmpUGyQ.css", "assets/MChip-DiH8NXBU.js", "assets/TextField-D8vc_sXz.js", "assets/MarkdownHighlights-C-ZhT8z1.js", "assets/index-Yb6ONXKu.js", "assets/OpenInNewRounded-D-7V5TzF.js", "assets/FormControlLabel-CQvCddOM.js", "assets/Alert-DnFVD8li.js"]) => i.map(i => d[i]);
import { r as n, t as I, j as e, B as F, T as G, _ as Z, g as H, V as _Component4, x as T, bc as pe, aD as _Component15, bp as _Component16, b4 as me, $ as oe, ai as B, C as _Component18 } from "./index-BM3ZINIl.js";
import { e as _Component2, M as _Component3, f as Pe, g as ge, O as _Component13, P as _Component17, C as Ce } from "./ChatPanelMoreMenu-B1X9SOWN.js";
import { W as _Component11, l as A } from "./route.lazy-B7bltzFg.js";
import { g as we, L as _Component, F as Ee, u as Ie, a as Le } from "./LatexProjectFolderExpansionContext-DKFyp-6E.js";
import { s as De, b as Re, e as Se, c as Fe, d as Me, f as Te, S as Oe, g as _e, h as _Component6, A as $e, i as Xe, j as We, k as Be, u as Ue, l as Ne, m as Ve, E as Ke, n as He, o as _Component14, p as Ge, q as Je, r as Ye, t as Ze, v as Qe } from "./SidebarTreeConnector-DsRNfBIo.js";
import { b as Ae } from "./TextField-D8vc_sXz.js";
import { L as O } from "./ListItemIcon-CaLBil7Q.js";
import { F as _Component5 } from "./file-plus-_oOf3yl8.js";
import { U as _Component7 } from "./upload-Df6L5ERk.js";
import { D as _Component8 } from "./Divider-BcuihGce.js";
import { E as _Component9 } from "./LoadingSection-wWBu2CqJ.js";
import { P as _Component0 } from "./MarkdownHighlights-C-ZhT8z1.js";
import { a as _Component1 } from "./CopyButton-BcOsqrNJ.js";
import { F as _Component10 } from "./file-input-BGVdGffy.js";
import { u as ir } from "./useIsMobile-SdtLFChL.js";
import { F as _Component12 } from "./file-code-corner-DV79SyC0.js";
import { u as cr, b as dr, m as pr, n as xr, o as ur, p as mr, q as jr, r as hr, s as fr, t as Pr } from "./useLatexQueries-DBpKOPUv.js";
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
const kr = async t => {
  const r = t.createReader();
  const s = [];
  while (true) {
    const i = await new Promise((a, h) => {
      r.readEntries(a, h);
    });
    if (i.length === 0) {
      return s;
    }
    s.push(...i);
  }
};
const ne = async t => {
  if (t.isDirectory) {
    const i = await kr(t);
    return (await Promise.all(i.map(ne))).flat();
  }
  if (!t.isFile) {
    return [];
  }
  const r = await new Promise((i, a) => {
    t.file(i, a);
  });
  const s = t.fullPath.replace(/^\/+/, "") || r.name;
  Object.defineProperty(r, "webkitRelativePath", {
    configurable: true,
    value: s
  });
  return [r];
};
const Y = t => Array.from(t.items).some(r => r.kind === "file") || Array.from(t.types).includes("Files") || t.files.length > 0;
const Er = async t => {
  const r = Array.from(t.items).filter(s => s.kind === "file").map(s => s.webkitGetAsEntry()).filter(s => s !== null);
  if (r.length === 0) {
    return Array.from(t.files);
  } else {
    return (await Promise.all(r.map(ne))).flat();
  }
};
const Ir = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  position: "relative"
};
const re = {
  width: "100%",
  minHeight: "3rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 0.75
};
const Lr = t => ({
  position: "absolute",
  inset: t.spacing(0.5),
  zIndex: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `2px dashed ${t.palette.primary.main}`,
  borderRadius: t.shape.borderRadiusPx,
  backgroundColor: H(t.palette.background.paper, 0.94),
  pointerEvents: "none"
});
const Dr = n.memo(function ({
  document: r,
  files: s,
  expandedFolderPaths: i,
  fileActions: a,
  isNavigationDisabled: h,
  isProjectSelected: j,
  selectedFileId: f,
  onExpandedFolderPathsChange: b,
  onSelectFile: u
}) {
  const [d, E] = n.useState(false);
  const L = n.useMemo(() => {
    var c;
    return ((c = s.find(o => o.id === f)) == null ? undefined : c.path) ?? null;
  }, [s, f]);
  const R = n.useMemo(() => we(i, L), [i, L]);
  const y = n.useCallback(c => a ? a.selectFile(c) : u(r.id, c.id), [r.id, a, u]);
  const w = n.useCallback(c => {
    if (Y(c.dataTransfer)) {
      c.preventDefault();
      E(false);
      if (!!a && !a.isUnavailable && !h) {
        Er(c.dataTransfer).then(a.uploadFiles).catch(o => {
          I.error(o instanceof Error ? o.message : "Could not read the dropped project files.");
        });
      }
    }
  }, [a, h]);
  const D = a !== null && !a.isUnavailable && !h;
  return <F sx={Ir} onDragEnter={c => {
    if (D && Y(c.dataTransfer)) {
      c.preventDefault();
      E(true);
    }
  }} onDragOver={c => {
    if (D && Y(c.dataTransfer)) {
      c.preventDefault();
    }
  }} onDragLeave={c => {
    if (!c.currentTarget.contains(c.relatedTarget)) {
      E(false);
    }
  }} onDrop={w}>{s.length === 0 && <F sx={re}><G variant="caption" color="textSecondary" align="center">{a && "Create a file or drop project assets here."}{!a && "This project has no files."}</G></F>}{s.length > 0 && <_Component ariaLabel={`Files in ${r.name}`} canManage={!!a} expandedFolderPaths={R} files={s} isPending={h || a != null && !!a.isUnavailable} allowRootItemSingleClickRename={j} mainFilePath={r.mainFilePath} selectedFileId={f} onCreate={a == null ? undefined : a.createNode} onDelete={a == null ? undefined : a.deleteFile} onExpandedFolderPathsChange={b} onMove={a == null ? undefined : a.moveFile} onRename={a == null ? undefined : a.renameFile} onSelect={y} onSetMain={a == null ? undefined : a.setMainFile} />}{(a == null ? undefined : a.isUnavailable) && <F sx={re}><G variant="caption" color="textSecondary" align="center">Project file contents could not be loaded.</G><Z size="small" onClick={a.retryLoad}>Try again</Z></F>}{d && <F sx={Lr}><G variant="subtitle1" color="primary">Drop files to upload</G></F>}</F>;
});
const Rr = {
  ...De,
  zIndex: 2,
  gap: 0.35
};
const Sr = {
  width: "min(28rem, calc(100vw - 2rem))"
};
const Fr = ({
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
  onTogglePin: L
}) => {
  const [R, y] = n.useState(null);
  const [w, D] = n.useState("menu");
  const c = !!R;
  const o = `latex-project-actions-button-${s.id}`;
  const l = `latex-project-actions-${s.id}`;
  const v = x => {
    y(x);
    a(!!x);
  };
  const C = () => {
    v(null);
    D("menu");
  };
  const p = x => {
    C();
    x();
  };
  const S = x => {
    x.preventDefault();
    x.stopPropagation();
    v(c ? null : x.currentTarget);
  };
  const _ = async x => {
    if (await u(x)) {
      C();
    }
  };
  return <e.Fragment><F className="latex-project-row-actions" sx={Rr}>{s.isPinned && <_Component2 label="Pinned LaTeX project" />}<_Component4 id={o} className="latex-project-menu-button" data-sidebar-row-action-trigger="true" aria-label={`Project actions for ${s.name}`} aria-controls={c ? l : undefined} aria-expanded={c ? true : undefined} aria-haspopup="menu" disabled={i} sx={Re} onClick={S}><_Component3 fontSize="small" /></_Component4></F><Ae id={l} open={c} anchorEl={r ? null : R} anchorPosition={r ?? undefined} anchorReference={r ? "anchorPosition" : "anchorEl"} sx={Te} slotProps={{
      list: {
        "aria-labelledby": o,
        sx: Me
      },
      paper: {
        "aria-label": "LaTeX project actions",
        variant: "floating",
        sx: [Se, r && Fe, w === "move" && Sr]
      }
    }} onContextMenu={x => {
      Be(x, C);
    }} onClose={C} onClick={x => {
      x.stopPropagation();
    }}><Oe kind="latex-project" title={s.name} />{w === "menu" && <e.Fragment><Pe disabled={i} isPinned={s.isPinned} onClick={() => p(L)} /><T dense={true} disabled={i} onClick={() => D("move")}><O><_e size={16} /></O>Move to folder</T>{t && <e.Fragment><T dense={true} disabled={i} onClick={() => p(() => f("new-file"))}><O><_Component5 size={16} /></O>New file</T><T dense={true} disabled={i} onClick={() => p(() => f("new-folder"))}><O><_Component6 size={16} /></O>New folder</T><T dense={true} disabled={i} onClick={() => p(() => f("upload-files"))}><O><_Component7 size={16} /></O>Upload files</T><T dense={true} disabled={i} onClick={() => p(() => f("import-zip"))}><O><$e size={16} /></O>Import ZIP</T><_Component8 /></e.Fragment>}<T dense={true} component="a" href={pe(window.location.origin, s.id).href} target="_blank" rel="noopener noreferrer" onClick={C}><O><_Component9 size={16} /></O>Open in new tab</T><T dense={true} disabled={i} onClick={() => p(E)}><O><_Component0 size={16} /></O>Rename</T><T dense={true} disabled={i} onClick={() => p(b)}><O><_Component1 size={16} /></O>Make a copy</T><T dense={true} disabled={i} onClick={() => p(j)}><O><Ee size={16} /></O>Export project ZIP</T><T dense={true} disabled={i} onClick={() => p(d)}><O><_Component10 size={16} /></O>Open in Overleaf</T><T dense={true} disabled={i} sx={Xe} onClick={() => p(h)}><O><We size={16} /></O>Delete</T></e.Fragment>}{w === "move" && <_Component11 backLabel="Back to project actions" currentFolderId={s.folderId} isPending={i} onBack={() => D("menu")} onMove={x => {
        _(x);
      }} />}</Ae></e.Fragment>;
};
const Mr = n.lazy(() => oe(() => import("./dialogs-D-Okwmpa.js").then(t => t.e), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).then(t => ({
  default: t.LatexDeleteConfirmationDialog
})));
const Tr = {
  width: "100%",
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: "0.125rem",
  position: "relative",
  "--sidebar-explorer-tree-guide-offset": "0.925rem"
};
const Or = (t, r, s) => i => ({
  ...Qe({
    isContextMenuOpen: t,
    isInActivePath: r,
    isSelected: s
  })(i),
  display: "flex",
  alignItems: "center",
  gap: i.spacing(0.25),
  "& > .latex-project-row-actions .latex-project-menu-button": {
    opacity: 0,
    pointerEvents: "none"
  },
  "&:hover > .latex-project-row-actions .latex-project-menu-button": {
    opacity: 1,
    pointerEvents: "auto"
  }
});
const te = (t, r) => s => ({
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
  "&:hover": {
    backgroundColor: "transparent"
  },
  "&:focus-visible": {
    outline: `2px solid ${H(s.palette.primary.main, 0.3)}`,
    outlineOffset: -1
  }
});
const _r = t => ({
  flex: "0 0 auto",
  width: "1.5rem",
  minWidth: 0,
  height: "2rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: t.palette.text.primary,
  borderRadius: t.shape.radiusSmPx,
  "& svg": {
    strokeWidth: 2.25
  },
  "&:hover": {
    backgroundColor: H(t.palette.primary.main, 0.08)
  },
  "&:focus-visible": {
    outline: `2px solid ${H(t.palette.primary.main, 0.2)}`,
    outlineOffset: 2
  }
});
const zr = {
  flex: "0 0 auto",
  display: "inline-flex",
  alignItems: "center"
};
const $r = {
  minWidth: 0,
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  paddingRight: "2rem",
  overflow: "hidden"
};
const Xr = {
  width: "100%",
  position: "relative",
  minWidth: 0
};
const Wr = {
  width: "100%",
  "& .MuiCollapse-wrapperInner": {
    width: "100%"
  }
};
const Br = n.memo(function ({
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
  onToggle: S
}) {
  const _ = ir();
  const {
    density: x
  } = Ue();
  const z = Ve[x];
  const [$, N] = n.useState(false);
  const [X, V] = n.useState(null);
  const [K, U] = n.useState(false);
  const k = $ && X !== null;
  const M = n.useCallback(g => l(r, g), [r, l]);
  const P = Ne({
    isLabelActive: !_,
    isPending: h,
    isSingleClickRenameEnabled: b,
    value: r.name,
    onRename: M
  });
  const m = n.useCallback(g => D(r, g), [r, D]);
  const q = n.useMemo(() => ({
    kind: "latex-project",
    id: r.id,
    label: r.name,
    containerId: r.folderId,
    moveTo: m
  }), [r.folderId, r.id, r.name, m]);
  const W = j || h || $ || u || P.isRenaming;
  const {
    rowRef: J
  } = ge(q, W);
  const se = n.useCallback(g => {
    N(g);
    if (!g) {
      V(null);
    }
  }, []);
  const ie = n.useCallback(g => y(r.id, g), [r.id, y]);
  const le = n.useCallback(g => {
    if (u) {
      g.preventDefault();
      return;
    }
    if (!g.defaultPrevented && g.button === 0 && !g.metaKey && !g.ctrlKey && !g.shiftKey && !g.altKey) {
      g.preventDefault();
      if (!j) {
        S(r.id);
      }
      if (!b) {
        p(r.id);
      }
    }
  }, [r.id, j, u, b, p, S]);
  const ce = r.itemCount === 1 ? "item" : "items";
  const Q = <e.Fragment><F aria-hidden="true" sx={zr}><_Component12 size={z.iconSize} /></F><F sx={$r}>{P.isRenaming && <Ke ariaLabel={`Rename ${r.name}`} isPending={h} value={P.renameDraft} onCancel={P.cancelRename} onChange={P.setRenameDraft} onSubmit={P.submitRename} />}{!P.isRenaming && <He isEnabled={!_ && !h} onClick={P.handleLabelClick} onDoubleClick={P.handleLabelDoubleClick}><_Component13 title={r.name}><G variant={z.labelVariant} color="inherit" noWrap={true}>{r.name}</G></_Component13></He>}<_Component14 detail={`${r.itemCount} ${ce}`} timestamp={r.lastUpdated} /></F></e.Fragment>;
  return <F data-active-explorer-path={f ? "true" : undefined} sx={Tr}><F data-actions-open={$ ? "true" : undefined} data-context-menu-open={k ? "true" : undefined} data-inline-renaming={P.isRenaming ? "true" : undefined} data-sidebar-external-item-key={`latex-project:${r.id}`} sx={Or(k, f, b)} onKeyDown={P.handleRenameKeyDown} onContextMenu={g => {
      if (!P.isRenaming) {
        Je(g, `LaTeX project '${r.id}'`, V);
      }
    }}><_Component15 aria-expanded={j} aria-label={`${j ? "Collapse" : "Expand"} ${r.name}`} disableRipple={true} sx={_r} onClick={g => {
        g.stopPropagation();
        S(r.id);
      }}><Ge isExpanded={j} size={15} /></_Component15>{P.isRenaming && <F sx={te(b, r.isPinned)}>{Q}</F>}{!P.isRenaming && <_Component16 ref={J} aria-label={`Open LaTeX project ${r.name}`} aria-current={b ? "page" : undefined} aria-disabled={u ? true : undefined} tabIndex={u ? -1 : undefined} to="/chats" search={me({}, r.id)} sx={te(b, r.isPinned)} onMouseEnter={() => {
        A();
      }} onFocus={() => {
        A();
      }} onClick={le}>{Q}</_Component16>}{!P.isRenaming && <Fr canManageFiles={!!i} contextMenuPosition={X} document={r} isPending={h} onOpenChange={se} onDelete={() => {
        U(true);
      }} onExport={() => {
        R(r);
      }} onMakeCopy={() => {
        w(r);
      }} onMove={g => D(r, g)} onOpenInOverleaf={() => {
        c(r);
      }} onFileAction={g => {
        o(r.id, g);
      }} onRename={P.beginRename} onTogglePin={() => {
        v(r);
      }} />}</F>{r.itemCount > 0 && <Ye gap="0.125rem" isExpanded={j} isInActivePath={f} />}<Ze isExpanded={j} sx={Wr}><F sx={Xr}><Dr document={r} files={a} expandedFolderPaths={s} fileActions={i} isNavigationDisabled={u} isProjectSelected={b} selectedFileId={E} onExpandedFolderPathsChange={ie} onSelectFile={C} /></F></Ze>{K && <n.Suspense fallback={null}><Mr isDeleting={d} open={true} target={`project “${r.name}”`} onCancel={() => {
        if (!d) {
          U(false);
        }
      }} onConfirm={async () => {
        if (await L(r)) {
          U(false);
        }
      }} /></n.Suspense>}</F>;
});
const Ur = ({
  documents: t,
  onSelectProject: r
}) => {
  const {
    mutateAsync: s
  } = cr();
  const {
    mutateAsync: i
  } = dr();
  const {
    mutateAsync: a
  } = pr();
  const {
    mutateAsync: h
  } = xr();
  const {
    mutateAsync: j
  } = ur();
  const {
    mutateAsync: f
  } = mr();
  const [b, u] = n.useState(null);
  const d = n.useCallback((o, l) => {
    u({
      documentId: o,
      kind: l
    });
  }, []);
  const E = n.useCallback(async (o, l) => {
    d(o.id, "rename");
    try {
      const v = gr(l);
      if (v !== o.name) {
        await f({
          documentId: o.id,
          input: {
            name: v,
            expectedRevision: o.revision
          }
        });
        I.success("Project renamed.");
      }
      return true;
    } catch (v) {
      I.error(B(v, "Could not rename the project."));
      return false;
    } finally {
      u(null);
    }
  }, [d, f]);
  const L = n.useCallback(async o => {
    d(o.id, "pin");
    try {
      await f({
        documentId: o.id,
        input: {
          isPinned: !o.isPinned,
          expectedRevision: o.revision
        }
      });
      I.success(o.isPinned ? "Project unpinned." : "Project pinned.");
    } catch (l) {
      I.error(B(l, "Could not update the project pin."));
    } finally {
      u(null);
    }
  }, [d, f]);
  const R = n.useCallback(async o => {
    d(o.id, "export");
    try {
      const l = await a({
        documentId: o.id
      });
      yr(l, `${o.name}.zip`);
    } catch (l) {
      I.error(B(l, "Could not export the project."));
    } finally {
      u(null);
    }
  }, [d, a]);
  const y = n.useCallback(async o => {
    d(o.id, "copy");
    let l = null;
    try {
      const [v, C] = await Promise.all([a({
        documentId: o.id
      }), jr(o.id)]);
      const p = await s({
        input: {
          name: br(t, o.name),
          source: C.source,
          compiler: o.compiler,
          folderId: o.folderId
        }
      });
      l = {
        id: p.id,
        revision: p.revision
      };
      const S = await h({
        documentId: p.id,
        file: new File([v], "project-copy.zip", {
          type: "application/zip"
        }),
        expectedRevision: p.revision,
        replace: true
      });
      l = {
        id: S.id,
        revision: S.revision
      };
      await r(S.id);
      I.success("Project copied.");
    } catch (v) {
      const C = B(v, "Could not copy the LaTeX project.");
      if (!l) {
        I.error(C);
        return;
      }
      try {
        await i({
          documentId: l.id,
          expectedRevision: l.revision
        });
      } catch (p) {
        I.error(`${C} The partially created project could not be removed: ${B(p, "project cleanup failed")}`);
        return;
      }
      I.error(C);
    } finally {
      u(null);
    }
  }, [d, s, i, t, a, h, r]);
  const w = n.useCallback(async (o, l) => {
    if (o.folderId === l) {
      return true;
    }
    const v = o.folderId;
    d(o.id, "move");
    try {
      await j({
        documentId: o.id,
        input: {
          folderId: l
        }
      });
      I.success(l ? "Project moved to folder." : "Project moved to Explorer.", {
        action: C => n.createElement(Z, {
          color: "inherit",
          size: "small",
          type: "button",
          variant: "outlined",
          onClick: () => {
            I.dismiss(C);
            j({
              documentId: o.id,
              input: {
                folderId: v
              }
            }).then(() => {
              I.success("Project move undone.");
            }).catch(p => {
              I.error(B(p, "Could not undo the project move."));
            });
          }
        }, "Undo")
      });
      return true;
    } catch (C) {
      I.error(B(C, "Could not move the project."));
      return false;
    } finally {
      u(null);
    }
  }, [d, j]);
  const D = n.useCallback(async o => {
    const l = window.open("", "_blank");
    if (!l) {
      I.error("Allow pop-ups to open this project in Overleaf.");
      return;
    }
    l.opener = null;
    d(o.id, "overleaf");
    try {
      if ((await hr(o.id)).files.filter(S => S.kind !== "folder").length > ee) {
        throw new Error(`Overleaf accepts at most ${ee} files per upload. Remove files or export the project ZIP instead.`);
      }
      const p = await a({
        documentId: o.id
      });
      if (l.closed) {
        throw new Error("The Overleaf tab was closed before the project was ready.");
      }
      await vr({
        archive: p,
        compiler: o.compiler,
        mainDocument: o.mainFilePath,
        name: o.name,
        targetWindow: l
      });
    } catch (v) {
      l.close();
      I.error(B(v, "Could not open the project in Overleaf."));
    } finally {
      u(null);
    }
  }, [d, a]);
  return {
    deleteProject: n.useCallback(async o => {
      d(o.id, "delete");
      try {
        await i({
          documentId: o.id,
          expectedRevision: o.revision
        });
        I.success("Project deleted.");
        return true;
      } catch (l) {
        I.error(B(l, "Could not delete the project."));
        return false;
      } finally {
        u(null);
      }
    }, [d, i]),
    exportProject: R,
    makeCopy: y,
    moveProject: w,
    openInOverleaf: D,
    renameProject: E,
    toggleProjectPin: L,
    pendingAction: b,
    isPending: b !== null
  };
};
const Nr = new Set();
const ae = t => ({
  minHeight: "3.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: t.spacing(0.75),
  padding: t.spacing(1),
  border: `1px dashed ${H(t.palette.text.primary, 0.1)}`,
  borderRadius: t.shape.radiusSmPx,
  backgroundColor: H(t.palette.background.paper, 0.42)
});
const Vr = t => <_Component17 kind="latex-project" label={t.name} reserveTreeToggleSpace={true} key={t.key} />;
const Kr = n.memo(function ({
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
  onToggleProject: l
}) {
  const {
    expandedFolderPathsByDocument: v,
    setExpandedFolderPaths: C
  } = Ie();
  const p = n.useMemo(() => L.map(m => m.document), [L]);
  const {
    deleteProject: S,
    exportProject: _,
    isPending: x,
    makeCopy: z,
    moveProject: $,
    openInOverleaf: N,
    pendingAction: X,
    renameProject: V,
    toggleProjectPin: K
  } = Ur({
    documents: p,
    onSelectProject: o
  });
  const U = h ? r : null;
  const k = h ? s : null;
  n.useEffect(() => {
    if (y != null) {
      y(x);
    }
  }, [x, y]);
  n.useEffect(() => () => {
    if (y != null) {
      y(false);
    }
  }, [y]);
  const M = n.useMemo(() => [...d.map(m => ({
    kind: "latex-project",
    key: m.key,
    folderId: m.folderId,
    label: m.name,
    searchText: m.name,
    activityTimestamp: Number.MAX_SAFE_INTEGER,
    isPinned: false,
    pinnedAt: null,
    isPending: true,
    isActive: false,
    node: Vr(m)
  })), ...L.map(({
    document: m,
    files: q
  }) => {
    const W = m.id === U;
    const J = W && !!k;
    return {
      kind: "latex-project",
      key: `latex-project:${m.id}`,
      folderId: m.folderId,
      label: m.name,
      searchText: m.name,
      activityTimestamp: new Date(m.lastUpdated).getTime(),
      isPinned: m.isPinned,
      pinnedAt: m.pinnedAt,
      isPending: false,
      isActive: W,
      node: <Br document={m} expandedFolderPaths={v[m.id] ?? Nr} fileActions={W && (E == null ? undefined : E.documentId) === m.id ? E : null} files={q} isActionDisabled={a || j || x} isActionPending={(X == null ? undefined : X.documentId) === m.id} isExpanded={i.has(m.id)} isInActivePath={J} isSelected={W && !J} isNavigationDisabled={j || x} onDeleteProject={S} onExportProject={_} onExpandedFolderPathsChange={C} onMakeCopy={z} onMoveProject={$} onOpenInOverleaf={N} onProjectFileAction={w} onRenameProject={V} onTogglePin={K} onSelectFile={c} onSelect={o} onToggle={l} selectedFileId={W ? k : null} key={m.id} />
    };
  })], [v, i, S, _, a, j, x, z, $, w, N, c, o, l, d, X, E, L, V, U, k, C, K]);
  const P = n.useMemo(() => {
    if (u && d.length === 0) {
      return <F sx={ae}><_Component18 size={18} /></F>;
    }
    if (f) {
      return <F sx={ae}><G variant="caption" color="textSecondary" align="center">LaTeX projects could not be loaded.</G><Z size="small" disabled={b} onClick={() => {
          D();
        }}>Try again</Z></F>;
    }
  }, [f, b, u, D, d.length]);
  return R({
    items: M,
    statusContent: P
  });
});
const Hr = "workspace-explorer-latex-expanded-projects";
const qr = [];
const Gr = t => {
  const r = JSON.parse(t);
  if (!Array.isArray(r) || !r.every(s => typeof s == "string")) {
    throw new Error("Saved expanded LaTeX projects are invalid.");
  }
  return [...new Set(r)];
};
const Jr = n.lazy(() => oe(() => import("./dialogs-D-Okwmpa.js").then(t => t.e), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).then(t => ({
  default: t.LatexCreateProjectDialog
})));
const Yr = ({
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
  const R = n.useMemo(() => [...h, ...f], [h, f]);
  const y = n.useMemo(() => ({
    "latex-project": j,
    notebook: b
  }), [j, b]);
  const w = !t || r || i || a || s;
  return <Ce {...L} createLatexProject={u} createNotebook={d} explorerItems={R} explorerStatusContent={y} isLatexProjectCreationDisabled={w} isNavigationDisabled={a || s} isNotebookCreationDisabled={E} />;
};
const Zr = ({
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
  const w = fr();
  const D = Pr();
  const c = n.useMemo(() => w.data ?? [], [w.data]);
  const {
    value: o,
    updateValue: l
  } = wr({
    storageKey: Hr,
    defaultValue: qr,
    parse: Gr,
    readErrorMessage: "Could not read the saved expanded LaTeX projects.",
    writeErrorMessage: "Could not save the expanded LaTeX projects."
  });
  const v = n.useMemo(() => new Set(o), [o]);
  const C = n.useCallback(k => {
    l(M => {
      const P = new Set(M);
      if (P.has(k)) {
        P.delete(k);
      } else {
        P.add(k);
      }
      return [...P];
    });
  }, [l]);
  const p = n.useCallback(k => {
    if (i) {
      R();
    }
    l(M => M.includes(k) ? M : [...M, k]);
  }, [i, R, l]);
  n.useImperativeHandle(f, () => ({
    expandProject: p
  }), [p]);
  const [S, _] = n.useState(false);
  const [x, z] = n.useState(null);
  const {
    createProject: $,
    isCreatingProject: N
  } = Cr();
  const X = n.useCallback(k => {
    _(k);
  }, []);
  const V = n.useCallback((k = null) => {
    z({
      folderId: k
    });
  }, []);
  const K = n.useCallback(() => {
    z(null);
  }, []);
  const U = n.useCallback(async k => {
    if (!x) {
      throw new Error("A LaTeX project creation target is required.");
    }
    return !!(await $({
      ...k,
      folderId: x.folderId
    }));
  }, [$, x]);
  return <e.Fragment><Kr activeDocumentId={t} activeFileId={r} expandedProjectIds={v} isActionBusy={a} isLatexWorkspaceActive={h} isNavigationBusy={j} isProjectsError={w.isError} isProjectsFetching={w.isFetching} isProjectsPending={w.isPending} pendingProjects={D} projectFileActions={b} projects={c} onActionBusyChange={X} onProjectFileAction={u} onReload={w.refetch} onSelectFile={d} onSelectProject={E} onToggleProject={C}>{({
        items: k,
        statusContent: M
      }) => L(({
        createNotebook: P,
        isCreatingNotebook: m,
        items: q,
        statusContent: W
      }) => <Yr {...y} createNotebook={P} isCreateLatexProjectAvailable={s} isCreatingLatexProject={N} isCreatingNotebook={m} isExplorerProjectActionBusy={S} isExplorerSectionCollapsed={i} isLatexProjectActionBusy={a} isLatexWorkspaceBusy={j} latexItems={k} latexStatusContent={M} notebookItems={q} notebookStatusContent={W} requestLatexProjectCreation={V} toggleExplorerSection={R} />)}</Kr>{x && <n.Suspense fallback={null}><Jr open={true} isCreating={N} onClose={K} onCreate={U} /></n.Suspense>}</e.Fragment>;
};
const aa = t => <Le><Zr {...t} /></Le>;
export { aa as WorkspaceExplorer };
