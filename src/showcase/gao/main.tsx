import React from "react";
import { createRoot } from "react-dom/client";
import { GaoWorkflowPage } from "./GaoWorkflowPage";
import "./gaoWorkflow.css";

const root = document.getElementById("root");
if (!root) throw new Error("Missing #root element");
createRoot(root).render(
  <React.StrictMode>
    <GaoWorkflowPage />
  </React.StrictMode>,
);
