const relativeTimeUnits = [
  { unit: "year", seconds: 31_536_000 },
  { unit: "month", seconds: 2_592_000 },
  { unit: "week", seconds: 604_800 },
  { unit: "day", seconds: 86_400 },
  { unit: "hour", seconds: 3_600 },
  { unit: "minute", seconds: 60 },
] as const;

export const getBrowserLocale = () => globalThis.navigator?.language ?? "en-US";

export function createRelativeTimeFormatter(locale = getBrowserLocale()) {
  const formatter = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
  return (date: string | number | Date): string => {
    try {
      const parsed = new Date(date);
      if (Number.isNaN(parsed.getTime())) throw new Error("Invalid date input provided");
      const secondsFromNow = Math.round((parsed.getTime() - Date.now()) / 1_000);
      const absoluteSeconds = Math.abs(secondsFromNow);
      for (const { unit, seconds } of relativeTimeUnits) {
        if (absoluteSeconds >= seconds) {
          return formatter.format(Math.round(secondsFromNow / seconds), unit);
        }
      }
      return formatter.format(0, "second");
    } catch (error) {
      console.error("Error formatting relative time:", error);
      return "";
    }
  };
}

export function secondsUntilRelativeTimeUpdate(date: string | number | Date): number {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) throw new Error("Invalid date input provided");
  const secondsFromNow = Math.round((parsed.getTime() - Date.now()) / 1_000);
  const absoluteSeconds = Math.abs(secondsFromNow);
  for (const { seconds } of relativeTimeUnits) {
    if (absoluteSeconds >= seconds) {
      return Math.abs(seconds * Math.ceil(absoluteSeconds / seconds) - absoluteSeconds);
    }
  }
  return 60 - absoluteSeconds;
}
