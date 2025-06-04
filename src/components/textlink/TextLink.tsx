import { Size } from "../../types";
import { Icon } from "../icon";
import styles from "./TextLink.module.css";

export type TextLinkProps = {
  text: string;
  href: string;
  newTab?: boolean;
  isExternal?: boolean;
  size?: Size;
};

export default function TextLink({ text, href, newTab, isExternal = true, size = "small" }: TextLinkProps) {
  return (
    <div className={`${styles.textLink} ${styles[size]}`}>
      <a href={href} target={`${newTab && "_"}`}>
        {text}
      </a>
      {isExternal && <Icon name="external-link" size={size} />}
    </div>
  );
}
