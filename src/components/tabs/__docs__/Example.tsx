import React from "react";
import TabList from "../TabList";
import TabItem from "../TabItem";
import { TabListItem } from "../types";
import { Size } from "../../../types";
import { SvgName } from "../../icon/types";

export type ExampleProps = {
  size?: Size;
  tabs?: Array<{
    label: string;
    icon?: SvgName;
    disabled?: boolean;
  }>;
};

const Example: React.FC<ExampleProps> = ({ size = "medium", tabs }) => {
  const tabItems: TabListItem[] = (
    tabs || [
      { label: "Overview", icon: "home" },
      { label: "Settings", icon: "settings" },
      { label: "Help", icon: "help", disabled: true }
    ]
  ).map((tab, index) => ({
    label: tab.label,
    id: `tab-${index + 1}`,
    content: () => <p>{tab.label} Content</p>,
    icon: tab.icon ? { name: tab.icon, size } : undefined,
    disabled: tab.disabled
  }));

  return (
    <>
      <pre>Size: {size}</pre>
      <TabList size={size} activeTabIndex={0}>
        {tabItems.map((tab) => (
          <TabItem key={tab.id} label={tab.label} disabled={tab.disabled} icon={tab.icon}>
            {tab.content()}
          </TabItem>
        ))}
      </TabList>
    </>
  );
};

export default Example;
