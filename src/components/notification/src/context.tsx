import { createContext } from 'react';
import type { Dispatch } from 'react';
import type { NotificationProps } from './components/notification';

/**
 * The props required to dispatch a notification,
 * minus the automatically assigned ID
 */
export type NotificationDispatch = {
  title: NotificationProps['title'];
  text?: NotificationProps['children'];
  appearance?: NotificationProps['appearance'];
};

export type NotificationEntry = NotificationDispatch & {
  id: string;
};

export interface NotificationContextProps {
  notifications: NotificationEntry[];
  notify: Dispatch<{
    title: NotificationEntry['title'];
    text?: NotificationEntry['text'];
    appearance?: NotificationEntry['appearance'];
  }>;
  dismiss: Dispatch<{
    id: NotificationEntry['id'];
  }>;
}

export const NotificationContext = createContext<NotificationContextProps>(
  {} as NotificationContextProps
);

export default NotificationContext;
