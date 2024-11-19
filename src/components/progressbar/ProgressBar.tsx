import { Size } from "../../types";
import style from "./progressbar.module.css";

export type ProgressBarProps = {
  size?: Size;
  description?: string;
  label?: string;
  progress: number;
};

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

export default function ProgressBar({ size, description, label, progress }: ProgressBarProps) {
  return (
    <div className={style.container}>
      {description && <label>{description}</label>}
      <progress
        className={`${style.progressbar} ${style[size ?? "medium"]} ${(progress >= 100 || progress <= 0) && style.progressFull}`}
        value={clamp(progress, 0, 100)}
        max="100"
      ></progress>
      {label && <label>{label}</label>}
    </div>
  );
}
