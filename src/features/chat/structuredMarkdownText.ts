export interface StructuredMarkdownDependencies {
  advancePastWord(text: string, index: number): number;
  escapeMarkdownLabel(label: string): string;
  formatSourceLabel(source: StructuredSource): string;
  isInsideMath(text: string, index: number): boolean;
  splitsWord(text: string, index: number): boolean;
  transformOutsideProtectedMarkdown(
    text: string,
    transform: (unprotectedText: string) => string,
  ): string;
  wrapMarkdownUrl(url: string): string;
}

export interface StructuredSource {
  id: string;
  url: string;
  title?: string | null;
  domain: string;
}

export interface StructuredCitation {
  sourceIds: string[];
  anchorText?: string | null;
  citedText?: string | null;
}

export interface LiteratureSource {
  source_id: string;
  link?: string | null;
}

const parenthesizedLink =
  /\(\s*\[([^\]\n]+)\]\((<[^>\n]+>|https?:\/\/[^\s)\n]+)(?:\s+(?:"[^"\n]*"|'[^'\n]*'|\([^)\n]*\)))?\)\s*\)/gi;
const bareHttpLink = /\[([^\]\n]+)\]\((<https?:\/\/[^>\n]+>|https?:\/\/[^\s)\n]+)\)/gi;
const unresolvedMarker = /\[([^\]\n]+)\](?!\s*\()/g;
const markerSeparator = /\s*[,;]\s*/;
const CITATION_LINK_TITLE = "assistant-source-citation";

const stripUrlBrackets = (value: string) => value.trim().replace(/^<|>$/g, "");
const normalizeUrlLabel = (value: string) =>
  value
    .replace(/\\/g, "")
    .trim()
    .replace(/^https?:\/\//i, "")
    .replace(/^www\./i, "")
    .replace(/[./]+$/g, "")
    .toLowerCase();
const hostname = (value: string) => {
  try {
    return new URL(stripUrlBrackets(value)).hostname.replace(/^www\./i, "").toLowerCase();
  } catch {
    return null;
  }
};
const labelMatchesUrl = (label: string, url: string) => {
  const host = hostname(url);
  return host ? normalizeUrlLabel(label) === host : false;
};
const citationLink = (label: string, url: string) =>
  `[${label}](${url} "${CITATION_LINK_TITLE}")`;

export function normalizeAssistantCitationLinks(content: string): string {
  return content
    .replace(parenthesizedLink, (_match, label: string, url: string) => citationLink(label, url))
    .replace(bareHttpLink, (match, label: string, url: string) =>
      labelMatchesUrl(label, url) ? citationLink(label, url) : match,
    );
}

const decodeJsonStyleEscapes = (value: string) =>
  value.replace(/\\([\\/"bfnrt])/g, (_match, escaped: string) =>
    escaped === "b"
      ? "\b"
      : escaped === "f"
        ? "\f"
        : escaped === "n"
          ? "\n"
          : escaped === "r"
            ? "\r"
            : escaped === "t"
              ? "\t"
              : escaped,
  );
const anchorCandidates = (value: string) => {
  const trimmed = value.trim();
  const decoded = decodeJsonStyleEscapes(trimmed).trim();
  return [...new Set([trimmed, decoded])].filter(Boolean);
};
const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function insertionIndex(
  content: string,
  match: RegExpMatchArray,
  dependencies: Pick<StructuredMarkdownDependencies, "advancePastWord" | "isInsideMath" | "splitsWord">,
): number | null {
  if (match.index === undefined) return null;
  const end = match.index + match[0].length;
  const safeEnd = dependencies.splitsWord(content, end)
    ? dependencies.advancePastWord(content, end)
    : end;
  return dependencies.isInsideMath(content, safeEnd) ? null : safeEnd;
}

export function injectCitationAnchors(
  content: string,
  sources: StructuredSource[],
  citations: StructuredCitation[],
  dependencies: StructuredMarkdownDependencies,
): string {
  if (!content.trim() || sources.length === 0 || citations.length === 0) return content;
  const sourcesById = new Map(sources.map((source) => [source.id, source]));
  let result = content;
  for (const citation of citations) {
    const anchor = (citation.anchorText ?? citation.citedText)?.trim();
    if (!anchor) continue;
    const citedSources = citation.sourceIds
      .map((sourceId) => sourcesById.get(sourceId))
      .filter((source): source is StructuredSource => source !== undefined);
    if (citedSources.length === 0 || citedSources.some((source) => result.includes(source.url))) {
      continue;
    }
    const uniqueMatch = anchorCandidates(anchor)
      .map((candidate) => [
        ...result.matchAll(new RegExp(escapeRegExp(candidate).replace(/\s+/g, "\\s+"), "g")),
      ])
      .find((matches) => matches.length === 1 && matches[0].index !== undefined);
    if (!uniqueMatch?.[0]) continue;
    const index = insertionIndex(result, uniqueMatch[0], dependencies);
    if (index !== null) {
      const markers = citedSources
        .map((source) =>
          citationLink(
            dependencies.escapeMarkdownLabel(dependencies.formatSourceLabel(source)),
            dependencies.wrapMarkdownUrl(source.url),
          ),
        )
        .join("");
      result = `${result.slice(0, index)} ${markers}${result.slice(index)}`;
    }
  }
  return result;
}

export function resolveLiteratureMarkers(
  content: string,
  literatureSources: LiteratureSource[],
  dependencies: Pick<
    StructuredMarkdownDependencies,
    "escapeMarkdownLabel" | "transformOutsideProtectedMarkdown" | "wrapMarkdownUrl"
  >,
): string {
  const byId = new Map(
    literatureSources.flatMap((source) => {
      const sourceId = source.source_id.trim();
      const href = source.link?.trim();
      return sourceId && href ? [[sourceId, { href, sourceId }] as const] : [];
    }),
  );
  if (byId.size === 0) return content;
  return dependencies.transformOutsideProtectedMarkdown(content, (part) =>
    part.replace(unresolvedMarker, (match, labels: string, offset: number) => {
      const before = part[offset - 1];
      const after = part[offset + match.length];
      if (before === "!" || before === "[" || after === "]") return match;
      const resolved = labels
        .split(markerSeparator)
        .map((label) => label.trim())
        .filter(Boolean)
        .map((label) => byId.get(label));
      if (resolved.length === 0 || resolved.some((source) => source === undefined)) return match;
      return resolved
        .map((source) => {
          if (!source) throw new Error("Literature source marker resolved without a source.");
          return citationLink(
            dependencies.escapeMarkdownLabel(`[${source.sourceId}]`),
            dependencies.wrapMarkdownUrl(source.href),
          );
        })
        .join(" ");
    }),
  );
}

export function prepareStructuredMarkdown(
  content: string,
  sources: StructuredSource[],
  citations: StructuredCitation[],
  literatureSources: LiteratureSource[],
  compact: boolean,
  dependencies: StructuredMarkdownDependencies,
): string {
  const literatureResolved = resolveLiteratureMarkers(content, literatureSources, dependencies);
  return compact
    ? literatureResolved
    : normalizeAssistantCitationLinks(
        injectCitationAnchors(literatureResolved, sources, citations, dependencies),
      );
}
