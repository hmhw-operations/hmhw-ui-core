import { FC } from "react";
import Tag, { TagProps } from "../Tag";

const Example: FC<TagProps> = ({ text = "Started", size = "medium", type = "neutral" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Tag text={text} size={size} type={type} />
    </div>
  );
};

export default Example;
