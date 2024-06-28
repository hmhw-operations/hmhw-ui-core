import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import React from "react";

const MockSunIcon = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.2038 1.27557L7.19549 5.28386C6.82806 5.65129 6.82806 6.25253 7.19549 6.61996L11.2038 10.6282C11.5712 10.9957 12.1724 10.9957 12.5399 10.6282L16.5482 6.61996C16.9156 6.25253 16.9156 5.65129 16.5482 5.28386L12.5399 1.27557C12.1724 0.908143 11.5712 0.908143 11.2038 1.27557Z"
        fill="currentColor"
      />
      <path
        d="M5.15569 7.32366L1.1474 11.332C0.779969 11.6994 0.77997 12.3006 1.1474 12.668L5.15569 16.6763C5.52311 17.0438 6.12436 17.0438 6.49178 16.6763L10.5001 12.668C10.8675 12.3006 10.8675 11.6994 10.5001 11.332L6.49178 7.32366C6.12436 6.95624 5.52311 6.95624 5.15569 7.32366Z"
        fill="currentColor"
      />
      <path
        d="M13.2436 11.332L17.2519 7.32366C17.6193 6.95624 18.2205 6.95624 18.588 7.32366L22.5963 11.332C22.9637 11.6994 22.9637 12.3006 22.5963 12.668L18.588 16.6763C18.2205 17.0438 17.6193 17.0438 17.2519 16.6763L13.2436 12.668C12.8762 12.3006 12.8762 11.6994 13.2436 11.332Z"
        fill="currentColor"
      />
      <path
        d="M11.2038 13.3718L7.19549 17.38C6.82806 17.7475 6.82806 18.3487 7.19549 18.7161L11.2038 22.7244C11.5712 23.0919 12.1724 23.0919 12.5399 22.7244L16.5482 18.7161C16.9156 18.3487 16.9156 17.7475 16.5482 17.38L12.5399 13.3718C12.1724 13.0043 11.5712 13.0043 11.2038 13.3718Z"
        fill="currentColor"
      />
    </svg>
  );
};

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
    icon: <MockSunIcon />,
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
