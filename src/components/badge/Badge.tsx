import React from "react";
import { Size } from "../../types";
import style from "./badge.module.css";

export type BadgeType = "neutral" | "accent" | "info" | "warning" | "success" | "critical";

export type BadgeProps = {
  text: string;
  size?: Size;
  type: BadgeType;
  className?: string;
};

const Badge: React.FC<BadgeProps> = ({ text, size = "medium", type = "neutral", className = "", ...props }) => (
  <span className={`${style.badge} ${style[type]} ${style[size]} ${className}`} {...props}>
    {text}
  </span>
);

export default Badge;
