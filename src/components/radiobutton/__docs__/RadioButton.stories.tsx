import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Radiobutton",
  component: Example,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "x-large"],
      description: "Size of the input field"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    disabled: false,
    size: "medium"
  }
};
