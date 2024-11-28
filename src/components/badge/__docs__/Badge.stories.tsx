import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import React from "react";
import EmptyExample from "./EmptyExample";

const meta: Meta<typeof Example> = {
  title: "Badge",
  component: Example,
};

export default meta;

export const Default: StoryObj<typeof Example> = {
  args: {
    type: "primary",
    label: "Badge",
    size: "medium",
  },
};

export const Empty: StoryObj<typeof EmptyExample> = {
  args: {
    type: "primary",
    size: "medium",
    label: "5",
    rounded: true,
  },
  render: (args) => <EmptyExample {...args} />,
};
