import { setElementVars } from "@vanilla-extract/dynamic";
import { atom, useAtom } from "jotai";
import { useEffect, useState } from "react";
import { match } from "ts-pattern";
import { ColorPalettes, colorPaletteVars } from "../styles/colorPalette.css";
import {
  darkThemeVars,
  lightThemeVars,
  themeVars,
  ThemeVarsColorKey,
  ThemeVarsType,
} from "../styles/theme.css";

const DATA_THEME = "data-theme";
const DATA_CUSTOM_THEME = "data-custom-theme";

export type ThemeType = "light" | "dark" | "custom";

export const currentThemeAtom =
  atom<"light" | "dark" | "custom" | undefined>(undefined);

export const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useAtom(currentThemeAtom);
  const [currentCustomTheme, setCurrentCustomTheme] = useState<ThemeVarsType>();

  useEffect(() => {
    console.log("use effect called");
    let localStoragedTheme: ThemeType = match(localStorage.getItem(DATA_THEME))
      .with("light", (value) => value)
      .with("dark", (value) => value)
      .with("custom", (value) => {
        const localStorageCustomTheme = localStorage.getItem(DATA_CUSTOM_THEME);
        if (!localStorageCustomTheme) {
          localStorage.setItem(DATA_THEME, "light");
          return "light";
        } else {
          const parsedTheme = JSON.parse(
            localStorageCustomTheme
          ) as ThemeVarsType;
          setElementVars(document.documentElement, themeVars, parsedTheme);
          setCurrentCustomTheme(parsedTheme);
          return value;
        }
      })
      .otherwise(() => {
        localStorage.setItem(DATA_THEME, "light");
        return "light";
      });
    document.documentElement.setAttribute(DATA_THEME, localStoragedTheme);
    setCurrentTheme(localStoragedTheme);
  }, []);

  const changeCurrentTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    localStorage.setItem(DATA_THEME, theme);
    document.documentElement.setAttribute(DATA_THEME, theme);
    setElementVars(
      document.documentElement,
      themeVars,
      match(theme)
        .with("light", () => lightThemeVars)
        .with("dark", () => darkThemeVars)
        .with("custom", () => {
          if (currentCustomTheme) {
            return currentCustomTheme;
          }
          const localStorageCustomTheme =
            localStorage.getItem(DATA_CUSTOM_THEME);
          if (!localStorageCustomTheme) {
            return lightThemeVars;
          } else {
            const parsedTheme = JSON.parse(
              localStorageCustomTheme
            ) as ThemeVarsType;
            setCurrentCustomTheme(parsedTheme);
            localStorage.setItem(
              DATA_CUSTOM_THEME,
              JSON.stringify(lightThemeVars)
            );
            return parsedTheme;
          }
        })
        .exhaustive()
    );
  };

  const changeCustomThemeColorProperty = (
    key: ThemeVarsColorKey,
    value: ColorPalettes
  ) => {
    if (currentTheme !== "custom") return;
    let localStoragedCustomTheme = localStorage.getItem(DATA_CUSTOM_THEME);
    if (!localStoragedCustomTheme) {
      return;
    } else {
      let parsedCustomTheme: ThemeVarsType = JSON.parse(
        localStoragedCustomTheme
      );
      parsedCustomTheme.color[key] = colorPaletteVars[value];
      localStorage.setItem(
        DATA_CUSTOM_THEME,
        JSON.stringify(parsedCustomTheme)
      );
      setCurrentCustomTheme(parsedCustomTheme);
      setElementVars(document.documentElement, themeVars, parsedCustomTheme);
    }
  };

  return {
    currentTheme,
    changeCurrentTheme,
    changeCustomThemeColorProperty,
    currentCustomTheme,
  };
};
