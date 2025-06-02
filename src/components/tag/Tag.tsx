import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import { Size } from "../../types";

export type TagType = "neutral" | "accent" | "info" | "warning" | "success" | "alert" | "danger";

export type TagProps = {
  text: string;
  size?: Size;
  type: TagType;
};

const Tag: React.FC<TagProps> = ({ text, size, type }) => {
  return <div className={`tag ${type} ${size}`}>{text}</div>;
};

export default Tag;
