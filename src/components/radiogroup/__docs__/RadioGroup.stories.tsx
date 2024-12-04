import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import RadioGroup from "../RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  title: "Radiogroup",
  component: Example,
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  args: {
    disabled: false,
    horizontal: false,
  },
};

export const Primary: Story = {
  name: "Horizontal",
  args: {
    disabled: false,
    horizontal: true,
  },
};