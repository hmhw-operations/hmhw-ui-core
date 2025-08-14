import { toast as sonnerToast, Toaster as SonnerToaster } from "sonner";
import styles from "./Toast.module.css";
import { IconButton } from "../iconbutton";
import { Icon } from "../icon";
import { SvgName } from "../icon/types";

export function toast(toast: Omit<ToastProps, "id">) {
  return sonnerToast.custom((id) => <Toast id={id} title={toast.title} onClose={toast.onClose} type={toast.type} weak={toast.weak} />, {
    duration: toast.duration,
    position: toast.position || "bottom-left"
  });
}

const iconMap: Record<ToastType, SvgName> = {
  info: "info",
  critical: "alarm",
  success: "check",
  caution: "caution",
  warning: "warning"
};

function Toast(props: ToastProps) {
  const { title, id, onClose, type, weak } = props;

  return (
    <div className={`${styles.toast} ${styles[type || "info"]} ${weak ? styles.weak : ""}`} role="status">
      <div className={`${styles.container}`}>
        <Icon name={iconMap[type || "info"] as SvgName} size="medium" />
        <p className={`${styles.title}`}>{title}</p>
      </div>
      <IconButton
        icon="close"
        id={`toast-icon-button-${id}`}
        label={"Close"}
        title={"Close"}
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
