import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useTheme } from "../../../../core/hooks/useTheme";
import { ColorPaletteType } from "../../../../core/styles/theme.css";
import {
  button,
  ButtonVariants,
  customColorActive,
  customColorBorder,
  customColorDefault,
  customColorHover,
} from "../button/style.css";

export interface IconButtonProps {
  icon?: React.ReactNode;
  variants: ButtonVariants;
  color?: string;
  customColorPalette?: ColorPaletteType;
}

export default function IconButton({
  icon,
  variants,
  color,
  customColorPalette,
}: IconButtonProps) {
  const { theme } = useTheme();
  return (
    <button
      className={button({
        ...variants,
        borderRadius: "rounded",
        padding: "rounded",
      })}
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
    >
      {icon}
    </button>
  );
}
