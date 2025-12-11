import { Meta, StoryObj } from "@storybook/react";
import Tag from "../Tag";
import { SIZE_OPTIONS } from "../../../types";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "Tag",
  argTypes: {
    text: { control: "text" },
    size: { control: "select", options: SIZE_OPTIONS },
    // status: { control: "select", options: Status },
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
    status: "neutral",
    rounded: false,
    weak: false
  }
};
