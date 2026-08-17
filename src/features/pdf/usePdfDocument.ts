import { useEffect, useRef, useState } from "#production-react";
import {
  createPdfLoadingTask,
  initializePdfRuntime,
  type PdfDocumentProxy,
  type PdfLoadingTask,
} from "../../runtime/pdfRuntime.js";

export interface UsePdfDocumentOptions {
  loadErrorMessage?: string;
  onPageCountChange?: (pageCount: number | null) => void;
  pdfUrl: string;
}

export interface UsePdfDocumentResult {
  isPdfDocumentLoading: boolean;
  pdfDocument: PdfDocumentProxy | null;
  pdfLoadError: string | null;
}

export function usePdfDocument({
  loadErrorMessage = "Could not load PDF.",
  onPageCountChange,
  pdfUrl,
}: UsePdfDocumentOptions): UsePdfDocumentResult {
  const pageCountCallback = useRef(onPageCountChange);
  const [pdfDocument, setPdfDocument] = useState<PdfDocumentProxy | null>(null);
  const [isPdfDocumentLoading, setIsPdfDocumentLoading] = useState(false);
  const [pdfLoadError, setPdfLoadError] = useState<string | null>(null);

  useEffect(() => {
    pageCountCallback.current = onPageCountChange;
  }, [onPageCountChange]);

  useEffect(() => {
    setPdfDocument(null);
    setPdfLoadError(null);
    pageCountCallback.current?.(null);
    let cancelled = false;
    let loadingTask: PdfLoadingTask | null = null;
    setIsPdfDocumentLoading(true);

    void initializePdfRuntime()
      .then(() => {
        if (cancelled) return null;
        loadingTask = createPdfLoadingTask(pdfUrl);
        return loadingTask.promise;
      })
      .then((document) => {
        if (!document) return;
        if (cancelled) {
          void document.destroy();
          return;
        }
        setPdfDocument(document);
        pageCountCallback.current?.(document.numPages);
      })
      .catch((error: unknown) => {
        if (cancelled) return;
        setPdfLoadError(error instanceof Error ? error.message : loadErrorMessage);
        pageCountCallback.current?.(null);
      })
      .finally(() => {
        if (!cancelled) setIsPdfDocumentLoading(false);
      });

    return () => {
      cancelled = true;
      void loadingTask?.destroy();
    };
  }, [loadErrorMessage, pdfUrl]);

  return { isPdfDocumentLoading, pdfDocument, pdfLoadError };
}
