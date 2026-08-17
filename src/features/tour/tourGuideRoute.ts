export function sanitizeTourReturnPath(value: string | null | undefined, origin = "https://app.mathvision.ai"): string {
  const fallback = "/chats";
  if (!value) return fallback;
  try {
    const url = new URL(value, origin);
    const normalizedPath = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, "") : url.pathname;
    if ((normalizedPath !== "/chats" && !normalizedPath.startsWith("/chats/")) || normalizedPath === "/chats/tour-guide") return fallback;
    return `${url.pathname}${url.search}${url.hash}`;
  } catch { return fallback; }
}
