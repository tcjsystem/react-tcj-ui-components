import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useTheme } from "../../../../core/hooks/use-theme";
import { colorPaletteVars } from "../../../../core/styles/color-palette.css";
import { ColorPaletteType } from "../../../../core/styles/theme.css";
import {
  button,
  ButtonVariants,
  customColorActive,
  customColorBorder,
  customColorDefault,
  customColorHover,
} from "./styles.css";

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
  const { currentTheme } = useTheme();
  return (
    <button
      className={button(variants)}
      style={
        variants?.color === "custom" && customColorPalette
          ? assignInlineVars({
              [customColorBorder]:
                customColorPalette[currentTheme === "light" ? 700 : 600],
              [customColorDefault]:
                customColorPalette[currentTheme === "light" ? 600 : 500],
              [customColorHover]:
                customColorPalette[currentTheme === "light" ? 500 : 400],
              [customColorActive]:
                customColorPalette[currentTheme === "light" ? 400 : 300],
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
