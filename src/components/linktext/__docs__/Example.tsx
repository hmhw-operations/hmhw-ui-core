import React, { FC } from "react";
import LinkText, { LinkTextProps } from "../LinkText";

const Example: FC<LinkTextProps> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        color: "var(--color-foreground-primary)",
      }}
    >
      <LinkText {...props} />
    </div>
  );
};

export default Example;
