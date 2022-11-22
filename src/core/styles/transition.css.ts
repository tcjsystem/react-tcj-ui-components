import { createGlobalTheme } from "@vanilla-extract/css";

export const transitionVars = createGlobalTheme(":root", {
  short: "all 0.2s ease-in-out",
  medium: "all 0.4s",
  long: "all 0.6s",
});
