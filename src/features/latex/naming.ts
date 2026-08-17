/** Behavior-preserving recovery of latexNaming-BAjxoZ-G.js. */

import {
  latexCitationPattern,
  latexEmphasisPattern,
  latexReferencePattern,
} from "./textPatterns";

export const LATEX_FILE_EXTENSION = ".tex";
export const DEFAULT_LATEX_PROJECT_NAME = "Untitled project";

const latexTitlePattern = /\\title(?:\s*\[[^\]]*])?\s*\{((?:[^{}]|\{[^{}]*\})*)\}/i;

function removeLatexExtension(name: string): string {
  const trimmedName = name.trim();
  return trimmedName.toLowerCase().endsWith(LATEX_FILE_EXTENSION)
    ? trimmedName.slice(0, -LATEX_FILE_EXTENSION.length)
    : trimmedName;
}

export function normalizeLatexFileName(name: string): string {
  const baseName = removeLatexExtension(name).trim();
  if (!baseName) throw new Error("LaTeX file name must not be blank.");
  if (baseName.includes("/") || baseName.includes("\\")) {
    throw new Error("LaTeX file name must not contain path separators.");
  }
  return `${baseName}${LATEX_FILE_EXTENSION}`;
}

export function normalizeLatexProjectName(name: string): string {
  const normalizedName = removeLatexExtension(name).trim();
  if (!normalizedName) throw new Error("LaTeX project name must not be blank.");
  if (normalizedName.includes("/") || normalizedName.includes("\\")) {
    throw new Error("LaTeX project name must not contain path separators.");
  }
  return normalizedName;
}

export interface NamedLatexProject {
  name: string;
}

export function allocateUniqueLatexProjectName(
  projects: readonly NamedLatexProject[],
  requestedName = DEFAULT_LATEX_PROJECT_NAME,
): string {
  const baseName = normalizeLatexProjectName(requestedName);
  const existingNames = new Set(
    projects.map((project) => normalizeLatexProjectName(project.name).toLowerCase()),
  );
  if (!existingNames.has(baseName.toLowerCase())) return baseName;

  for (let suffix = 2; suffix < 1_000; suffix += 1) {
    const candidate = `${baseName}-${suffix}`;
    if (!existingNames.has(candidate.toLowerCase())) return candidate;
  }
  throw new Error("Could not allocate a unique LaTeX project name.");
}

export function latexToPlainText(source: string): string {
  return source
    .replace(/\\\\(?:\[[^\]]*])?/g, " ")
    .replace(latexEmphasisPattern, "$2")
    .replace(latexReferencePattern, "$1")
    .replace(latexCitationPattern, "$1")
    .replace(/\\[a-zA-Z]+\*?(?:\[[^\]]*])?/g, "")
    .replace(/[{}]/g, "")
    .replace(/~/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function extractLatexProjectName(source: string): string | null {
  const title = latexTitlePattern.exec(source)?.[1];
  if (!title) return null;

  const plainTitle = latexToPlainText(title)
    .replace(/[\\/]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return plainTitle ? normalizeLatexProjectName(plainTitle) : null;
}
