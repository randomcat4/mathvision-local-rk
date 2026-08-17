import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FocusEvent,
} from "#production-react";
import { createLucideIcon } from "../../runtime/lucideRuntime.js";
import { TextField } from "../../runtime/basicUiRuntime.js";

type TextInputElement = HTMLInputElement | HTMLTextAreaElement;
type TextChangeEvent = ChangeEvent<TextInputElement>;

export const SlidersHorizontalIcon = createLucideIcon("sliders-horizontal", [
  ["path", { d: "M10 5H3", key: "1qgfaw" }],
  ["path", { d: "M12 19H3", key: "yhmn1j" }],
  ["path", { d: "M14 3v4", key: "1sua03" }],
  ["path", { d: "M16 17v4", key: "1q0r14" }],
  ["path", { d: "M21 12h-9", key: "1o4lsq" }],
  ["path", { d: "M21 19h-5", key: "1rlt1p" }],
  ["path", { d: "M21 5h-7", key: "1oszz2" }],
  ["path", { d: "M8 10v4", key: "tgpxqk" }],
  ["path", { d: "M8 12H3", key: "a7s4jb" }],
]);

export interface DebouncedTextFieldProps {
  debounceMs?: number;
  defaultValue?: unknown;
  onBlur?: (event: FocusEvent<TextInputElement>) => void;
  onChange?: (event: TextChangeEvent) => void;
  value?: unknown;
  [key: string]: unknown;
}

export function DebouncedTextField({
  debounceMs = 300,
  defaultValue,
  onBlur,
  onChange,
  value,
  ...props
}: DebouncedTextFieldProps) {
  if (!Number.isFinite(debounceMs) || debounceMs < 0) {
    throw new Error("DebouncedTextField debounceMs must be a non-negative number.");
  }
  const isControlled = value !== undefined;
  const [displayValue, setDisplayValue] = useState(value);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pendingEvent = useRef<TextChangeEvent | null>(null);
  const changeCallback = useRef(onChange);

  useEffect(() => {
    changeCallback.current = onChange;
  }, [onChange]);

  const cancelPendingChange = useCallback(() => {
    if (timer.current !== null) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    pendingEvent.current = null;
  }, []);

  const flushPendingChange = useCallback(() => {
    if (timer.current !== null) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    const event = pendingEvent.current;
    pendingEvent.current = null;
    if (event && changeCallback.current) changeCallback.current(event);
  }, []);

  useEffect(() => {
    if (isControlled) {
      setDisplayValue(value);
      cancelPendingChange();
    }
  }, [cancelPendingChange, isControlled, value]);

  useEffect(() => cancelPendingChange, [cancelPendingChange]);

  const handleChange = useCallback(
    (event: TextChangeEvent) => {
      if (isControlled) setDisplayValue(event.target.value);
      pendingEvent.current = event;
      if (debounceMs === 0) {
        flushPendingChange();
        return;
      }
      if (timer.current !== null) clearTimeout(timer.current);
      timer.current = setTimeout(flushPendingChange, debounceMs);
    },
    [debounceMs, flushPendingChange, isControlled],
  );

  const handleBlur = useCallback(
    (event: FocusEvent<TextInputElement>) => {
      flushPendingChange();
      onBlur?.(event);
    },
    [flushPendingChange, onBlur],
  );

  return (
    <TextField
      {...props}
      defaultValue={defaultValue}
      value={isControlled ? displayValue : value}
      onBlur={handleBlur}
      onChange={onChange ? handleChange : undefined}
    />
  );
}
