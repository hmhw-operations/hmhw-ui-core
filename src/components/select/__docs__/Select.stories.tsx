import type { Meta, StoryObj } from "@storybook/react";
import Select, { SelectOption } from "../Select";

const options: SelectOption[] = [
  { value: "1", text: "Carne Asada" },
  { value: "2", text: "Carne Al Pastor" },
  { value: "3", text: "Birria Tacos" },
  { value: "4", text: "Tacos" },
  { value: "5", text: "Burrito" },
  { value: "6", text: "Quesadilla" },
  { value: "7", text: "Tortas" },
  { value: "8", text: "Tamales" },
  { value: "9", text: "Enchiladas" },
  { value: "10", text: "Chiles Rellenos" }
];

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options,
    size: "medium",
    disabled: false
  }
};

export const Primary: Story = {
  name: "Custom placeholder",
  ...Select,
  args: {
    options,
    size: "medium",
    disabled: false,
    placeholder: "Select a meal"
  }
};
