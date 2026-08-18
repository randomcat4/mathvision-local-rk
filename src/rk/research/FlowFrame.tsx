import type { CSSProperties, ReactNode } from "react";

type FlowStyle = CSSProperties & {
  "--flow-rgb"?: string;
  "--flow-hot-rgb"?: string;
};

export function FlowFrame({ children, active, tone = "violet" }: {
  children: ReactNode;
  active: boolean;
  tone?: "violet" | "cyan";
}) {
  const style: FlowStyle = tone === "cyan"
    ? { "--flow-rgb": "72 204 224", "--flow-hot-rgb": "222 252 255" }
    : { "--flow-rgb": "151 118 255", "--flow-hot-rgb": "243 235 255" };

  return (
    <div className={`rk-flow-frame ${active ? "is-active" : ""}`} style={style}>
      {active ? <>
        <span className="rk-flow-ring rk-flow-ring--far" aria-hidden="true" />
        <span className="rk-flow-ring rk-flow-ring--blur" aria-hidden="true" />
        <span className="rk-flow-ring" aria-hidden="true" />
      </> : null}
      {children}
    </div>
  );
}
