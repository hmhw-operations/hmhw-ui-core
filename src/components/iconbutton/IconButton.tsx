import { MouseEventHandler } from "react";
import style from "./iconbutton.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/variables.css";
import { BaseComponentProps, Size } from "../../types";
import { SvgName } from "../icon/types";
import Icon from "../icon/Icon";

export type IconButtonProps = BaseComponentProps & {
  label: string;
  size?: Size;
  variant?: "primary" | "secondary" | "tertiary" | "destructive";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon: SvgName;
  disabled?: boolean;
};

const IconButton: React.FC<IconButtonProps> = ({ size = "small", variant = "primary", label, onClick, icon, disabled, ...props }) => (
  <button className={`${style.iconButton} ${style[variant]} ${style[size]}`} aria-label={label} type="button" onClick={onClick} disabled={disabled} {...props}>
    <Icon name={icon} size={size ?? "medium"} />
  </button>
);

export default IconButton;
