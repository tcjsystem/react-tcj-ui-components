import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";
import { colorPaletteVars } from "./colorPalette.css";

const colorPaletteVar = {
  50: "",
  100: "",
  200: "",
  300: "",
  400: "",
  500: "",
  600: "",
  700: "",
  800: "",
  900: "",
};

const colorStatusVar = {
  default: "",
  hover: "",
  active: "",
};

const themeVars = createGlobalThemeContract(
  {
    color: {
      primaryPalette: colorPaletteVar,
      secondaryPalette: colorPaletteVar,
      primary: colorStatusVar,
      secondary: colorStatusVar,
      shadow: {
        default: "",
        hover: "",
      },
      text: {
        50: "",
        100: "",
        200: "",
        300: "",
        400: "",
        500: "",
        600: "",
        700: "",
        800: "",
        900: "",
      },
      background: {
        50: "",
        100: "",
        200: "",
        300: "",
        400: "",
        500: "",
        600: "",
        700: "",
        800: "",
        900: "",
      },
    },
  },
  (_, path) => ["tcj", ...path].join("-")
);

createGlobalTheme('[data-theme="light"]', themeVars, {
  color: {
    text: colorPaletteVars.neutral,
    background: colorPaletteVars.neutral,
    primaryPalette: colorPaletteVars.indigo,
    secondaryPalette: colorPaletteVars.emerald,
    primary: {
      default: themeVars.color.primaryPalette[600],
      hover: themeVars.color.primaryPalette[500],
      active: themeVars.color.primaryPalette[400],
    },
    secondary: {
      default: themeVars.color.secondaryPalette[600],
      hover: themeVars.color.secondaryPalette[500],
      active: themeVars.color.secondaryPalette[400],
    },
    shadow: {
      default: `0 2px 4px 0 ${themeVars.color.background[400]}`,
      hover: `0 2px 4px 0 ${themeVars.color.background[500]}`,
    },
  },
});

createGlobalTheme('[data-theme="dark"]', themeVars, {
  color: {
    text: colorPaletteVars.neutralReverse,
    background: colorPaletteVars.neutral,
    primaryPalette: colorPaletteVars.indigo,
    secondaryPalette: colorPaletteVars.emerald,
    primary: {
      default: themeVars.color.primaryPalette[500],
      hover: themeVars.color.primaryPalette[400],
      active: themeVars.color.primaryPalette[300],
    },
    secondary: {
      default: themeVars.color.secondaryPalette[500],
      hover: themeVars.color.secondaryPalette[400],
      active: themeVars.color.secondaryPalette[300],
    },
    shadow: {
      default: `0 2px 4px 0 ${themeVars.color.background[900]}`,
      hover: `0 4px 8px 0 ${themeVars.color.background[900]}`,
    },
  },
});

export { themeVars };
export type ColorPaletteType = typeof colorPaletteVar;
