import { globalStyle } from "@vanilla-extract/css";
import { assignInlineVars, setElementVars } from "@vanilla-extract/dynamic";
import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import { match } from "ts-pattern";
import { colorPaletteVars } from "../styles/colorPalette.css";
import { themeVars } from "../styles/theme.css";

export type ThemeType = "light" | "dark" | "custom";

export const currentThemeAtom = atom<"light" | "dark" | "custom">("light");

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useAtom(currentThemeAtom);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      match(localStorage.getItem("data-theme"))
        .with("light", () => "light")
        .with("dark", () => "dark")
        .otherwise(() => "light")
    );
    // setElementVars(document.documentElement, themeVars, {
    //   color: {
    //     background: colorPaletteVars.amber,
    //     text: colorPaletteVars.red,
    //     primary: colorPaletteVars.emerald,
    //     secondary: colorPaletteVars.gray,
    //     primaryStatus: {
    //       active: colorPaletteVars.emerald[300],
    //       default: colorPaletteVars.emerald[500],
    //       hover: colorPaletteVars.emerald[400],
    //     },
    //     secondaryStatus: {
    //       active: colorPaletteVars.emerald[100],
    //       default: colorPaletteVars.emerald[200],
    //       hover: colorPaletteVars.emerald[300],
    //     },
    //     shadow: {
    //       active: colorPaletteVars.emerald[100],
    //       default: colorPaletteVars.emerald[200],
    //       hover: colorPaletteVars.emerald[300],
    //     },
    //   },
    // });
  }, []);

  const changeCurrentTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    localStorage.setItem("data-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return {
    currentTheme,
    changeCurrentTheme,
  };
};
