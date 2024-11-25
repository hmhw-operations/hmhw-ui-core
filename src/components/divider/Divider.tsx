import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import styles from "./divider.module.css";

export type DividerProps = {
  weight?: "thin" | "thick";
  orientation?: "horizontal" | "vertical";
  type?: "primary" | "secondary";
};

export default function Divider({
  orientation = "horizontal",
  weight = "thick",
  type = "primary",
}: DividerProps) {
  return (
    <hr
      className={`${styles.divider} ${styles[weight]} ${styles[type]} ${styles[orientation]}`}
    />
  );
}
