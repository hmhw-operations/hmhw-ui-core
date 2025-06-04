import React from "react";
import styles from "./MenuList.module.css";
import { Icon } from "../icon";
import { SvgName } from "../icon/types";

export type MenuListProps = {
  children: React.ReactNode;
  className?: string;
  selectedKey?: string;
};

const MenuList: React.FC<MenuListProps> & {
  Item: typeof MenuListItem;
  Header: typeof MenuListHeader;
  SubList: typeof MenuListSubList;
} = ({ children, className, selectedKey }) => (
  <ul className={className ? `${styles.menuList} ${className}` : styles.menuList}>
    {React.Children.map(children, (child) => {
      if (React.isValidElement(child) && (child.type === MenuListItem || child.type === MenuListHeader || child.type === MenuListSubList)) {
        return React.cloneElement(child as React.ReactElement<MenuListItemProps | MenuListHeaderProps | MenuListSubListProps>, {
          selectedKey
        });
      }
      return child;
    })}
  </ul>
);

export type MenuListItemProps = {
  icon?: SvgName;
  children: React.ReactNode;
  onClick?: () => void;
  name?: string;
  selectedKey?: string;
};

const MenuListItem: React.FC<MenuListItemProps> = ({ icon, children, onClick, name, selectedKey }) => {
  const isSelected = name !== undefined && selectedKey === name;
  return (
    <li className={styles.menuListItem}>
      <button
        type="button"
        onClick={onClick}
        className={isSelected ? `${styles.menuListButton} ${styles.menuListButtonSelected}` : styles.menuListButton}
        aria-current={isSelected ? "page" : undefined}
        tabIndex={0}
      >
        {icon && <Icon name={icon} size="small" />}
        <span className={styles.menuListLabel}>{children}</span>
      </button>
    </li>
  );
};

export type MenuListHeaderProps = {
  label: string;
  children?: React.ReactNode;
  selectedKey?: string;
};

const MenuListHeader: React.FC<MenuListHeaderProps> = ({ label }) => (
  <li className={styles.menuListGroupHeader}>
    <div>{label}</div>
  </li>
);

export type MenuListSubListProps = {
  label: string;
  icon?: SvgName;
  children: React.ReactNode;
  name?: string;
  selectedKey?: string;
  defaultOpen?: boolean;
};

const MenuListSubList: React.FC<MenuListSubListProps> = ({ label, icon, children, name, selectedKey, defaultOpen = false }) => {
  const [open, setOpen] = React.useState(defaultOpen);
  // Expand if any child is selected or if this sublist is selected
  React.useEffect(() => {
    if (
      (selectedKey &&
        React.Children.toArray(children).some((child) => {
          return React.isValidElement<{ name?: string }>(child) && child.props.name === selectedKey;
        })) ||
      (name && selectedKey === name)
    ) {
      setOpen(true);
    }
  }, [selectedKey, children, name]);

  const isSelected = name !== undefined && selectedKey === name;

  return (
    <li className={styles.menuListItem}>
      <button
        type="button"
        className={isSelected ? `${styles.menuListButton} ${styles.menuListButtonSelected}` : styles.menuListButton}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        style={{ justifyContent: "space-between" }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {icon && <Icon name={icon} size="small" />}
          <span className={styles.menuListLabel}>{label}</span>
        </span>
        {open ? <Icon name="caret-down" size="small" /> : <Icon name="caret-right" size="small" />}
      </button>
      {open && (
        <ul className={styles.menuListSubList}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child) && (child.type === MenuListItem || child.type === MenuListSubList)) {
              return React.cloneElement(child as React.ReactElement<MenuListItemProps | MenuListSubListProps>, {
                selectedKey
              });
            }
            return child;
          })}
        </ul>
      )}
    </li>
  );
};

MenuList.Item = MenuListItem;
MenuList.Header = MenuListHeader;
MenuList.SubList = MenuListSubList;

export default MenuList;
