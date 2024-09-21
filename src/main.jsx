import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/index.css";
import Nav from "./components/nav";
import HeroSection from "./components/hero";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div id="main">
    <Nav />
    <HeroSection />
    </div>
  </StrictMode>
);
