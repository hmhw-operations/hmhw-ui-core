// components/button/button.tsx
import React, { MouseEventHandler } from "react";
import style from "./button.module.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/globals.css";

export type ButtonProps = {
  text: string;
  iconPosition?: "leading" | "trailing";
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "tertiary" | "destructive";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  size = "small",
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
