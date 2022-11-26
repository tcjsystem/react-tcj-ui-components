import { style } from "@vanilla-extract/css";
import { themeVars } from "../../../../core/styles/theme.css";

export const container = style({
  border: "0 none",
  margin: 0,
  padding: 0,
  width: "max-content",
  display: "flex",
  borderRadius: "0.625rem",
  boxShadow: `0 2px 4px ${themeVars.color.shadow[300]}`,
});
