// components/button/button.tsx
import React, { MouseEventHandler } from "react";
import style from "./button.module.css";
import "../../styles/globals.css";

export type ButtonProps = {
  text?: string;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ text, size = "small", onClick, ...props }) => {
  return (
    <button className={`${style.button} ${style.primary} ${style[size]}`} type="button" onClick={onClick} {...props}>
      {text} - {size}
    </button>
  );
};

export default Button;
