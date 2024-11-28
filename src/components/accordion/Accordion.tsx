// components/accordion/Accordion.tsx
import style from "./accordion.module.css";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/variables.css";
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
    <details
      key={item.label + index}
      className={`${style.accordion} ${style[size ?? "medium"]}`}
    >
      <summary>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M11.2341 16.5873L14.6179 12.9779C15.1274 12.4344 15.1274 11.5564 14.6179 11.0129L11.2341 7.40354C10.411 6.53952 9 7.1527 9 8.39299V15.5979C9 16.8521 10.411 17.4653 11.2341 16.5873Z" />
        </svg>
        {item.label}
      </summary>
      <div className={style.content}>{item.content}</div>
    </details>
  ));
};

export default Accordion;
