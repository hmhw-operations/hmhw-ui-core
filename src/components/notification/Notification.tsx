import { Size } from "../../types";
import { Icon } from "../icon";
import { SvgName } from "../icon/types";
import { IconButton } from "../iconbutton";

export interface NotificationProps {
  title?: string;
  description?: string;
  variant?: ToastType;
  icon?: SvgName;
  isDismissible?: boolean;
  size?: Size;
  onDismiss?: () => void;
}

const Notification: React.FC<NotificationProps> = ({ description, icon, title, variant = "neutral", isDismissible = false, size = "medium", onDismiss }) => {
  return (
    <article className={`notification ${variant} ${size}`}>
      {icon ? <Icon name={icon} /> : null}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {isDismissible && <IconButton variant="tertiary" aria-label="Dismiss notification" icon="close" id={"dismiss"} title={""} label={""} onClick={onDismiss} />}
    </article>
  );
};

export default Notification;
export type ToastType = "neutral" | "info" | "critical" | "success" | "caution" | "warning";
