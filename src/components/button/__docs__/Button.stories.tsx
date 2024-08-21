import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import React from "react";
import Icon from "../../icon/Icon";

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
      // control: false,
    },
    icon: {
      table: {
        disable: true,
      },
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
    disabled: false,
  },
  argTypes: {
    iconPosition: {
      table: {
        disable: true,
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    text: "Button",
    size: "medium",
    variant: "secondary",
    onClick: () => console.log("Button"),
    disabled: false,
  },
  argTypes: {
    iconPosition: {
      table: {
        disable: true,
      },
    },
  },
};

export const Tertiary: Story = {
  args: {
    text: "Button",
    size: "medium",
    variant: "tertiary",
    onClick: () => console.log("Button"),
  },
  argTypes: {
    iconPosition: {
      table: {
        disable: true,
      },
    },
  },
};

export const Destructive: Story = {
  args: {
    text: "Button",
    size: "medium",
    variant: "destructive",
    onClick: () => console.log("Button"),
    disabled: false,
  },
  argTypes: {
    iconPosition: {
      table: {
        disable: true,
      },
    },
  },
};

export const WithIcon: Story = {
  args: {
    text: "Button",
    size: "medium",
    variant: "primary",
    onClick: () => console.log("Button"),
    iconPosition: "trailing",
    icon: <Icon name="add" />,
    disabled: false,
  },
  argTypes: {
    variant: {
      table: {
        disable: false,
      },
    },
  },
};
