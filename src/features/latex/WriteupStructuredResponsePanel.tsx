import { Fragment, useEffect, useMemo, useState, type MouseEvent } from "#production-react";
import { CopyButton } from "../clipboard/CopyButton";
import { useChatInteractionOverrides } from "../chat/ChatInteractionOverrides";
import { THREAD_TOUR_TARGETS } from "../chat/AssistantTools";
import { normalizeLatexFileName } from "./naming";
import {
  createLatexWriteupFileName,
  createLatexWriteupName,
  createWriteupCacheKey,
  extractLatexWriteupSource,
} from "./writeup";
import {
  WriteupDisplayModeSwitch,
  WriteupPdfPreview,
  type WriteupDisplayMode,
} from "./WriteupDisplayControls";
import {
  Alert,
  alpha,
  Box,
  buildLatexEditorUrl,
  Button,
  CircleCheckIcon,
  CircleIcon,
  CircularProgress,
  createLucideIcon,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FileInputIcon,
  FilePlusIcon,
  getErrorMessage,
  Markdown,
  Menu,
  MenuItem,
  MenuLabel,
  Paper,
  setLatexEditorSearch,
  SidebarTreeConnectorIcon,
  Stack,
  TextField,
  toast,
  TooltipIconButton,
  Typography,
  useCreateLatexDocument,
  useImportWriteupFile,
  useIsMobile,
  useLatexDocument,
  useLatexDocuments,
  useNavigate,
  useQueuedWriteupPdf,
} from "../../runtime/writeupPanelRuntime.js";

const FileSymlinkIcon = createLucideIcon("file-symlink", [
  [
    "path",
    {
      d: "M4 11V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",
      key: "huwfnr",
    },
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "m10 18 3-3-3-3", key: "18f6ys" }],
]);

interface CopyToExistingProjectDialogProps {
  open: boolean;
  openInNewTab: boolean;
  originKey: string;
  source: string;
  onClose(): void;
}

function CopyToExistingProjectDialog({
  open,
  openInNewTab,
  originKey,
  source,
  onClose,
}: CopyToExistingProjectDialogProps) {
  const navigate = useNavigate();
  const documentsQuery = useLatexDocuments();
  const documents = documentsQuery.data ?? [];
  const [documentId, setDocumentId] = useState("");
  const [fileName, setFileName] = useState(() =>
    createLatexWriteupFileName(source),
  );
  const documentQuery = useLatexDocument(documentId || null);
  const importWriteup = useImportWriteupFile();
  const document = documents.find((candidate) => candidate.id === documentId);
  const canCopy =
    !!document &&
    !!documentQuery.data &&
    fileName.trim().length > 0 &&
    !importWriteup.isPending;
  const actionLabel = openInNewTab
    ? "Copy and open in new tab"
    : "Copy and open in this tab";
  const close = () => {
    if (!importWriteup.isPending) onClose();
  };
  const copy = async () => {
    if (!document || !documentQuery.data) return;
    let preferredPath: string;
    try {
      preferredPath = normalizeLatexFileName(fileName);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Enter a valid LaTeX file name.",
      );
      return;
    }
    const openedWindow = openInNewTab
      ? window.open("about:blank", "_blank")
      : null;
    if (openInNewTab && !openedWindow) {
      toast.error("Allow pop-ups to open the imported LaTeX file.");
      return;
    }
    if (openedWindow) openedWindow.opener = null;
    let imported: Awaited<ReturnType<typeof importWriteup.mutateAsync>>;
    try {
      const refreshed = await documentQuery.refetch();
      if (refreshed.isError || !refreshed.data)
        throw new Error(
          "The destination LaTeX project could not be refreshed.",
        );
      imported = await importWriteup.mutateAsync({
        documentId: document.id,
        input: {
          source,
          preferredPath,
          originKey,
          expectedRevision: refreshed.data.documentRevision,
        },
      });
    } catch (error) {
      openedWindow?.close();
      toast.error(
        getErrorMessage(
          error,
          "Could not copy the writeup into the LaTeX project.",
        ),
      );
      return;
    }
    const confirmation = imported.created
      ? `Copied ${imported.file.path} into ${document.name}.`
      : `Found the existing copy at ${imported.file.path}.`;
    onClose();
    try {
      if (openedWindow) {
        if (openedWindow.closed) {
          toast.warning(
            `${confirmation} The editor tab was closed before it could open.`,
          );
          return;
        }
        openedWindow.location.href = buildLatexEditorUrl(
          window.location.origin,
          document.id,
          imported.file.id,
        ).toString();
        toast.success(confirmation);
        return;
      }
      await navigate({
        to: "/chats",
        search: (search) =>
          setLatexEditorSearch(search, document.id, imported.file.id),
      });
      toast.success(confirmation);
    } catch (error) {
      openedWindow?.close();
      toast.warning(
        `${confirmation} ${getErrorMessage(error, "The LaTeX editor could not be opened.")}`,
      );
    }
  };
  return (
    <Dialog
      open={open}
      fullWidth
      maxWidth="sm"
      aria-labelledby="writeup-copy-to-latex-project-title"
      onClose={close}
    >
      <DialogTitle id="writeup-copy-to-latex-project-title">
        Copy into existing project
      </DialogTitle>
      <DialogContent>
        <Stack spacing={2}>
          <Typography variant="body2" color="textSecondary">
            This copies the complete writeup as a standalone .tex file. Because
            it is a complete document, it is not inserted into main.tex. It will
            not appear in the project's compiled PDF unless you select the
            copied file as the main document.
          </Typography>
          {documentsQuery.isError && (
            <Alert severity="error">
              LaTeX projects could not be loaded. Close this dialog and try
              again.
            </Alert>
          )}
          {!documentsQuery.isPending &&
            !documentsQuery.isError &&
            documents.length === 0 && (
              <Alert severity="info">
                Create a LaTeX project before copying this writeup.
              </Alert>
            )}
          <TextField
            select
            fullWidth
            label="Destination project"
            value={documentId}
            disabled={
              documentsQuery.isPending ||
              documentsQuery.isError ||
              documents.length === 0 ||
              importWriteup.isPending
            }
            onChange={(event: { target: { value: string } }) =>
              setDocumentId(event.target.value)
            }
          >
            {documents.map((item) => (
              <MenuItem value={item.id} key={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </TextField>
          {documentQuery.isError && (
            <Alert severity="error">
              The destination project could not be loaded.
            </Alert>
          )}
          <TextField
            fullWidth
            label="New source file name"
            value={fileName}
            disabled={importWriteup.isPending}
            helperText="If this name already exists, a numbered file name will be used."
            onChange={(event: { target: { value: string } }) =>
              setFileName(event.target.value)
            }
          />
          <TextField
            fullWidth
            multiline
            minRows={5}
            maxRows={8}
            label="Writeup source preview"
            value={source}
            slotProps={{ input: { readOnly: true } }}
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          disabled={importWriteup.isPending}
          onClick={close}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          disabled={!canCopy}
          startIcon={
            importWriteup.isPending && (
              <CircularProgress size={16} thickness={5} color="inherit" />
            )
          }
          onClick={() => void copy()}
        >
          {importWriteup.isPending ? "Copying…" : actionLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

interface WriteupActionsState {
  canRunWriteupExports: boolean;
  displayMode: WriteupDisplayMode;
  isLatexEditorActionDisabled: boolean;
  latexEditorActionTitle?: string;
  isPdfPreparing: boolean;
  isPdfReady: boolean;
  isPdfActionDisabled: boolean;
  onDisplayModeChange(mode: WriteupDisplayMode): void;
  onOpenPdf(): void;
  onOpenLatexEditor(newTab: boolean): void;
  pdfActionLabel: string;
  pdfActionTitle?: string;
  pdfCompileError: string | null;
  pdfUrl: string | null;
}

function WriteupActions({
  enabled,
  active,
  state,
  originKey,
  source,
}: {
  enabled: boolean;
  active: boolean;
  state: WriteupActionsState;
  originKey: string;
  source: string;
}) {
  const mobile = useIsMobile();
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const [copyDialogOpen, setCopyDialogOpen] = useState(false);
  const [openInNewTab, setOpenInNewTab] = useState(true);
  if (!active || !source || !enabled) return null;
  const openMenu = (event: MouseEvent<HTMLElement>) =>
    setAnchor(event.currentTarget);
  const closeMenu = () => setAnchor(null);
  const openExisting = () => {
    closeMenu();
    setCopyDialogOpen(true);
  };
  const openNew = () => {
    closeMenu();
    state.onOpenLatexEditor(openInNewTab);
  };
  return (
    <Fragment>
      {state.canRunWriteupExports && (
        <WriteupDisplayModeSwitch
          displayMode={state.displayMode}
          onDisplayModeChange={state.onDisplayModeChange}
        />
      )}
      {!mobile && (
        <Button
          data-thread-tour-target={THREAD_TOUR_TARGETS.writeupLatexEditor}
          title={state.latexEditorActionTitle}
          aria-controls={
            anchor ? "writeup-latex-project-actions-menu" : undefined
          }
          aria-haspopup="menu"
          aria-expanded={anchor ? "true" : undefined}
          disabled={state.isLatexEditorActionDisabled}
          onClick={openMenu}
          endIcon={<SidebarTreeConnectorIcon />}
          color="secondary"
          size="small"
        >
          Open in LaTeX Project
        </Button>
      )}
      {mobile && (
        <TooltipIconButton
          data-thread-tour-target={THREAD_TOUR_TARGETS.writeupLatexEditor}
          tooltip="Open in LaTeX Project"
          aria-label="Open in LaTeX Project"
          aria-controls={
            anchor ? "writeup-latex-project-actions-menu" : undefined
          }
          aria-haspopup="menu"
          aria-expanded={anchor ? "true" : undefined}
          disabled={state.isLatexEditorActionDisabled}
          onClick={openMenu}
          size="small"
          color="secondary"
          disableRipple
        >
          <SidebarTreeConnectorIcon size={17} />
        </TooltipIconButton>
      )}
      {mobile && (
        <TooltipIconButton
          data-thread-tour-target={THREAD_TOUR_TARGETS.writeupPdf}
          title={state.pdfActionTitle}
          tooltip={state.pdfActionLabel}
          aria-label={state.pdfActionLabel}
          disabled={state.isPdfActionDisabled}
          onClick={state.onOpenPdf}
          size="small"
          color="inherit"
          disableRipple
        >
          <FileSymlinkIcon size={17} />
        </TooltipIconButton>
      )}
      {!mobile && (
        <Button
          data-thread-tour-target={THREAD_TOUR_TARGETS.writeupPdf}
          title={state.pdfActionTitle}
          disabled={state.isPdfActionDisabled}
          onClick={state.onOpenPdf}
          endIcon={<FileSymlinkIcon />}
          size="small"
          color="secondary"
        >
          {state.pdfActionLabel}
        </Button>
      )}
      <Menu
        id="writeup-latex-project-actions-menu"
        anchorEl={anchor}
        open={!!anchor}
        onClose={closeMenu}
        variant="menu"
      >
        <MenuLabel>Open in</MenuLabel>
        <MenuItem
          role="menuitemradio"
          aria-checked={!openInNewTab}
          selected={!openInNewTab}
          onClick={() => setOpenInNewTab(false)}
        >
          {!openInNewTab ? (
            <CircleCheckIcon size={16} />
          ) : (
            <CircleIcon size={16} />
          )}
          This tab
        </MenuItem>
        <MenuItem
          role="menuitemradio"
          aria-checked={openInNewTab}
          selected={openInNewTab}
          onClick={() => setOpenInNewTab(true)}
        >
          {openInNewTab ? (
            <CircleCheckIcon size={16} />
          ) : (
            <CircleIcon size={16} />
          )}
          New tab
        </MenuItem>
        <Divider />
        <MenuItem onClick={openNew}>
          <FilePlusIcon size={16} />
          New project
        </MenuItem>
        <MenuItem onClick={openExisting}>
          <FileInputIcon size={16} />
          Existing project…
        </MenuItem>
      </Menu>
      {copyDialogOpen && (
        <CopyToExistingProjectDialog
          open
          originKey={originKey}
          source={source}
          openInNewTab={openInNewTab}
          onClose={() => setCopyDialogOpen(false)}
        />
      )}
    </Fragment>
  );
}

const contentStyles = {
  display: "flex",
  flexDirection: "column",
  gap: 1.2,
  minWidth: 0,
};
const sourceStyles = { minWidth: 0 };
const markdownStyles = { fontSize: "1rem" };
const headerStyles = {
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: 1,
  flexWrap: "wrap",
  pb: 1.2,
  mb: 1.8,
  borderBottom: "1px solid",
  borderColor: "divider",
};
const panelStyles = (theme: any) => ({
  minWidth: 0,
  padding: theme.spacing(2),
  border: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
  borderRadius: theme.shape.borderRadiusPx,
  background: `linear-gradient(180deg, ${alpha(theme.palette.background.paper, 0.82)}, ${alpha(theme.palette.background.paper, 0.66)})`,
  boxShadow: `inset 0 1px 0 ${alpha(theme.palette.common.white, 0.28)}, 0 16px 32px ${alpha(theme.palette.text.primary, 0.05)}`,
  [theme.breakpoints.down(720)]: { padding: theme.spacing(1.6) },
});

function WriteupContent({
  canShowPdf,
  displayMode,
  isPdfPreparing,
  isPdfReady,
  markdownMode = "default",
  pdfCompileError = null,
  pdfUrl = null,
  source,
}: {
  canShowPdf: boolean;
  displayMode: WriteupDisplayMode;
  isPdfPreparing: boolean;
  isPdfReady: boolean;
  markdownMode?: string;
  pdfCompileError?: string | null;
  pdfUrl?: string | null;
  source: string;
}) {
  const fencedSource = `\`\`\`\`latex\n${source}\n\`\`\`\``;
  const showPdf = displayMode === "pdf" && canShowPdf;
  return (
    <Box sx={contentStyles}>
      {showPdf && (
        <WriteupPdfPreview
          isPdfPreparing={isPdfPreparing}
          isPdfReady={isPdfReady}
          pdfCompileError={pdfCompileError}
          pdfUrl={pdfUrl}
        />
      )}
      {!showPdf && (
        <Box sx={sourceStyles}>
          <Markdown
            content={fencedSource}
            mode={markdownMode}
            sx={markdownStyles}
            showCodeCopyButton
          />
        </Box>
      )}
    </Box>
  );
}

function useWriteupActions({
  actionsEnabled,
  exportsEnabled,
  onResize,
  preparePdf,
  originKey,
  pdfPriority,
  source,
}: {
  actionsEnabled: boolean;
  exportsEnabled: boolean;
  onResize?(): void;
  preparePdf: boolean;
  originKey: string;
  pdfPriority: number;
  source: string;
}): WriteupActionsState {
  const navigate = useNavigate();
  const { writeupAction } = useChatInteractionOverrides() as {
    writeupAction?: (action: string) => void;
  };
  const createDocument = useCreateLatexDocument();
  const [displayMode, setDisplayMode] = useState<WriteupDisplayMode>("pdf");
  const canRunWriteupExports = actionsEnabled && exportsEnabled;
  const pdf = useQueuedWriteupPdf({
    areWriteupActionsEnabled: canRunWriteupExports,
    shouldPrepareWriteupPdf: preparePdf && canRunWriteupExports,
    writeupPdfPreparationPriority: pdfPriority,
    writeupSource: source,
  });
  useEffect(() => setDisplayMode("pdf"), [source]);
  const create = () => {
    if (!canRunWriteupExports)
      throw new Error("Writeup exports are disabled for this chat.");
    if (!source)
      throw new Error("A writeup is required before creating a LaTeX project.");
    return createDocument.mutateAsync({
      input: {
        name: createLatexWriteupName(source),
        source,
        originType: "writeup",
        originKey,
      },
    });
  };
  const openLatexEditor = async (newTab: boolean) => {
    const openedWindow = newTab ? window.open("about:blank", "_blank") : null;
    if (newTab && !openedWindow) {
      toast.error("Could not open a new LaTeX project tab.");
      return;
    }
    if (openedWindow) openedWindow.opener = null;
    let document: Awaited<ReturnType<typeof create>>;
    try {
      document = await create();
    } catch (error) {
      openedWindow?.close();
      toast.error(
        getErrorMessage(
          error,
          "Could not edit the writeup as a LaTeX project.",
        ),
      );
      return;
    }
    try {
      if (openedWindow) {
        if (openedWindow.closed) {
          toast.warning(
            `LaTeX project “${document.name}” is ready, but the editor tab was closed.`,
          );
          return;
        }
        openedWindow.location.href = buildLatexEditorUrl(
          window.location.origin,
          document.id,
        ).toString();
        return;
      }
      await navigate({
        to: "/chats",
        search: (search) => setLatexEditorSearch(search, document.id),
      });
    } catch (error) {
      openedWindow?.close();
      toast.warning(
        `LaTeX project “${document.name}” is ready. ${getErrorMessage(error, "The LaTeX editor could not be opened.")}`,
      );
    }
  };
  const changeMode = (mode: WriteupDisplayMode) => {
    onResize?.();
    setDisplayMode(mode);
    if (mode === "pdf") pdf.prepareWriteupPdfPreview();
  };
  return {
    canRunWriteupExports,
    displayMode,
    isLatexEditorActionDisabled: writeupAction
      ? false
      : !exportsEnabled || createDocument.isPending,
    latexEditorActionTitle:
      exportsEnabled || writeupAction
        ? undefined
        : "Writeup exports are unavailable.",
    isPdfPreparing: pdf.isWriteupPdfPreparing,
    isPdfReady: pdf.isWriteupPdfReady,
    isPdfActionDisabled: writeupAction ? false : !exportsEnabled,
    onDisplayModeChange: changeMode,
    onOpenPdf: () =>
      writeupAction ? writeupAction("pdf") : pdf.openWriteupPdf(),
    onOpenLatexEditor: (newTab) =>
      writeupAction
        ? writeupAction("latex-editor")
        : void openLatexEditor(newTab),
    pdfActionLabel: pdf.isWriteupPdfPreparing ? "Preparing PDF" : "Open in PDF",
    pdfActionTitle:
      exportsEnabled || writeupAction
        ? (pdf.pdfCompileError ?? undefined)
        : "Writeup exports are unavailable.",
    pdfCompileError: pdf.pdfCompileError,
    pdfUrl: pdf.pdfUrl,
  };
}

export interface WriteupStructuredResponsePanelProps {
  areWriteupActionsEnabled: boolean;
  areWriteupExportsEnabled: boolean;
  chatId?: string | null;
  copyContent: string;
  hidden: boolean;
  markdownMode?: string;
  messageIndex: number;
  onContentResizeInteraction?(): void;
  panelId: string;
  panelLabelledBy: string;
  shouldPrepareWriteupPdf: boolean;
  writeupPdfPreparationPriority: number;
  writeupValue: string;
}

export function WriteupStructuredResponsePanel(
  props: WriteupStructuredResponsePanelProps,
) {
  const source = extractLatexWriteupSource(props.writeupValue);
  const originKey = useMemo(
    () =>
      createWriteupCacheKey({
        chatId: props.chatId,
        messageIndex: props.messageIndex,
        source,
      }),
    [props.chatId, props.messageIndex, source],
  );
  const state = useWriteupActions({
    actionsEnabled: props.areWriteupActionsEnabled,
    exportsEnabled: props.areWriteupExportsEnabled,
    onResize: props.onContentResizeInteraction,
    preparePdf: props.shouldPrepareWriteupPdf,
    originKey,
    pdfPriority: props.writeupPdfPreparationPriority,
    source,
  });
  return (
    <Paper
      hidden={props.hidden}
      variant="inset"
      sx={panelStyles}
      role="tabpanel"
      id={props.panelId}
      aria-labelledby={props.panelLabelledBy}
    >
      <Box
        component="header"
        data-thread-tour-target={
          source && props.areWriteupActionsEnabled
            ? THREAD_TOUR_TARGETS.writeupActions
            : undefined
        }
        sx={headerStyles}
      >
        <WriteupActions
          enabled={props.areWriteupActionsEnabled}
          active
          state={state}
          originKey={originKey}
          source={source}
        />
        <CopyButton
          content={props.copyContent}
          label="Copy"
          tooltipLabel="Copy response"
          iconOnly
        />
      </Box>
      <WriteupContent
        canShowPdf={state.canRunWriteupExports}
        displayMode={state.displayMode}
        isPdfPreparing={state.isPdfPreparing}
        isPdfReady={state.isPdfReady}
        markdownMode={props.markdownMode}
        pdfCompileError={state.pdfCompileError}
        pdfUrl={state.pdfUrl}
        source={source}
      />
    </Paper>
  );
}
