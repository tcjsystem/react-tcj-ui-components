import { createGlobalTheme } from "@vanilla-extract/css";

export const transitionVars = createGlobalTheme(":root", {
  short: "all 0.4s",
  drawer: "all 0.5s",
});
