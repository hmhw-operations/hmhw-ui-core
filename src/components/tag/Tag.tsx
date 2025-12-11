import { Size, Status } from "../../types";
import style from "./tag.module.css";

export type TagProps = {
  text: string;
  size?: Size;
  status: Status;
  weak?: boolean;
  rounded?: boolean;
};

const Tag: React.FC<TagProps> = ({ text, size = "medium", rounded = "true", weak = "true", status = "neutral" }) => {
  return <div className={`${style.tag} ${style[status]} ${rounded ? style.rounded : ""} ${weak ? style.weak : ""} ${style[size]}`}>{text}</div>;
};

export default Tag;
