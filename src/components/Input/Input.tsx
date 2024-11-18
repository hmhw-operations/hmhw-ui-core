import { FC } from "react";
import style from "./input.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import { sanitizeForId } from "../../utils";
import { LabelPosition } from "../../types";
import { Icon } from "../icon";
import React from "react";

/** Props for the Input */
export type InputProps = {
  id: string;
  name: string;
  type: 'text' | 'number';
  decimals?: number;
  placeholder?: string;
  labelPosition?: LabelPosition;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
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

const Input: FC<
  InputProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
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
  ...props
}) => {
    const { value, type, decimals } = props;
    const [currentValue, setCurrentValue] = React.useState(value);

    const hasError = error?.hasError;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const _previousValue = currentValue;
      const _inputValue = event.target.value;
      if (type === "number") {
        // builtin type=number is useless, we need to validate the input ourselves
        const decimalsPart = decimals ? `([.,]?[0-9]{0,${decimals}})` : '';
        const regex = new RegExp(`^[0-9]*${decimalsPart}$`); // No global on this, it kills the regex
        const valOk = regex.test(_inputValue);
        console.log(valOk, _previousValue, _inputValue);
        if (valOk) {
          setCurrentValue(_inputValue);
          if (onChange) {
            onChange(event);
          }
        }
        else {
          setCurrentValue(_previousValue);
        }
      } else {
        setCurrentValue(_inputValue);
        if (onChange) {
          onChange(event);
        }
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
              type='text'
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
          {helperText && <p className={`${style.helpertext}`}>{helperText}</p>}
          {error?.message && <p className={`${style["errormessage"]}`}>{error.message}</p>}
        </div>
      </div>
    );
  };

export default Input;
