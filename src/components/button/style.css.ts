import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { fontVars } from "../theme/size.css";
import { themeVars } from "../theme/theme.css";
import { transitionVars } from "../theme/transition.css";

export const button = recipe({
  base: {
    fontFamily: "Pretendard",
    color: themeVars.color.text[100],
    borderRadius: "0.625rem",
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
  },
  defaultVariants: {
    color: "primary",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
