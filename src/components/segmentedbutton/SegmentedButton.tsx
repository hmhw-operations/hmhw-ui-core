import React from "react";
import style from "./segmentedbutton.module.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/globals.css";
import { RadioButton } from "../radiobutton";

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
    <fieldset className={style.wrapper} disabled={disabled}>
      {items.map((i) => (
        <RadioButton
          key={i.value}
          name={name}
          value={i.value}
          id={name + i.value}
          checked={value === i.value}
          onChange={handleSelect}
          label={i.label}
          disabled={i.disabled}
        />
      ))}
    </fieldset>
  );
};

export default SegmentedButton;
