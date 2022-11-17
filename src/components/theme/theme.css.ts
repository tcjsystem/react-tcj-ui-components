import {
  createGlobalTheme,
  createGlobalThemeContract,
} from "@vanilla-extract/css";

export const themeVars = createGlobalThemeContract(
  {
    color: {
      primary: {
        default: "",
      },
      secondary: {
        default: "",
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
    primary: {
      default: "#6366F1",
    },
    secondary: {
      default: "#14b8a6",
    },
    text: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
    background: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
  },
});

createGlobalTheme('[data-theme="dark"]', themeVars, {
  color: {
    primary: {
      default: "#818CF8",
    },
    secondary: {
      default: "#2dd4bf",
    },
    text: {
      50: "#171717",
      100: "#262626",
      200: "#404040",
      300: "#525252",
      400: "#737373",
      500: "#A3A3A3",
      600: "#D4D4D4",
      700: "#E5E5E5",
      800: "#F5F5F5",
      900: "#FAFAFA",
    },
    background: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#E5E5E5",
      300: "#D4D4D4",
      400: "#A3A3A3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
    },
  },
});
