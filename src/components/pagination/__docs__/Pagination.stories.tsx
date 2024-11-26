import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Pagination",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    totalPages: 10,
    currentPage: 1,
    skipMode: true,
    size: "medium",
    showMaxCount: true,
  },
};
