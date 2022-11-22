import { style } from "@vanilla-extract/css";
import { themeVars } from "../../../core/styles/theme.css";

export const container = style({
  width: "16rem",
  height: "100vh",
  position: "sticky",
  top: 0,
  backgroundColor: themeVars.color.background[100],
  borderRight: `1px solid ${themeVars.color.background[200]}`,
});

export const header = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "cneter",
  fontWeight: 500,
  fontSize: "1rem",
  padding: "1rem",
  height: "2rem",
});
