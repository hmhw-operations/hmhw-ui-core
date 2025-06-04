import { FC } from "react";
import style from "./textarea.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/variables.css";
import { sanitizeForId } from "../../utils";
import { BaseComponentProps, LabelPosition } from "../../types";
import { Icon } from "../icon";

export type TextareaProps = BaseComponentProps & {
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

const Textarea: FC<TextareaProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = ({
  placeholder,
  onChange,
  label,
  labelPosition = "top",
  error,
  id,
  name,
  helperText,
  disabled,
  ...props
}) => {
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
        <textarea className={`${style.textareas}`} name={name} disabled={disabled} id={sanitizeForId(id)} onChange={onChange} placeholder={placeholder} value={value} />
        <div className={`${style.description}`}>
          {hasError && <Icon name="info" />}
          {helperText && <p className={`${style.helpertext}`}>{helperText}</p>}
          {error?.message && <p className={`${style["errormessage"]}`}>{error.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Textarea;
