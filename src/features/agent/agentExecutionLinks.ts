export const AGENT_OUTPUT_LINK_PREFIX = "#agent-output-";
export const agentOutputIdPattern = /^agent-operation-(?:0|[1-9][0-9]*)$/;
const agentOutputLinkPattern = /#agent-output-(agent-operation-(?:0|[1-9][0-9]*))/g;

export function agentOutputIdFromHref(href: string | undefined): string | null {
  if (!href?.startsWith(AGENT_OUTPUT_LINK_PREFIX)) return null;
  const outputId = href.slice(AGENT_OUTPUT_LINK_PREFIX.length);
  return agentOutputIdPattern.test(outputId) ? outputId : null;
}

export function referencedAgentOutputIds(answer: string): Set<string> {
  return new Set([...answer.matchAll(agentOutputLinkPattern)].map((match) => match[1]));
}

export function appendUnreferencedAgentOutputs(
  answer: string,
  usedOutputIds: string[],
  outputTitles: ReadonlyMap<string, string>,
  escapeMarkdownLabel: (label: string) => string,
): string {
  const referenced = referencedAgentOutputIds(answer);
  const links = usedOutputIds
    .filter((outputId) => !referenced.has(outputId))
    .flatMap((outputId) => {
      const title = outputTitles.get(outputId);
      return title
        ? [`[${escapeMarkdownLabel(title)}](${AGENT_OUTPUT_LINK_PREFIX}${outputId})`]
        : [];
    });
  return links.length === 0
    ? answer
    : `${answer}\n\nSee intermediate ${links.length === 1 ? "result" : "results"}: ${links.join(", ")}.`;
}
