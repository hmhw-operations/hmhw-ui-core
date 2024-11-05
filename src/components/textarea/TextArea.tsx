import { FC } from "react";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import style from "./textarea.module.css";
import { LabelPosition } from "../../types";
import { sanitizeForId } from "../../utils";
import { Icon } from "../icon";

export type TextAreaProps = {
  id: string;
  name: string;
  placeholder?: string;
  labelPosition?: LabelPosition;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  value: string;
  helperText?: string;
  error?: {
    message?: string;
    hasError?: boolean;
  };
};
const TextArea: FC<
  TextAreaProps & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>
> = ({ id, name, placeholder, labelPosition = "top", onChange, label, helperText, error, ...props }) => {
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
        <div className={`${style.field}`}>
          <textarea name={name} id={sanitizeForId(id)} placeholder={placeholder} value={value} onChange={onChange} />
          {hasError && <Icon name="info" />}
        </div>
        {helperText && <p className={`${style.helpertext}`}>{helperText}</p>}
        {error?.message && <p className={`${style["errormessage"]}`}>{error.message}</p>}
      </div>
    </div>
  );
};

export default TextArea;
