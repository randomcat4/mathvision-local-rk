import type { ComponentType } from "react";
export const Avatar: ComponentType<any>; export const Box: ComponentType<any>; export const Button: ComponentType<any>; export const ChevronLeftIcon: ComponentType<any>; export const ChevronRightIcon: ComponentType<any>; export const CloseIcon: ComponentType<any>; export const Dialog: ComponentType<any>; export const Divider: ComponentType<any>; export const Markdown: ComponentType<any>; export const Paper: ComponentType<any>; export const Stack: ComponentType<any>; export const TooltipIconButton: ComponentType<any>; export const Typography: ComponentType<any>;
export const appQueryKeys: { announcements(includeDismissed: boolean): unknown[] };
export function getAuthenticatedSubject(): string | null;
export function getErrorMessage(error: unknown): string;
export function publishAppEvent(event: { announcementsChanged: boolean }): void;
export const toast: { error(message: string): void };
export function useAppQueryClient(): { setQueryData<T>(key: unknown[], updater: (value: T | undefined) => T | undefined): void };
