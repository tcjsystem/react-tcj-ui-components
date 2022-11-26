import {
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
} from "@vanilla-extract/css";
import { colorPaletteVars } from "./color-palette.css";

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

const colorThemeVars = {
  primary: colorPaletteVar,
  secondary: colorPaletteVar,
  text: colorPaletteVar,
  background: colorPaletteVar,
  shadow: colorPaletteVar,
  error: colorPaletteVar,
  warning: colorPaletteVar,
};

const themeVars = createGlobalThemeContract(
  {
    color: colorThemeVars,
    font: "",
  },
  (_, path) => ["tcj", ...path].join("-")
);

export const defaultThemeVars = {
  color: {
    text: colorPaletteVars.neutral,
    background: colorPaletteVars.zinc,
    primary: colorPaletteVars.indigo,
    secondary: colorPaletteVars.emerald,
    shadow: colorPaletteVars.neutral,
    error: colorPaletteVars.red,
    warning: colorPaletteVars.yellow,
  },
  font: "Pretendard Variable",
};
export const lightThemeVars = defaultThemeVars;

export const darkThemeVars = {
  color: {
    text: colorPaletteVars.neutralReverse,
    background: colorPaletteVars.neutralReverse,
    primary: colorPaletteVars.indigo,
    secondary: colorPaletteVars.emerald,
    shadow: colorPaletteVars.allBlack,
    error: colorPaletteVars.red,
    warning: colorPaletteVars.yellow,
  },
  font: "Pretendard Variable",
};

globalStyle("button", {
  all: "unset",
});

globalStyle(":root", {
  fontFamily: themeVars.font,
  boxSizing: "border-box",
});

createGlobalTheme('[data-theme="light"]', themeVars, lightThemeVars);

createGlobalTheme('[data-theme="dark"]', themeVars, darkThemeVars);

createGlobalTheme('[data-theme="custom"]', themeVars, lightThemeVars);

export { themeVars };
export type ColorPaletteType = typeof colorPaletteVars.amber;
export type ColorStatusType = typeof colorStatusVar;
export type ColorThemeVarsType = typeof colorThemeVars;
export type ThemeVarsType = typeof defaultThemeVars;
export type ThemeVarsColorKey = keyof ColorThemeVarsType;
