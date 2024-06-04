import React, { FC } from "react";
import Accordion, { AccordionProps } from "../Accordion";

const Example: FC<AccordionProps> = ({ text = "Accordion" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Accordion text={text} />
    </div>
  );
};

export default Example;
