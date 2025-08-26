import React from "react";
import { useContextMenuState } from "./context";
import type { ContextMenuTriggerProps } from "./types";
import style from "./contextmenu.module.css";

const ContextMenuTrigger: React.FC<ContextMenuTriggerProps> = ({ children, asChild = false }) => {
  const { isOpen, setIsOpen, triggerRef, setPosition } = useContextMenuState();

  const openMenuAtCursor = (event: React.MouseEvent) => {
    event.preventDefault();
    setPosition({ x: event.clientX, y: event.clientY });
    setIsOpen(true);
  };

  const toggleMenuBelowTrigger = () => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const MENU_OFFSET = 4;

    setPosition({ x: rect.left, y: rect.bottom + MENU_OFFSET });
    setIsOpen(!isOpen);
  };

  const triggerProps = {
    onContextMenu: openMenuAtCursor,
    onClick: toggleMenuBelowTrigger
  };

  if (asChild && React.isValidElement(children)) {
    const element = children as React.ReactElement<Record<string, unknown>>;
    return React.cloneElement(element, {
      ref: triggerRef,
      ...triggerProps
    });
  }

  return (
    <div ref={triggerRef as React.RefObject<HTMLDivElement>} {...triggerProps} className={style.trigger}>
      {children}
    </div>
  );
};

export default ContextMenuTrigger;
