import { useState } from "react";
import style from "./switch.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import { sanitizeForId } from "../../utils";

export type SwitchProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  id: string;
  name: string;
  size: "small" | "medium" | "large";
  labelPosition?: "left" | "right";
};

const Switch: React.FC<SwitchProps> = ({
  label,
  checked,
  onChange,
  disabled = false,
  id,
  name,
  size = "small",
  labelPosition = "right",
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const sanitizedId = sanitizeForId(id);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };
  return (
    <div className={`${style.someStyle}`}>
      <button
        className={`${style.button}  ${style[size]} ${style[labelPosition]}`}
        type="button"
        name={name}
        aria-label={name}
        aria-checked={isChecked}
        id={sanitizedId}
        onClick={handleChange}
        disabled={disabled}
      >
        Remove text
      </button>
      {label && <label htmlFor={sanitizedId}>{label}</label>}
    </div>
  );
};

export default Switch;
