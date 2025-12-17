import styles from "./divider.module.css";

export type DividerProps = {
  weight?: "thin" | "thick";
  orientation?: "horizontal" | "vertical";
  type?: "primary" | "secondary" | "accent";
};

export default function Divider({ orientation = "horizontal", weight = "thick", type = "primary" }: DividerProps) {
  return <hr className={`${styles.divider} ${styles[weight]} ${styles[type]} ${styles[orientation]}`} />;
}
