import type { Meta, StoryObj } from "@storybook/react";
import Select from '../Select';

const options = ["Carne Asada", "Carne Al Pastor", "Birria Tacos", "Tacos"];

const meta: Meta<typeof Select> = {
  title: "Select",
  component: Select,
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options,
    size: "medium",
    disabled: false,
  },
};

export const Primary: Story = {
  name: 'Custom placeholder',
  ...Select,
  args: {
    options,
    size: "medium",
    disabled: false,
    placeholder: "Select a meal",
  }
};

