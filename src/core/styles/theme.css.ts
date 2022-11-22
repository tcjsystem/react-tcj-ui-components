import {
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
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

const colorVar = {
  primary: colorPaletteVar,
  secondary: colorPaletteVar,
  text: colorPaletteVar,
  background: colorPaletteVar,
  primaryStatus: colorStatusVar,
  secondaryStatus: colorStatusVar,
  shadow: colorStatusVar,
};

const themeVars = createGlobalThemeContract(
  {
    color: colorVar,
  },
  (_, path) => ["tcj", ...path].join("-")
);

globalStyle("button", {
  all: "unset",
});

globalStyle(":root", {
  fontFamily: "pretendard",
});

createGlobalTheme('[data-theme="light"]', themeVars, {
  color: {
    text: colorPaletteVars.neutral,
    background: colorPaletteVars.neutral,
    primary: colorPaletteVars.indigo,
    secondary: colorPaletteVars.emerald,
    primaryStatus: {
      default: themeVars.color.primary[600],
      hover: themeVars.color.primary[500],
      active: themeVars.color.primary[400],
    },
    secondaryStatus: {
      default: themeVars.color.secondary[600],
      hover: themeVars.color.secondary[500],
      active: themeVars.color.secondary[400],
    },
    shadow: {
      default: themeVars.color.background[400],
      hover: themeVars.color.background[500],
      active: themeVars.color.background[600],
    },
  },
});

createGlobalTheme('[data-theme="dark"]', themeVars, {
  color: {
    text: colorPaletteVars.neutralReverse,
    background: colorPaletteVars.neutralReverse,
    primary: colorPaletteVars.indigo,
    secondary: colorPaletteVars.emerald,
    primaryStatus: {
      default: themeVars.color.primary[500],
      hover: themeVars.color.primary[400],
      active: themeVars.color.primary[300],
    },
    secondaryStatus: {
      default: themeVars.color.secondary[500],
      hover: themeVars.color.secondary[400],
      active: themeVars.color.secondary[300],
    },
    shadow: {
      default: colorPaletteVars.black,
      hover: colorPaletteVars.black,
      active: colorPaletteVars.black,
    },
  },
});

export { themeVars };
export type ColorPaletteType = typeof colorPaletteVar;
export type ColorStatusType = typeof colorStatusVar;
export type ThemeVarsType = typeof themeVars;
