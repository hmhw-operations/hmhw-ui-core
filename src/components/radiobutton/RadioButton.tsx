// components/radiobutton/radiobutton.tsx
import React from "react";
import style from "./radiobutton.module.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/globals.css";
import "../../styles/variables.css";
import { BaseComponentProps, Size } from "../../types";

export type RadioButtonProps = BaseComponentProps & {
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  checked?: boolean;
  size?: Size;
};

const RadioButton: React.FC<RadioButtonProps> = ({ label, onChange, id, title, disabled, value, checked, size, ...props }) => {
  return (
    <div className={`${style.input_item} ${style.radio} ${size ? style[size] : "medium"}`}>
      <input className={`${style.radio}`} type="radio" id={id} title={title} value={value} checked={checked} onChange={(e) => onChange(e)} disabled={disabled} {...props} />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default RadioButton;
