import React, { FC } from "react";
import RadioButton, { RadioButtonProps } from "../RadioButton";

const Example: FC<RadioButtonProps> = ({ onClick, label, id, disabled }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <RadioButton id={id} onClick={onClick} label={label} disabled={disabled} />
    </div>
  );
};

export default Example;
