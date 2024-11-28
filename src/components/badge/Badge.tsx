import { Size } from "../../types";
import styles from "./badge.module.css";

export type BadgeProps = {
  type?: "primary" | "secondary" | "critical" | "outline";
  label?: string;
  size?: Size;
  rounded?: boolean;
  style?: React.CSSProperties;
};

export default function Badge({
  type = "primary",
  label,
  size = "medium",
  style,
  rounded = false,
}: BadgeProps) {
  return (
    <span
      style={style}
      aria-live="polite"
      aria-label={label}
      className={`${styles.badge} ${styles[type]} ${styles[size]} ${rounded && styles.rounded} ${!label && styles.empty}`}
    >
      {label}
    </span>
  );
}
