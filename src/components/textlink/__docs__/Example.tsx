import React, { FC } from "react";
import TextLink, { TextLinkProps } from "../TextLink";

const Example: FC<TextLinkProps> = (props) => {
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
      <TextLink {...props} />
    </div>
  );
};

export default Example;
