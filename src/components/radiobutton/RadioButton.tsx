// components/radiobutton/radiobutton.tsx
import React, { MouseEventHandler } from "react";
import style from "./radiobutton.module.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/globals.css";

export type RadioButtonProps = {
  label?: string;
  id: string;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLInputElement>;
};

const RadioButton: React.FC<RadioButtonProps> = ({ label, onClick, id, disabled, ...props }) => {
  return (
    <div className={style.wrapper}>
      <input className={`${style.radio}`} type="radio" id={id} {...props} onClick={onClick} disabled={disabled} />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default RadioButton;
