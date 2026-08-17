import type { ComponentType } from "react";
export const Accordion: ComponentType<any>;
export const AccordionDetails: ComponentType<any>;
export const AccordionSummary: ComponentType<any>;
export const Box: ComponentType<any>;
export const Card: ComponentType<any>;
export const Chip: ComponentType<any>;
export const CitationLink: ComponentType<any>;
export const ComputeStructuredSection: ComponentType<any>;
export const CopyButton: ComponentType<any>;
export const ExpandMoreIcon: ComponentType<any>;
export const NextStepChoices: ComponentType<any>;
export const NextStepsResponse: ComponentType<any>;
export const Paper: ComponentType<any>;
export const Stack: ComponentType<any>;
export const StructuredMarkdown: ComponentType<any>;
export const Tab: ComponentType<any>;
export const Tabs: ComponentType<any>;
export const Typography: ComponentType<any>;
export const VisualizationStructuredSection: ComponentType<any>;
export const WriteupStructuredResponsePanel: ComponentType<any>;
export function alpha(color: string, opacity: number): string;
export interface StructuredSection {
  key: string;
  label: string;
  value: unknown;
}
export function getStructuredSections(
  response: StructuredResponse,
): StructuredSection[];
export function getSectionCopyContent(value: unknown): string;
export function stringifySectionValue(value: unknown, format?: string): string;
export function isVariableDefinitions(
  value: unknown,
): value is VariableDefinition[];
export function isLiteratureSources(
  value: unknown,
): value is LiteratureSource[];
export function isNextStepChoices(value: unknown): boolean;
export function transformMarkdownMath(
  value: string,
  transform: (content: string) => string,
): string;
export interface VariableDefinition {
  symbol: string;
  meaning: string;
  notes?: string | null;
}
export interface CitationConnection {
  relationship: string;
  source_id?: string | null;
  link: string;
  title: string;
}
export interface CitationMetadata {
  citation_count?: number | null;
  connections: CitationConnection[];
}
export interface LiteratureSource {
  source_id: string;
  title: string;
  authors?: string;
  venue_year?: string;
  source_type?: string;
  verification_status?: string;
  citation_metadata?: CitationMetadata | null;
  theorem_statement?: string;
  relevance: string;
  link?: string | null;
}
export interface StructuredResponse {
  operation: string;
  status?: string;
  decision_severity?: unknown;
  bibliography?: unknown;
  choices?: unknown;
  variable_defs?: unknown;
  artifact_refs?: unknown;
  [key: string]: unknown;
}
