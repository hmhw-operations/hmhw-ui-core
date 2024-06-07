import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";

const Example: FC<ButtonProps> = ({ onClick = () => {}, size = "small", text = "Button", variant }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Button size={size} text={text} onClick={onClick} variant={variant} />
    </div>
  );
};

export default Example;
