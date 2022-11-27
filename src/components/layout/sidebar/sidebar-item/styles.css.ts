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
  justifyContent: "space-between",
  alignItems: "center",
  height: "2rem",
  color: themeVars.color.text[400],
  ":hover": {
    color: themeVars.color.text[600],
  },
  transition: transitionVars.short,
  padding: "0 0.5rem",
  selectors: {
    "&[data-selected=true]": {
      backgroundColor: themeVars.color.background[800],
      borderRadius: "0.5rem",
      color: themeVars.color.primary[600],
    },
  },
});

export const sidebarChildren = style({});
