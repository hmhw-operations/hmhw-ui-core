import type { Meta, StoryObj } from "@storybook/react";
import Input from "../Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", "x-large"],
      description: "Size of the input field"
    },
    type: {
      control: { type: "select" },
      options: ["text", "number", "password", "email", "tel", "file"],
      description: "Size of the input field"
    }
  },
  args: { id: "input-id", label: "Label" }
};
export default meta;

type Story = StoryObj<typeof Input>;
export const Default: Story = {
  args: { id: "input-id", placeholder: "Placeholder" }
};
export const Primary: Story = {
  name: "With units",
  ...Input,
  args: {
    id: "input-id",
    value: "",
    unit: "m/s",
    label: "This is the label",
    helperText: "This is the helperText",
    labelPosition: "top"
  }
};
