import { useEffect, useRef, useState } from "#production-react";

import { alpha } from "../../runtime/basicUiRuntime.js";
import { renderPdfPageToCanvas } from "../../runtime/pdfRuntime.js";
import { Alert, Box, CircularProgress } from "../../runtime/pdfCanvasUiRuntime.js";
import { appendSx } from "./pdfCanvasControls";
import { usePdfDocument } from "./usePdfDocument";

export interface PdfCanvasViewerProps {
  ariaLabel?: string;
  canvasSx?: unknown;
  loadErrorMessage?: string;
  onPageChange?: (page: number) => void;
  onPageCountChange?: (pageCount: number | null) => void;
  page?: number;
  pdfUrl: string;
  renderErrorMessage?: string;
  rotation?: number;
  scale?: number;
  stateSx?: unknown;
  sx?: unknown;
}

interface PdfCanvasTheme {
  palette: {
    text: { primary: string };
    background: { paper: string };
    common: { white: string };
  };
  spacing(value: number): string;
}

const viewerStyles = (theme: PdfCanvasTheme) => ({
  flex: 1,
  minHeight: 0,
  overflow: "auto",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  padding: theme.spacing(1.5),
  backgroundColor: alpha(theme.palette.text.primary, 0.04),
});
const canvasStyles = (theme: PdfCanvasTheme) => ({
  display: "block",
  maxWidth: "none",
  backgroundColor: theme.palette.common.white,
  boxShadow: `0 10px 28px ${alpha(theme.palette.text.primary, 0.18)}`,
});
const loadingOverlayStyles = (theme: PdfCanvasTheme) => ({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: alpha(theme.palette.background.paper, 0.42),
});
const canvasFrameStyles = { position: "relative", width: "max-content", minWidth: 0 };
const stateStyles = (theme: PdfCanvasTheme) => ({
  flex: 1,
  minHeight: "18rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
});

export function PdfCanvasViewer({
  ariaLabel = "PDF page preview",
  canvasSx,
  loadErrorMessage = "Could not load PDF.",
  onPageChange,
  onPageCountChange,
  page = 1,
  pdfUrl,
  renderErrorMessage = "Could not render PDF preview.",
  rotation = 0,
  scale = 1,
  stateSx,
  sx,
}: PdfCanvasViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pageChangeCallback = useRef(onPageChange);
  const [isRendering, setIsRendering] = useState(false);
  const [renderError, setRenderError] = useState<string | null>(null);
  const { isPdfDocumentLoading, pdfDocument, pdfLoadError } = usePdfDocument({
    loadErrorMessage,
    onPageCountChange,
    pdfUrl,
  });

  useEffect(() => {
    pageChangeCallback.current = onPageChange;
  }, [onPageChange]);
  useEffect(() => {
    setRenderError(null);
    setIsRendering(false);
  }, [pdfUrl]);
  useEffect(() => {
    if (!pdfDocument || !canvasRef.current) return;
    const boundedPage = Math.min(Math.max(page, 1), pdfDocument.numPages);
    if (boundedPage !== page) {
      pageChangeCallback.current?.(boundedPage);
      return;
    }
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) {
      setRenderError(renderErrorMessage);
      return;
    }
    setRenderError(null);
    setIsRendering(true);
    let cancelled = false;
    const renderTask = renderPdfPageToCanvas({
      canvas,
      canvasContext: context,
      pageNumber: boundedPage,
      pdfDocument,
      rotation,
      scale,
    });
    void renderTask.promise
      .catch((error: unknown) => {
        if (!cancelled) {
          setRenderError(error instanceof Error ? error.message : renderErrorMessage);
        }
      })
      .finally(() => {
        if (!cancelled) setIsRendering(false);
      });
    return () => {
      cancelled = true;
      renderTask.cancel();
    };
  }, [page, pdfDocument, renderErrorMessage, rotation, scale]);

  const mergedStateStyles = appendSx(stateStyles, stateSx);
  if (isPdfDocumentLoading && !pdfDocument) {
    return (
      <Box sx={mergedStateStyles}>
        <CircularProgress size={28} />
      </Box>
    );
  }
  if (pdfLoadError || renderError) {
    return (
      <Box sx={mergedStateStyles}>
        <Alert severity="error" variant="outlined">
          {pdfLoadError ?? renderError}
        </Alert>
      </Box>
    );
  }
  if (pdfDocument) {
    return (
      <Box sx={appendSx(viewerStyles, sx)}>
        <Box sx={canvasFrameStyles}>
          <Box
            component="canvas"
            ref={canvasRef}
            aria-label={ariaLabel}
            sx={appendSx(canvasStyles, canvasSx)}
          />
          {isPdfDocumentLoading || isRendering ? (
            <Box sx={loadingOverlayStyles}>
              <CircularProgress size={28} />
            </Box>
          ) : null}
        </Box>
      </Box>
    );
  }
  return (
    <Box sx={mergedStateStyles}>
      <CircularProgress size={28} />
    </Box>
  );
}
