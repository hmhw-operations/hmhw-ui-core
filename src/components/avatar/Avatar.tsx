import React from "react";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/variables.css";
import { BaseComponentProps, Size } from "../../types";
import style from "./avatar.module.css";

export type AvatarProps = Partial<BaseComponentProps> & {
  src?: string;
  name?: string;
  size?: Size;
  variant?: "circle" | "square";
};

const getInitialsFromName = (name: string): string => {
  const trimmedName = name.trim();

  if (!trimmedName) {
    return "?";
  }

  const parts = trimmedName.split(/\s+/).filter((part) => part.length > 0);

  if (parts.length === 0) {
    return "?";
  }

  if (parts.length === 1) {
    // Single name: take first 2 characters
    return parts[0].substring(0, 2).toUpperCase();
  }

  // Multiple names: take first letter of first and last name
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(({ size = "medium", variant = "circle", src, name, ...props }, ref) => {
  const displayInitials = name ? getInitialsFromName(name) : "?";
  const altText = name ? `Avatar for ${name}` : "Avatar";

  return (
    <div className={`${style.avatar} ${style[variant]} ${style[size]}`} {...props} ref={ref}>
      {src ? (
        <img src={src} alt={altText} title={name} className={style.image} />
      ) : (
        <span className={style.initials} title={name}>
          {displayInitials}
        </span>
      )}
    </div>
  );
});

Avatar.displayName = "Avatar";
export default Avatar;
