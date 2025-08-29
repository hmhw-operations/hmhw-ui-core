import React, { useState, useRef } from "react";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/variables.css";
import { ContextMenuContext } from "./context";
import ContextMenuTrigger from "./ContextMenuTrigger";
import ContextMenuContent from "./ContextMenuContent";
import type { ContextMenuProps, ContextMenuState, MenuPosition } from "./types";
import style from "./contextmenu.module.css";

const ContextMenu: React.FC<ContextMenuProps> & {
  Trigger: typeof ContextMenuTrigger;
  Content: typeof ContextMenuContent;
} = ({ children, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<MenuPosition>({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLElement | null>(null);

  const contextValue: ContextMenuState = {
    isOpen,
    setIsOpen,
    triggerRef,
    position,
    setPosition,
    onSelect
  };

  return (
    <ContextMenuContext.Provider value={contextValue}>
      <div className={style.root}>{children}</div>
    </ContextMenuContext.Provider>
  );
};

ContextMenu.Trigger = ContextMenuTrigger;
ContextMenu.Content = ContextMenuContent;

export default ContextMenu;
