import React from "react";
import style from "./radiogroup.module.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/globals.css";
import { RadioButton } from "../radiobutton";

export type RadioGroupItem = {
  value: string;
  label: string;
};

export type RadioGroupProps = {
  name: string;
  items: RadioGroupItem[];
  value: string | null;
  onChange: (value: string) => void;
  disabled?: boolean;
};

const RadioGroup: React.FC<RadioGroupProps> = ({ name, items, value, onChange, disabled }) => {
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value);

  return (
    <fieldset className={style.wrapper} disabled={disabled}>
      {items.map((i) => (
        <RadioButton
          key={i.value}
          name={name}
          value={i.value}
          id={name + i.value}
          checked={value?.toLocaleLowerCase() === i.value.toLocaleLowerCase()}
          onChange={handleSelect}
          label={i.label}
        />
      ))}
    </fieldset>
  );
};

export default RadioGroup;
