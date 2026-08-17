import { useEffect, useMemo, useRef } from "#production-react";

export interface ControlOrMetaShortcutOptions {
  enabled?: boolean;
  keyCode?: string | readonly string[];
  onShortcut: () => void;
}

export function useControlOrMetaShortcut({
  enabled = true,
  keyCode = "Enter",
  onShortcut,
}: ControlOrMetaShortcutOptions): void {
  const serializedKeyCodes = (Array.isArray(keyCode) ? keyCode : [keyCode])
    .map((code) => code.trim())
    .join("\0");
  const keyCodes = useMemo(() => {
    const codes = serializedKeyCodes.split("\0");
    if (!serializedKeyCodes || codes.some((code) => !code)) {
      throw new Error("Control/meta shortcut key code must not be blank.");
    }
    return codes;
  }, [serializedKeyCodes]);
  const callback = useRef(onShortcut);

  useEffect(() => {
    callback.current = onShortcut;
  }, [onShortcut]);

  useEffect(() => {
    if (!enabled || typeof document === "undefined") return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.defaultPrevented ||
        event.isComposing ||
        event.repeat ||
        event.altKey ||
        event.shiftKey ||
        !keyCodes.includes(event.code) ||
        (!event.ctrlKey && !event.metaKey)
      ) {
        return;
      }
      event.preventDefault();
      callback.current();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [enabled, keyCodes]);
}
