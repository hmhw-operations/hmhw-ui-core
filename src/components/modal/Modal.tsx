import React, { useEffect, useRef } from "react";
import style from "./modal.module.css";
import { Button } from "../button";
import { ButtonVariant } from "../button/Button";

export type ActionType = {
  label: string;
  buttonVariant: ButtonVariant;
  onClick: () => void;
};

export type ModalSize = "small" | "medium" | "large";

export type ModalProps = {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  title: React.ReactNode;
  size?: ModalSize;
  open?: boolean;
  actions?: ActionType[];
  onClose?: () => void;
};

const Modal: React.FC<ModalProps> = ({ open, onClose, children, actions, size = "medium", title, icon }) => {
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
          console.error("The showModal method is not supported by this browser.");
        }
      } else {
        dialog.close();
      }
    }
  }, [open]);

  return (
    <dialog ref={dialogRef} className={`${style.modal} ${style[size]}`} onClose={handleClose} tabIndex={0}>
      <header>
        <h3>
          {" "}
          {icon && icon} {title}
        </h3>
        <button className={`${style.modal_close}`} onClick={handleClose}>
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
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
          actions.map((a) => {
            return <Button variant={a.buttonVariant} key={a.label} onClick={a.onClick} text={a.label} />;
          })}
      </footer>
    </dialog>
  );
};

export default Modal;
