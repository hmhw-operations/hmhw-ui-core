import React, { FC } from "react";
import ContextMenu from "../ContextMenu";
import MenuList from "../../menulist/MenuList";
import IconButton from "../../iconbutton/IconButton";

const DEMO_AREA_STYLES = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  padding: "2rem"
} as const;

const RIGHT_CLICK_AREA_STYLES = {
  padding: "2rem",
  border: "2px dashed #ccc",
  borderRadius: "8px",
  textAlign: "center",
  cursor: "context-menu"
} as const;

const showSelectedItemAlert = (actionType: string) => (value: string) => {
  console.log(`${actionType} item selected:`, value);
  alert(`Selected: ${value}`);
};

const RightClickContextMenuExample: FC = () => {
  return (
    <div style={DEMO_AREA_STYLES}>
      <ContextMenu onSelect={showSelectedItemAlert("Context menu")}>
        <ContextMenu.Trigger>
          <div style={RIGHT_CLICK_AREA_STYLES}>Right-click me for context menu</div>
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <MenuList.Item icon="file-copy" name="copy">
            Copy
          </MenuList.Item>
          <MenuList.Item icon="edit" name="edit">
            Edit
          </MenuList.Item>
          <MenuList.Item icon="trash" name="delete">
            Delete
          </MenuList.Item>
        </ContextMenu.Content>
      </ContextMenu>
    </div>
  );
};

export const IconButtonDropdownExample: FC = () => {
  return (
    <div style={DEMO_AREA_STYLES}>
      <ContextMenu onSelect={showSelectedItemAlert("Icon button menu")}>
        <ContextMenu.Trigger asChild>
          <IconButton id="actions-menu" title="Actions Menu" label="Actions" icon="more-horizontal" variant="secondary" />
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <MenuList.Item icon="user" name="profile">
            Profile
          </MenuList.Item>
          <MenuList.Item icon="settings" name="settings">
            Settings
          </MenuList.Item>
          <MenuList.Item icon="logout" name="logout">
            Sign out
          </MenuList.Item>
        </ContextMenu.Content>
      </ContextMenu>
    </div>
  );
};

export default RightClickContextMenuExample;
