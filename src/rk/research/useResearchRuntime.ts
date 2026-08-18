import { useEffect, useState } from "react";
import type { ResearchRuntime, ResearchSnapshot } from "./types";

export function useResearchRuntime(runtime: ResearchRuntime): ResearchSnapshot | null {
  const [snapshot, setSnapshot] = useState<ResearchSnapshot | null>(null);

  useEffect(() => {
    let current = true;
    void runtime.getSnapshot().then((value) => {
      if (current) setSnapshot(value);
    });
    const unsubscribe = runtime.subscribe(setSnapshot);
    return () => {
      current = false;
      unsubscribe();
    };
  }, [runtime]);

  return snapshot;
}
