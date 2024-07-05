// components/button/button.tsx
import React, { MouseEventHandler } from "react";
import style from "./button.module.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/globals.css";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive";
export type ButtonSize = "small" | "medium" | "large";

export type ButtonProps = {
  text: string;
  iconPosition?: "leading" | "trailing";
  size?: ButtonSize;
  variant?: ButtonVariant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  variant = "primary",
  text,
  onClick,
  iconPosition = "leading",
  icon,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`${style.button} ${style[variant]} ${style[size]} ${style[iconPosition]}`}
      type="button"
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && icon} {text}
    </button>
  );
};

export default Button;
