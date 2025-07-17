import { toast as sonnerToast, Toaster as SonnerToaster } from "sonner";
import styles from "./Toast.module.css";
import { IconButton } from "../iconbutton";
import { Icon } from "../icon";

export function toast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => <Toast id={id} title={toast.title} onClose={toast.onClose} type={toast.type} weak={toast.weak} />, {
    duration: toast.duration,
    position: toast.position || "bottom-left"
  });
}

function Toast(props: ToastProps) {
  const { title, id, onClose, type, weak } = props;

  return (
    <div className={`${styles.container} ${styles[type || "info"]} ${weak ? styles.weak : ""}`}>
      <div className={`${styles.main}`}>
        <Icon name="info" size="medium" />
        <p className={`${styles.title}`}>{title}</p>
      </div>
      <IconButton
        icon="close"
        id="toast-icon-button"
        label={"Close toast"}
        title={"Close toast"}
        variant="tertiary"
        size="large"
        onClick={() => {
          onClose?.();
          sonnerToast.dismiss(id);
        }}
      />
    </div>
  );
}

export function Toaster() {
  return <SonnerToaster />;
}

interface ToastProps {
  id: string | number;
  title: string;
  type?: ToastType;
  weak?: boolean;
  duration?: number;
  position?: ToastPosition;
  onClose?: () => void;
}

export type ToastType = "info" | "critical" | "success" | "caution" | "warning";
export type ToastPosition = "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center";
