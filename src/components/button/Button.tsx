// components/button/button.tsx
import React, { MouseEventHandler } from "react";
import style from "./button.module.css";
import "../../styles/globals.css";

export type ButtonProps = {
  text?: string;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ text, onClick, ...props }) => {
  return (
    <button className={`${style.button} ${style.primary}`} type="button" onClick={onClick} {...props}>
      {text}
    </button>
  );
};

export default Button;
