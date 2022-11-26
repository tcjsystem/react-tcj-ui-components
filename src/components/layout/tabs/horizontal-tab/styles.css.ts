import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "src/core/styles/theme.css";
import { transitionVars } from "src/core/styles/transition.css";

export const tabs = style({
  position: "relative",
  display: "flex",
  zIndex: 0,
  borderBottom: `1px solid ${themeVars.color.background[200]}`,
  paddingBottom: "0.5rem",
  pointerEvents: "all",
  overflowX: "hidden",
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
    transition: transitionVars.short,
    color: themeVars.color.text[400],
    ":hover": {
      transform: "scale(1.01)",
      color: themeVars.color.text[500],
    },
    ":active": {
      transform: "scale(0.99)",
    },
  },
  variants: {
    selected: {
      true: {
        color: themeVars.color.primary[500],
      },
    },
  },
});

export const indicator = style({
  position: "absolute",
  bottom: "0px",
  padding: "0.5rem",
  zIndex: 2,
  borderRadius: "1px",
  borderBottom: `3px solid ${themeVars.color.primary[500]}`,
});

export const tabBody = style({
  padding: "1rem",
  width: "calc(100% - 4rem)",
  overflowX: "hidden",
});
