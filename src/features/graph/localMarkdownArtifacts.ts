export interface LocalMarkdownLink {
  label: string;
  path: string;
}

const localMarkdownLinkPattern = /\[([^\]]+)\]\(((?:[A-Za-z]:\\|\/)[^)]+\.md)\)/g;

export function extractLocalMarkdownLinks(markdown: string): LocalMarkdownLink[] {
  return Array.from(markdown.matchAll(localMarkdownLinkPattern), (match) => ({
    label: match[1],
    path: match[2],
  }));
}

export function removeLocalMarkdownLinkTargets(markdown: string): string {
  return markdown.replace(localMarkdownLinkPattern, "$1");
}

export function localMarkdownArtifactUrl(path: string): string {
  return `/__local-md?path=${encodeURIComponent(path)}`;
}
