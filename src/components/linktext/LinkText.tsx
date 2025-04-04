import { Size } from "../../types";
import { Icon } from "../icon";
import styles from "./LinkText.module.css";

export type LinkTextProps = {
  text: string;
  href: string;
  newTab?: boolean;
  isExternal?: boolean;
  size?: Size;
};

export default function LinkText({
  text,
  href,
  newTab,
  isExternal = true,
  size = "small",
}: LinkTextProps) {
  return (
    <div className={`${styles.linkText} ${styles[size]}`}>
      <a href={href} target={`${newTab && "_"}`}>
        {text}
      </a>
      {isExternal && <Icon name="external-link" size={size} />}
    </div>
  );
}
