import { FC } from "react";
import style from "./input.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import { sanitizeForId } from "../../utils";
import { LabelPosition } from "../../types";

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

  return (
    <div className={`${style.textInput} ${labelPosition === "left" && style.horizontal} ${error && style.error}`}>
      {label && <label htmlFor={sanitizeForId(id)}>{label}</label>}
      <div className={`${style.textInput__wrapper}`}>
        <div className={`${style.textInput__field}`}>
          <input
            type={type}
            name={name}
            id={sanitizeForId(id)}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          {unit && <div className={`${style.textInput__unit}`}>unit</div>}
        </div>
        {helperText && <p className={`${style.textInput__helpertext}`}>{helperText}</p>}
        {error?.message && <p className={`${style["textinput__errormessage"]}`}>{error.message}</p>}
      </div>
    </div>
  );
};

export default Input;
