import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useTheme } from "../../../core/hooks/useTheme";
import { themeVars, ThemeVarsType } from "../../../core/styles/theme.css";

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: ThemeVarsType;
}

export default function ThemeProvider({ children, theme }: ThemeProviderProps) {
  const { currentTheme } = useTheme();
  return (
    <div
      className={currentTheme}
      style={theme && assignInlineVars(themeVars, theme)}
    >
      {children}
    </div>
  );
}
