import React, { FC, useState } from "react";
import Select from "../Select";
import { SelectProps } from "../Select";

const Example: FC<SelectProps> = ({ options, size, disabled, value, label }) => {
  const [selectedValue, setSelectedValue] = useState(value || "");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Select
        label={label}
        options={options}
        size={size}
        value={value}
        disabled={disabled}
        onChange={(value) => setSelectedValue(value.target.value)}
      />
      <p>{selectedValue}</p>
    </div>
  );
};

export default Example;