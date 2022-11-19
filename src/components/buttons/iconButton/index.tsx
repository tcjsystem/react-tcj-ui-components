import { button, ButtonVariants } from "../button/style.css";

export interface IconButtonProps {
  icon?: React.ReactNode;
  variants: ButtonVariants;
  color?: string;
  backgroundColor?: string;
}

export default function IconButton({
  icon,
  variants,
  color,
  backgroundColor,
}: IconButtonProps) {
  return (
    <button
      className={button({
        ...variants,
        borderRadius: "rounded",
        padding: "rounded",
      })}
      style={{ color, backgroundColor }}
    >
      {icon}
    </button>
  );
}
