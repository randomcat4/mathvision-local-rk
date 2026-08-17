import type { ComponentType, ReactNode } from "react";

export const Button: ComponentType<any>;
export const CloseIcon: ComponentType<any>;
export const Box: ComponentType<any>;
export const CopiedIcon: ComponentType<any>;
export const TextField: ComponentType<any>;
export const TooltipIconButton: ComponentType<any>;
export const Typography: ComponentType<any>;
export function alpha(color: string, opacity: number): string;
export function createMuiSvgIcon(node: ReactNode): ComponentType<any>;
export function styled(tag: string): (styles: Record<string, unknown>) => ComponentType<any>;
export const toast: {
  success(message: string): void;
  error(message: string): void;
};
