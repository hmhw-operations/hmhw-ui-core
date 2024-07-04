import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { AccordionItem } from "../Accordion";
import React from "react";
const MockComponent: React.FC<{ text: string }> = ({ text }) => <div>{text}</div>;
const items: AccordionItem[] = [
  {
    label: "Item 1",
    content: <MockComponent text="Content 1" />,
  },
  {
    label: "Item 2",
    content: <MockComponent text="Content 2" />,
  },
  {
    label: "Item 3",
    content: <MockComponent text="Content 3" />,
  },
];

const meta: Meta<typeof Example> = {
  title: "Accordion",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    items,
  },
};
