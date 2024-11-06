import { FC } from "react";
import style from "./textarea.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import { sanitizeForId } from "../../utils";
import { LabelPosition } from "../../types";
import { Icon } from "../icon";

export type TextareaProps = {
  id: string;
  name: string;
  placeholder?: string;
  labelPosition?: LabelPosition;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  value: string;
  helperText?: string;
  error?: {
    message?: string;
    hasError?: boolean;
  };
};

const Textarea: FC<
  TextareaProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ placeholder, onChange, label, labelPosition = "top", error, id, name, helperText, ...props }) => {
  const { value } = props;

  const hasError = error?.hasError;

  return (
    <div className={`${style.textarea} ${labelPosition === "left" && style.horizontal} ${hasError && style.error}`}>
      {label && (
        <label className={`${style.label}`} htmlFor={sanitizeForId(id)}>
          {label}
        </label>
      )}
      <div className={`${style.wrapper}`}>
        <textarea
          className={`${style.textareas}`}
          name={name}
          id={sanitizeForId(id)}
          placeholder={placeholder}
          value={value}
        />
        <div className={`${style.helpertext}`}>
          {hasError && <Icon name="info" />}
          {helperText && <p className={`${style.helpertext}`}>{helperText}</p>}
          {error?.message && <p className={`${style["errormessage"]}`}>{error.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Textarea;
