import type { Meta, StoryObj } from "@storybook/react";

import SidePanel from "../SidePanel";

const meta: Meta<typeof SidePanel> = {
  title: "SidePanel",
  component: SidePanel,
};

export default meta;
type Story = StoryObj<typeof SidePanel>;

export const Default: Story = {
  args: {
    open: true,
    onClose: () => console.log("onClose"),
    side: "right",
    size: "large",
    titleComponent: "Panel title",
    actions: [
      {
        label: "Action 1",
        buttonVariant: "primary",
        onClick: () => console.log("Action 1 clicked"),
      },
      {
        label: "Action 2",
        buttonVariant: "secondary",
        onClick: () => console.log("Action 2 clicked"),
      },
    ],
    children: (
      <div>
        <p>This is the content of the side panel.</p>
        <p>
          You can add any content here, such as forms, lists, or other
          components.
        </p>
      </div>
    ),
  },
};
