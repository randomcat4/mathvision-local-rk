import type { ComponentType, ReactNode } from "react";

export const Alert: ComponentType<any>;
export const Box: ComponentType<any>;
export const Button: ComponentType<any>;
export const Card: ComponentType<any>;
export const CircularProgress: ComponentType<any>;
export const Container: ComponentType<any>;
export const Divider: ComponentType<any>;
export const FullPageLoading: ComponentType<any>;
export const Link: ComponentType<any>;
export const LogoutIcon: ComponentType<any>;
export const SecondaryButton: ComponentType<any>;
export const Stack: ComponentType<any>;
export const Typography: ComponentType<any>;
export function createMuiSvgIcon(node: ReactNode): ComponentType<any>;
export const ACCESS_STALE_TIME_MS: number;
export const profileQueryKeys: { currentAccess(): readonly unknown[] };
export interface CurrentAccess {
  allow: boolean;
  disabled: boolean;
  termsVersion?: string | null;
  privacyPolicyVersion?: string | null;
  [key: string]: unknown;
}
export function getCurrentAccess(): Promise<CurrentAccess>;
export function acceptLegalTerms(): Promise<CurrentAccess>;
export function getErrorMessage(error: unknown): string;
export function signOut(): void | Promise<void>;
export function useNavigate(): (options: { to: string; replace?: boolean }) => Promise<void> | void;
export interface BundledRoute { [key: string]: unknown }
export interface BundledRouter {
  routesById: Record<string, BundledRoute | undefined>;
  loadRouteChunk(route: BundledRoute): Promise<unknown> | null | undefined;
}
export function useRouter(): BundledRouter;
