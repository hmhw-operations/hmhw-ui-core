import React from "react";
import TextInput from "../TextInput";

const Example = () => {
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
      <TextInput
        id="demo id"
        name="Demo"
        label="I am the label"
        value={value}
        onChange={handleChange}
        error={{ message: "Error message", hasError: true }}
      />
      <pre>{JSON.stringify({ value }, null, 2)}</pre>
    </div>
  );
};

export default Example;
