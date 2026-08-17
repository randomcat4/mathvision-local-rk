import {
  ay as R,
  az as w,
  r as n,
  aA as P,
  j as a,
  B as i,
  l as _,
  t as D,
  g as l,
  c as F,
} from "./index-BM3ZINIl.js";
import { S as j, a as f, b as L } from "./sampleWriteup-lHlzvOHA.js";
import { C as W } from "./ChatInteractionOverrides-dyfOoEnd.js";
import { S as M, C as U, a as $, T as B } from "./ChatPanelMoreMenu-B1X9SOWN.js";
import "./useMutation-C1SgG9wr.js";
import "./chatsApi-Ck-JYICO.js";
import "./chatQueryCache-DOdNJrP_.js";
import "./threadMessageListLazy-ghC-RLRq.js";
import "./useQuery-DM2qiUYb.js";
import "./streamNdjson-sRiOwtSP.js";
import "./authFetch-DXjDztUP.js";
import "./useInfiniteQuery-CdNTitqC.js";
import "./MarkdownHighlights-C-ZhT8z1.js";
import "./TextField-D8vc_sXz.js";
import "./index-Yb6ONXKu.js";
import "./FormControlLabel-CQvCddOM.js";
import "./OpenInNewRounded-D-7V5TzF.js";
import "./MChip-DiH8NXBU.js";
import "./ThinkingElapsedLabel-DKCKD95O.js";
import "./ListItemText-CBxudZz_.js";
import "./useIsMobile-SdtLFChL.js";
import "./DebouncedTextField-DEJkKI5N.js";
import "./useGetUserType-DlzkERhz.js";
import "./Alert-DnFVD8li.js";
import "./search-CE89ACSU.js";
import "./WorkspaceSidePanelFrame-BElEFQhq.js";
import "./useResizablePanelWidth-DfMwOMGi.js";
import "./useResizablePanelValue-D_NwbF9E.js";
import "./LogoutRounded-BsETu1qq.js";
import "./LinkOffRounded-CKGtm4_4.js";
import "./attachmentsApi-BHgxfYft.js";
import "./Divider-BcuihGce.js";
import "./ListItemIcon-CaLBil7Q.js";
import "./AlertTitle-B2wnIUF2.js";
import "./LoadingSection-wWBu2CqJ.js";
import "./SidebarTreeConnector-DsRNfBIo.js";
import "./file-code-corner-DV79SyC0.js";
import "./chatMessageSelectors-CRUAC26Y.js";
import "./Badge-b-klHfWK.js";
import "./cache-BNzcfneg.js";
import "./circle-DSozMRKK.js";
import "./FormGroup-BsLWbxpH.js";
import "./TimeRelative-HYP_-RcH.js";
import "./panel-left-close-BNWX01EL.js";
const S = "2026-01-01T12:00:00.000Z",
  C = "2026-01-01T12:05:00.000Z",
  O = [
    {
      role: "user",
      content: "Can you write up a short proof that the square of an even integer is even?",
      timestamp: S,
    },
    {
      role: "assistant",
      content: JSON.stringify({
        operation: "writeup",
        variable_defs: [
          { symbol: "$n$", meaning: "An even integer." },
          { symbol: "$k$", meaning: "An integer satisfying $n=2k$." },
        ],
        intuition:
          "Writing an even integer as twice another integer makes the factor of two in its square explicit.",
        referee_feedback:
          "The argument states the divisibility witness and verifies that the remaining factor is an integer.",
        writeup: L,
      }),
      timestamp: C,
      displayMode: "structured",
      markdownMathFormat: "canonical-v1",
    },
  ],
  d = {
    id: f,
    userId: j,
    title: "Guided tour sample",
    branchTitlePending: !1,
    branchSpaceId: null,
    folderId: null,
    latexDocumentId: null,
    messages: O,
    messageRevision: 0,
    contextSummary: null,
    contextUsage: null,
    isPublic: !1,
    hasUnread: !1,
    isPinned: !1,
    pinnedAt: null,
    archivedAt: null,
    inputSafetyBlockedAt: null,
    activeRun: null,
    latestRun: null,
    submittedRun: null,
    createdAt: S,
    lastUpdated: C,
    deletedAt: null,
  },
  q = (e) => ({
    height: "100dvh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
    backgroundColor: e.palette.background.default,
    backgroundImage: "var(--app-shell-background)",
    color: e.palette.text.primary,
  }),
  H = {
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    backgroundImage: "var(--app-shell-grid)",
    backgroundSize: "44px 44px",
    maskImage: "var(--app-shell-mask)",
  },
  z = (e) => ({
    position: "relative",
    zIndex: 1,
    flex: 1,
    minHeight: 0,
    display: "flex",
    gap: 0,
    padding: 0,
    [e.breakpoints.down(980)]: { flexDirection: "column" },
  }),
  G = {
    minHeight: 0,
    backdropFilter: "blur(18px)",
    flex: 1,
    minWidth: 0,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    position: "relative",
    background: "transparent",
  },
  K = (e) => ({
    position: "absolute",
    top: "0.75rem",
    left: "0.75rem",
    right: e.spacing(5),
    zIndex: 4,
    minWidth: 0,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    gap: e.spacing(1),
    pointerEvents: "none",
    [e.breakpoints.down(720)]: { right: "0.75rem", flexWrap: "wrap" },
  }),
  N = (e) => ({
    minWidth: 0,
    flex: "0 1 auto",
    display: "inline-flex",
    alignItems: "center",
    alignSelf: "flex-start",
    marginRight: e.spacing(0.5),
    pointerEvents: "auto",
    "&:empty": { display: "none" },
  }),
  Z = (e) => ({
    flex: "0 1 auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexWrap: "wrap",
    gap: "0.45rem",
    p: "0.35rem",
    maxWidth: "100%",
    minWidth: 0,
    overflow: "visible",
    pointerEvents: "auto",
    border: `1px solid ${l(e.palette.text.primary, 0.1)}`,
    borderRadius: e.shape.borderRadiusPx,
    backgroundColor: l(e.palette.background.paper, 0.88),
    boxShadow: `0 14px 34px ${l(e.palette.text.primary, 0.12)}`,
    backdropFilter: "blur(14px)",
  }),
  J = {
    minWidth: 0,
    display: "inline-flex",
    alignItems: "center",
    gap: "0.45rem",
    "&:empty": { display: "none" },
  },
  Q = (e) => ({
    flex: 1,
    minHeight: 0,
    display: "flex",
    position: "relative",
    overflow: "hidden",
    borderLeft: `1px solid ${l(e.palette.text.primary, 0.06)}`,
    background: l(e.palette.background.default, 0.58),
  }),
  u = "/chats",
  V = (e) => {
    if (!e) return u;
    try {
      const o = new URL(e, window.location.origin),
        s = o.pathname.length > 1 ? o.pathname.replace(/\/+$/, "") : o.pathname;
      return !(s === "/chats" || s.startsWith("/chats/")) || s === "/chats/tour-guide"
        ? u
        : `${o.pathname}${o.search}${o.hash}`;
    } catch {
      return u;
    }
  },
  t = () => {
    D.info("This sample guide does not run real workspace actions.");
  },
  r = async () => {
    t();
  },
  c = async () => (t(), !0),
  X = (e) => {
    t();
  },
  Y = {
    searchDialogTrigger: t,
    profileMenuTrigger: t,
    profileMenuAction: t,
    chatSelect: t,
    chatAction: t,
    composerAction: t,
    branchAssistantMessage: t,
    writeupAction: X,
  };
function ee() {
  const { returnTo: e } = R({ from: "/chats/tour-guide" }),
    o = w(),
    [s, h] = n.useState(() => new Date().toISOString()),
    [m, b] = n.useState(null),
    [T, v] = n.useState(null),
    g = n.useMemo(() => P(d), []),
    x = n.useMemo(() => V(e), [e]),
    y = n.useCallback(() => {
      h(new Date().toISOString());
    }, []),
    A = n.useCallback((p) => {
      b(p);
    }, []),
    E = n.useCallback((p) => {
      v(p);
    }, []),
    I = n.useCallback(() => {
      o({ href: x, replace: !0 });
    }, [o, x]),
    k = m ? s : null;
  return a.jsx(W, {
    value: Y,
    children: a.jsxs(i, {
      sx: q,
      children: [
        a.jsx(i, { sx: H }),
        a.jsxs(i, {
          component: "main",
          sx: z,
          children: [
            a.jsx(M, {
              activePanelKey: "chats",
              children: a.jsx(U, {
                isOpen: !0,
                isLoadingChats: !1,
                branchSpaces: [],
                chats: [g],
                folders: [],
                isExplorerSectionCollapsed: !1,
                isChatsSectionCollapsed: !1,
                explorerDensity: "comfortable",
                showExplorerLastEdited: !0,
                activeFolderId: null,
                activeBranchSpaceId: null,
                isThreadTourGuideActive: !0,
                selectedChatId: f,
                archivingChatId: null,
                deletingChatId: null,
                deletingFolderId: null,
                deletingBranchSpaceId: null,
                branchingChatId: null,
                isCreatingChat: !1,
                isSavingChatDetails: !1,
                isSavingBranchSpaceDetails: !1,
                isSavingFolderDetails: !1,
                isSharingChat: !1,
                isCreatingFolder: !1,
                userTooltip: "Tour guide",
                userInitials: "TG",
                onLogout: _,
                createFolder: c,
                closeSidebar: t,
                toggleExplorerSection: t,
                toggleChatsSection: t,
                setExplorerDensity: t,
                setShowExplorerLastEdited: t,
                createSubfolder: c,
                createRootChat: r,
                createChatInFolder: r,
                moveBranchSpace: r,
                moveFolder: r,
                requestBranchSpaceDelete: t,
                selectChat: t,
                selectBranchSpaceChat: t,
                renameFolder: r,
                toggleFolderPin: r,
                requestFolderDelete: t,
                branchChat: r,
                shareChat: r,
                renameChat: r,
                createChatFolder: c,
                createBranchSpaceFolder: c,
                moveChatToFolder: r,
                removeChatFromFolder: r,
                toggleChatPin: r,
                requestChatArchive: t,
                requestChatDelete: t,
              }),
            }),
            a.jsxs(i, {
              component: "section",
              sx: G,
              children: [
                a.jsxs(i, {
                  "aria-label": "Tour guide toolbar",
                  sx: K,
                  children: [
                    a.jsx(i, { ref: E, "aria-label": "Chat status", sx: N }),
                    a.jsxs(i, {
                      "aria-label": "Tour guide thread tools",
                      role: "toolbar",
                      sx: Z,
                      children: [
                        a.jsx(i, { ref: A, "aria-label": "Chat tools", role: "group", sx: J }),
                        a.jsx($, {
                          selectedChat: g,
                          onOpenAnnouncements: t,
                          onOpenThreadTourGuide: y,
                        }),
                      ],
                    }),
                  ],
                }),
                a.jsx(i, {
                  sx: Q,
                  children: a.jsx(
                    B,
                    {
                      draftChat: d,
                      isSidebarCollapsed: !1,
                      isReadOnlyChat: !0,
                      areWriteupActionsEnabled: !0,
                      areWriteupExportsEnabled: !1,
                      isThreadTourSampleChat: !0,
                      threadTourRequestKey: k,
                      onThreadTourExit: I,
                      isChatSidebarTourStepEnabled: !0,
                      toolbarContainer: m,
                      statusContainer: T,
                    },
                    d.id,
                  ),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const Ge = F("/chats/tour-guide")({ component: ee });
export { Ge as Route };
