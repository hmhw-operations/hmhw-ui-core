import { MouseEventHandler } from "react";
import style from "./iconbutton.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";

export type IconButtonProps = {
  label: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary" | "tertiary" | "destructive";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: React.ReactNode;
  disabled?: boolean;
};

const IconButton: React.FC<IconButtonProps> = ({
  size = "small",
  variant = "primary",
  label,
  onClick,
  icon,
  disabled,
  ...props
}) => (
  <button
    className={`${style.button} ${style[variant]} ${style[size]}`}
    aria-label={label}
    type="button"
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {icon}
  </button>
);

export default IconButton;
