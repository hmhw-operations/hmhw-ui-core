import { Meta, StoryObj } from "@storybook/react";
import Tag from "../Tag";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "Tag",
  argTypes: {
    text: { control: "text" },
    size: { control: "select", options: ["x-small", "small", "medium", "large", "x-large"] },
    type: { control: "select", options: ["neutral", "accent", "info", "caution", "warning", "success", "danger"] },
    rounded: { control: "boolean" },
    weak: { control: "boolean" }
  }
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    text: "Tag",
    size: "medium",
    type: "neutral",
    rounded: false,
    weak: false
  }
};
