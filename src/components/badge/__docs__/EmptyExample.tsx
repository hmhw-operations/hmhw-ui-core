import React, { FC } from "react";
import Badge, { BadgeProps } from "../Badge";
import { Icon } from "../../icon";

const EmptyExample: FC<BadgeProps> = ({ label, type, size, rounded }) => {
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
      <div
        style={{
          position: "relative",
          display: "inline-block", // Ensures the icon and badge align together
        }}
      >
        <Icon name="message-empty" size="large" />
        <Badge
          label={label}
          type={type}
          size={size}
          rounded={rounded}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            transform: "translate(50%, -50%)", // Adjusts position slightly to sit outside the top-right corner
          }}
        />
      </div>
    </div>
  );
};

export default EmptyExample;
