import { style } from "@vanilla-extract/css";
import { themeVars } from "src/core/styles/theme.css";
import { transitionVars } from "src/core/styles/transition.css";
import { sprinkles } from "../../../core/styles/sprinkles/index.css";

export const container = style({});

export const title = style([
  sprinkles({
    fontSize: "subtitle2",
  }),
  {
    color: themeVars.color.text[700],
    display: "block",
    selectors: {
      "&[data-error=true]": {
        color: themeVars.color.error[500],
      },
    },
  },
]);

export const inputContainer = style({
  marginTop: "0.25rem",
  position: "relative",
});

export const input = style({
  fontFamily: "Pretendard Variable",
  display: "block",
  borderRadius: "0.25rem",
  minWidth: "100%",
  maxWidth: "100%",
  border: "2px solid transparent",
  color: themeVars.color.text[900],
  backgroundColor: themeVars.color.background[100],
  boxSizing: "border-box",
  appearance: "none",
  marginTop: "0.5rem",
  outline: "none",
  padding: "0.5rem",
  caretColor: themeVars.color.primary[500],
  boxShadow: `0 2px 4px ${themeVars.color.shadow[300]}`,
  "::placeholder": {
    fontWeight: 100,
    color: themeVars.color.text[300],
  },
  ":focus": {
    borderColor: themeVars.color.primary[500],
  },
  ":hover": {
    boxShadow: `0 4px 8px ${themeVars.color.shadow[300]}`,
  },
  selectors: {
    "&[data-error=true]": {
      borderColor: themeVars.color.error[500],
    },
    "&[type='password']": {
      visibility: "hidden",
      display: "none",
      pointerEvents: "none",
      height: 0,
      width: 0,
      margin: 0,
    },
  },
});

export const errorIcon = style({
  opacity: 0,
  position: "absolute",
  right: "0.625rem",
  bottom: "0.625rem",
  color: themeVars.color.error[500],
  selectors: {
    "&[data-error='true']": {
      opacity: 1,
    },
  },
  transition: transitionVars.short,
});

export const errorMessage = style({
  opacity: 0,
  fontSize: "0.625rem",
  color: themeVars.color.error[500],
  position: "absolute",
  marginTop: "0.5rem",
  selectors: {
    "&[data-error='true']": {
      opacity: 1,
    },
  },
  transition: transitionVars.short,
});
