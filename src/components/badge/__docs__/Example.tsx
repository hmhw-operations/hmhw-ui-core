import React, { FC } from "react";
import Badge, { BadgeProps } from "../Badge";

const Example: FC<BadgeProps> = ({ label, type, size, rounded }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: "1em",
        padding: "5em",
        backgroundColor: "var(--color-surface-canvas)",
      }}
    >
      <Badge label={label} type={type} size={size} rounded={rounded} />
    </div>
  );
};

export default Example;
