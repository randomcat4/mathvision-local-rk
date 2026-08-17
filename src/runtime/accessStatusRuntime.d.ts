import type { ComponentType } from "react";

export const Alert: ComponentType<any>;
export function alpha(color: string, opacity: number): string;
export const Box: ComponentType<any>;
export const Button: ComponentType<any>;
export const Card: ComponentType<any>;
export const CircularProgress: ComponentType<any>;
export const Divider: ComponentType<any>;
export const Link: ComponentType<any>;
export const LogoutIcon: ComponentType<any>;
export const MenuItem: ComponentType<any>;
export const RefreshIcon: ComponentType<any>;
export const SavedIcon: ComponentType<any>;
export const Stack: ComponentType<any>;
export const TextField: ComponentType<any>;
export const Typography: ComponentType<any>;
export const PROFILE_STALE_TIME_MS: number;
export const WAITLIST_HEARD_ABOUT_OPTIONS: readonly string[];
export const profileQueryKeys: { currentProfile(): readonly unknown[] };
export interface AccessStatusProfile {
  waitlistAffiliation?: string | null;
  waitlistHeardAbout?: string | null;
  waitlistReferredBy?: string | null;
  [key: string]: unknown;
}
export interface WaitlistInfoInput {
  affiliation: string;
  heardAbout: string;
  referredBy: string | null;
}
export function getCurrentProfile(): Promise<AccessStatusProfile>;
export function updateWaitlistInfo(input: WaitlistInfoInput): Promise<AccessStatusProfile>;
export function getErrorMessage(error: unknown): string;
export function signOut(): void | Promise<void>;
