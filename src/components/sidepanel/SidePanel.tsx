import React, { useEffect, useRef } from "react";
import style from "./sidepanel.module.css";
import { BaseComponentProps, Size } from "../../types";
import { IconButton } from "../iconbutton";

export type Side = "left" | "right";

export type SidePanelProps = BaseComponentProps & {
  children: React.ReactNode;
  size?: Size;
  open?: boolean;
  side?: Side;
};

export type SidePanelHeaderProps = {
  children?: React.ReactNode;
  onClose?: () => void;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

export type SidePanelContentProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export type SidePanelFooterProps = {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLElement>;

const SidePanelHeader: React.FC<SidePanelHeaderProps> = ({ children, onClose, className = "", ...htmlAttributes }) => {
  const headerClasses = `${style.header} ${className}`.trim();

  return (
    <header className={headerClasses} {...htmlAttributes}>
      {children && <div className={style.title}>{children}</div>}
      {onClose && <IconButton icon="close" label="Close" title="Close" aria-label="Close side panel" id="modalbutton_close" onClick={onClose} size="medium" variant="tertiary" />}
    </header>
  );
};

const SidePanelContent: React.FC<SidePanelContentProps> = ({ children, className = "", ...htmlAttributes }) => {
  const contentClasses = `${style.content} ${className}`.trim();

  return (
    <div className={contentClasses} {...htmlAttributes}>
      {children}
    </div>
  );
};

const SidePanelFooter: React.FC<SidePanelFooterProps> = ({ children, className = "", ...htmlAttributes }) => {
  const footerClasses = `${style.footer} ${className}`.trim();

  return (
    <footer className={footerClasses} {...htmlAttributes}>
      {children}
    </footer>
  );
};

const SidePanelBase: React.FC<SidePanelProps> = ({ open = false, children, size = "medium", side = "right", ...baseProps }) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && panelRef.current) {
      panelRef.current.focus();
    }
  }, [open]);

  const panelClasses = `${style.sidepanel} ${style[size]} ${style[side]} ${open ? style.open : ""}`.trim();

  return (
    <div ref={panelRef} className={panelClasses} tabIndex={-1} role="dialog" aria-modal="true" style={{ display: open ? "grid" : "none" }} {...baseProps}>
      {children}
    </div>
  );
};

type SidePanelCompoundComponent = typeof SidePanelBase & {
  Header: typeof SidePanelHeader;
  Content: typeof SidePanelContent;
  Footer: typeof SidePanelFooter;
};

const SidePanel = SidePanelBase as SidePanelCompoundComponent;
SidePanel.Header = SidePanelHeader;
SidePanel.Content = SidePanelContent;
SidePanel.Footer = SidePanelFooter;

export default SidePanel;
