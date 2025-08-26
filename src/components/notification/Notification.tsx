import style from "./notification.module.css";
import { Size } from "../../types";
import { Icon } from "../icon";
import { SvgName } from "../icon/types";
import { IconButton } from "../iconbutton";

export interface NotificationProps {
  title?: string;
  description?: string;
  variant?: NotificationType;
  icon?: SvgName;
  isDismissible?: boolean;
  size?: Size;
  onDismiss?: () => void;
}

const Notification: React.FC<NotificationProps> = ({ description, icon, title, variant = "neutral", isDismissible = false, size = "medium", onDismiss }) => {
  return (
    <article className={`${style.notification} ${style[variant]} ${style[size]}`}>
      {icon ? <Icon size={size} name={icon} /> : null}

      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {isDismissible && <IconButton size={size} variant="tertiary" aria-label="Dismiss notification" icon="close" id={"dismiss"} title={""} label={""} onClick={onDismiss} />}
    </article>
  );
};

export default Notification;
export type NotificationType = "neutral" | "info" | "critical" | "success" | "caution" | "warning";
