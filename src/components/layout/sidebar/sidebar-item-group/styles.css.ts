import { style } from "@vanilla-extract/css";
import { themeVars } from "../../../../core/styles/theme.css";
import { transitionVars } from "../../../../core/styles/transition.css";

export const container = style({
  display: "flex",
  justifyContent: "space-around",
  flexDirection: "column",
  padding: "0 1rem",
  cursor: "pointer",
});

export const content = style({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "2.5rem",
  color: themeVars.color.text[400],
  ":hover": {
    color: themeVars.color.text[600],
  },
  transition: transitionVars.short,
  selectors: {
    "&[data-open=true]": {
      color: themeVars.color.text[700],
    },
  },
});

export const indicator = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
