import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "TextLink",
  component: Example,
  argTypes: {
    href: {
      control: { type: "text" }
    },
    text: {
      control: { type: "text" }
    },
    isExternal: {
      control: { type: "boolean" }
    },
    newTab: {
      control: { type: "boolean" }
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"]
    }
  }
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Icon: Story = {
  args: {
    href: "https://vg.no",
    text: "Example Link",
    isExternal: true,
    newTab: true,
    size: "small"
  }
};
