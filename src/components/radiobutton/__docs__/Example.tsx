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
      <fieldset>
        <legend style={{ color: "white" }}>Select your poison 🌮</legend>
        <RadioButton
          id="al-pastor"
          name="taco"
          onChange={handleClick}
          label="Al Pastor"
          checked={value === "Al Pastor"}
          disabled={disabled}
          value="Al Pastor"
        />
        <RadioButton
          id="carnitas"
          name="taco"
          onChange={handleClick}
          label="Carnitas"
          checked={value === "Carnitas"}
          disabled={disabled}
          value="Carnitas"
        />
        <RadioButton
          id="birria"
          name="taco"
          onChange={handleClick}
          label="Birria"
          checked={value === "Birria"}
          disabled={disabled}
          value="Birria"
        />
      </fieldset>

      <span style={{ color: "white" }}>
        Value
        <pre>{value}</pre>
      </span>
    </div>
  );
};

export default Example;
