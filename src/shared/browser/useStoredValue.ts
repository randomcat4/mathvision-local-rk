import { useCallback, useEffect, useRef, useState } from "#production-react";

type InitialValue<T> = T | (() => T);
const resolveInitialValue = <T,>(value: InitialValue<T>): T =>
  typeof value === "function" ? (value as () => T)() : value;

export interface UseStoredValueOptions<T> {
  storageKey: string;
  defaultValue: InitialValue<T>;
  parse?: (serialized: string) => T;
  serialize?: (value: T) => string;
  shouldRemove?: (value: T) => boolean;
  writeOnSet?: boolean;
  readErrorMessage?: string;
  writeErrorMessage?: string;
}

export function useStoredValue<T>({
  storageKey,
  defaultValue,
  parse = JSON.parse as (serialized: string) => T,
  serialize = JSON.stringify,
  shouldRemove,
  writeOnSet = true,
  readErrorMessage = "Could not read localStorage value.",
  writeErrorMessage = "Could not save localStorage value.",
}: UseStoredValueOptions<T>) {
  const readValue = useCallback((): T => {
    if (typeof window === "undefined") return resolveInitialValue(defaultValue);
    try {
      const stored = window.localStorage.getItem(storageKey);
      return stored === null ? resolveInitialValue(defaultValue) : parse(stored);
    } catch (error) {
      console.warn(readErrorMessage, error);
      return resolveInitialValue(defaultValue);
    }
  }, [defaultValue, parse, readErrorMessage, storageKey]);
  const writeValue = useCallback(
    (value: T) => {
      if (typeof window === "undefined") return;
      try {
        if (shouldRemove?.(value)) {
          window.localStorage.removeItem(storageKey);
          return;
        }
        window.localStorage.setItem(storageKey, serialize(value));
      } catch (error) {
        console.warn(writeErrorMessage, error);
      }
    },
    [serialize, shouldRemove, storageKey, writeErrorMessage],
  );
  const [value, setStateValue] = useState(readValue);
  const valueRef = useRef(value);
  useEffect(() => {
    const reloaded = readValue();
    valueRef.current = reloaded;
    setStateValue(reloaded);
  }, [readValue]);
  const setValue = useCallback(
    (nextValue: T) => {
      valueRef.current = nextValue;
      setStateValue(nextValue);
      if (writeOnSet) writeValue(nextValue);
    },
    [writeOnSet, writeValue],
  );
  const updateValue = useCallback(
    (update: (current: T) => T) => {
      const nextValue = update(valueRef.current);
      if (!Object.is(nextValue, valueRef.current)) {
        valueRef.current = nextValue;
        setStateValue(nextValue);
        if (writeOnSet) writeValue(nextValue);
      }
    },
    [writeOnSet, writeValue],
  );
  const reloadValue = useCallback(() => {
    const reloaded = readValue();
    valueRef.current = reloaded;
    setStateValue(reloaded);
    return reloaded;
  }, [readValue]);
  return { value, setValue, updateValue, readValue, writeValue, reloadValue };
}
