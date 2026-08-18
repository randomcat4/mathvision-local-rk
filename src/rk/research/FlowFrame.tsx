import type { ReactNode } from "react";

export function FlowFrame({ children, active }: {
  children: ReactNode;
  active: boolean;
}) {
  return (
    <div className={`rk-flow-frame ${active ? "is-active" : ""}`}>
      {active ? <>
        <span className="rk-flow-ring rk-flow-ring--far" aria-hidden="true" />
        <span className="rk-flow-ring rk-flow-ring--blur" aria-hidden="true" />
        <span className="rk-flow-ring" aria-hidden="true" />
      </> : null}
      {children}
    </div>
  );
}
