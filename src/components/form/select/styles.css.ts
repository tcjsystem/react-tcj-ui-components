import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../../core/styles/sprinkles/index.css";
import { themeVars } from "../../../core/styles/theme.css";
import { transitionVars } from "../../../core/styles/transition.css";

export const selectTrigger = style([
  sprinkles({
    display: "inline-flex",
    placeItems: "center",
    paddingX: "1",
    paddingY: "0.5",
    fontSize: "body2",
    borderRadius: "0.5",
  }),
  {
    selectors: {
      "&[data-placeholder]": {
        color: themeVars.color.text[500],
      },
    },
    height: "1rem",
    gap: "0.5rem",
    backgroundColor: themeVars.color.background[100],
    color: themeVars.color.text[700],
    boxShadow: `0 2px 4px ${themeVars.color.shadow.default}`,
    ":hover": {
      backgroundColor: themeVars.color.background[50],
    },
    ":focus": {
      boxShadow: `0 0 0 2px ${themeVars.color.primary[400]}`,
    },
    transition: transitionVars.short,
  },
]);

export const selectIcon = style([
  sprinkles({
    display: "flex",
    alignItems: "center",
  }),
  {
    color: themeVars.color.primary[300],
  },
]);

export const selectContent = style({
  overflow: "hidden",
  backgroundColor: themeVars.color.background[100],
  borderRadius: "0.5rem",
  boxShadow: `0 2px 4px ${themeVars.color.shadow.active}`,
});

export const selectViewport = style({
  padding: "0.5rem",
});

export const selectItem = style([
  sprinkles({
    fontSize: "body2",
    borderRadius: "0.25",
    display: "flex",
    paddingX: "2",
    paddingY: "0.5",
  }),
  {
    selectors: {
      "&[data-disabled]": {
        color: themeVars.color.text[300],
        pointerEvents: "none",
      },
      "&[data-highlighted]": {
        outline: "none",
        backgroundColor: themeVars.color.primary[500],
        color: themeVars.color.primary[100],
      },
    },
    color: themeVars.color.text[700],
    position: "relative",
    userSelect: "none",
    transition: transitionVars.short,
  },
]);

export const selectLabel = style([
  sprinkles({
    padding: "0.25",
    fontSize: "caption",
  }),
  {
    color: themeVars.color.text[400],
  },
]);

export const selectSeparator = style({
  height: "1px",
  backgroundColor: themeVars.color.primary[100],
  margin: "0.25rem",
});

export const selectItemIndicator = style({
  position: "absolute",
  left: 0,
  width: "35px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

export const selectScrollButton = style([
  sprinkles({
    display: "flex",
    placeItems: "center",
  }),
  {
    height: "25px",
    backgroundColor: themeVars.color.background[100],
    color: themeVars.color.primary[300],
    cursor: "default",
  },
]);
