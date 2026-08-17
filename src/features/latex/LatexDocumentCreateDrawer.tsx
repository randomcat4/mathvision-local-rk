import { Suspense, useEffect, useMemo, useState, type FormEvent } from "#production-react";
import { normalizeLatexProjectName } from "./naming";
import {
  Alert,
  alpha,
  Box,
  Button,
  CircularProgress,
  CloseIcon,
  Drawer,
  IconButton,
  LatexSourceEditor,
  MAIN_LATEX_FILE_NAME,
  Markdown,
  PlayIcon,
  PlusFileIcon,
  Tab,
  Tabs,
  TextField,
  toast,
  Typography,
  useAttachmentContent,
  useCompileJob,
  useControlOrMetaShortcut,
  useCreateLatexDocument,
  usePdfObjectUrl,
  useSourceCompile,
  isCompileJobPending,
  extractLatexPreview,
  type LatexCompileResult,
  type LatexDocument,
} from "../../runtime/latexDocumentCreateDrawerRuntime.js";

export interface LatexDocumentCreateDrawerProps {
  open: boolean;
  initialName: string;
  onClose(): void;
  onDocumentCreated(document: LatexDocument): void;
}
const formatDiagnostic = (item: { line?: number | null; message: string }) =>
  `${item.line ? `Line ${item.line}` : "Document"}: ${item.message}`;
const drawerPaper = {
  width: "min(100vw, 72rem)",
  maxWidth: "100vw",
  display: "flex",
  flexDirection: "column",
};
const header = (theme: any) => ({
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1),
  padding: theme.spacing(1.5, 2),
  borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
});
const form = (theme: any) => ({
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
});
const grid = (theme: any) => ({
  flex: 1,
  minHeight: 0,
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(20rem, 0.82fr)",
  gap: theme.spacing(1.5),
  [theme.breakpoints.down(900)]: {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "minmax(22rem, 1fr) minmax(18rem, 0.8fr)",
  },
});
const actions = { display: "flex", justifyContent: "flex-end", gap: 1 };
const panel = (theme: any) => ({
  minWidth: 0,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  border: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
  borderRadius: theme.shape.borderRadiusPx,
  backgroundColor: alpha(theme.palette.background.paper, 0.84),
});
const panelHeader = (theme: any) => ({
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: theme.spacing(1),
  padding: theme.spacing(1.1, 1.25),
  borderBottom: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
});
const tabs = (theme: any) => ({
  minHeight: 0,
  flex: "0 1 auto",
  maxWidth: "100%",
  "& .MuiTabs-list": { gap: theme.spacing(0.4) },
  "& .MuiTab-root": { minHeight: "2rem", paddingInline: theme.spacing(1.2) },
});
const column = {
  flex: 1,
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
};
const centered = {
  flex: 1,
  minHeight: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const preview = (theme: any) => ({
  flex: 1,
  minHeight: 0,
  overflowY: "auto",
  padding: theme.spacing(1.4),
});
const iframe = { flex: 1, minHeight: 0, width: "100%", border: 0 };
const state = (theme: any) => ({
  flex: 1,
  minHeight: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
});
const diagnosticsBox = (theme: any) => ({
  flex: "0 0 auto",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.75),
  maxHeight: "11rem",
  overflowY: "auto",
  padding: theme.spacing(1),
  borderTop: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
});

function statusFor(result: LatexCompileResult | null, compiling: boolean) {
  return compiling
    ? { message: "Compiling...", type: "textSecondary" }
    : result
      ? result.success
        ? { message: `Compiled in ${result.durationMs} ms`, type: "success" }
        : { message: "Compile failed", type: "error" }
      : { message: "Not compiled", type: "textSecondary" };
}
function CompiledPdfPanel({
  result,
  diagnostics,
  compiling,
  pdfUrl,
  pdfLoading,
  pdfError,
}: {
  result: LatexCompileResult | null;
  diagnostics: LatexCompileResult["diagnostics"];
  compiling: boolean;
  pdfUrl: string | null;
  pdfLoading: boolean;
  pdfError: boolean;
}) {
  const status = statusFor(result, compiling);
  return (
    <Box sx={panel}>
      <Box sx={panelHeader}>
        <Typography variant="subtitle2" color="textPrimary">
          Compiled PDF
        </Typography>
        <Typography variant="caption" color={status.type}>
          {status.message}
        </Typography>
      </Box>
      <Box sx={column}>
        {compiling && (
          <Box sx={state}>
            <CircularProgress size={28} />
          </Box>
        )}
        {!compiling && pdfUrl && (
          <Box
            component="iframe"
            title="Compiled LaTeX draft preview"
            src={pdfUrl}
            sx={iframe}
          />
        )}{" "}
        {!compiling && !pdfUrl && pdfLoading && (
          <Box sx={state}>
            <CircularProgress size={28} />
          </Box>
        )}
        {!compiling && !pdfUrl && !pdfLoading && (
          <Box sx={state}>
            <Typography
              variant="body2"
              color={pdfError ? "error" : "textSecondary"}
              align="center"
            >
              {pdfError
                ? "Could not load the compiled PDF."
                : "No PDF preview available."}
            </Typography>
          </Box>
        )}
        {result && (
          <Box sx={diagnosticsBox}>
            {diagnostics.length === 0 && (
              <Alert
                severity={result.success ? "success" : "info"}
                variant="outlined"
              >
                {result.success
                  ? "No compiler diagnostics."
                  : "No diagnostics returned."}
              </Alert>
            )}
            {diagnostics.map((item, index) => (
              <Alert
                severity={item.severity === "error" ? "error" : "warning"}
                variant="outlined"
                key={`${item.severity}-${item.line ?? "doc"}-${index}`}
              >
                {formatDiagnostic(item)}
              </Alert>
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
}

function SourcePanel({
  fileName,
  source,
  diagnostics,
  busy,
  onChange,
}: {
  fileName: string;
  source: string;
  diagnostics: LatexCompileResult["diagnostics"];
  busy: boolean;
  onChange(value: string): void;
}) {
  const [view, setView] = useState("source");
  const mathPreview = useMemo(() => extractLatexPreview(source), [source]);
  return (
    <Box sx={panel}>
      <Box sx={panelHeader}>
        <Typography variant="subtitle2" color="textPrimary">
          Source
        </Typography>
        <Tabs
          value={view}
          variant="scrollable"
          scrollButtons={false}
          aria-label="LaTeX source views"
          sx={tabs}
          onChange={(_event: unknown, value: string) => setView(value)}
        >
          <Tab
            disableRipple
            value="source"
            label="Editing"
            id="latex-create-source-tab"
            aria-controls="latex-create-source-panel"
          />
          <Tab
            disableRipple
            value="preview"
            label="Preview"
            id="latex-create-preview-tab"
            aria-controls="latex-create-preview-panel"
          />
        </Tabs>
      </Box>
      <Box sx={column}>
        {view === "source" && (
          <Suspense
            fallback={
              <Box sx={centered}>
                <CircularProgress size={22} />
              </Box>
            }
          >
            <LatexSourceEditor
              value={source}
              fileName={fileName}
              diagnostics={diagnostics}
              editable={!busy}
              role="tabpanel"
              id="latex-create-source-panel"
              ariaLabelledBy="latex-create-source-tab"
              onChange={onChange}
            />
          </Suspense>
        )}
        {view === "preview" && (
          <Box
            sx={preview}
            role="tabpanel"
            id="latex-create-preview-panel"
            aria-labelledby="latex-create-preview-tab"
          >
            {mathPreview && <Markdown content={mathPreview} />}{" "}
            {!mathPreview && (
              <Box sx={state}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center"
                >
                  No math expressions found in the source.
                </Typography>
              </Box>
            )}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export function LatexDocumentCreateDrawer({
  open,
  initialName,
  onClose,
  onDocumentCreated,
}: LatexDocumentCreateDrawerProps) {
  const [name, setName] = useState(initialName);
  const [source, setSource] = useState("");
  const [result, setResult] = useState<LatexCompileResult | null>(null);
  const [compiledSource, setCompiledSource] = useState<string | null>(null);
  const [jobId, setJobId] = useState<string | null>(null);
  const createDocument = useCreateLatexDocument();
  const compile = useSourceCompile();
  const jobQuery = useCompileJob(jobId, { enabled: !!jobId });
  const job = jobQuery.data;
  const creating = createDocument.isPending;
  const compiling = compile.isPending || !!jobId || isCompileJobPending(job);
  const busy = creating || compiling;
  const diagnostics =
    result !== null && compiledSource === source ? result.diagnostics : [];
  const attachment = useAttachmentContent(result?.pdfAttachmentId);
  const base64Url = usePdfObjectUrl(result?.pdfBase64);
  const pdfUrl = attachment.objectUrl ?? base64Url;
  useEffect(() => {
    if (!jobId || !job) return;
    if (job.status === "completed") {
      setJobId(null);
      if (!job.result) {
        setResult(null);
        toast.error("LaTeX compile job finished without a result.");
        return;
      }
      setResult(job.result);
      if (job.result.success) toast.success("LaTeX compiled.");
      else
        toast.error(
          "LaTeX compile failed. " +
            job.result.diagnostics.map((item) => item.message).join(", "),
        );
    } else if (job.status === "failed") {
      setJobId(null);
      setResult(null);
      toast.error("Could not compile LaTeX.");
    }
  }, [job, jobId]);
  useEffect(() => {
    if (jobId && jobQuery.isError) {
      setJobId(null);
      setResult(null);
      toast.error("Could not load LaTeX compile job.");
    }
  }, [jobId, jobQuery.isError]);
  const runCompile = async () => {
    if (busy) return;
    try {
      normalizeLatexProjectName(name);
      const draft = source;
      setResult(null);
      setCompiledSource(draft);
      const queued = await compile.mutateAsync({ input: { source: draft } });
      setJobId(queued.id);
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Could not compile LaTeX.",
      );
    }
  };
  useControlOrMetaShortcut({
    enabled: open && !busy,
    keyCode: ["Enter", "KeyS"],
    onShortcut: runCompile,
  });
  const submit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const normalized = normalizeLatexProjectName(name);
      const document = await createDocument.mutateAsync({
        input: { name: normalized, source },
      });
      onDocumentCreated(document);
      toast.success("LaTeX project created.");
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Could not create LaTeX project.",
      );
    }
  };
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{ paper: { variant: "panel", sx: drawerPaper } }}
    >
      <Box sx={header}>
        <Typography variant="h6" color="textPrimary">
          Create LaTeX project
        </Typography>
        <IconButton
          aria-label="Close add LaTeX drawer"
          disableRipple
          onClick={onClose}
        >
          <CloseIcon size={18} />
        </IconButton>
      </Box>
      <Box component="form" sx={form} onSubmit={submit}>
        <TextField
          autoFocus
          label="Project name"
          value={name}
          disabled={busy}
          size="small"
          onChange={(event: { target: { value: string } }) =>
            setName(event.target.value)
          }
        />
        <Box sx={grid}>
          <SourcePanel
            fileName={MAIN_LATEX_FILE_NAME}
            source={source}
            diagnostics={diagnostics}
            busy={busy}
            onChange={(value) => {
              setSource(value);
              setResult(null);
            }}
          />
          <CompiledPdfPanel
            result={result}
            diagnostics={diagnostics}
            compiling={compiling}
            pdfUrl={pdfUrl}
            pdfLoading={attachment.isLoading}
            pdfError={!!attachment.error}
          />
        </Box>
        <Box sx={actions}>
          <Button
            type="button"
            variant="text"
            color="secondary"
            disableRipple
            disabled={busy}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            type="button"
            variant="outlined"
            tooltip="Compile (Ctrl+Enter / Cmd+Enter / Ctrl+S / Cmd+S)"
            disableRipple
            disabled={busy}
            startIcon={
              compiling ? (
                <CircularProgress size={16} thickness={5} color="inherit" />
              ) : (
                <PlayIcon size={16} />
              )
            }
            onClick={() => void runCompile()}
          >
            {compiling ? "Compiling..." : "Compile"}
          </Button>
          <Button
            type="submit"
            variant="contained"
            disableRipple
            disabled={busy}
            startIcon={
              creating ? (
                <CircularProgress size={16} thickness={5} color="inherit" />
              ) : (
                <PlusFileIcon size={16} />
              )
            }
          >
            {creating ? "Creating..." : "Create"}
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
