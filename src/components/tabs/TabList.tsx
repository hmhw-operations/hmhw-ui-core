import styles from "./tabs.module.css";
import React, { useState } from "react";
import { TabItemProps, TabListProps } from "./types";
import TabItem from "./TabItem";
import Icon from "../icon/Icon";
import { sanitizeForId } from "../../utils";

const TabList: React.FC<TabListProps> = ({ children, activeTabIndex = 0, size = "medium" }) => {
  const [activeTab, setActiveTab] = useState(activeTabIndex);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  const tabs = React.Children.toArray(children).filter((child): child is React.ReactElement<TabItemProps> => React.isValidElement(child) && child.type === TabItem);

  return (
    <div className={`styles.tabs ${styles[size]}`} role="tablist" aria-orientation="horizontal">
      <nav className={styles.tabnav}>
        <ul className={styles.tabs_list} role="tablist" aria-orientation="horizontal">
          {tabs.map((tab, index) => (
            <li key={`tab-${index}`}>
              <button
                type="button"
                disabled={tab.props.disabled}
                key={`tab-${index}`}
                role="tab"
                id={`tab-${sanitizeForId(tab.props.label)}`}
                aria-controls={`panel-${sanitizeForId(tab.props.label)}`}
                aria-selected={activeTab === index}
                onClick={() => handleTabClick(index)}
                className={`${styles.tabs_button} `}
              >
                {tab.props.icon && <Icon {...tab.props.icon} />}
                <span className={tab.props.icon ? styles.tab_label_with_icon : undefined}>{tab.props.label}</span>
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
