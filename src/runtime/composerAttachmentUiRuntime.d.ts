import type { ComponentType, ReactNode } from "react";

export const Card: ComponentType<any>;
export const Tooltip: ComponentType<any>;
export const LatexAttachmentPreview: ComponentType<{
  name: string;
  source: string | null;
  isLoading: boolean;
  errorMessage: string | null;
  onOpenChange(open: boolean): void;
  triggerTooltip: string;
  children: ReactNode;
}>;
