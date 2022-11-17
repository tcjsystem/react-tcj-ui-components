import { addons } from "@storybook/addons";
import { SHARED_STATE_CHANGED, GLOBALS_UPDATED } from "@storybook/core-events";
import { useEffect } from "react";

const LIGHT_THEME_VALUE = "#FAFAFA";
const DARK_THEME_VALUE = "#262626";

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
  useEffect(() => {
    console.log(document.documentElement.getAttribute("data-theme"));
    if (document.documentElement.getAttribute("data-theme") === null) {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);
  return <Story {...context} />;
};

let channel = addons.getChannel();
const storyListener = (args) => {
  let currentThemeValue = args.globals.backgrounds.value;
  if (currentThemeValue) {
    let prevTheme = document.documentElement.getAttribute("data-theme");
    if (prevTheme === "dark" && currentThemeValue === LIGHT_THEME_VALUE) {
      document.documentElement.setAttribute("data-theme", "light");
    }
    if (prevTheme === "light" && currentThemeValue === DARK_THEME_VALUE) {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }
};
function setupBackgroundListener() {
  channel.removeListener(GLOBALS_UPDATED, storyListener);
  channel.addListener(GLOBALS_UPDATED, storyListener);
}

setupBackgroundListener();

export const decorators = [withThemeProvider];
