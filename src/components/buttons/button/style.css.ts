import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { fontVars } from "../../theme/size.css";
import { themeVars } from "../../theme/theme.css";
import { transitionVars } from "../../theme/transition.css";

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
    boxShadow: themeVars.color.shadow.default,
    ":hover": {
      boxShadow: themeVars.color.shadow.hover,
    },
  },
  variants: {
    color: {
      primary: {
        backgroundColor: themeVars.color.primary.default,
      },
      secondary: {
        backgroundColor: themeVars.color.secondary.default,
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
    color: "primary",
    borderRadius: "default",
    padding: "default",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
