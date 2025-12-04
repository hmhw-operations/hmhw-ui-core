import { Size } from "../../types";
import style from "./tag.module.css";

export type TagType = "neutral" | "accent" | "info" | "warning" | "success" | "danger";

export type TagProps = {
  text: string;
  size?: Size;
  type: TagType;
  weak?: boolean;
  rounded?: boolean;
};

const Tag: React.FC<TagProps> = ({ text, size = "medium", rounded = "true", weak = "true", type }) => {
  return <div className={`${style.tag} ${style[type]} ${rounded ? style.rounded : ""} ${weak ? style.weak : ""} ${style[size]}`}>{text}</div>;
};

export default Tag;
