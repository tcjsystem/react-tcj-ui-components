import { button, ButtonVariants } from "./style.css";

export interface ButtonProps {
  icon?: React.ReactNode;
  variants: ButtonVariants;
  children: React.ReactNode;
  color?: string;
  backgroundColor?: string;
}

export default function Button({
  icon,
  variants,
  children,
  color,
  backgroundColor,
}: ButtonProps) {
  return (
    <button
      className={button(variants)}
      style={{
        color,
        backgroundColor,
      }}
    >
      {icon}
      {children}
    </button>
  );
}
