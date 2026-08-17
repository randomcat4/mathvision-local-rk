import type { ComponentType } from "react";

export const InlineMarkdown: ComponentType<any>;
export const citationPreviewComponents: Record<string, unknown>;
export const citationLinkComponents: Record<string, unknown>;
export const CITATION_LINK_TITLE: string;
export function wrapMarkdownUrl(url: string): string;
export function escapeMarkdownLabel(label: string): string;
export function splitsWord(text: string, index: number): boolean;
export function advancePastWord(text: string, index: number): number;
export function isInsideMath(text: string, index: number): boolean;
export function formatSourceLabel(source: StructuredSource): string;
export function transformOutsideProtectedMarkdown(
  text: string,
  transform: (unprotectedText: string) => string,
): string;

export interface StructuredSource {
  id: string;
  url: string;
  title?: string | null;
  domain: string;
}
