import { FC } from "react";
import Badge, { BadgeProps } from "../badge";

const Example: FC<BadgeProps> = ({ text = "11", size = "medium", type = "neutral" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}
    >
      <Badge text={text} size={size} type={type} />
    </div>
  );
};

export default Example;
