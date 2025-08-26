export type MenuPosition = { x: number; y: number };

export type ContextMenuState = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  triggerRef: React.RefObject<HTMLElement | null>;
  position: MenuPosition;
  setPosition: (position: MenuPosition) => void;
  onSelect?: (value: string) => void;
};

export type ContextMenuProps = {
  children: React.ReactNode;
  onSelect?: (value: string) => void;
};

export type ContextMenuTriggerProps = {
  children: React.ReactNode;
  asChild?: boolean;
};

export type ContextMenuContentProps = {
  children: React.ReactNode;
  className?: string;
};
