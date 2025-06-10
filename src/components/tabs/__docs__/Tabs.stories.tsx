import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Tabs",
  component: Example,
  args: {
    size: "medium",
    tabs: [
      { label: "Overview", icon: "home" },
      { label: "Settings", icon: "settings" },
      { label: "Help", icon: "help", disabled: true }
    ]
  },
  argTypes: {
    size: {
      control: "select",
      options: ["small", "medium", "large", "x-large"],
      description: "Size of the tabs and icons"
    },
    tabs: {
      control: "object",
      description: "Array of tab configurations"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Example>;

export const Default: Story = {};

export const NoIcons: Story = {
  args: {
    tabs: [{ label: "Tab 1" }, { label: "Tab 2" }, { label: "Tab 3", disabled: true }]
  }
};

export const SmallTabs: Story = {
  args: {
    size: "small"
  }
};

export const LargeTabs: Story = {
  args: {
    size: "large"
  }
};
