export interface PdfDocumentProxy {
  numPages: number;
  destroy(): void | Promise<void>;
  [key: string]: unknown;
}

export interface PdfLoadingTask {
  promise: Promise<PdfDocumentProxy>;
  destroy(): void | Promise<void>;
}

export function initializePdfRuntime(): Promise<void>;
export function createPdfLoadingTask(url: string): PdfLoadingTask;
export interface PdfCanvasRenderTask {
  promise: Promise<void>;
  cancel(): void;
}
export function renderPdfPageToCanvas(options: {
  canvas: HTMLCanvasElement;
  canvasContext: CanvasRenderingContext2D;
  pageNumber: number;
  pdfDocument: PdfDocumentProxy;
  rotation: number;
  scale: number;
}): PdfCanvasRenderTask;
