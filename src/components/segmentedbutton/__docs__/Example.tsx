import React, { useState } from "react";
import SegmentedButton, { SegmentedItem } from "../SegmentedButton";

const segmentedItems: SegmentedItem[] = [
  { value: "tacos", label: "Tacos" },
  { value: "sides", label: "Sides" },
  { value: "drinks", label: "Drinks" },
];

const Example: React.FC<{ disabled: boolean }> = ({ disabled }) => {
  const [value, setValue] = useState<string | null>(null);
  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div>
      <SegmentedButton name="selection" items={segmentedItems} value={value} onChange={onChange} disabled={disabled} />
      {value && <p style={{ color: "white" }}>Selected value: {value}</p>}
    </div>
  );
};

export default Example;
