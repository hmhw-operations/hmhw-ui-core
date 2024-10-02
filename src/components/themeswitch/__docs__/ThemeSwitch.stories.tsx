import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "ThemeSwitch",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    onChange: () => console.log("ThemeSwitch"),
    size: "small",
    id: "themeswitch",
    name: "themeswitch",
    // label: "ThemeSwitch",
    // labelPosition: "right",
  },
  argTypes: {
    checked: {
      table: {
        disable: true,
      },
    },
  },
};
