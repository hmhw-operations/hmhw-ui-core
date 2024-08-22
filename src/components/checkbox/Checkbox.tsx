import style from "./checkbox.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import { sanitizeForId } from "../../utils";

export type CheckboxProps = {
  value: string | number | readonly string[] | undefined;
  checked?: boolean;
  label?: string;
  id: string;
  name: string;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  helperText?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ value, label, id, name, disabled, onChange, checked, helperText }) => {
  return (
    <div className={`${style.input_item} ${style.checkbox}`}>
      <input
        type="checkbox"
        id={sanitizeForId(id)}
        disabled={disabled}
        name={name}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      {label && <label htmlFor={sanitizeForId(id)}>{label}</label>}
      {helperText && <p className={style.helper_text}>{helperText}</p>}
    </div>
  );
};

export default Checkbox;
