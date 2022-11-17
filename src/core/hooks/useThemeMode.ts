import { useEffect, useState } from "react";
import { match } from "ts-pattern";

export const useThemeMode = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      match(localStorage.getItem("data-theme"))
        .with("light", () => "light")
        .with("dark", () => "dark")
        .otherwise(() => "light")
    );
  }, []);

  const changeThemeMode = (currentTheme: string) => {
    setTheme(currentTheme);
    localStorage.setItem("data-theme", currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  };

  return {
    theme,
    changeThemeMode,
  };
};
