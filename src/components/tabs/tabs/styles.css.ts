import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "src/components/theme/theme.css";

export const tabs = style({
  position: "relative",
  display: "flex",
  borderBottom: `1px solid ${themeVars.color.background[200]}`,
  paddingBottom: "0.5rem",
  pointerEvents: "all",
  overflowX: "auto",
  "::-webkit-scrollbar": {
    display: "none",
  },
});

export const tabHead = recipe({
  base: {
    cursor: "pointer",
    minWidth: "4rem",
    display: "flex",
    padding: "0.25rem 0.75rem",
    justifyContent: "center",
    userSelect: "none",
    transition: "all 0.3s",
    color: themeVars.color.text[500],
  },
  variants: {
    selected: {
      true: {
        color: themeVars.color.primary.default,
      },
    },
  },
});

export const indicator = style({
  position: "absolute",
  bottom: "0px",
  padding: "0.5rem",
  borderRadius: "1px",
  borderBottom: `3px solid ${themeVars.color.primary.default}`,
  transition: "all 0.3s ease-in-out",
});

export const tabBody = style({
  padding: "1rem",
});
