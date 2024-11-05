import React, { FC } from "react";
import TextArea from "../TextArea";

const Example: FC<{ error: boolean }> = ({ error }) => {
  const [value, setValue] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
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
      <TextArea
        id="demo id"
        name="Demo"
        label="I am the label"
        labelPosition="top"
        value={value}
        onChange={handleChange}
        error={error ? { message: "Oh dear, something is terribly wrong", hasError: true } : undefined}
      />
    </div>
  );
};

export default Example;
