import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useThemeMode } from "../../hooks/useThemeMode";
import { colorPaletteVars } from "../../styles/colorPalette.css";
import { themeVars } from "../../styles/theme.css";

interface ThemeProviderProps {
  children: React.ReactNode;
  primaryColor?: string;
}

export default function ThemeProvider({
  children,
  primaryColor,
}: ThemeProviderProps) {
  const { theme } = useThemeMode();
  return (
    <div
      className={theme}
      style={assignInlineVars(themeVars, {
        color: {
          primary: {
            default: (primaryColor ??= ""),
          },
          secondary: {
            default: "",
          },
          text: colorPaletteVars.amber,
          background: colorPaletteVars.fuchsia,
          shadow: {
            default: "",
            hover: "",
          },
        },
      })}
    >
      {children}
    </div>
  );
}
