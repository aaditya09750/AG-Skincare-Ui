import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ResponsiveSkincare } from "./components/ResponsiveSkincare";
import "./styles/responsive.css";
import "../tailwind.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ResponsiveSkincare />
  </StrictMode>,
);
