import {
  createGlobalTheme,
  createGlobalThemeContract,
  createTheme,
  createThemeContract,
  globalStyle,
} from "@vanilla-extract/css";
import { string } from "ts-pattern/dist/patterns";
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

const colorThemeVars = {
  primary: colorPaletteVar,
  secondary: colorPaletteVar,
  text: colorPaletteVar,
  background: colorPaletteVar,
  shadow: colorPaletteVar,
};

const themeVars = createGlobalThemeContract(
  {
    color: colorThemeVars,
    font: "",
  },
  (_, path) => ["tcj", ...path].join("-")
);

globalStyle("button", {
  all: "unset",
});

export const lightThemeVars = {
  color: {
    text: colorPaletteVars.neutral,
    background: colorPaletteVars.neutral,
    primary: colorPaletteVars.indigo,
    secondary: colorPaletteVars.emerald,
    shadow: colorPaletteVars.neutral,
  },
  font: "Pretendard",
};

export const darkThemeVars = {
  color: {
    text: colorPaletteVars.neutralReverse,
    background: colorPaletteVars.neutralReverse,
    primary: colorPaletteVars.indigo,
    secondary: colorPaletteVars.emerald,
    shadow: colorPaletteVars.allBlack,
  },
  font: "Pretendard",
};

globalStyle(":root", {
  fontFamily: themeVars.font,
});

createGlobalTheme('[data-theme="light"]', themeVars, lightThemeVars);

createGlobalTheme('[data-theme="dark"]', themeVars, darkThemeVars);

createGlobalTheme('[data-theme="custom"]', themeVars, lightThemeVars);
export { themeVars };
export type ColorPaletteType = typeof colorPaletteVars.amber;
export type ColorStatusType = typeof colorStatusVar;
export type ColorThemeVarsType = typeof colorThemeVars;
export type ThemeVarsType = typeof themeVars;
export type ThemeVarsColorKey = keyof ColorThemeVarsType;
