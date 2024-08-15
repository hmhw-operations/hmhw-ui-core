import React from "react";
import style from "./segmentedbutton.module.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/globals.css";

export type SegmentedItem = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SegmentedButtonProps = {
  name: string;
  items: SegmentedItem[];
  value: string | null;
  onChange: (value: string) => void;
  disabled?: boolean;
};

const SegmentedButton: React.FC<SegmentedButtonProps> = ({ name, items, value, onChange, disabled }) => {
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value);

  return (
    <fieldset className={style.segmented_group} disabled={disabled}>
      {items.map((i) => (
        <label key={i.label} className={style.segmented_item}>
          label={i.label}
          <input
            type="radio"
            key={i.value}
            name={name}
            value={i.value}
            id={name + i.value}
            checked={value === i.value}
            onChange={handleSelect}
            disabled={i.disabled}
          />
        </label>
      ))}
    </fieldset>
  );
};

export default SegmentedButton;
