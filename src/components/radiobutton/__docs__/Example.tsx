import React, { FC } from "react";
import RadioButton from "../RadioButton";

const Example: FC<{ disabled: boolean }> = ({ disabled }) => {
  const [value, setValue] = React.useState<string | null>(null);
  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
        height: "100%",
      }}
    >
      <RadioButton
        id="al-pastor"
        name="taco"
        onChange={handleClick}
        label="Al Pastor"
        checked={value === "Al Pastor"}
        disabled={disabled}
        value="Al Pastor"
      />
    </div>
  );
};

export default Example;
