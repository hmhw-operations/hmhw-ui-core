import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "IconButton",
  component: Example,
  argTypes: {
    variant: {
      table: {
        // Hide the variant control for all stories of button
        disable: true
      }
      // Disable the variant control for all stories of button
      // control: false,
    }
  }
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    label: "Button",
    size: "medium",
    variant: "primary",
    onClick: () => console.log("Button"),
    disabled: false,
    icon: "close"
  },
  argTypes: {}
};

export const Secondary: Story = {
  args: {
    label: "Button",
    size: "medium",
    variant: "secondary",
    onClick: () => console.log("Button"),
    disabled: false,
    icon: "close"
  },
  argTypes: {}
};

export const Tertiary: Story = {
  args: {
    label: "Button",
    size: "medium",
    variant: "tertiary",
    onClick: () => console.log("Button"),
    disabled: false,
    icon: "close"
  },
  argTypes: {}
};

export const Destructive: Story = {
  args: {
    label: "Button",
    size: "medium",
    variant: "destructive",
    onClick: () => console.log("Button"),
    disabled: false,
    icon: "close"
  },
  argTypes: {}
};
