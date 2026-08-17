import { Suspense, useEffect, useState } from "#production-react";
import {
  Alert,
  Box,
  CircularProgress,
  DEFAULT_PDF_ZOOM,
  FormLabel,
  PdfCanvasViewerControls,
  PdfContinuousCanvasViewer,
  Switch,
  Typography,
} from "../../runtime/pdfPreviewUiRuntime.js";

export type WriteupDisplayMode = "pdf" | "latex";
const switchStyles = (theme: { spacing(value: number): string }) => ({
  display: "inline-flex", alignItems: "center", gap: theme.spacing(0.4), mr: "auto",
});
const alertStyles = { minWidth: 0, width: "100%" };
const previewStackStyles = {
  minWidth: 0, width: "100%", display: "flex", flexDirection: "column", gap: 1,
};
const viewerStyles = (theme: any) => ({
  flex: "0 0 auto",
  width: "100%",
  height: "min(70vh, 48rem)",
  minHeight: "28rem",
  borderRadius: theme.shape.borderRadiusPx,
  [theme.breakpoints.down(720)]: { height: "32rem", minHeight: "22rem" },
});
const stateStyles = (theme: { spacing(value: number): string }) => ({
  minHeight: "18rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: theme.spacing(1),
  padding: theme.spacing(2),
});

export function WriteupDisplayModeSwitch({
  displayMode,
  onDisplayModeChange,
}: {
  displayMode: WriteupDisplayMode;
  onDisplayModeChange(mode: WriteupDisplayMode): void;
}) {
  const checked = displayMode === "pdf";
  return (
    <Box sx={switchStyles}>
      <Switch
        checked={checked}
        size="small"
        id="switch-pdf-latex"
        onChange={(_event: unknown, nextChecked: boolean) =>
          onDisplayModeChange(nextChecked ? "pdf" : "latex")
        }
        slotProps={{ input: { "aria-label": "Toggle writeup PDF preview" } }}
      />
      <FormLabel htmlFor="switch-pdf-latex">
        <Typography variant="caption">View as PDF</Typography>
      </FormLabel>
    </Box>
  );
}

export function WriteupPdfPreview({
  isPdfPreparing,
  isPdfReady,
  pdfCompileError = null,
  pdfUrl = null,
}: {
  isPdfPreparing: boolean;
  isPdfReady: boolean;
  pdfCompileError?: string | null;
  pdfUrl?: string | null;
}) {
  if (isPdfPreparing) {
    return (
      <Box sx={stateStyles}>
        <CircularProgress size={28} />
        <Typography variant="body2" color="textSecondary" align="center">Compiling PDF</Typography>
      </Box>
    );
  }
  if (isPdfReady && pdfUrl) return <CompiledWriteupPdfPreview pdfUrl={pdfUrl} />;
  if (pdfCompileError) {
    return <Box sx={alertStyles}><Alert severity="error" variant="outlined">{pdfCompileError}</Alert></Box>;
  }
  return (
    <Box sx={stateStyles}>
      <Typography variant="body2" color="textSecondary" align="center">
        No PDF preview available.
      </Typography>
    </Box>
  );
}

function CompiledWriteupPdfPreview({ pdfUrl }: { pdfUrl: string }) {
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(DEFAULT_PDF_ZOOM);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const isReady = pageCount !== null;
  useEffect(() => {
    setPage(1);
    setZoom(DEFAULT_PDF_ZOOM);
    setPageCount(null);
  }, [pdfUrl]);
  return (
    <Box sx={previewStackStyles}>
      <PdfCanvasViewerControls
        isReady={isReady}
        page={page}
        pageCount={pageCount}
        pdfUrl={pdfUrl}
        showPageLabel={true}
        showPageControls={false}
        zoom={zoom}
        onPageChange={setPage}
        onZoomChange={setZoom}
      />
      <Suspense fallback={<Box sx={stateStyles}><CircularProgress size={28} /></Box>}>
        <PdfContinuousCanvasViewer
          ariaLabel="Compiled writeup PDF preview"
          loadErrorMessage="Could not load compiled writeup PDF."
          pdfUrl={pdfUrl}
          renderErrorMessage="Could not render compiled writeup PDF preview."
          scale={zoom / 100}
          stateSx={stateStyles}
          sx={viewerStyles}
          onPageChange={setPage}
          onPageCountChange={setPageCount}
        />
      </Suspense>
    </Box>
  );
}
