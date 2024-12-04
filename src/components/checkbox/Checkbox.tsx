import style from "./checkbox.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/variables.css";
import { sanitizeForId } from "../../utils";
import { BaseComponentProps } from "../../types";

export type CheckboxProps = BaseComponentProps & {
  value: string | number | readonly string[] | undefined;
  checked?: boolean;
  label?: string;
  id: string;
  name: string;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  description?: string;
};

const Checkbox: React.FC<CheckboxProps> = ({
  value,
  label,
  id,
  name,
  disabled,
  onChange,
  checked,
  description,
}) => {
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
      {description && <p className={style.description}>{description}</p>}
      <p className={style.description}>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Vestibulum id ligula porta felis euismod semper.
      </p>
    </div>
  );
};

export default Checkbox;
