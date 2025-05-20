import type { Meta, StoryObj } from "@storybook/react";
import Input from "../Input";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  args: { id: "input-id", label: "Label" },
};
export default meta;

type Story = StoryObj<typeof Input>;
export const Default: Story = { args: { id: "input-id", placeholder: "Placeholder" } };
export const Primary: Story = {
  name: "With units",
  ...Input,
  args: { id: "input-id", value: "", unit: "m/s", label: "This is the label", helperText: "This is the helperText", labelPosition: "top" },
};
