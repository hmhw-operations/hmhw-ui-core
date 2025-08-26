import type { Meta, StoryObj } from "@storybook/react";

import Notification from "../Notification";

const meta: Meta<typeof Notification> = {
  title: "Notification",
  component: Notification
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {
    title: "Taco on sale",
    description: "Al pastor - two for one!",
    variant: "neutral",
    isDismissible: true,
    size: "medium",
    icon: "info"
  },
  argTypes: {}
};
