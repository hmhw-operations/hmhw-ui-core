import React, { useEffect, useRef } from "react";
import "../../styles/globals.css";
import "../../styles/palette.css";
import "../../styles/tokens.css";
import "../../styles/variables.css";
import style from "./modal.module.css";
import { Button } from "../button";
import { ButtonVariant } from "../button/Button";
import { BaseComponentProps, Size } from "../../types";

export type ActionType = {
  label: string;
  buttonVariant: ButtonVariant;
  onClick: () => void;
};

export type ModalProps = BaseComponentProps & {
  children?: React.ReactNode;
  iconComponent?: React.ReactNode;
  titleComponent: React.ReactNode;
  size?: Size;
  open?: boolean;
  actions?: ActionType[];
  onClose?: () => void;
};

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  actions,
  size = "medium",
  titleComponent,
  iconComponent,
}) => {
  // const [open, setIsOpen] = useState(isOpen);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClose = () => {
    dialogRef.current?.close();
    // setIsOpen(false);
    onClose && onClose();
  };

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog) {
      if (open) {
        if (typeof dialog.showModal === "function") {
          dialog.showModal();
        } else {
          console.error(
            "The showModal method is not supported by this browser."
          );
        }
      } else {
        dialog.close();
      }
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className={`${style.modal} ${style[size]}`}
      onClose={handleClose}
      tabIndex={0}
    >
      <header>
        <h3>
          {" "}
          {iconComponent || null} {titleComponent}
        </h3>
        <button
          title="Close"
          id="modalbutton_close"
          className={`${style.modal_close}`}
          onClick={handleClose}
        >
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </header>
      <div className={`${style.modal_content}`}>{children}</div>
      <footer>
        {actions?.length &&
          actions.map((action) => {
            return (
              <Button
                id={`modalbutton_${action.label}`}
                title={action.label}
                variant={action.buttonVariant}
                key={action.label}
                onClick={action.onClick}
                text={action.label}
              />
            );
          })}
      </footer>
    </dialog>
  );
};

export default Modal;
