import React, { FC } from "react";
import Accordion, { AccordionProps } from "../Accordion";

const Example: FC<AccordionProps> = ({ items, size, groupId }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        gap: ".5rem",
        width: "600px"
      }}
    >
      <Accordion items={items} size={size} groupId={groupId} />
    </div>
  );
};

export default Example;
