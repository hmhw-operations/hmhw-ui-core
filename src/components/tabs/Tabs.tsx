import styles from "./tabs.module.css";

export type TabItem = {
  label: string;
  id: string;
  content: string; // TODO: React Child node
};

export type TabPros = {
  items: TabItem[];
};

const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <nav className={styles.tabnav}>
        <ul className={styles.tablist} role="tablist" aria-orientation="horizontal">
          <li>
            <button>Tab 1</button>
          </li>
          <li>
            <button>Tab 2</button>
          </li>
          <li>
            <button>Tab 3</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Tabs;
