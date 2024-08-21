import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Icon",
  component: Example,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Icon: Story = {
  args: {
    name: "day",
    size: "medium",
  },
};
