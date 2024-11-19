import { useState } from "react";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import { BaseComponentProps, Size } from "../../types";
import style from "./select.module.css";

import { Icon } from "../icon";

export type SelectProps = BaseComponentProps & {
  options: string[];
  label: string;
  value?: string;
  placeholder?: string;
  defaultValue?: string;
  helperText?: string;
  size?: Size;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ id, key, title, options, label, value, placeholder, defaultValue, helperText, size = "medium", disabled, onChange }: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState(value || "");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onChange?.(event);
  };

  const defaultPlaceholder = "Select from the list";
  const selectOption = placeholder || defaultPlaceholder;

  return (
    <div className={`${style.select} ${style[size]}`}>
      {label && <label className={`${style.label} `}>{label}</label>}
      <div className={`${style.wrapper}`}>
        <select
          title={title || label}
          id={id}
          key={key || ''}
          className={`${style.xxx}`}
          defaultValue={defaultValue || ''}
          value={selectedValue}
          onChange={handleChange}
          disabled={disabled}
        >
          {<option value={selectOption} hidden={true}>{selectOption}</option>}
          {options && options.map((option) =>
            <option key={`option_${option}`} value={option} >{option}</option>
          )}
        </select>
        <Icon name="caret-double" />
      </div>
      {helperText && <p>{helperText}</p>}
    </div >
  );
};

export default Select;
