import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };
type IconShape = Array<["path" | "circle" | "line" | "polyline" | "rect", Record<string, string | number>]>;

function makeIcon(shape: IconShape) {
  return function RkIcon({ size = 18, ...props }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
      >
        {shape.map(([tag, attributes], index) => {
          if (tag === "circle") return <circle key={index} {...attributes} />;
          if (tag === "line") return <line key={index} {...attributes} />;
          if (tag === "polyline") return <polyline key={index} {...attributes} />;
          if (tag === "rect") return <rect key={index} {...attributes} />;
          return <path key={index} {...attributes} />;
        })}
      </svg>
    );
  };
}

export const Activity = makeIcon([["path", { d: "M3 12h4l2.5-7 5 14 2.5-7h4" }]]);
export const Braces = makeIcon([["path", { d: "M8 3H6a2 2 0 0 0-2 2v4a2 2 0 0 1-2 2 2 2 0 0 1 2 2v4a2 2 0 0 0 2 2h2M16 3h2a2 2 0 0 1 2 2v4a2 2 0 0 0 2 2 2 2 0 0 0-2 2v4a2 2 0 0 1-2 2h-2" }]]);
export const Check = makeIcon([["path", { d: "m5 12 4 4L19 6" }]]);
export const CheckCircle2 = makeIcon([["circle", { cx: 12, cy: 12, r: 9 }], ["path", { d: "m8 12 2.7 2.7L16.5 9" }]]);
export const CirclePause = makeIcon([["circle", { cx: 12, cy: 12, r: 9 }], ["line", { x1: 10, x2: 10, y1: 9, y2: 15 }], ["line", { x1: 14, x2: 14, y1: 9, y2: 15 }]]);
export const CircleX = makeIcon([["circle", { cx: 12, cy: 12, r: 9 }], ["path", { d: "m9 9 6 6m0-6-6 6" }]]);
export const Clock3 = makeIcon([["circle", { cx: 12, cy: 12, r: 9 }], ["path", { d: "M12 7v5l3 2" }]]);
export const Crosshair = makeIcon([["circle", { cx: 12, cy: 12, r: 7 }], ["circle", { cx: 12, cy: 12, r: 2 }], ["path", { d: "M12 2v3m0 14v3M2 12h3m14 0h3" }]]);
export const FileCode2 = makeIcon([["path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" }], ["path", { d: "M14 2v6h6m-8 5-2 2 2 2m4-4 2 2-2 2" }]]);
export const FileText = makeIcon([["path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" }], ["path", { d: "M14 2v6h6M8 13h8M8 17h6" }]]);
export const GitMerge = makeIcon([["circle", { cx: 18, cy: 18, r: 3 }], ["circle", { cx: 6, cy: 6, r: 3 }], ["path", { d: "M6 9v5a4 4 0 0 0 4 4h5M6 9c0 5 5 6 9 6" }]]);
export const LockKeyhole = makeIcon([["rect", { x: 4, y: 10, width: 16, height: 11, rx: 2 }], ["path", { d: "M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" }]]);
export const Moon = makeIcon([["path", { d: "M20.5 15.3A9 9 0 0 1 8.7 3.5 8.4 8.4 0 1 0 20.5 15.3Z" }]]);
export const Maximize2 = makeIcon([["path", { d: "M8 3H3v5m13-5h5v5M8 21H3v-5m13 5h5v-5" }]]);
export const MessageSquareText = makeIcon([["path", { d: "M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" }], ["path", { d: "M8 8h8M8 12h6" }]]);
export const Minus = makeIcon([["line", { x1: 5, x2: 19, y1: 12, y2: 12 }]]);
export const Network = makeIcon([["rect", { x: 9, y: 2, width: 6, height: 5, rx: 1 }], ["rect", { x: 3, y: 17, width: 6, height: 5, rx: 1 }], ["rect", { x: 15, y: 17, width: 6, height: 5, rx: 1 }], ["path", { d: "M12 7v5m-6 5v-2h12v2" }]]);
export const Play = makeIcon([["path", { d: "m8 5 11 7-11 7Z" }]]);
export const Plus = makeIcon([["path", { d: "M12 5v14M5 12h14" }]]);
export const Palette = makeIcon([["path", { d: "M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 0-4H12a2 2 0 0 1 0-4h4a5 5 0 0 0 5-5c0-2.8-4-5-9-5Z" }], ["circle", { cx: 7.5, cy: 9, r: 1 }], ["circle", { cx: 10.5, cy: 6.5, r: 1 }], ["circle", { cx: 15, cy: 7, r: 1 }]]);
export const ScrollText = makeIcon([["path", { d: "M8 22h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3Z" }], ["path", { d: "M8 7h6m-6 4h6m-6 4h4" }]]);
export const Search = makeIcon([["circle", { cx: 11, cy: 11, r: 7 }], ["path", { d: "m20 20-4-4" }]]);
export const Settings2 = makeIcon([["path", { d: "M20 7h-9M14 17H4M4 7h3m11 10h2" }], ["circle", { cx: 9, cy: 7, r: 2 }], ["circle", { cx: 16, cy: 17, r: 2 }]]);
export const Sun = makeIcon([["circle", { cx: 12, cy: 12, r: 4 }], ["path", { d: "M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" }]]);
