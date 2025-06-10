import React from "react";
import TabList from "../TabList";
import TabItem from "../TabItem";
import { TabListItem } from "../types";

const tabItems: TabListItem[] = [
  {
    label: "Overview",
    id: "tab-1",
    content: () => <p>Overview Content</p>,
    icon: { name: "home", size: "small" }
  },
  {
    label: "Settings",
    id: "tab-2",
    content: () => <p>Settings Content</p>,
    icon: { name: "settings", size: "small" }
  },
  {
    label: "Help",
    id: "tab-3",
    content: () => <p>Help Content</p>,
    icon: { name: "help", size: "small" },
    disabled: true
  }
];

const Example: React.FC = () => (
  <TabList activeTabIndex={0}>
    {tabItems.map((tab) => (
      <TabItem key={tab.id} label={tab.label} disabled={tab.disabled} icon={tab.icon}>
        {tab.content()}
      </TabItem>
    ))}
  </TabList>
);

export default Example;
