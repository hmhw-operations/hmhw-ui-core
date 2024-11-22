import React, { FC } from "react";
import Divider, { DividerProps } from "../Divider";

const Example: FC<DividerProps> = ({ orientation, weight, type }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: ".5rem",
      }}
    >
      <Divider orientation={orientation} weight={weight} type={type} />
    </div>
  );
};

const VerticalExample: FC<DividerProps> = ({ orientation, weight, type }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "100%",
        gap: ".5rem",
        color: "var(--color-primary)",
      }}
    >
      <p>Divider example</p>
      <Divider orientation={orientation} weight={weight} type={type} />
      <p>Divider example</p>
    </div>
  );
};

const HorizontalExample: FC<DividerProps> = ({ orientation, weight, type }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        gap: ".5rem",
        color: "var(--color-primary)",
      }}
    >
      <p>Divider example</p>
      <Divider orientation={orientation} weight={weight} type={type} />
      <p>Divider example</p>
    </div>
  );
};

export { VerticalExample, Example, HorizontalExample };
