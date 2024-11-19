import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import React from "react";

const meta: Meta<typeof Example> = {
  title: "Progress Bar",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    size: "medium",
    progress: 61,
    description: undefined,
    label: undefined,
  },
};

export const WithLabels: Story = {
  args: {
    size: "medium",
    progress: 61,
    description: "Completed: 61%",
    label: "Completed: 61%",
  },
};
