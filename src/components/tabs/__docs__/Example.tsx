import React from "react";
import TabList from "../TabList";
import TabItem from "../TabItem";
import { TabListItem } from "../types";

const tabItems: TabListItem[] = [
  { label: "Tab #1", id: "tab-1", content: () => <p>Content of Tab #1</p> },
  { label: "Tab #2", id: "tab-2", content: () => <p>Content of Tab #2</p>, disabled: true },
  { label: "Tab #3", id: "tab-3", content: () => <p>Content of Tab #3</p> },
];

const Example: React.FC = () => {
  return (
    <TabList activeTabIndex={1}>
      {tabItems.map((tab) => (
        <TabItem key={tab.id} label={tab.label} disabled={tab.disabled}>
          {tab.content()}
        </TabItem>
      ))}
    </TabList>
  );
};

export default Example;
