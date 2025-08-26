import type { Meta, StoryObj } from "@storybook/react";
import RightClickContextMenuExample, { IconButtonDropdownExample } from "./Example";

const meta: Meta<typeof RightClickContextMenuExample> = {
  title: "ContextMenu",
  component: RightClickContextMenuExample
};

export default meta;

type ContextMenuStory = StoryObj<typeof RightClickContextMenuExample>;
type IconButtonStory = StoryObj<typeof IconButtonDropdownExample>;

export const RightClickContextMenu: ContextMenuStory = {};

export const IconButtonDropdown: IconButtonStory = {
  render: () => <IconButtonDropdownExample />
};
