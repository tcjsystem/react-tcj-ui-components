import { addons } from "@storybook/addons";
import { GLOBALS_UPDATED } from "@storybook/core-events";
import React from "react";
import { useEffect } from "react";
import { useTheme } from "../src/core/hooks/useTheme";
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
  docs: {
    iframeHeight: 2000,
  },
};

const withThemeProvider = (Story, context) => {
  useTheme();
  return <Story {...context} />;
};

let channel = addons.getChannel();
const storyListener = (args) => {
  let currentThemeValue = args.globals.backgrounds.value;
  // if (currentThemeValue) {
  //   let prevTheme = document;
  //   document.getElementById("root").getAttribute("data-theme");

  //   if (prevTheme === "dark" && currentThemeValue === LIGHT_THEME_VALUE) {
  //     document;
  //     document.getElementById("root").setAttribute("data-theme", "light");
  //   }
  //   if (prevTheme === "light" && currentThemeValue === DARK_THEME_VALUE) {
  //     document;
  //     document.getElementById("root").setAttribute("data-theme", "dark");
  //   }
  // }
};
function setupBackgroundListener() {
  channel.removeListener(GLOBALS_UPDATED, storyListener);
  channel.addListener(GLOBALS_UPDATED, storyListener);
}

setupBackgroundListener();

export const decorators = [withThemeProvider];
