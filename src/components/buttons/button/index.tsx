import { button, ButtonVariants } from "./style.css";

export interface ButtonProps {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  variants: ButtonVariants;
  children: React.ReactNode;
  color?: string;
  backgroundColor?: string;
}

export default function Button({
  variants,
  leadingIcon,
  trailingIcon,
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
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}
