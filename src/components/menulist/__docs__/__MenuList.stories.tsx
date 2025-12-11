import React from "react";
import MenuList from "../MenuList";
import Example from "./Example";

export default {
  title: "MenuList",
  component: MenuList,
  argTypes: {
    selectedKey: {
      control: { type: "text" },
      description: "The key of the currently selected item.",
      defaultValue: "home"
    }
    // You can add more controls for demonstration if needed
  }
};

export const Default = (args) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "400px"
    }}
  >
    {/* Pass selectedKey as a prop to Example if Example supports it, otherwise just show Example */}
    <Example {...args} />
  </div>
);

Default.args = {
  selectedKey: "home"
};
