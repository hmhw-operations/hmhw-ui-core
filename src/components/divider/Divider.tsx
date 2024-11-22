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
    <div className={styles.container}>
      <div
        className={`${styles.divider} ${styles[weight]} ${styles[type]} ${styles[orientation]}`}
      />
    </div>
  );
}
