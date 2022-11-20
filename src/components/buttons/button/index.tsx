import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useThemeMode } from "../../../core/hooks/useThemeMode";
import { colorPaletteVars } from "../../../core/styles/colorPalette.css";
import { ColorPaletteType } from "../../../core/styles/theme.css";
import {
  button,
  ButtonVariants,
  customColorActive,
  customColorBorder,
  customColorDefault,
  customColorHover,
} from "./style.css";

export interface ButtonProps {
  children: React.ReactNode;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  variants?: ButtonVariants;
  customColorPalette?: ColorPaletteType;
  color?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  leadingIcon,
  trailingIcon,
  variants,
  customColorPalette,
  onClick,
}: ButtonProps) {
  const { theme } = useThemeMode();
  console.log(theme);
  return (
    <button
      className={button(variants)}
      style={
        variants?.color === "custom" && customColorPalette
          ? assignInlineVars({
              [customColorBorder]:
                customColorPalette[theme === "light" ? 700 : 600],
              [customColorDefault]:
                customColorPalette[theme === "light" ? 600 : 500],
              [customColorHover]:
                customColorPalette[theme === "light" ? 500 : 400],
              [customColorActive]:
                customColorPalette[theme === "light" ? 400 : 300],
            })
          : undefined
      }
      onClick={onClick}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}
