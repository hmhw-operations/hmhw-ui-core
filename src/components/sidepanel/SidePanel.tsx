import React, { useEffect, useRef } from "react";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/variables.css";
import style from "./sidepanel.module.css";
import { Button } from "../button";
import { ButtonVariant } from "../button/Button";
import { BaseComponentProps, Size } from "../../types";
import { IconButton } from "../iconbutton";

export type Side = "left" | "right";

export type ActionType = {
  label: string;
  buttonVariant: ButtonVariant;
  onClick: () => void;
  disabled?: boolean;
};

export type SidePanelProps = BaseComponentProps & {
  children?: React.ReactNode;
  titleComponent: React.ReactNode;
  size?: Size;
  open?: boolean;
  actions?: ActionType[];
  onClose?: () => void;
  side?: Side;
};

const SidePanel: React.FC<SidePanelProps> = ({
  open = false,
  onClose,
  children,
  actions,
  size = "medium",
  titleComponent,
  side = "right",
}) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && panelRef.current) {
      panelRef.current.focus();
    }
  }, [open]);

  return (
    <div
      ref={panelRef}
      className={`${style.sidepanel} ${style[size]} ${style[side]} ${open ? style.open : ""}`}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      style={{ display: open ? "block" : "none" }}
    >
      <header className={style.header}>
        <h3 className={style.title}>{titleComponent}</h3>
        <IconButton
          variant="tertiary"
          icon="close"
          label="X"
          title="Close"
          aria-label="Close side panel"
          id="modalbutton_close"
          onClick={onClose}
          size="medium"
        />
      </header>
      <div className={style.content}>{children}</div>
      <footer className={style.footer}>
        {actions?.map((action) => (
          <Button
            id={`sidepanelbutton_${action.label}`}
            title={action.label}
            variant={action.buttonVariant}
            key={action.label}
            onClick={action.onClick}
            text={action.label}
            disabled={action.disabled}
          />
        ))}
      </footer>
    </div>
  );
};

export default SidePanel;
