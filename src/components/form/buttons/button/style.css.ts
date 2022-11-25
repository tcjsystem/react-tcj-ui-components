import { createVar } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { sprinkles } from "../../../../core/styles/sprinkles/index.css";
import { themeVars } from "../../../../core/styles/theme.css";
import { transitionVars } from "../../../../core/styles/transition.css";
export const customColorDefault = createVar();
export const customColorBorder = createVar();
export const customColorHover = createVar();
export const customColorActive = createVar();

export const button = recipe({
  base: [
    sprinkles({
      fontSize: "button",
      paddingX: "0.875",
      paddingY: "0.5",
      display: "flex",
      placeItems: "center",
      gap: "0.5",
      fontWeight: "medium",
    }),
    {
      color: themeVars.color.text[100],
      cursor: "pointer",
      userSelect: "none",
      WebkitUserSelect: "none",
      transition: transitionVars.short,
      boxSizing: "border-box",
      boxShadow: `0 2px 4px ${themeVars.color.shadow[300]}`,
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
      ":hover": {
        boxShadow: `0 4px 8px ${themeVars.color.shadow[300]}`,
      }
    },
  ],
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
        border: `1px solid ${themeVars.color.primary[700]}`,
        backgroundColor: themeVars.color.primary[600],
        ":hover": {
          backgroundColor: themeVars.color.primary[500],
        },
        ":active": {
          backgroundColor: themeVars.color.primary[400],
          borderColor: themeVars.color.primary[500],
        },
      },
      secondary: {
        border: `1px solid ${themeVars.color.secondary[700]}`,
        backgroundColor: themeVars.color.secondary[600],
        ":hover": {
          backgroundColor: themeVars.color.secondary[500],
        },
        ":active": {
          backgroundColor: themeVars.color.secondary[400],
          borderColor: themeVars.color.secondary[500],
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
        borderRadius: "0.625rem",
      },
      rounded: {
        borderRadius: "50%",
      },
    },
    padding: {
      default: {},
      rounded: {
        padding: "0.5rem",
      },
    },
    width: {
      full: {
        width: "100%"
      },
      contentFit: {}
    }
  },
  defaultVariants: {
    color: "default",
    borderRadius: "default",
    padding: "default",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
