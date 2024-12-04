import { TabItemProps } from "./types";
import { sanitizeForId } from "../../utils";
import styles from "./tabs.module.css";

import "../../styles/tokens.css";
import "../../styles/globals.css";
import "../../styles/variables.css";

const TabItem: React.FC<TabItemProps> = ({ label, children }) => (
  <div
    className={styles.tab_panel}
    role="tabpanel"
    aria-labelledby={`tab-${sanitizeForId(label)}`}
    id={`panel-${sanitizeForId(label)}`}
  >
    {children}
  </div>
);

export default TabItem;
