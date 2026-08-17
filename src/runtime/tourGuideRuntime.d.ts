import type { ComponentType } from "react";
export const AppSidePanel: ComponentType<any>; export const Box: ComponentType<any>; export const ChatSidebar: ComponentType<any>; export const ChatToolsMenu: ComponentType<any>; export const ThreadPanel: ComponentType<any>;
export const toast: { info(message: string): void };
export function alpha(color: string, opacity: number): string;
export function createRoute(path: string): (options: Record<string, unknown>) => unknown;
export function logout(): void;
export function prepareSidebarChat<T>(chat: T): T;
export function useNavigate(): (options: Record<string, unknown>) => void;
export function useTourSearch(options: { from: string }): { returnTo?: string | null };
