import { useThemeMode } from "../../core/hooks/useThemeMode";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme, changeThemeMode } = useThemeMode();
  return (
    <div className={theme}>
      <button onClick={() => changeThemeMode("dark")}>다크모드</button>
      <button onClick={() => changeThemeMode("light")}>라이트모드</button>
      {children}
    </div>
  );
}
