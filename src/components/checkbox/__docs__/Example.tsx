import React, { FC } from "react";
import Checkbox, { CheckboxProps } from "../Checkbox";

const Example: FC<CheckboxProps> = ({ label, size }) => {
  const [value, setValue] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    setChecked(event.target.checked);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
        height: "100%"
      }}
    >
      <Checkbox id="demo id" name="Test" label={label} onChange={handleChange} value={"Banana"} checked={checked} title={""} size={size} />
      <pre>{JSON.stringify({ value, checked }, null, 2)}</pre>
    </div>
  );
};

export default Example;
