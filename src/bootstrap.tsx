import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Providers from "./Providers";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers />
  </StrictMode>
);
