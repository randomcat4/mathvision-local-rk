import { Fragment } from "#production-react";

import {
  Box,
  createLucideIcon,
  DownloadIcon,
  NextPageIcon,
  OpenInNewIcon,
  PreviousPageIcon,
  TooltipIconButton,
  Typography,
  ZoomInIcon,
  ZoomOutIcon,
} from "../../runtime/pdfControlsUiRuntime.js";
import {
  appendSx,
  decreasePdfZoom,
  increasePdfZoom,
  nextPdfPage,
  PDF_CANVAS_VIEWER_MAX_ZOOM,
  PDF_CANVAS_VIEWER_MIN_ZOOM,
  PDF_CANVAS_VIEWER_ZOOM_STEP,
  previousPdfPage,
} from "./pdfCanvasControls";

const LastPageIcon = createLucideIcon("chevrons-right", [
  ["path", { d: "m6 17 5-5-5-5", key: "xnjwq" }],
  ["path", { d: "m13 17 5-5-5-5", key: "17xmmf" }],
]);

export interface PdfCanvasViewerControlsProps {
  downloadFileName?: string;
  isReady: boolean;
  maxZoom?: number;
  minZoom?: number;
  onDownload?: () => void;
  onOpenInNewTab?: () => void;
  onPageChange(page: number): void;
  onZoomChange(zoom: number): void;
  page: number;
  pageCount: number | null;
  pdfUrl?: string | null;
  showDownloadButton?: boolean;
  showOpenInNewTabButton?: boolean;
  showPageLabel?: boolean;
  showPageControls?: boolean;
  sx?: unknown;
  zoom: number;
  zoomStep?: number;
}

const toolbarStyles = (theme: { spacing(value: number): string }) => ({
  flex: "0 0 auto",
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  gap: theme.spacing(0.4),
});

export function PdfCanvasViewerControls({
  downloadFileName = "compiled.pdf",
  isReady,
  maxZoom = PDF_CANVAS_VIEWER_MAX_ZOOM,
  minZoom = PDF_CANVAS_VIEWER_MIN_ZOOM,
  onDownload,
  onOpenInNewTab,
  onPageChange,
  onZoomChange,
  page,
  pageCount,
  pdfUrl = null,
  showDownloadButton = true,
  showOpenInNewTabButton = Boolean(onOpenInNewTab),
  showPageLabel = false,
  showPageControls = true,
  sx,
  zoom,
  zoomStep = PDF_CANVAS_VIEWER_ZOOM_STEP,
}: PdfCanvasViewerControlsProps) {
  const readyWithPages = isReady && pageCount !== null;
  const canGoBackward = readyWithPages && page > 1;
  const canGoForward = readyWithPages && page < pageCount;
  const canZoomOut = isReady && zoom > minZoom;
  const canZoomIn = isReady && zoom < maxZoom;
  const download =
    onDownload ??
    (pdfUrl
      ? () => {
          const anchor = document.createElement("a");
          anchor.href = pdfUrl;
          anchor.download = downloadFileName;
          document.body.appendChild(anchor);
          anchor.click();
          anchor.remove();
        }
      : undefined);

  return (
    <Box sx={appendSx(toolbarStyles, sx)}>
      {showPageLabel ? (
        <Typography variant="caption" color="textSecondary">
          {pageCount ? `Page ${page} of ${pageCount}` : "Loading PDF"}
        </Typography>
      ) : null}
      {showDownloadButton ? (
        <TooltipIconButton
          tooltip="Download PDF"
          aria-label="Download PDF"
          size="small"
          disableRipple={true}
          disabled={!download}
          onClick={download}
        >
          <DownloadIcon size={17} />
        </TooltipIconButton>
      ) : null}
      {showPageControls ? (
        <Fragment>
          <TooltipIconButton
            tooltip="Previous page"
            aria-label="Previous page"
            size="small"
            disableRipple={true}
            disabled={!canGoBackward}
            onClick={() => onPageChange(previousPdfPage(page))}
          >
            <PreviousPageIcon size={17} />
          </TooltipIconButton>
          <TooltipIconButton
            tooltip="Next page"
            aria-label="Next page"
            size="small"
            disableRipple={true}
            disabled={!canGoForward}
            onClick={() => {
              if (pageCount !== null) onPageChange(nextPdfPage(page, pageCount));
            }}
          >
            <NextPageIcon size={17} />
          </TooltipIconButton>
          <TooltipIconButton
            tooltip="Last page"
            aria-label="Last page"
            size="small"
            disableRipple={true}
            disabled={!canGoForward || pageCount === null}
            onClick={() => {
              if (pageCount !== null) onPageChange(pageCount);
            }}
          >
            <LastPageIcon size={17} />
          </TooltipIconButton>
        </Fragment>
      ) : null}
      <TooltipIconButton
        tooltip="Zoom out"
        aria-label="Zoom out"
        size="small"
        disableRipple={true}
        disabled={!canZoomOut}
        onClick={() => onZoomChange(decreasePdfZoom(zoom, minZoom, zoomStep))}
      >
        <ZoomOutIcon size={17} />
      </TooltipIconButton>
      <TooltipIconButton
        tooltip="Zoom in"
        aria-label="Zoom in"
        size="small"
        disableRipple={true}
        disabled={!canZoomIn}
        onClick={() => onZoomChange(increasePdfZoom(zoom, maxZoom, zoomStep))}
      >
        <ZoomInIcon size={17} />
      </TooltipIconButton>
      {showOpenInNewTabButton ? (
        <TooltipIconButton
          tooltip="Open PDF in new tab"
          aria-label="Open PDF in new tab"
          size="small"
          disableRipple={true}
          disabled={!onOpenInNewTab}
          onClick={onOpenInNewTab}
        >
          <OpenInNewIcon size={17} />
        </TooltipIconButton>
      ) : null}
    </Box>
  );
}
