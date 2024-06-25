// components/button/button.tsx
import React, { MouseEventHandler } from "react";
import style from "./button.module.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/globals.css";

export type ButtonProps = {
  text?: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "tertiary" | "destructive";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ text, size = "small", variant = "primary", onClick, ...props }) => {
  return (
    <button className={`${style.button} ${style[variant]} ${style[size]}`} type="button" onClick={onClick} {...props}>
      {text}
    </button>
  );
};

export default Button;
