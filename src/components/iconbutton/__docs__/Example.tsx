import React, { FC } from "react";
import IconButton, { IconButtonProps } from "../IconButton";

const Example: FC<IconButtonProps> = ({ onClick = () => {}, size = "small", variant, label, icon, disabled }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <IconButton size={size} onClick={onClick} variant={variant} icon={icon} label={label} disabled={disabled} />
    </div>
  );
};

export default Example;
