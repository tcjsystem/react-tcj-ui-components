import { createVar } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { colorPaletteVars } from "../../../core/styles/colorPalette.css";
import { fontVars } from "../../../core/styles/size.css";
import { themeVars } from "../../../core/styles/theme.css";
import { transitionVars } from "../../../core/styles/transition.css";

export const customColorDefault = createVar();
export const customColorBorder = createVar();
export const customColorHover = createVar();
export const customColorActive = createVar();

export const button = recipe({
  base: {
    color: themeVars.color.text[100],
    borderStyle: "none",
    cursor: "pointer",
    fontWeight: 500,
    userSelect: "none",
    WebkitUserSelect: "none",
    fontSize: fontVars.size.sm,
    padding: "0.5rem 0.875rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
    transition: transitionVars.short,
    selectors: {
      "ul > &:not(:last-child)": {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        boxShadow: "none",
      },
      "ul > &:not(:first-child)": {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        boxShadow: "none",
      },
    },
  },
  variants: {
    color: {
      default: {
        backgroundColor: themeVars.color.background[100],
        border: `1px solid ${themeVars.color.background[300]}`,
        color: themeVars.color.text[500],
        ":hover": {
          backgroundColor: themeVars.color.background[200],
        },
        ":active": {
          backgroundColor: themeVars.color.background[300],
          borderColor: themeVars.color.background[300],
        },
      },
      primary: {
        backgroundColor: themeVars.color.primary.default,
        border: `1px solid ${themeVars.color.primaryPalette[700]}`,
        ":hover": {
          backgroundColor: themeVars.color.primary.hover,
        },
        ":active": {
          backgroundColor: themeVars.color.primary.active,
          borderColor: themeVars.color.primary.hover,
        },
      },
      secondary: {
        backgroundColor: themeVars.color.secondary.default,
        border: `1px solid ${themeVars.color.secondaryPalette[700]}`,
        ":hover": {
          backgroundColor: themeVars.color.secondary.hover,
        },
        ":active": {
          backgroundColor: themeVars.color.secondary.active,
          borderColor: themeVars.color.secondary.hover,
        },
      },
      custom: {
        backgroundColor: customColorDefault,
        border: `1px solid ${customColorBorder}`,
        ":hover": {
          backgroundColor: customColorHover,
        },
        ":active": {
          backgroundColor: customColorActive,
          borderColor: customColorActive,
        },
      },
    },
    borderRadius: {
      default: {
        borderRadius: "0.5rem",
      },
      rounded: {
        borderRadius: "50%",
      },
    },
    padding: {
      default: {
        padding: "0.5rem 0.875rem",
      },
      rounded: {
        padding: "0.5rem",
      },
    },
  },
  defaultVariants: {
    color: "default",
    borderRadius: "default",
    padding: "default",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
