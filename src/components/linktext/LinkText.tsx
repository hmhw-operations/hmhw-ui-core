import { Size } from "../../types";
import { Icon } from "../icon";
import styles from "./LinkText.module.css";

export type LinkTextProps = {
  text: string;
  href: string;
  newTab?: boolean;
  external?: boolean;
  size?: Size;
};

export default function LinkText({
  text,
  href,
  newTab,
  external,
  size = "small",
}: LinkTextProps) {
  return (
    <div className={`${styles.linkText} ${styles[size]}`}>
      <a href={href} target={newTab ? "_blank" : undefined}>
        {text}
      </a>
      {external && <Icon name="external-link" size={size} />}
    </div>
  );
}
