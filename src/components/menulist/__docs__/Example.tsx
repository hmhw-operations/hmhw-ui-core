import { useState } from "react";
import MenuList from "../MenuList";

// Add props for Storybook controls
const Example = ({ selectedKey: controlledSelectedKey, onSelectedKeyChange }) => {
  // If controlledSelectedKey is provided, use it; otherwise, use local state
  const [uncontrolledSelectedKey, setUncontrolledSelectedKey] = useState("home");
  const selectedKey = controlledSelectedKey ?? uncontrolledSelectedKey;
  const setSelectedKey = onSelectedKeyChange ?? setUncontrolledSelectedKey;

  return (
    <div>
      <MenuList selectedKey={selectedKey}>
        <MenuList.Header label="Main" />
        <MenuList.Item name="home" icon="home" onClick={() => setSelectedKey("home")}>
          Personaloversikt
        </MenuList.Item>
        <MenuList.Item name="branches" icon="branch" onClick={() => setSelectedKey("branch")}>
          Branches
        </MenuList.Item>
        <MenuList.Item name="code" icon="code" onClick={() => setSelectedKey("code")}>
          Code
        </MenuList.Item>
        <MenuList.SubList name="logs" label="Logs" icon="search">
          <MenuList.Item name="logs-all" onClick={() => setSelectedKey("logs-all")}>
            All Logs
          </MenuList.Item>
          <MenuList.Item name="logs-errors" onClick={() => setSelectedKey("logs-errors")}>
            Error Logs
          </MenuList.Item>
        </MenuList.SubList>
        <MenuList.Item name="settings" icon="wrench" onClick={() => setSelectedKey("settings")}>
          Settings
        </MenuList.Item>
        <MenuList.Header label="Account" />
        <MenuList.Item name="logout" icon="logout" onClick={() => setSelectedKey("logout")}>
          Logout
        </MenuList.Item>
      </MenuList>
    </div>
  );
};

export default Example;
