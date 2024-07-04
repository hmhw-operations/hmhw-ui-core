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
    <dialog ref={dialogRef} className={`${style.modal} ${style[size]}`} onClose={handleClose}>
      <div>
        {icon && icon} {title}
        <div>
          <button onClick={handleClose}>X</button>
          {/* <IconButton icon={() => <div>x</div>} onClick={handleClose} /> */}
        </div>
        <div>{children}</div>
        <div>
          {actions?.length &&
            actions.map((a) => {
              return <Button variant={a.buttonVariant} key={a.label} onClick={a.onClick} text={a.label} />;
            })}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
