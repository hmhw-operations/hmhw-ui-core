import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/variables.css";
import { Size } from "../../types";
import style from "./tag.module.css";

export type TagType = "neutral" | "accent" | "info" | "warning" | "success" | "danger";

export type TagProps = {
  text: string;
  size?: Size;
  type: TagType;
};

const Tag: React.FC<TagProps> = ({ text, size, type }) => {
  return <div className={`${style.tag} ${style[type]} ${style[size]}`}>{text}</div>;
};

export default Tag;

