import React, { FC } from "react";
import ThemeSwitch, { ThemeSwitchProps } from "../ThemeSwitch";

const Example: FC<ThemeSwitchProps> = ({
  checked,
  onChange = () => {},
  id,
  name,
  // label,
  // labelPosition,
  size = "small",
  disabled,
}) => {
  const [isChecked, setIsChecked] = React.useState(checked);
  const handleChange = (checked: boolean) => {
    setIsChecked(checked);

    // noop for example purposes
    onChange(checked);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: "1em",
      }}
    >
      <ThemeSwitch
        size={size}
        id={id}
        name={name}
        // label={label}
        onChange={handleChange}
        checked={isChecked}
        disabled={disabled}
        // labelPosition={labelPosition}
      />
      <pre style={{ fontSize: "2rem" }}>{isChecked ? "🌛" : "☀️"}</pre>
    </div>
  );
};

export default Example;
