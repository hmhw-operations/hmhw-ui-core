import { useState, useEffect } from "react";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/variables.css";
import { BaseComponentProps, Size } from "../../types";
import style from "./select.module.css";
import { Icon } from "../icon";

export type SelectOption = {
  value: string;
  text: string;
};

export type SelectOptionGroup = {
  label: string;
  options: SelectOption[];
};

export type SelectProps = BaseComponentProps & {
  options?: SelectOption[];
  optionGroups?: SelectOptionGroup[];
  label: string;
  value?: string;
  placeholder?: string;
  helperText?: string;
  size?: Size;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ id, key, title, options, optionGroups, label, value, placeholder, helperText, size = "medium", disabled, onChange }: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState(value || "");

  // Add this useEffect to sync the internal state with the value prop
  useEffect(() => {
    setSelectedValue(value || "");
  }, [value]);

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
        <div className={`${style.field}`}>
          <select title={title || label} id={id} key={key || ""} className={`${style.xxx}`} value={selectedValue} onChange={handleChange} disabled={disabled}>
            <option value={selectOption} hidden={true}>
              {selectOption}
            </option>
            {options &&
              options.map((option) => (
                <option key={`option_${option.value}`} value={option.value}>
                  {option.text}
                </option>
              ))}
            {optionGroups &&
              optionGroups.map((group, groupIndex) => (
                <optgroup key={`group_${groupIndex}`} label={group.label}>
                  {group.options.map((option) => (
                    <option key={`group_${groupIndex}_option_${option.value}`} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </optgroup>
              ))}
          </select>
          <Icon name="caret-double" />
        </div>
      </div>
      {helperText && <p className={`${style.description}`}>{helperText}</p>}
    </div>
  );
};

export default Select;
