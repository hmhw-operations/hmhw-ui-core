import React, { useState } from "react";
import RadioGroup, { RadioGroupItem } from "../RadioGroup";

const radioGroupItems: RadioGroupItem[] = [
  { value: "Al pastor", label: "Al Pastor" },
  { value: "Birria", label: "Birria" },
  { value: "Carne Asada", label: "Carne Asada" }
];

const Example: React.FC<{ disabled: boolean }> = ({ disabled, horizontal }) => {
  const [value, setValue] = useState<string | null>(null);
  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      <RadioGroup name="tacos" items={radioGroupItems} value={value} onChange={onChange} disabled={disabled} horizontal={horizontal} />
      {value && <p style={{ color: "white" }}>Selected value: {value}</p>}
    </div>
  );
};

export default Example;
