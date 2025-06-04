import React, { FC } from "react";
import ProgressBar, { ProgressBarProps } from "../ProgressBar";

const Example: FC<ProgressBarProps> = ({ size, progress, description, label }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "stretch",
        alignItems: "center",
        height: "100%",
        gap: ".5rem",
        width: "100%"
      }}
    >
      <ProgressBar size={size} progress={progress} description={description} label={label} />
    </div>
  );
};

export default Example;
