import type { Meta, StoryObj } from "@storybook/react";
import Numeric from "../Numeric";

const meta: Meta<typeof Numeric> = {
  title: "Numeric",
  component: Numeric,
  args: { id: "input-id", label: "Label" }
};
export default meta;

type Story = StoryObj<typeof Numeric>;
export const Default: Story = {
  args: { id: "input-id", placeholder: 0, value: 10 }
};
export const Primary: Story = {
  name: "Numerical with decimals & units",
  ...Numeric,
  args: {
    id: "input-id",
    value: 25,
    decimals: 2,
    unit: "m/s",
    label: "This is the label",
    helperText: "This is the helper text",
    labelPosition: "top"
  }
};
