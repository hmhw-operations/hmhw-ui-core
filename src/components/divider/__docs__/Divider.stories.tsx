import type { Meta, StoryObj } from "@storybook/react";
import { Example, HorizontalExample, VerticalExample } from "./Example";
import React from "react";

export const Horizontal: StoryObj<typeof HorizontalExample> = {
  args: {
    orientation: "horizontal",
    weight: "thick",
    type: "primary"
  },
  render: (args) => <HorizontalExample {...args} />
};

export const Vertical: StoryObj<typeof VerticalExample> = {
  args: {
    orientation: "vertical",
    weight: "thick",
    type: "primary"
  },
  render: (args) => <VerticalExample {...args} />
};

export const Default: StoryObj<typeof Example> = {
  args: {
    orientation: "horizontal",
    weight: "thick",
    type: "primary"
  },
  render: (args) => <Example {...args} />
};

const meta: Meta = {
  title: "Divider",
  component: Example
};

export default meta;
