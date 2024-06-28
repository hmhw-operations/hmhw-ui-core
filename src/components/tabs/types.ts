export type TabItemProps = {
  label: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

export type TabListProps = {
  activeTabIndex: number;
  children?: React.ReactElement<TabItemProps> | React.ReactElement<TabItemProps>[];
};

export type TabListItem = {
  label: string;
  id: string;
  content: () => React.ReactNode;
  disabled?: boolean;
};
