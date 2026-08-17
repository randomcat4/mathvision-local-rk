import { useCallback, useMemo, useState } from "#production-react";
import { ChatInteractionOverridesProvider } from "../chat/ChatInteractionOverrides";
import {
  SAMPLE_WRITEUP_CHAT_ID,
  SAMPLE_WRITEUP_SOURCE,
  SAMPLE_WRITEUP_USER_ID,
} from "../latex/sampleWriteup";
import { sanitizeTourReturnPath } from "./tourGuideRoute";
import {
  alpha,
  AppSidePanel,
  Box,
  ChatSidebar,
  ChatToolsMenu,
  logout,
  prepareSidebarChat,
  ThreadPanel,
  toast,
  useNavigate,
  useTourSearch,
} from "../../runtime/tourGuideRuntime.js";

const USER_TIME = "2026-01-01T12:00:00.000Z";
const ASSISTANT_TIME = "2026-01-01T12:05:00.000Z";
const messages = [
  {
    role: "user",
    content:
      "Can you write up a short proof that the square of an even integer is even?",
    timestamp: USER_TIME,
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
      writeup: SAMPLE_WRITEUP_SOURCE,
    }),
    timestamp: ASSISTANT_TIME,
    displayMode: "structured",
    markdownMathFormat: "canonical-v1",
  },
];
const sampleChat = {
  id: SAMPLE_WRITEUP_CHAT_ID,
  userId: SAMPLE_WRITEUP_USER_ID,
  title: "Guided tour sample",
  branchTitlePending: false,
  branchSpaceId: null,
  folderId: null,
  latexDocumentId: null,
  messages,
  messageRevision: 0,
  contextSummary: null,
  contextUsage: null,
  isPublic: false,
  hasUnread: false,
  isPinned: false,
  pinnedAt: null,
  archivedAt: null,
  inputSafetyBlockedAt: null,
  activeRun: null,
  latestRun: null,
  submittedRun: null,
  createdAt: USER_TIME,
  lastUpdated: ASSISTANT_TIME,
  deletedAt: null,
};
interface TourTheme {
  spacing(value: number): string;
  breakpoints: { down(value: number): string };
  shape: { borderRadiusPx: number };
  palette: {
    background: { default: string; paper: string };
    text: { primary: string };
  };
}
const pageStyles = (theme: TourTheme) => ({
  height: "100dvh",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
  backgroundColor: theme.palette.background.default,
  backgroundImage: "var(--app-shell-background)",
  color: theme.palette.text.primary,
});
const gridStyles = {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  backgroundImage: "var(--app-shell-grid)",
  backgroundSize: "44px 44px",
  maskImage: "var(--app-shell-mask)",
};
const mainStyles = (theme: TourTheme) => ({
  position: "relative",
  zIndex: 1,
  flex: 1,
  minHeight: 0,
  display: "flex",
  gap: 0,
  padding: 0,
  [theme.breakpoints.down(980)]: { flexDirection: "column" },
});
const threadStyles = {
  minHeight: 0,
  backdropFilter: "blur(18px)",
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  position: "relative",
  background: "transparent",
};
const toolbarStyles = (theme: TourTheme) => ({
  position: "absolute",
  top: "0.75rem",
  left: "0.75rem",
  right: theme.spacing(5),
  zIndex: 4,
  minWidth: 0,
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "flex-end",
  gap: theme.spacing(1),
  pointerEvents: "none",
  [theme.breakpoints.down(720)]: { right: "0.75rem", flexWrap: "wrap" },
});
const statusStyles = (theme: TourTheme) => ({
  minWidth: 0,
  flex: "0 1 auto",
  display: "inline-flex",
  alignItems: "center",
  alignSelf: "flex-start",
  marginRight: theme.spacing(0.5),
  pointerEvents: "auto",
  "&:empty": { display: "none" },
});
const toolsStyles = (theme: TourTheme) => ({
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
  border: `1px solid ${alpha(theme.palette.text.primary, 0.1)}`,
  borderRadius: theme.shape.borderRadiusPx,
  backgroundColor: alpha(theme.palette.background.paper, 0.88),
  boxShadow: `0 14px 34px ${alpha(theme.palette.text.primary, 0.12)}`,
  backdropFilter: "blur(14px)",
});
const chatToolsStyles = {
  minWidth: 0,
  display: "inline-flex",
  alignItems: "center",
  gap: "0.45rem",
  "&:empty": { display: "none" },
};
const contentStyles = (theme: TourTheme) => ({
  flex: 1,
  minHeight: 0,
  display: "flex",
  position: "relative",
  overflow: "hidden",
  borderLeft: `1px solid ${alpha(theme.palette.text.primary, 0.06)}`,
  background: alpha(theme.palette.background.default, 0.58),
});
const sampleAction = () =>
  toast.info("This sample guide does not run real workspace actions.");
const sampleAsyncAction = async () => {
  sampleAction();
};
const sampleCreateAction = async () => {
  sampleAction();
  return true;
};
const interactionOverrides = {
  searchDialogTrigger: sampleAction,
  profileMenuTrigger: sampleAction,
  profileMenuAction: sampleAction,
  chatSelect: sampleAction,
  chatAction: sampleAction,
  composerAction: sampleAction,
  branchAssistantMessage: sampleAction,
  writeupAction: () => sampleAction(),
};
export function TourGuidePage() {
  const { returnTo } = useTourSearch({ from: "/chats/tour-guide" });
  const navigate = useNavigate();
  const [requestKey, setRequestKey] = useState(() => new Date().toISOString());
  const [toolbarContainer, setToolbarContainer] = useState<HTMLElement | null>(
    null,
  );
  const [statusContainer, setStatusContainer] = useState<HTMLElement | null>(
    null,
  );
  const sidebarChat = useMemo(() => prepareSidebarChat(sampleChat), []);
  const returnPath = useMemo(
    () => sanitizeTourReturnPath(returnTo, window.location.origin),
    [returnTo],
  );
  const exit = useCallback(
    () => navigate({ href: returnPath, replace: true }),
    [navigate, returnPath],
  );
  const activeRequestKey = toolbarContainer ? requestKey : null;
  return (
    <ChatInteractionOverridesProvider value={interactionOverrides}>
      <Box sx={pageStyles}>
        <Box sx={gridStyles} />
        <Box component="main" sx={mainStyles}>
          <AppSidePanel activePanelKey="chats">
            <ChatSidebar
              isOpen={true}
              isLoadingChats={false}
              branchSpaces={[]}
              chats={[sidebarChat]}
              folders={[]}
              isExplorerSectionCollapsed={false}
              isChatsSectionCollapsed={false}
              explorerDensity="comfortable"
              showExplorerLastEdited={true}
              activeFolderId={null}
              activeBranchSpaceId={null}
              isThreadTourGuideActive={true}
              selectedChatId={SAMPLE_WRITEUP_CHAT_ID}
              archivingChatId={null}
              deletingChatId={null}
              deletingFolderId={null}
              deletingBranchSpaceId={null}
              branchingChatId={null}
              isCreatingChat={false}
              isSavingChatDetails={false}
              isSavingBranchSpaceDetails={false}
              isSavingFolderDetails={false}
              isSharingChat={false}
              isCreatingFolder={false}
              userTooltip="Tour guide"
              userInitials="TG"
              onLogout={logout}
              createFolder={sampleCreateAction}
              closeSidebar={sampleAction}
              toggleExplorerSection={sampleAction}
              toggleChatsSection={sampleAction}
              setExplorerDensity={sampleAction}
              setShowExplorerLastEdited={sampleAction}
              createSubfolder={sampleCreateAction}
              createRootChat={sampleAsyncAction}
              createChatInFolder={sampleAsyncAction}
              moveBranchSpace={sampleAsyncAction}
              moveFolder={sampleAsyncAction}
              requestBranchSpaceDelete={sampleAction}
              selectChat={sampleAction}
              selectBranchSpaceChat={sampleAction}
              renameFolder={sampleAsyncAction}
              toggleFolderPin={sampleAsyncAction}
              requestFolderDelete={sampleAction}
              branchChat={sampleAsyncAction}
              shareChat={sampleAsyncAction}
              renameChat={sampleAsyncAction}
              createChatFolder={sampleCreateAction}
              createBranchSpaceFolder={sampleCreateAction}
              moveChatToFolder={sampleAsyncAction}
              removeChatFromFolder={sampleAsyncAction}
              toggleChatPin={sampleAsyncAction}
              requestChatArchive={sampleAction}
              requestChatDelete={sampleAction}
            />
          </AppSidePanel>
          <Box component="section" sx={threadStyles}>
            <Box aria-label="Tour guide toolbar" sx={toolbarStyles}>
              <Box
                ref={setStatusContainer}
                aria-label="Chat status"
                sx={statusStyles}
              />
              <Box
                aria-label="Tour guide thread tools"
                role="toolbar"
                sx={toolsStyles}
              >
                <Box
                  ref={setToolbarContainer}
                  aria-label="Chat tools"
                  role="group"
                  sx={chatToolsStyles}
                />
                <ChatToolsMenu
                  selectedChat={sidebarChat}
                  onOpenAnnouncements={sampleAction}
                  onOpenThreadTourGuide={() =>
                    setRequestKey(new Date().toISOString())
                  }
                />
              </Box>
            </Box>
            <Box sx={contentStyles}>
              <ThreadPanel
                draftChat={sampleChat}
                isSidebarCollapsed={false}
                isReadOnlyChat={true}
                areWriteupActionsEnabled={true}
                areWriteupExportsEnabled={false}
                isThreadTourSampleChat={true}
                threadTourRequestKey={activeRequestKey}
                onThreadTourExit={exit}
                isChatSidebarTourStepEnabled={true}
                toolbarContainer={toolbarContainer}
                statusContainer={statusContainer}
                key={sampleChat.id}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </ChatInteractionOverridesProvider>
  );
}
