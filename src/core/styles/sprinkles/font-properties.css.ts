import { defineProperties } from "@vanilla-extract/sprinkles";

export const fontProperties = defineProperties({
  properties: {
    fontSize: {
      h1: { fontSize: "6rem", letterSpacing: -1.5, fontWeight: 300 },
      h2: { fontSize: "4rem", letterSpacing: -0.5, fontWeight: 300 },
      h3: { fontSize: "3rem", letterSpacing: 0, fontWeight: 400 },
      h4: { fontSize: "2rem", letterSpacing: 0.25, fontWeight: 400 },
      h5: { fontSize: "1.5rem", letterSpacing: 0, fontWeight: 400 },
      h6: { fontSize: "1.25rem", letterSpacing: 0.15, fontWeight: 500 },
      subtitle1: { fontSize: "1rem", letterSpacing: 0.15, fontWeight: 400 },
      subtitle2: { fontSize: "0.875rem", letterSpacing: 0.1, fontWeight: 500 },
      body1: { fontSize: "1rem", letterSpacing: 0.5, fontWeight: 400 },
      body2: { fontSize: "0.875rem", letterSpacing: 0.25, fontWeight: 400 },
      button: { fontSize: "0.875rem", letterSpacing: 1, fontWeight: 400 },
      caption: { fontSize: "0.75rem", letterSpacing: 0.4, fontWeight: 400 },
      overline: { fontSize: "0.625rem", letterSpacing: 1.5, fontWeight: 400 },
    },
    fontWeight: {
      thin: 100,
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
  },
});
