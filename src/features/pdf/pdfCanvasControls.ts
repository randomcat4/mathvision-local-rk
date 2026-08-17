export const PDF_CANVAS_VIEWER_MIN_ZOOM = 60;
export const PDF_CANVAS_VIEWER_MAX_ZOOM = 180;
export const PDF_CANVAS_VIEWER_ZOOM_STEP = 20;
export const PDF_CANVAS_VIEWER_DEFAULT_ZOOM = 120;

export function appendSx<T>(base: T, extension: T | T[] | undefined): T | T[] {
  if (extension === undefined) return base;
  const baseEntries = Array.isArray(base) ? base : [base];
  const extensionEntries = Array.isArray(extension) ? extension : [extension];
  return [...baseEntries, ...extensionEntries];
}

export function previousPdfPage(page: number): number {
  return Math.max(1, page - 1);
}

export function nextPdfPage(page: number, pageCount: number): number {
  return Math.min(pageCount, page + 1);
}

export function decreasePdfZoom(zoom: number, minimum: number, step: number): number {
  return Math.max(minimum, zoom - step);
}

export function increasePdfZoom(zoom: number, maximum: number, step: number): number {
  return Math.min(maximum, zoom + step);
}
