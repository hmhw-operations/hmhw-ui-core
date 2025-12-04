import { FC } from "react";
import Tag, { TagProps } from "../Tag";

const Example: FC<TagProps> = ({ text = "Started", size = "medium", type = "neutral", rounded = false, weak = false }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}
    >
      <Tag text={text} size={size} type={type} rounded={rounded} weak={weak} />
    </div>
  );
};

export default Example;
