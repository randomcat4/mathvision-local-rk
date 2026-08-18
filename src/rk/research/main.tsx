import { createRoot } from "react-dom/client";
import { ResearchWorkspace } from "./ResearchWorkspace";
import "./rkResearch.css";

document.documentElement.lang = "zh-CN";
document.title = "RK 实时研究树";

const root = document.getElementById("root");
if (!root) throw new Error("Missing #root mount point.");

createRoot(root).render(<ResearchWorkspace />);
