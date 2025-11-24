import React, { FC } from "react";
import Avatar, { AvatarProps } from "../Avatar";

const Example: FC<AvatarProps> = ({ size = "medium", variant = "circle", src, name }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flexDirection: "column",
        gap: "1rem"
      }}
    >
      <Avatar size={size} variant={variant} src={src} name={name} />
      <p>Avatar shows an image or initials based on the provided props. If src is empty, initials are displayed instead.</p>
    </div>
  );
};

export default Example;
