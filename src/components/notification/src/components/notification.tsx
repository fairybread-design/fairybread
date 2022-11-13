import React, { useState, useEffect, useCallback, useContext } from 'react';

import { useSpring, animated } from '@react-spring/web';

import Wrapper from './wrapper';
import Layer from '../../../layer';
import Alert from '../../../alert';
import type { AlertProps } from '../../../alert';
import NotificationContext from '../context';
import Center from './center';

export interface NotificationProps {
  id: string;
  title: AlertProps['title'];
  children?: AlertProps['children'];
  appearance: AlertProps['appearance'];
}

const Notification = ({
  id,
  children,
  appearance,
  title,
}: NotificationProps) => {
  const { dismiss } = useContext(NotificationContext);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHide(true);
    }, 5000);
  }, []);

  const handleDismiss = useCallback(() => {
    dismiss({ id });
  }, [id]);

  const styles = useSpring({
    config: { friction: 60, tension: 740 },
    from: { translateY: 50, opacity: 0 },
    to: { translateY: 0, opacity: 1 },
    reverse: hide,
    onRest: () => {
      /**
       * The notification is ready to remove once the animation
       * comes to an end, and it's hidden.
       */
      if (hide === true) {
        handleDismiss();
      }
    },
  });

  return (
    <Layer isMainPile>
      <Wrapper>
        <Center>
          <animated.div style={styles}>
            <Alert
              appearance={appearance}
              title={title}
              onClick={handleDismiss}
            >
              {children}
            </Alert>
          </animated.div>
        </Center>
      </Wrapper>
    </Layer>
  );
};

export default Notification;
