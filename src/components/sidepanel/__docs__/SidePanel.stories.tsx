import type { Meta, StoryObj } from "@storybook/react";

import SidePanel from "../SidePanel";

const meta: Meta<typeof SidePanel> = { title: "SidePanel", component: SidePanel };

export default meta;
type Story = StoryObj<typeof SidePanel>;

export const Default: Story = {
  args: {
    open: true,
    onClose: () => console.log("onClose"),
    side: "right",
    size: "large",
    titleComponent: <div>Panel Title</div>,
    actions: [
      { label: "Action 1", buttonVariant: "primary", onClick: () => console.log("Action 1 clicked") },
      { label: "Action 2", buttonVariant: "secondary", onClick: () => console.log("Action 2 clicked") },
    ],
  },
};
