import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
  argTypes: {
    variant: {
      table: {
        // Hide the variant control for all stories of button
        disable: true,
      },
      // Disable the variant control for all stories of button
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: "Button",
    size: "medium",
    variant: "primary",
    onClick: () => console.log("Button"),
  },
};
export const Secondary: Story = {
  args: {
    text: "Button",
    size: "medium",
    variant: "secondary",
    onClick: () => console.log("Button"),
  },
  // argTypes: {
  //   variant: {
  //     control: false,
  //   },
  // },
};


export const Tertiary: Story = {
  args: {
    text: "Button",
    size: "medium",
    variant: "tertiary",
    onClick: () => console.log("Button"),
  },
  // argTypes: {
  //   variant: {
  //     control: false,
  //   },
  // },
};