export interface VirtualItem {
  index: number;
  key: string | number;
  start: number;
  end: number;
}
export interface BundledVirtualizer {
  getTotalSize(): number;
  getVirtualItems(): VirtualItem[];
  measure(): void;
  measureElement(element: Element | null): void;
  scrollToIndex(index: number, options: { align: "start" | "center" | "end" }): void;
}
export function useBundledVirtualizer(options: {
  count: number;
  estimateSize(): number;
  getItemKey(index: number): string | number;
  getScrollElement(): HTMLElement | null;
  overscan: number;
  useAnimationFrameWithResizeObserver: boolean;
  onChange(instance: BundledVirtualizer): void;
}): BundledVirtualizer;
