import type { ComponentType, SVGProps } from "react";

export type LucideNode = Array<[string, Record<string, string>]>;
export function createLucideIcon(
  name: string,
  nodes: LucideNode,
): ComponentType<SVGProps<SVGSVGElement> & { size?: string | number }>;
