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
        gap: ".5rem"
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

        height: "100%",
        gap: ".5rem",
        color: "var(--color-primary)"
      }}
    >
      <div>
        <h3>Divider example</h3>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
      </div>
      <Divider orientation={orientation} weight={weight} type={type} />
      <div>
        <h3>Divider example</h3>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
      </div>
    </div>
  );
};

const HorizontalExample: FC<DividerProps> = ({ orientation, weight, type }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        height: "100%",
        gap: ".5rem",
        color: "var(--color-primary)"
      }}
    >
      <div>
        <h3>Divider example</h3>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
      </div>
      <Divider orientation={orientation} weight={weight} type={type} />
      <div>
        <h3>Divider example</h3>
        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
      </div>
    </div>
  );
};

export { VerticalExample, Example, HorizontalExample };
