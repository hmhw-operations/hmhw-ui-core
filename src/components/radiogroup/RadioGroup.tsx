import React from "react";
import style from "./radiogroup.module.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/globals.css";
import { RadioButton } from "../radiobutton";
import { BaseComponentProps } from "../../types";

export type RadioGroupItem = {
  value: string;
  label: string;
};

export type RadioGroupProps = BaseComponentProps & {
  name: string;
  items: RadioGroupItem[];
  value: string | null;
  onChange: (value: string) => void;
  disabled?: boolean;
  horizontal?: boolean;
};

const RadioGroup: React.FC<RadioGroupProps> = ({ name, items, value, onChange, disabled, horizontal }) => {
  const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => onChange(e.currentTarget.value);

  let fieldsetClass = style.wrapper;
  if (horizontal) {
    fieldsetClass+= ` ${style.horizontal}`;
  }

  return (
    <fieldset className={fieldsetClass} disabled={disabled}>
      {items.map((i) => (
        <RadioButton
          key={i.value}
          name={name}
          value={i.value}
          title={i.label}
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
