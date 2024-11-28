// components/accordion/Accordion.tsx
import style from "./accordion.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import React from "react";
import { Size } from "../../types";
import { Icon } from "../icon";

export type AccordionItem = {
  label: string;
  content: React.ReactNode;
};

export type AccordionProps = {
  items: AccordionItem[];
  size?: Size;
};

const Accordion: React.FC<AccordionProps> = ({ items, size }) => {
  return items.map((item, index) => (
    <details
      key={item.label + index}
      className={`${style.accordion} ${style[size ?? "medium"]}`}
    >
      <summary>
        <Icon name="caret-right-filled" size="small" />
        {item.label}
      </summary>
      <div className={style.content}>{item.content}</div>
    </details>
  ));
};

export default Accordion;
