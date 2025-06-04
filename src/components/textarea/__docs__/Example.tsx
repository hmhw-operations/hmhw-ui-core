import React, { FC } from "react";
import Textarea from "../Textarea";

const Example: FC<{ error: boolean; disabled: boolean }> = ({ error, disabled }) => {
  const [value, setValue] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}
    >
      <Textarea
        id="demo id"
        name="Demo"
        label="I am the label"
        onChange={handleChange}
        value={value}
        error={
          error
            ? {
                message: "Oh dear, something is terribly wrong",
                hasError: true
              }
            : undefined
        }
        disabled={disabled}
        title={""}
      />
    </div>
  );
};

export default Example;
