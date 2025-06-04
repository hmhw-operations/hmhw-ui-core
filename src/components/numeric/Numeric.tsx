import { FC, useEffect } from "react";
import style from "./numeric.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/variables.css";
import { sanitizeForId } from "../../utils";
import { LabelPosition } from "../../types";
import { Icon } from "../icon";
import React from "react";

export type NumericProps = {
  id: string;
  name: string;
  decimals?: number;
  placeholder?: string;
  labelPosition?: LabelPosition;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** onChanged is only triggered on blur or if the user presses enter */
  onChanged?: (value: string) => void;
  label?: string;
  value: string;
  helperText?: string;
  unit?: string;
  disabled?: boolean;
  error?: {
    message?: string;
    hasError?: boolean;
  };
};

const Numeric: FC<NumericProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = ({
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
  ...props
}) => {
  const { value, decimals } = props;
  const [currentValue, setCurrentValue] = React.useState(value || "");

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const hasError = error?.hasError;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const _previousVal = currentValue;
    const _val = event.target.value;

    // builtin type=number is useless, we need to validate the value ourselves
    const decimalsPart = decimals ? `([.,]?[0-9]{0,${decimals}})` : "";
    const regex = new RegExp(`^[0-9]*${decimalsPart}$`); // No global on this, it kills the regex
    const valOk = regex.test(_val);

    if (valOk) {
      setCurrentValue(_val);
      if (onChange) {
        onChange(event);
      }
    } else {
      setCurrentValue(_previousVal);
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
    <div className={`${style.input} ${labelPosition === "left" && style.horizontal} ${hasError && style.error}`}>
      {label && (
        <label className={`${style.label}`} htmlFor={sanitizeForId(id)}>
          {label}
        </label>
      )}
      <div className={`${style.wrapper}`}>
        <div className={`${style.field}`}>
          <input
            type="text"
            name={name}
            id={sanitizeForId(id)}
            placeholder={placeholder}
            onKeyUp={(e) => {
              if (e.key === "Enter" && onChanged) {
                onChanged(currentValue);
              }
            }}
            value={currentValue}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={disabled}
          />
          {hasError && <Icon name="info" />}
          {unit && <div className={`${style.unit}`}>{unit}</div>}
        </div>
        {helperText && <p className={`${style.helpertext}`}>{helperText}</p>}
        {error?.message && <p className={`${style["errormessage"]}`}>{error.message}</p>}
      </div>
    </div>
  );
};

export default Numeric;
