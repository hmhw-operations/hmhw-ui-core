import React, { useRef, useEffect, useCallback } from "react";
import { useContextMenuState } from "./context";
import MenuList, { type MenuListItemProps } from "../menulist/MenuList";
import type { ContextMenuContentProps } from "./types";
import style from "./contextmenu.module.css";

const ContextMenuContent: React.FC<ContextMenuContentProps> = ({ children, className }) => {
  const { isOpen, setIsOpen, position, onSelect } = useContextMenuState();
  const contentRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => setIsOpen(false), [setIsOpen]);

  const isClickOutsideMenu = useCallback((target: Node) => {
    return contentRef.current && !contentRef.current.contains(target);
  }, []);

  const handleDocumentClick = useCallback(
    (event: MouseEvent) => {
      if (isClickOutsideMenu(event.target as Node)) {
        closeMenu();
      }
    },
    [isClickOutsideMenu, closeMenu]
  );

  const handleEscapeKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    },
    [closeMenu]
  );

  useEffect(() => {
    if (!isOpen) return;

    document.addEventListener("mousedown", handleDocumentClick);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, handleDocumentClick, handleEscapeKey]);

  const createItemClickHandler = useCallback(
    (itemValue: string, originalOnClick?: () => void) => {
      return () => {
        originalOnClick?.();
        onSelect?.(itemValue);
        closeMenu();
      };
    },
    [onSelect, closeMenu]
  );

  const extractItemValue = (itemProps: MenuListItemProps): string => {
    return itemProps.name || itemProps.children?.toString() || "unknown";
  };

  const enhanceMenuItemsWithSelection = useCallback(
    (children: React.ReactNode): React.ReactNode => {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === MenuList.Item) {
          const itemProps = child.props as MenuListItemProps;
          const itemValue = extractItemValue(itemProps);
          const originalOnClick = itemProps.onClick;

          return React.cloneElement(child as React.ReactElement<MenuListItemProps>, {
            ...itemProps,
            onClick: createItemClickHandler(itemValue, originalOnClick)
          });
        }
        return child;
      });
    },
    [createItemClickHandler]
  );

  if (!isOpen) return null;

  return (
    <>
      <div className={style.overlay} />
      <div ref={contentRef} className={`${style.content} ${className || ""}`} style={{ left: position.x, top: position.y }}>
        <MenuList>{enhanceMenuItemsWithSelection(children)}</MenuList>
      </div>
    </>
  );
};

export default ContextMenuContent;
