import {
  Fragment,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from "#production-react";
import {
  ACCEPTED_ATTACHMENT_TYPES,
  ACTIVE_PROJECT_CHAT_MESSAGE,
  Alert,
  alpha,
  Box,
  Button,
  cacheKeys,
  ChatSubmissionProvider,
  Chip,
  CircularProgress,
  ComposerAttachmentCard,
  createLucideIcon,
  EraserIcon,
  getErrorMessage,
  getProjectChat,
  getRunErrorMessage,
  Markdown,
  MessageAttachments,
  MessageBubble,
  MessageSources,
  notifyChatChanged,
  PanelCloseIcon,
  rollbackChat,
  shouldRefreshProject,
  Stack,
  TextField,
  toast,
  TooltipIconButton,
  Typography,
  updateChat,
  useChat,
  useChatPolling,
  useChatSubmission,
  useComposerAttachments,
  useConfirmation,
  useExecutionModes,
  useLatexEditProposal,
  useMutation,
  useQuery,
  useQueryClient,
  type ProjectChat,
  type ProjectMessage,
} from "../../runtime/latexProjectChatRuntime.js";

const PaperclipIcon = createLucideIcon("paperclip", [
  [
    "path",
    {
      d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
      key: "1miecu",
    },
  ],
]);
const rootStyles = {
  minWidth: 0,
  minHeight: 0,
  height: "100%",
  display: "flex",
  flexDirection: "column",
};
const headerStyles = (theme: any) => ({
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1),
  padding: theme.spacing(1.2, 1.5),
  borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
  backgroundColor: alpha(theme.palette.background.paper, 0.7),
});
const headingStyles = (theme: any) => ({
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.25),
});
const headerActions = (theme: any) => ({
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.5),
});
const stateStyles = (theme: any) => ({
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1.2),
  padding: theme.spacing(2),
});
const messagesStyles = (theme: any) => ({
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.15),
  overflowX: "hidden",
  overflowY: "auto",
  padding: theme.spacing(1.25),
  scrollbarGutter: "stable",
});
const messageRow = (user: boolean) => (theme: any) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: user ? "flex-end" : "flex-start",
  contentVisibility: "auto",
  containIntrinsicSize: "auto 8rem",
  gap: 0.5,
});
const bubbleStyles = { width: "fit-content", maxWidth: "96%" };
const composerStyles = (theme: any) => ({
  flex: "0 0 auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.75),
  padding: theme.spacing(1, 1.25),
  borderTop: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
  backgroundColor: alpha(theme.palette.background.paper, 0.76),
});
const inputStyles = { minWidth: 0 };
const attachmentsStyles = (theme: any) => ({
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(0.75),
  maxHeight: "12rem",
  overflowY: "auto",
});
const composerFooter = (theme: any) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1),
});
const footerLeft = (theme: any) => ({
  minWidth: 0,
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  gap: theme.spacing(0.5),
});
const workingStyles = (theme: any) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(0.75),
});
const INITIAL_MESSAGE_COUNT = 12;
const MESSAGE_PAGE_SIZE = 12;

const ProjectMessageView = memo(function ProjectMessageView({
  documentId,
  message,
}: {
  documentId: string;
  message: ProjectMessage;
}) {
  const content = message.content.trim();
  const attachments = message.attachments ?? [];
  const proposal = useLatexEditProposal(
    documentId,
    message.latexEditProposalId ?? null,
  ).data;
  const user = message.role === "user";
  const mathSyntax =
    message.markdownMathFormat === "canonical-v1"
      ? "canonical"
      : "compatibility";
  if (!content && attachments.length === 0 && !proposal) return null;
  return (
    <Box sx={messageRow(user)}>
      <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
        <Typography variant="caption" color="textSecondary">
          {user ? "You" : "Assistant"}
        </Typography>
        {proposal && (
          <Chip
            size="xs"
            color={
              proposal.status === "pending"
                ? "warning"
                : proposal.status === "applied"
                  ? "success"
                  : "error"
            }
            label={`${proposal.status[0].toUpperCase()}${proposal.status.slice(1)} proposal`}
          />
        )}
      </Stack>
      <MessageBubble type={user ? "user" : "assistant"} sx={bubbleStyles}>
        {attachments.length > 0 && (
          <MessageAttachments attachments={attachments} />
        )}{" "}
        {content && (
          <Markdown
            content={content}
            mathSyntax={mathSyntax}
            mode="compact"
            tone={user ? "user" : "assistant"}
          />
        )}{" "}
        {!user && <MessageSources sources={message.sources} />}
      </MessageBubble>
    </Box>
  );
});

const ProjectChatComposer = memo(function ProjectChatComposer({
  chat,
}: {
  chat: ProjectChat;
}) {
  const [text, setText] = useState("");
  const [preparing, setPreparing] = useState(false);
  const [optimisticChat, setOptimisticChat] = useState<ProjectChat | null>(
    null,
  );
  const [visibleCount, setVisibleCount] = useState(INITIAL_MESSAGE_COUNT);
  const current =
    optimisticChat && optimisticChat.messageRevision > chat.messageRevision
      ? optimisticChat
      : chat;
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const stickToBottom = useRef(true);
  useChatPolling(current.id, {
    markReadOnCompletedRun: false,
    pollWhenIdle: false,
  });
  const {
    error: modeError,
    executionModes,
    isLoading: modesLoading,
  } = useExecutionModes();
  const selectedMode = useMemo(() => {
    const latestModel = [...current.messages]
      .reverse()
      .find((message) => message.role === "assistant")?.modelId;
    return (
      executionModes.find((mode: any) => mode.id === latestModel) ??
      executionModes.find((mode: any) => mode.isDefault) ??
      executionModes[0] ??
      null
    );
  }, [current.messages, executionModes]);
  const attachments = useComposerAttachments({
    selectedExecutionMode: selectedMode,
  });
  const submission = useChatSubmission({
    chat: current,
    workflowMode: "single",
    selectedExecutionModeId: selectedMode?.id ?? "",
    selectedExecutionMode: selectedMode,
    selectedReasoningEffort: selectedMode?.reasoningEfforts[0] ?? "none",
    selectedOperation: "chat",
    onOptimisticChatChange: setOptimisticChat,
  });
  const hiddenCount = Math.max(0, current.messages.length - visibleCount);
  const visibleMessages = useMemo(
    () => current.messages.slice(-visibleCount),
    [current.messages, visibleCount],
  );
  const running = current.activeRun !== null;
  const runError = getRunErrorMessage(current);
  const disabled =
    (!text.trim() && attachments.composerAttachments.length === 0) ||
    modesLoading ||
    selectedMode === null ||
    running ||
    submission.isSubmittingChat ||
    preparing ||
    !!attachments.composerError ||
    !!current.inputSafetyBlockedAt;
  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (viewport && stickToBottom.current)
      viewport.scrollTop = viewport.scrollHeight;
  }, [(current.activeRun as any)?.id, current.messages.length]);
  const onScroll = useCallback(() => {
    const viewport = viewportRef.current;
    if (viewport)
      stickToBottom.current =
        viewport.scrollHeight - viewport.scrollTop - viewport.clientHeight <=
        72;
  }, []);
  const send = useCallback(async () => {
    const content = text.trim();
    const files = attachments.composerAttachments;
    if (
      (content || files.length !== 0) &&
      !disabled &&
      !attachments.getAttachmentValidationError(files)
    ) {
      setPreparing(true);
      stickToBottom.current = true;
      try {
        const prepared = await attachments.toChatAttachments(files);
        attachments.setComposerAttachments(prepared.composerAttachments);
        try {
          await submission.sendMessage(
            content,
            prepared.chatAttachments,
            "chat",
          );
          setText("");
          attachments.setComposerAttachments([]);
        } catch {
          setText((currentText) => currentText || content);
        }
      } catch (error) {
        attachments.showComposerError(
          error instanceof Error
            ? error.message
            : "We couldn't prepare those files.",
        );
      } finally {
        setPreparing(false);
      }
    }
  }, [attachments, text, disabled, submission]);
  const submit = (event: FormEvent) => {
    event.preventDefault();
    void send();
  };
  const keyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "Enter" &&
      !event.shiftKey &&
      !event.nativeEvent.isComposing
    ) {
      event.preventDefault();
      void send();
    }
  };
  const slotProps = useMemo(
    () => ({
      input: { disableUnderline: true },
      htmlInput: { "aria-label": "Project chat message", onKeyDown: keyDown },
    }),
    [send],
  );
  return (
    <Fragment>
      <Box ref={viewportRef} sx={messagesStyles} onScroll={onScroll}>
        {hiddenCount > 0 && (
          <Button
            type="button"
            size="small"
            variant="text"
            onClick={() =>
              setVisibleCount((count) => count + MESSAGE_PAGE_SIZE)
            }
          >
            Show {Math.min(hiddenCount, MESSAGE_PAGE_SIZE)} earlier messages
          </Button>
        )}
        {current.messages.length === 0 && !running && (
          <Typography variant="body2" color="textSecondary" align="center">
            Ask about this project, or tell the chat to edit the contents of any
            text file. Proposed changes are shown for review before they are
            applied.
          </Typography>
        )}
        {visibleMessages.map((message, index) => (
          <ProjectMessageView
            documentId={current.latexDocumentId}
            message={message}
            key={`${message.role}:${message.timestamp}:${current.messages.length - visibleMessages.length + index}`}
          />
        ))}
        {runError && <Alert severity="error">{runError}</Alert>}
        {running && (
          <Box sx={workingStyles}>
            <CircularProgress size={16} />
            <Typography variant="body2" color="textSecondary">
              Working with the project context…
            </Typography>
          </Box>
        )}
      </Box>
      <Box component="form" sx={composerStyles} onSubmit={submit}>
        <input
          ref={attachments.attachmentInputRef}
          type="file"
          accept={ACCEPTED_ATTACHMENT_TYPES}
          multiple
          disabled={running || submission.isSubmittingChat || preparing}
          hidden
          onChange={attachments.handleInputSelection}
        />
        {modeError && (
          <Alert severity="error">Chat modes could not be loaded.</Alert>
        )}
        {running && (
          <Alert severity="info">{ACTIVE_PROJECT_CHAT_MESSAGE}</Alert>
        )}
        {submission.submissionErrorMessage && (
          <Alert severity="error">{submission.submissionErrorMessage}</Alert>
        )}
        {attachments.composerError && (
          <Alert severity="error">{attachments.composerError}</Alert>
        )}
        {attachments.composerAttachments.length > 0 && (
          <Box sx={attachmentsStyles}>
            {attachments.composerAttachments.map((item: any) => (
              <ComposerAttachmentCard
                attachment={item}
                disabled={preparing || submission.isSubmittingChat}
                onRemove={() => attachments.removeComposerAttachment(item.id)}
                key={item.id}
              />
            ))}
          </Box>
        )}
        <TextField
          sx={inputStyles}
          placeholder="Ask a question or describe the file edits you want"
          value={text}
          disabled={running || submission.isSubmittingChat || preparing}
          variant="standard"
          fullWidth
          multiline
          minRows={2}
          maxRows={6}
          slotProps={slotProps}
          onChange={(event: { target: { value: string } }) =>
            setText(event.target.value)
          }
        />
        <Box sx={composerFooter}>
          <Box sx={footerLeft}>
            <Button
              type="button"
              size="small"
              variant="text"
              startIcon={<PaperclipIcon size={16} />}
              disabled={running || submission.isSubmittingChat || preparing}
              onClick={attachments.openAttachmentPicker}
            >
              Attach
            </Button>
            <Typography variant="caption" color="textSecondary">
              Enter to send · Shift+Enter for a new line
            </Typography>
          </Box>
          {!running && (
            <Button
              type="submit"
              size="small"
              variant="contained"
              disabled={disabled}
            >
              {preparing ? "Uploading" : "Send"}
            </Button>
          )}
          {running && (
            <Button
              type="button"
              size="small"
              variant="outlined"
              disabled={submission.isCancelingRun}
              onClick={submission.cancelRun}
            >
              {submission.isCancelingRun ? "Canceling" : "Cancel"}
            </Button>
          )}
        </Box>
      </Box>
    </Fragment>
  );
});

export interface LatexProjectChatPanelProps {
  documentId: string;
  documentRevision: number;
  isHideDisabled?: boolean;
  onActiveRunChange(active: boolean): void;
  onEditProposalIdChange(id: string | null): void;
  prepareSubmission(): Promise<{
    documentRevision: number;
    activeFileId?: string | null;
    selectionStart?: number | null;
    selectionEnd?: number | null;
  }>;
  refreshProject(): Promise<void>;
  onHide?(): void;
}
function LatexProjectChatPanelView({
  documentId,
  documentRevision,
  isHideDisabled = false,
  onActiveRunChange,
  onEditProposalIdChange,
  prepareSubmission,
  refreshProject,
  onHide,
}: LatexProjectChatPanelProps) {
  const queryClient = useQueryClient();
  const initialQuery = useQuery({
    queryKey: ["latex", "documents", documentId, "chat"],
    queryFn: async () => {
      const chat = await getProjectChat(documentId);
      if (chat.latexDocumentId !== documentId)
        throw new Error("The loaded chat is not bound to this LaTeX project.");
      queryClient.setQueryData(["chat", chat.id], chat);
      return chat;
    },
    retry: false,
    staleTime: Infinity,
  });
  const chatId = initialQuery.data?.id ?? null;
  const liveQuery = useChat(chatId, {
    enabled: chatId !== null,
    markRead: false,
  });
  const chat = liveQuery.data ?? initialQuery.data ?? null;
  const ready = chat !== null;
  const active = chat != null && !!chat.activeRun;
  const proposalId = useMemo(() => {
    if (!chat) return null;
    for (let index = chat.messages.length - 1; index >= 0; index--) {
      const id = chat.messages[index].latexEditProposalId;
      if (id) return id;
    }
    return null;
  }, [chat?.messages]);
  useEffect(() => {
    if (ready)
      queryClient.invalidateQueries({
        queryKey: cacheKeys.editProposals(documentId),
      });
  }, [
    (chat?.activeRun as any)?.id,
    chat?.latestRun?.status,
    chat?.messageRevision,
    documentId,
    ready,
    queryClient,
  ]);
  useEffect(() => {
    if (ready) onEditProposalIdChange(proposalId);
  }, [ready, proposalId, onEditProposalIdChange]);
  useEffect(() => () => onEditProposalIdChange(null), [onEditProposalIdChange]);
  useEffect(() => {
    onActiveRunChange(active);
    return () => onActiveRunChange(false);
  }, [active, onActiveRunChange]);
  const context = useCallback(async () => {
    const value = await prepareSubmission();
    return { latexEditorContext: value };
  }, [prepareSubmission]);
  const onSubmissionError = useCallback(
    async (error: unknown) => {
      if (shouldRefreshProject(error)) await refreshProject();
    },
    [refreshProject],
  );
  const providerValue = useMemo(
    () => ({ onSubmissionError, prepareSubmission: context }),
    [onSubmissionError, context],
  );
  const loading = initialQuery.isPending || (chatId && liveQuery.isPending);
  const failed = initialQuery.isError || liveQuery.isError;
  const clearMutation = useMutation({
    mutationFn: (value: ProjectChat) =>
      updateChat(value.id, {
        messages: [],
        expectedRevision: value.messageRevision,
      }),
    onSuccess: (updated: ProjectChat) => {
      queryClient.setQueryData(["chat", updated.id], updated);
      notifyChatChanged(updated);
      toast.success("Project chat cleared.");
    },
    onError: (error: unknown) => {
      if (chatId) rollbackChat(queryClient, chatId, error);
      toast.error(
        getErrorMessage(error, "The project chat could not be cleared."),
      );
    },
  });
  const confirmation = useConfirmation((_key, close) => ({
    title: "Clear project chat?",
    message:
      "This permanently removes all previous messages and dismisses pending proposed edits. Your LaTeX project files are not changed.",
    confirmLabel: "Clear chat",
    pendingConfirmLabel: "Clearing...",
    confirmColor: "error",
    confirmStartIcon: <EraserIcon size={16} />,
    isPending: clearMutation.isPending,
    onConfirm: async () => {
      if (chat)
        try {
          await clearMutation.mutateAsync(chat);
          close();
        } catch {}
    },
  }));
  return (
    <Box sx={rootStyles}>
      <Box component="header" sx={headerStyles}>
        <Box sx={headingStyles}>
          <Typography variant="subtitle2" color="textPrimary">
            Project chat
          </Typography>
          <Typography variant="caption" color="textSecondary">
            Revision {documentRevision}
          </Typography>
        </Box>
        <Box sx={headerActions}>
          {chat && chat.messages.length > 0 && (
            <Button
              type="button"
              size="small"
              variant="text"
              startIcon={<EraserIcon size={15} />}
              disabled={!!chat.activeRun || clearMutation.isPending}
              onClick={() => confirmation.activate("clear")}
            >
              Clear
            </Button>
          )}
          {onHide && (
            <TooltipIconButton
              tooltip="Hide project chat panel"
              aria-label="Hide project chat panel"
              disabled={isHideDisabled}
              onClick={onHide}
            >
              <PanelCloseIcon size={17} />
            </TooltipIconButton>
          )}
        </Box>
      </Box>
      {loading && (
        <Box sx={stateStyles}>
          <CircularProgress size={24} />
          <Typography variant="body2" color="textSecondary">
            Opening project chat
          </Typography>
        </Box>
      )}
      {failed && (
        <Box sx={stateStyles}>
          <Alert severity="error">The project chat could not be opened.</Alert>
          <Button
            type="button"
            size="small"
            variant="outlined"
            onClick={() => {
              initialQuery.refetch();
              if (chatId) liveQuery.refetch();
            }}
          >
            Retry
          </Button>
        </Box>
      )}
      {!loading && !failed && chat && (
        <ChatSubmissionProvider value={providerValue}>
          <ProjectChatComposer chat={chat} key={chat.id} />
        </ChatSubmissionProvider>
      )}
      {confirmation.confirmationDialog}
    </Box>
  );
}
export const LatexProjectChatPanel = memo(LatexProjectChatPanelView);
