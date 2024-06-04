// components/accordion/Accordion.tsx

import React from "react";

export type AccordionProps = {
  text: string;
};

const Accordion: React.FC<AccordionProps> = ({ text }) => {
  return <div>I am an accordion ... {text}</div>;
};

export default Accordion;
