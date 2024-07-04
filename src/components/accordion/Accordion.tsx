// components/accordion/Accordion.tsx
import style from "./accordion.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import React from "react";

export type AccordionItem = {
  label: string;
  content: React.ReactNode;
};

export type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return items.map((item, index) => (
    <details key={item.label + index} className={style.accordion}>
      <summary>{item.label}</summary>
      <div>{item.content}</div>
    </details>
  ));
};

export default Accordion;
