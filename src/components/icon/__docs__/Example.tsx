import React, { FC } from "react";
import Icon, { IconProps } from "../Icon";

const Example: FC<IconProps> = ({ name, size = "small" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        color: "var(--color-foreground-primary)"
      }}
    >
      <Icon name={name} size={size} />
    </div>
  );
};

export default Example;
