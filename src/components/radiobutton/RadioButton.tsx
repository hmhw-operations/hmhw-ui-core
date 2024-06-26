// components/radiobutton/radiobutton.tsx
import React from "react";
import style from "./radiobutton.module.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/globals.css";

export type RadioButtonProps = {
  label?: string;
  id: string;
  name: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;

  value?: string | number;
  checked?: boolean;
};

const RadioButton: React.FC<RadioButtonProps> = ({ label, onChange, id, disabled, value, checked, ...props }) => {
  return (
    <div className={style.wrapper}>
      <input
        className={`${style.radio}`}
        type="radio"
        id={id}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e)}
        disabled={disabled}
        {...props}
      />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  );
};

export default RadioButton;
