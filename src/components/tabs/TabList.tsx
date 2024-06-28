import styles from "./tabs.module.css";
import React, { useState } from "react";
import { TabItemProps, TabListProps } from "./types";
import TabItem from "./TabItem";
import { sanitizeForId } from "./utils";

const TabList: React.FC<TabListProps> = ({ children, activeTabIndex = 0 }) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<TabItemProps> => React.isValidElement(child) && child.type === TabItem,
  );

  return (
    <div className={styles.tabs}>
      <nav className={styles.tabnav}>
        <ul className={styles.tablist} role="tablist" aria-orientation="horizontal">
          {tabs.map((tab, index) => (
            <li key={`tab-${index}`}>
              <button
                disabled={tab.props.disabled}
                key={`tab-${index}`}
                role="tab"
                id={`tab-${sanitizeForId(tab.props.label)}`}
                aria-controls={`panel-${sanitizeForId(tab.props.label)}`}
                aria-selected={activeTab === index}
                onClick={() => handleTabClick(index)}
                className={`${styles.tab_btn} ${activeTab === index && styles["tab_btn--active"]}}`}
              >
                {tab.props.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {tabs[activeTab]}
    </div>
  );
};

export default TabList;
