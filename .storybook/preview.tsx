import { addons } from "@storybook/addons";
import { GLOBALS_UPDATED, UPDATE_GLOBALS } from "@storybook/core-events";
import React from "react";
import { useEffect } from "react";
import { ThemeType, useTheme } from "../src/core/hooks/use-theme";

const LIGHT_THEME_VALUE = "#FAFAFA";
const DARK_THEME_VALUE = "#404040";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: "light", value: LIGHT_THEME_VALUE },
      { name: "dark", value: DARK_THEME_VALUE },
    ],
  },
};

const withThemeProvider = (Story, context) => {
  const { currentTheme, changeCurrentTheme } = useTheme();
  useEffect(() => {
    console.log(currentTheme);
    if (currentTheme === "custom") {
      changeCurrentTheme("light");
    }
  }, []);
  useEffect(() => {
    let channel = addons.getChannel();
    storyListner(channel, changeCurrentTheme);
    return () => channel.removeListener(GLOBALS_UPDATED, storyListner);
  }, [currentTheme]);
  return <Story {...context} />;
};

const storyListner = (
  channel: any,
  changeCurrentTheme: (theme: ThemeType) => void
) => {
  channel.addListener(GLOBALS_UPDATED, (args) => {
    if (args.globals === undefined) {
      return;
    }
    let currentThemeValue = args.globals.backgrounds.value;
    if (currentThemeValue) {
      let prevTheme = document.documentElement?.getAttribute("data-theme");
      if (prevTheme === "dark" && currentThemeValue === LIGHT_THEME_VALUE) {
        changeCurrentTheme("light");
      }
      if (prevTheme === "light" && currentThemeValue === DARK_THEME_VALUE) {
        changeCurrentTheme("dark");
      }
      if (prevTheme === "custom") {
        changeCurrentTheme("light");
      }
    }
  });
  channel.emit(UPDATE_GLOBALS);
};

const appListner = (value: ThemeType) => {
  let channel = addons.getChannel();
  if (value) {
    channel.emit(UPDATE_GLOBALS, {
      globals: {
        backgrounds:
          value === "dark"
            ? {
                value: DARK_THEME_VALUE,
              }
            : {
                value: LIGHT_THEME_VALUE,
              },
      },
    });
  }
};

export const decorators = [withThemeProvider];
