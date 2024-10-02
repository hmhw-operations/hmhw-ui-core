import { useState } from "react";
import style from "./themeswitch.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import { sanitizeForId } from "../../utils";
import { Size } from "../../types";

export type ThemeSwitchProps = {
  // label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  id: string;
  name: string;
  size: Size;
  // labelPosition?: LabelPosition;
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  // label,
  checked,
  onChange,
  disabled = false,
  id,
  name,
  size = "small",
  // labelPosition = "right",
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const sanitizedId = sanitizeForId(id);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };
  return (
    <div className={`${style.switch}  ${style[size]} `}>
      <button
        className={`${style.track}`}
        type="button"
        name={name}
        aria-label={name}
        aria-checked={isChecked}
        id={sanitizedId}
        onClick={handleChange}
        disabled={disabled}
      >
        <span className={`${style.thumb} `}></span>
      </button>
      {/* {label && <label htmlFor={sanitizedId}>{label}</label>} */}
    </div>
  );
};

export default ThemeSwitch;
