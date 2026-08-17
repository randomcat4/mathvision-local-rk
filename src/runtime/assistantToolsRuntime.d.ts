import type { ComponentType, ReactNode } from "react";
export const Box: ComponentType<any>; export const ChatIcon: ComponentType<any>; export const Tooltip: ComponentType<any>; export const Typography: ComponentType<any>; export const WriteupIcon: ComponentType<any>;
export const THINKING_TIMER_INTERVAL_MS: number;
export function alpha(color: string, opacity: number): string;
export function createLucideIcon(name: string, nodes: unknown[]): ComponentType<any>;
export function createMuiSvgIcon(node: ReactNode): ComponentType<any>;
export function formatThinkingElapsed(milliseconds: number): string;
