import style from "./checkbox.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/variables.css";
import { sanitizeForId } from "../../utils";
import { BaseComponentProps, Size } from "../../types";

export type CheckboxProps = BaseComponentProps & {
  value: string | number | readonly string[] | undefined;
  checked?: boolean;
  label?: string;
  id: string;
  name: string;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  description?: string;
  size: Size;
};

const Checkbox: React.FC<CheckboxProps> = ({ value, label, id, name, disabled, onChange, checked, description, size }) => {
  return (
    <div className={`${style.checkbox} ${style[size]}`}>
      <input type="checkbox" id={sanitizeForId(id)} disabled={disabled} name={name} checked={checked} value={value} onChange={onChange} />
      {<label htmlFor={sanitizeForId(id)}>{label}</label>}
      {description && <p className={style.description}>{description}</p>}
    </div>
  );
};

export default Checkbox;
