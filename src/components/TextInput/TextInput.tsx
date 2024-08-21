import { FC } from "react";
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
    <>
      <input
        type="text"
        name={name}
        id={sanitizeForId(id)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {label && <label htmlFor={sanitizeForId(id)}>{label}</label>}
      {helperText && <p>{helperText}</p>}
      {error?.message && <p>{error.message}</p>}
    </>
  );
};

export default TextInput;
