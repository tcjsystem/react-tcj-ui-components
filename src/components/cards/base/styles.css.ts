import { style } from "@vanilla-extract/css";
import { themeVars } from "../../../core/styles/theme.css";

export const container = style({
  backgroundColor: themeVars.color.background[100],
  borderRadius: "0.5rem",
  border: `1px solid ${themeVars.color.background[200]}`,
  boxShadow: themeVars.color.shadow.default,
  height: "100%",
});

export const header = style({
  padding: "1rem",
  borderBottom: `1px solid ${themeVars.color.background[300]}`,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const title = style({
  fontWeight: 500,
  color: themeVars.color.text[700],
});

export const description = style({
  marginTop: "0.5rem",
  fontWeight: 300,
  fontSize: "0.75rem",
  color: themeVars.color.text[500],
});

export const noResult = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "8rem",
  fontWeight: 200,
  color: themeVars.color.text[200],
  overflow: "hidden",
});

export const content = style({
  color: themeVars.color.text[500],
});
