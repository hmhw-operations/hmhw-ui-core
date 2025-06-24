import type { Meta, StoryObj } from "@storybook/react";
import Badge, { BadgeType } from "../badge";

const meta: Meta<typeof Badge> = {
  title: "Badge",
  component: Badge,
  argTypes: {
    text: { control: "text" },
    type: {
      control: "select",
      options: ["neutral", "info", "warning", "success", "critical"] as BadgeType[]
    },
    size: {
      control: "select",
      options: ["small", "medium", "large", "x-large"]
    },
    className: { control: "text" }
  }
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    text: "Badge",
    type: "neutral",
    size: "medium"
  }
};

export const AllTypes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 8 }}>
      <Badge {...args} type="neutral" text="9" />
      <Badge {...args} type="info" text="123" />
      <Badge {...args} type="warning" text="4" />
      <Badge {...args} type="success" text="2" />
      <Badge {...args} type="critical" text="-11" />
    </div>
  )
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: 8 }}>
      <Badge {...args} size="small" text="Small" />
      <Badge {...args} size="medium" text="Medium" />
      <Badge {...args} size="large" text="Large" />
    </div>
  )
};
