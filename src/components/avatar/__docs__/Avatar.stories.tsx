import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Avatar",
  component: Example,
  argTypes: {
    variant: {
      table: {
        disable: false
      }
    }
  },
  args: {
    src: "https://i.pravatar.cc/64?img=11"
  }
};

export default meta;
type Story = StoryObj<typeof Example>;

export const WithoutImage: Story = {
  args: {
    name: "Madonna",
    size: "medium",
    variant: "circle",
    src: ""
  }
};

export const Square: Story = {
  args: {
    src: "https://i.pravatar.cc/150?img=11",
    name: "Alex Smith",
    size: "x-large",
    variant: "square"
  }
};

export const Small: Story = {
  args: {
    name: "Sam Lee",
    size: "small"
  }
};

export const Medium: Story = {
  args: {
    name: "Emily Clark",
    size: "medium"
  }
};

export const Large: Story = {
  args: {
    name: "Laura Green",
    size: "large"
  }
};

export const ExtraLarge: Story = {
  args: {
    name: "Michael Brown",
    size: "x-large"
  }
};
