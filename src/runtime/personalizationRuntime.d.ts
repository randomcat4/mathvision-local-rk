import type { ComponentType } from "react";
export const Box: ComponentType<any>;
export const Button: ComponentType<any>;
export const Dialog: ComponentType<any>;
export const DialogActions: ComponentType<any>;
export const DialogContent: ComponentType<any>;
export const DialogTitle: ComponentType<any>;
export const PersonalizationIcon: ComponentType<any>;
export const Stack: ComponentType<any>;
export const TextField: ComponentType<any>;
export const PERSONALIZATION_CHARACTER_LIMIT: number;
export const profileQueryKeys: { currentProfile(): readonly unknown[] };
export interface UserProfile { personalization: string; [key: string]: unknown }
export function updatePersonalization(value: string): Promise<UserProfile>;
export const toast: { success(message: string): void };
