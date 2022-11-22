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
      fontWeight: "regular",
    }),
    {
      color: themeVars.color.text[100],
      cursor: "pointer",
      userSelect: "none",
      WebkitUserSelect: "none",
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
        backgroundColor: themeVars.color.primaryStatus.default,
        border: `1px solid ${themeVars.color.primary[700]}`,
        ":hover": {
          backgroundColor: themeVars.color.primaryStatus.hover,
        },
        ":active": {
          backgroundColor: themeVars.color.primaryStatus.active,
          borderColor: themeVars.color.primaryStatus.hover,
        },
      },
      secondary: {
        backgroundColor: themeVars.color.secondaryStatus.default,
        border: `1px solid ${themeVars.color.secondary[700]}`,
        ":hover": {
          backgroundColor: themeVars.color.secondaryStatus.hover,
        },
        ":active": {
          backgroundColor: themeVars.color.secondaryStatus.active,
          borderColor: themeVars.color.secondaryStatus.hover,
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
      default: {},
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
