import { NotificationSeverity } from "../global-enums/notification-sererity";

export interface ToastMessageInterface{
    severity: NotificationSeverity;
    message: string;
    details?: string;
}