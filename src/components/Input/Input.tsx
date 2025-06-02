import { FC, useEffect } from "react";
import style from "./input.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/variables.css";
import { sanitizeForId } from "../../utils";
import { BaseComponentProps, LabelPosition, Size } from "../../types";
import { Icon } from "../icon";
import React from "react";

/** Props for the Input */
export type InputProps = BaseComponentProps & {
  placeholder?: string;
  labelPosition?: LabelPosition;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChanged?: (value: string) => void;
  label?: string;
  value: string;
  helperText?: string;
  unit?: string;
  error?: {
    message?: string;
    hasError?: boolean;
  };
  size?: Size;
};

const Input: FC<
  InputProps &
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
> = ({
  placeholder,
  unit,
  onChange,
  onChanged,
  onBlur,
  label,
  labelPosition = "top",
  error,
  id,
  name,
  helperText,
  disabled,
  size = "medium",
  ...props
}) => {
  const { value, type } = props;
  const [currentValue, setCurrentValue] = React.useState(value);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const hasError = error?.hasError;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event);
    }
    if (onChanged && currentValue !== value) {
      onChanged(currentValue);
    }
  };

  return (
    <div
      className={`${style.input} ${labelPosition === "left" && style.horizontal} ${hasError && style.error} ${style[size]}`}
    >
      {label && (
        <label className={`${style.label}`} htmlFor={sanitizeForId(id)}>
          {label}
        </label>
      )}
      <div className={`${style.wrapper}`}>
        <div className={`${style.field}`}>
          <input
            type={type}
            name={name}
            id={sanitizeForId(id)}
            placeholder={placeholder}
            value={currentValue}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={disabled}
          />
          {hasError && <Icon name="info" />}
          {unit && <div className={`${style.unit}`}>{unit}</div>}
        </div>
        {helperText && <p className={`${style.description}`}>{helperText}</p>}
        {error?.message && (
          <p className={`${style["errormessage"]}`}>{error.message}</p>
        )}
      </div>
    </div>
  );
};

export default Input;
