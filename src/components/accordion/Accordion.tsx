// components/accordion/Accordion.tsx
import style from "./accordion.module.css";
import Icon from "../icon/Icon";
import React from "react";
import { Size } from "../../types";

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
    <details name="tech-specs" key={item.label + index} className={`${style.accordion} ${style[size ?? "medium"]}`}>
      <summary className={`${style.header} `}>
        <Icon name={"caret-right"} size={size ?? "small"} />
        {item.label}
      </summary>
      <div className={style.content}>{item.content}</div>
    </details>
  ));
};

export default Accordion;
