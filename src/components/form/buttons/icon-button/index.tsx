import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useTheme } from "../../../../core/hooks/use-theme";
import { ColorPaletteType } from "../../../../core/styles/theme.css";
import {
  button,
  ButtonVariants,
  customColorActive,
  customColorBorder,
  customColorDefault,
  customColorHover,
} from "../button/styles.css";

export interface IconButtonProps {
  icon?: React.ReactNode;
  variants: ButtonVariants;
  customColorPalette?: ColorPaletteType;
}

export default function IconButton({
  icon,
  variants,
  customColorPalette,
}: IconButtonProps) {
  const { currentTheme } = useTheme();
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
    >
      {icon}
    </button>
  );
}
