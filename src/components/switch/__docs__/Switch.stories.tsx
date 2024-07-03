import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Switch",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    onChange: () => console.log("Switch"),
    size: "small",
    id: "switch",
    name: "switch",
    label: "Switch",
    labelPosition: "right",
  },
  argTypes: {
    checked: {
      table: {
        disable: true,
      },
    },
  },
};
