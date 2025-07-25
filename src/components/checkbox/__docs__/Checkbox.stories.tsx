import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Checkbox",
  component: Example
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    label: "I am the label!",
    size: "medium"
  }
};
