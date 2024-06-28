import React, { FC } from "react";
import Button, { ButtonProps } from "../Button";

// type ExampleProps = {
//   text: string;
//   iconPosition?: "leading" | "trailing";
//   icon?: React.ReactNode;
// };

const Example: FC<ButtonProps> = ({
  onClick = () => {},
  size = "small",
  variant,
  iconPosition,
  text,
  icon,
  disabled,
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Button
        size={size}
        text={text}
        onClick={onClick}
        variant={variant}
        iconPosition={iconPosition}
        icon={icon}
        disabled={disabled}
      />
    </div>
  );
};

export default Example;
