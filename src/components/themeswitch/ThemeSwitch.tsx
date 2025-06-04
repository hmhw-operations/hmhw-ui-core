import { useState } from "react";
import style from "./themeswitch.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import { sanitizeForId } from "../../utils";
import { BaseComponentProps, Size } from "../../types";

export type ThemeSwitchProps = BaseComponentProps & {
  // label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  id: string;
  name: string;
  size?: Size;
  // labelPosition?: LabelPosition;
};

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({
  // label,
  checked,
  onChange,
  disabled = false,
  id,
  name
  // size = "small",
  // labelPosition = "right",
}) => {
  const [isChecked, setIsChecked] = useState(checked);
  const sanitizedId = sanitizeForId(id);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };
  return (
    <button className={`${style.themeswitch}`} type="button" name={name} aria-label={name} aria-checked={isChecked} id={sanitizedId} onClick={handleChange} disabled={disabled}>
      <svg className="day" viewBox="0 0 42 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32 1H10a9 9 0 0 0 0 18h22a9 9 0 1 0 0-18zM10 0C4.477 0 0 4.477 0 10s4.477 10 10 10h22c5.523 0 10-4.477 10-10S37.523 0 32 0H10z"
        />
        <path fill="currentColor" d="M13.25 5.23A5.002 5.002 0 0 0 6.75 10a5.002 5.002 0 0 0 6.5 4.77A4.996 4.996 0 0 1 9.75 10c0-2.24 1.47-4.135 3.5-4.77z" />
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32 20c5.523 0 10-4.477 10-10S37.523 0 32 0 22 4.477 22 10s4.477 10 10 10zm-.5-14.018V4.5h1v1.482h-1zm4.725.482l-.705-.708-.895.899.705.708.895-.9zM32 6.986A3.01 3.01 0 0 0 29 10a3.01 3.01 0 0 0 3 3.014c1.655 0 3-1.351 3-3.014a3.01 3.01 0 0 0-3-3.014zm3.515 7.263l-.895-.904.7-.703.9.9-.705.707zm1.985-3.747H36V9.498h1.5v1.004zm-8.12-3.847l-.9-.9-.705.709.895.899.71-.708zM26.5 9.498H28v1.004h-1.5V9.498zm1.275 4.038l.705.708.895-.904-.705-.708-.895.904zm4.725.482V15.5h-1v-1.482h1z"
        />
      </svg>
      <svg className="night" viewBox="0 0 42 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32 1H10a9 9 0 0 0 0 18h22a9 9 0 1 0 0-18zM10 0C4.477 0 0 4.477 0 10s4.477 10 10 10h22c5.523 0 10-4.477 10-10S37.523 0 32 0H10z"
        />
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10zm1-15c.525 0 1.025.08 1.5.23A4.996 4.996 0 0 0 9 10c0 2.24 1.47 4.135 3.5 4.77A5.002 5.002 0 0 1 6 10c0-2.76 2.24-5 5-5z"
        />
        <path
          fill="currentColor"
          d="M35.515 14.25l-.895-.905.7-.703.9.9-.705.707zM32 6.985A3.01 3.01 0 0 0 29 10a3.01 3.01 0 0 0 3 3.014c1.655 0 3-1.351 3-3.014a3.01 3.01 0 0 0-3-3.014zm4 2.512v1.004h1.5V9.498H36zm.225-3.034l-.705-.708-.895.899.705.708.895-.9zM32.5 4.5h-1v1.482h1V4.5zm-3.12 2.155l-.9-.9-.705.709.895.899.71-.708zM28 9.498h-1.5v1.004H28V9.498zm-.225 4.038l.705.708.895-.904-.705-.708-.895.904zM31.5 15.5h1v-1.482h-1V15.5z"
        />
      </svg>
    </button>
  );
};

export default ThemeSwitch;
