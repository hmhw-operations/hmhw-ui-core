// components/accordion/Accordion.tsx
import style from "./accordion.module.css";
import Icon from "../icon/Icon";
import React from "react";
import { Size } from "../../types";

/**
 * Represents a single accordion item with label and content
 */
export type AccordionItem = {
  /** The text displayed in the accordion header */
  label: string;
  /** The content displayed when the accordion is expanded */
  content: React.ReactNode;
};

/**
 * Props for the Accordion component
 */
export type AccordionProps = {
  /** Array of accordion items to display */
  items: AccordionItem[];
  /** Size variant for the accordion */
  size?: Size;
  /**
   * Optional group identifier. When provided, only one accordion item
   * in the group can be open at a time. Accordions with different
   * groupIds operate independently.
   */
  groupId?: string;
};

/**
 * Accordion component that displays a collapsible list of items.
 *
 * Features:
 * - Individual items can be expanded/collapsed
 * - Optional grouping for exclusive open/close behavior
 * - Cross-group independence when multiple groups are used
 * - Responsive design with size variants
 *
 * @example
 * ```tsx
 * // Basic usage (all items independent)
 * <Accordion items={items} />
 *
 * // Grouped behavior (only one open at a time)
 * <Accordion items={items} groupId="faq-section" />
 *
 * // Multiple independent groups
 * <Accordion items={groupAItems} groupId="group-a" />
 * <Accordion items={groupBItems} groupId="group-b" />
 * ```
 */
const Accordion: React.FC<AccordionProps> = ({ items, size, groupId }) => {
  return items.map((item, index) => (
    <details name={groupId ?? undefined} key={item.label + index} className={`${style.accordion} ${style[size ?? "medium"]}`}>
      <summary className={`${style.header} `}>
        <Icon name={"caret-right"} size={size ?? "small"} />
        {item.label}
      </summary>
      <div className={style.content}>{item.content}</div>
    </details>
  ));
};

export default Accordion;
