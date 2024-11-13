import { useState } from "react";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import { Size } from "../../types";
import style from "./select.module.css";

import { Icon } from "../icon";

export type SelectProps = {
  options: string[];
  label: string;
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
    <div className={`${style.select} ${style[size]}`}>
      {label && <label className={`${style.label} `}>{label}</label>}
      <div className={`${style.wrapper}`}>
        <select className={`${style.xxx}`} value={selectedValue} onChange={handleChange} disabled={disabled}>
          {options && options.map((option) => <option value={option}>{option}</option>)}
        </select>
        <Icon name="caret-double" />
      </div>
      {helperText && <p>{helperText}</p>}
    </div>
  );
};

export default Select;
