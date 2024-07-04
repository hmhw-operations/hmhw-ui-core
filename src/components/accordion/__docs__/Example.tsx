import React, { FC } from "react";
import Accordion, { AccordionProps } from "../Accordion";

const Example: FC<AccordionProps> = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Accordion items={items} />
    </div>
  );
};

export default Example;
