import {
  GlobalWorkerOptions,
  RenderingCancelledException,
  getDocument,
} from "pdfjs-dist";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

const MAX_OUTPUT_SCALE = 1.5;

export async function initializePdfRuntime() {
  GlobalWorkerOptions.workerSrc = pdfWorkerUrl;
}

export function createPdfLoadingTask(url) {
  return getDocument(url);
}

export function renderPdfPageToCanvas({
  canvas,
  canvasContext,
  pageNumber,
  pdfDocument,
  rotation = 0,
  scale,
  maxOutputScale = MAX_OUTPUT_SCALE,
}) {
  let cancelled = false;
  let renderTask = null;
  const promise = pdfDocument
    .getPage(pageNumber)
    .then((page) => {
      if (cancelled) {
        page.cleanup();
        return;
      }
      const viewport = page.getViewport({ rotation, scale });
      const outputScale = Math.min(window.devicePixelRatio || 1, maxOutputScale);
      canvas.width = Math.floor(viewport.width * outputScale);
      canvas.height = Math.floor(viewport.height * outputScale);
      canvas.style.width = `${viewport.width}px`;
      canvas.style.height = `${viewport.height}px`;
      try {
        renderTask = page.render({
          canvasContext,
          viewport,
          transform:
            outputScale === 1
              ? undefined
              : [outputScale, 0, 0, outputScale, 0, 0],
        });
      } catch (error) {
        page.cleanup();
        throw error;
      }
      return renderTask.promise.finally(() => page.cleanup());
    })
    .catch((error) => {
      if (!(cancelled || error instanceof RenderingCancelledException)) {
        throw error;
      }
    });

  return {
    cancel() {
      cancelled = true;
      renderTask?.cancel();
      canvas.width = 0;
      canvas.height = 0;
    },
    promise,
  };
}
