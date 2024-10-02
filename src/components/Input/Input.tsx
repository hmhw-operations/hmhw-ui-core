import { FC } from "react";
import style from "./input.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import { sanitizeForId } from "../../utils";
import { LabelPosition } from "../../types";
import { Icon } from "../icon";

export type InputProps = {
  id: string;
  name: string;
  placeholder?: string;
  labelPosition?: LabelPosition;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value: string;
  helperText?: string;
  unit?: string;
  error?: {
    message?: string;
    hasError?: boolean;
  };
};

const Input: FC<
  InputProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ placeholder, unit, onChange, label, labelPosition = "top", error, id, name, helperText, ...props }) => {
  const { value, type } = props;

  const hasError = error?.hasError;

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
            type={type}
            name={name}
            id={sanitizeForId(id)}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          {hasError && <Icon name="info" />}
          {unit && <div className={`${style.unit}`}>unit</div>}
        </div>
        {helperText && <p className={`${style.helpertext}`}>{helperText}</p>}
        {error?.message && <p className={`${style["errormessage"]}`}>{error.message}</p>}
      </div>
    </div>
  );
};

export default Input;
