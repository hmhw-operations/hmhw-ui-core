import React, { FC } from "react";
import Input, { InputProps } from "../Input";

const Example: FC<{ error: boolean; withUnit: boolean }> = ({ error, withUnit }) => {
  const [value, setValue] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Input
        id="demo id"
        name="Demo"
        label="I am the label"
        labelPosition="top"
        value={value}
        unit={withUnit ? "m/s" : undefined}
        onChange={handleChange}
        error={error ? { message: "Oh dear, something is terribly wrong", hasError: true } : undefined}
      />
    </div>
  );
};

export default Example;
