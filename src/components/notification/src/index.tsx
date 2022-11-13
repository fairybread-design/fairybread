import { useState, useCallback } from 'react';
import NotificationContext from './context';
import type { NotificationDispatch, NotificationEntry } from './context';
import Notification from './components/notification';
import { v4 as uuidv4 } from 'uuid';

const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [notifications, setNotifications] = useState<NotificationEntry[]>([]);

  const handleAddNotification = useCallback(
    (newNotification: NotificationDispatch) => {
      const id = uuidv4();

      // Add to notifications
      setNotifications((currentNofications) => [
        ...currentNofications,
        {
          id,
          ...newNotification,
        },
      ]);
    },
    []
  );

  const handleDismiss = useCallback(
    ({ id }: { id: NotificationEntry['id'] }) => {
      setNotifications((currentNofications) =>
        currentNofications.filter((notification) => notification.id !== id)
      );
    },
    []
  );

  return (
    <NotificationContext.Provider
      /**
       * Could also provide these methods/options:
       *
       * - Clear/dismiss notification
       * - Time to display notification
       */
      value={{
        notifications,
        notify: handleAddNotification,
        dismiss: handleDismiss,
      }}
    >
      {children}
      {notifications.map(({ id, title, appearance, text }) => (
        <Notification
          key={id}
          id={id}
          title={title}
          appearance={appearance || 'success'}
        >
          {text}
        </Notification>
      ))}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
