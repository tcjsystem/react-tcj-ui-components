import { style } from "@vanilla-extract/css";
import { themeVars } from "../../../../../core/styles/theme.css";

export const row = style({
  padding: "1rem",
  selectors: {
    "&:not(:last-child)": {
      borderBottom: `1px solid ${themeVars.color.background[200]}`,
    },
  },
  display: "flex",
});

export const rowKey = style({
  fontSize: "0.875rem",
  fontWeight: 400,
  color: themeVars.color.text[400],
  minWidth: "8rem",
});

export const rowValue = style({
  fontSize: "0.875rem",
  fontWeight: 400,
  color: themeVars.color.text[600],
});
