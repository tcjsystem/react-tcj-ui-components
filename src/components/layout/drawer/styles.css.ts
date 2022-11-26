import { style } from "@vanilla-extract/css";

export const drawer = style({
  position: "fixed",
  top: 0,
});

export const backdrop = style({
  height: "100vh",
  width: "100%",
  position: "fixed",
  left: 0,
  top: 0,
  zIndex: 0,
  backgroundColor: "rgba(0, 0, 0, 0.25)",
});
