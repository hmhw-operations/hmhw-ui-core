import { Size } from "../../types";
import { IconProps } from "../icon/Icon";

export type TabItemProps = {
  label: string;
  disabled?: boolean;
  children?: React.ReactNode;
  icon?: IconProps;
};

export type TabListProps = {
  activeTabIndex: number;
  size?: Size;
  children?: React.ReactElement<TabItemProps> | React.ReactElement<TabItemProps>[];
};

export type TabListItem = {
  label: string;
  id: string;
  content: () => React.ReactNode;
  disabled?: boolean;
  icon?: IconProps;
};
