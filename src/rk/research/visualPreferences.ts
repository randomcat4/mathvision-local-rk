import { useEffect, useState } from "react";

export type RkTheme = "dark" | "light";
export type RkGlow = "violet" | "blue" | "crimson" | "razer" | "cyan" | "amber";

const STORAGE_KEY = "rk.research.visual-preferences.v1";

interface VisualPreferences {
  theme: RkTheme;
  glow: RkGlow;
}

const defaults: VisualPreferences = { theme: "dark", glow: "violet" };

function readPreferences(): VisualPreferences {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "{}") as Partial<VisualPreferences>;
    return {
      theme: parsed.theme === "light" ? "light" : "dark",
      glow: parsed.glow === "blue" || parsed.glow === "crimson" || parsed.glow === "razer" || parsed.glow === "cyan" || parsed.glow === "amber" ? parsed.glow : "violet",
    };
  } catch {
    return defaults;
  }
}

export function useVisualPreferences() {
  const [preferences, setPreferences] = useState<VisualPreferences>(readPreferences);

  useEffect(() => {
    document.documentElement.dataset.theme = preferences.theme;
    document.documentElement.dataset.glow = preferences.glow;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  }, [preferences]);

  return {
    ...preferences,
    setTheme: (theme: RkTheme) => setPreferences((current) => ({ ...current, theme })),
    setGlow: (glow: RkGlow) => setPreferences((current) => ({ ...current, glow })),
  };
}
