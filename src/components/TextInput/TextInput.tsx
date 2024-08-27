import { FC } from "react";
import style from "./textinput.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import { sanitizeForId } from "../../utils";
import { LabelPosition } from "../../types";

export type TextInputProps = {
  id: string;
  name: string;
  placeholder?: string;
  value: string;
  labelPosition?: LabelPosition;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  helperText?: string;
  error?: {
    message?: string;
    hasError?: boolean;
  };
};

const TextInput: FC<TextInputProps> = ({
  placeholder,
  value,
  onChange,
  label,
  labelPosition = "top",
  error,
  id,
  name,
  helperText,
}) => {
  return (
    <div className={`${style.textInput}`}>
      {label && <label htmlFor={sanitizeForId(id)}>{label}</label>}
      <div className={`${style.textInput__wrapper}`}>
        <div className={`${style.textInput__field}`}>
          <input
            type="text"
            name={name}
            id={sanitizeForId(id)}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          <div className={`${style.textInput__unit}`}>unit</div>
        </div>
        {helperText && <p className="textInput__helpertext">{helperText}</p>}
        {error?.message && <p className="textinput__error-message">{error.message}</p>}
      </div>
    </div>
  );
};

export default TextInput;
