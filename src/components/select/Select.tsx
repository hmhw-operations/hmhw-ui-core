import { useState } from "react";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import { Size } from "../../types";
import style from "./select.module.css";

export type SelectProps = {
  options: string[];
  label?: string;
  value?: string;
  helperText?: string;
  size?: Size;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ options, label, value, helperText, size = "medium", disabled, onChange }: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState(value || "");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onChange?.(event);
  };

  return (
    <>
      {label && <label>{label}</label>}
      <select
        className={`${style.select} ${style[size]}`}
        value={selectedValue}
        onChange={handleChange}
        disabled={disabled}
      >
        {options && options.map((option) => <option value={option}>{option}</option>)}
      </select>
      {helperText && <p>{helperText}</p>}
    </>
  );
};

export default Select;
