import { FC } from "react";
import Tag, { TagProps } from "../Tag";

const Example: FC<TagProps> = ({ text = "Started", size = "medium", status = "neutral", rounded = false, weak = false }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}
    >
      <Tag text={text} size={size} status={status} rounded={rounded} weak={weak} />
    </div>
  );
};

export default Example;
