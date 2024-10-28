import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const options = ["Carne Asada", "Carne Al Pastor", "Birria Tacos", "Tacos"];

const meta: Meta<typeof Example> = {
  title: "Select",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    options,
    size: "medium",
    disabled: false,
  },
};
