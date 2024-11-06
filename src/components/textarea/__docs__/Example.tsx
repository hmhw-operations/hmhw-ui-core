import React, { FC } from "react";
import Textarea, { TextareaProps } from "../Textarea";

const Example: FC<{ error: boolean }> = ({ error }) => {
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
      <Textarea
        id="demo id"
        name="Demo"
        label="I am the label"
        value={value}
        error={error ? { message: "Oh dear, something is terribly wrong", hasError: true } : undefined}
      />
    </div>
  );
};

export default Example;
