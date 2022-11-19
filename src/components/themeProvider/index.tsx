import { useThemeMode } from "../../core/hooks/useThemeMode";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useThemeMode();
  return <div className={theme}>{children}</div>;
}
