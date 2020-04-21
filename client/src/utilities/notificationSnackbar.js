import { notification } from 'antd';
import 'antd/es/notification/style/css';

export const notificationStatus = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR"
}

export const openNotification = (message, description, icon, style, duration=3) => {
  notification.open({
    message,
    description,
    icon,
    style,
    duration,
    top: 80
  });
};
