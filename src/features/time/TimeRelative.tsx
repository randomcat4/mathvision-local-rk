import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type TimeHTMLAttributes,
} from "#production-react";
import { DateTime } from "../../api/attachments/attachmentsApi";
import { MChip } from "../../runtime/messageMetadataUiRuntime.js";
import {
  createRelativeTimeFormatter,
  getBrowserLocale,
  secondsUntilRelativeTimeUpdate,
} from "./relativeTime";

export interface TimeRelativeProps extends TimeHTMLAttributes<HTMLTimeElement> {
  date: string | number | Date;
  locale?: string;
}

export function TimeRelative({
  date,
  locale = getBrowserLocale(),
  className,
  ...props
}: TimeRelativeProps) {
  const format = useMemo(() => createRelativeTimeFormatter(locale), [locale]);
  const [relativeTime, setRelativeTime] = useState(() => format(date));
  const parsedDate = useMemo(() => new Date(date), [date]);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    const update = () => setRelativeTime(format(date));
    if (timer.current) clearInterval(timer.current);
    timer.current = setTimeout(update, secondsUntilRelativeTimeUpdate(date) * 1_000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [date, format, relativeTime]);
  return (
    <time
      dateTime={parsedDate.toISOString()}
      className={className}
      title={parsedDate.toLocaleString(locale)}
      {...props}
    >
      {relativeTime}
    </time>
  );
}

export function RelativeTimeChip({ time }: { time?: string | number | Date | null }) {
  return time ? (
    <MChip label={<TimeRelative date={time} />} size="xs" tooltip={<DateTime value={time} />} />
  ) : (
    "-"
  );
}
