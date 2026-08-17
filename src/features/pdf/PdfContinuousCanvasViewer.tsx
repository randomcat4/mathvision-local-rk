import { memo, useCallback, useEffect, useLayoutEffect, useRef, useState } from "#production-react";

import { alpha } from "../../runtime/basicUiRuntime.js";
import { renderPdfPageToCanvas, type PdfDocumentProxy } from "../../runtime/pdfRuntime.js";
import { Alert, Box, CircularProgress } from "../../runtime/pdfCanvasUiRuntime.js";
import { useBundledVirtualizer } from "../../runtime/virtualizerRuntime.js";
import { appendSx } from "./pdfCanvasControls";
import { usePdfDocument } from "./usePdfDocument";

const ESTIMATED_PAGE_HEIGHT = 980;
const ESTIMATED_PAGE_GAP = 16;
const OVERSCAN_PAGE_COUNT = 1;

interface PdfContinuousTheme {
  palette: {
    text: { primary: string };
    background: { paper: string };
    common: { white: string };
  };
  spacing(value: number): string;
}

const scrollStyles = (theme: PdfContinuousTheme) => ({
  flex: 1,
  minHeight: 0,
  overflow: "auto",
  position: "relative",
  padding: theme.spacing(1.5),
  backgroundColor: alpha(theme.palette.text.primary, 0.04),
});
const virtualSpaceStyles = { position: "relative", width: "100%", minWidth: 0 };
const pageRowStyles = (theme: PdfContinuousTheme) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  boxSizing: "border-box",
  paddingBottom: theme.spacing(2),
});
const pageFrameStyles = { position: "relative", width: "max-content", minWidth: 0 };
const canvasStyles = (theme: PdfContinuousTheme) => ({
  display: "block",
  maxWidth: "none",
  backgroundColor: theme.palette.common.white,
  boxShadow: `0 10px 28px ${alpha(theme.palette.text.primary, 0.18)}`,
});
const renderOverlayStyles = (theme: PdfContinuousTheme) => ({
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: alpha(theme.palette.background.paper, 0.42),
});
const renderErrorStyles = (theme: PdfContinuousTheme) => ({
  position: "absolute",
  inset: theme.spacing(2),
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
const stateStyles = (theme: PdfContinuousTheme) => ({
  flex: 1,
  minHeight: "18rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(2),
});

interface PdfPageCanvasProps {
  ariaLabel: string;
  canvasSx: unknown;
  estimatedPageHeight: number;
  pageNumber: number;
  pdfDocument: PdfDocumentProxy;
  renderErrorMessage: string;
  scale: number;
}

const PdfPageCanvas = memo(function PdfPageCanvas({
  ariaLabel,
  canvasSx,
  estimatedPageHeight,
  pageNumber,
  pdfDocument,
  renderErrorMessage,
  scale,
}: PdfPageCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [rendered, setRendered] = useState(false);
  const [isRendering, setIsRendering] = useState(false);
  const [renderError, setRenderError] = useState<string | null>(null);
  useEffect(() => {
    setRendered(false);
    setRenderError(null);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) {
      setRenderError(renderErrorMessage);
      return;
    }
    setIsRendering(true);
    let cancelled = false;
    const task = renderPdfPageToCanvas({
      canvas,
      canvasContext: context,
      pageNumber,
      pdfDocument,
      rotation: 0,
      scale,
    });
    void task.promise
      .then(() => {
        if (!cancelled) setRendered(true);
      })
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
      task.cancel();
    };
  }, [pageNumber, pdfDocument, renderErrorMessage, scale]);

  return (
    <Box sx={pageFrameStyles} style={{ minHeight: rendered ? undefined : `${estimatedPageHeight}px` }}>
      <Box
        component="canvas"
        ref={canvasRef}
        aria-label={`${ariaLabel}, page ${pageNumber}`}
        sx={canvasSx}
      />
      {isRendering ? (
        <Box sx={renderOverlayStyles}>
          <CircularProgress size={28} />
        </Box>
      ) : null}
      {renderError ? (
        <Box sx={renderErrorStyles}>
          <Alert severity="error" variant="outlined">
            {renderError}
          </Alert>
        </Box>
      ) : null}
    </Box>
  );
});

export interface PdfContinuousCanvasViewerProps {
  ariaLabel?: string;
  canvasSx?: unknown;
  loadErrorMessage?: string;
  onPageChange?: (page: number) => void;
  onPageCountChange?: (pageCount: number | null) => void;
  pdfUrl: string;
  renderErrorMessage?: string;
  scale?: number;
  stateSx?: unknown;
  sx?: unknown;
}

export function PdfContinuousCanvasViewer({
  ariaLabel = "PDF preview",
  canvasSx,
  loadErrorMessage = "Could not load PDF.",
  onPageChange,
  onPageCountChange,
  pdfUrl,
  renderErrorMessage = "Could not render PDF preview.",
  scale = 1,
  stateSx,
  sx,
}: PdfContinuousCanvasViewerProps) {
  const scrollElementRef = useRef<HTMLElement | null>(null);
  const currentPageRef = useRef(1);
  const pageChangeCallback = useRef(onPageChange);
  const { isPdfDocumentLoading, pdfDocument, pdfLoadError } = usePdfDocument({
    loadErrorMessage,
    onPageCountChange,
    pdfUrl,
  });
  const pageCount = pdfDocument?.numPages ?? 0;
  const estimatedPageHeight = Math.round(ESTIMATED_PAGE_HEIGHT * scale + ESTIMATED_PAGE_GAP);
  useEffect(() => {
    pageChangeCallback.current = onPageChange;
  }, [onPageChange]);
  const reportPage = useCallback((page: number) => {
    if (currentPageRef.current !== page) {
      currentPageRef.current = page;
      pageChangeCallback.current?.(page);
    }
  }, []);
  const virtualizer = useBundledVirtualizer({
    count: pageCount,
    estimateSize: () => estimatedPageHeight,
    getItemKey: (index) => `pdf-page-${index + 1}`,
    getScrollElement: () => scrollElementRef.current,
    overscan: OVERSCAN_PAGE_COUNT,
    useAnimationFrameWithResizeObserver: true,
    onChange: (instance) => {
      const scrollElement = scrollElementRef.current;
      const visibleItems = instance.getVirtualItems();
      if (!scrollElement || visibleItems.length === 0) return;
      const readingLine = scrollElement.scrollTop + scrollElement.clientHeight * 0.35;
      const current =
        visibleItems.find((item) => item.start <= readingLine && item.end >= readingLine) ??
        visibleItems[0];
      reportPage(current.index + 1);
    },
  });
  useEffect(() => {
    reportPage(1);
    scrollElementRef.current?.scrollTo({ top: 0, left: 0 });
  }, [pdfUrl, reportPage]);
  useLayoutEffect(() => {
    if (pdfDocument) {
      virtualizer.measure();
      virtualizer.scrollToIndex(currentPageRef.current - 1, { align: "start" });
    }
  }, [pdfDocument, scale, virtualizer]);

  const mergedStateStyles = appendSx(stateStyles, stateSx);
  if (isPdfDocumentLoading && !pdfDocument) {
    return <Box sx={mergedStateStyles}><CircularProgress size={28} /></Box>;
  }
  if (pdfLoadError) {
    return <Box sx={mergedStateStyles}><Alert severity="error" variant="outlined">{pdfLoadError}</Alert></Box>;
  }
  if (!pdfDocument) {
    return <Box sx={mergedStateStyles}><CircularProgress size={28} /></Box>;
  }
  return (
    <Box ref={scrollElementRef} sx={appendSx(scrollStyles, sx)}>
      <Box sx={virtualSpaceStyles} style={{ height: `${virtualizer.getTotalSize()}px` }}>
        {virtualizer.getVirtualItems().map((item) => (
          <Box
            ref={virtualizer.measureElement}
            data-index={item.index}
            sx={pageRowStyles}
            style={{ transform: `translateY(${item.start}px)` }}
            key={item.key}
          >
            <PdfPageCanvas
              ariaLabel={ariaLabel}
              canvasSx={appendSx(canvasStyles, canvasSx)}
              estimatedPageHeight={estimatedPageHeight}
              pageNumber={item.index + 1}
              pdfDocument={pdfDocument}
              renderErrorMessage={renderErrorMessage}
              scale={scale}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
