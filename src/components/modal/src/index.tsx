import React, { useEffect, useState, useCallback } from 'react';

import Base, {
  CLOSE_TRANSITION_DURATION,
  HTML_CLOSING_CLASSNAME,
  HTML_OPEN_CLASSNAME,
} from './components/base';
import type { BaseProps } from './components/base';

export interface ModalProps extends Omit<BaseProps, 'isClosing'> {}

const Modal = ({
  isOpen = false,
  onRequestClose,
  children,
  size = 'md',
  title,
  titleAlign,
}: ModalProps) => {
  const [isActive, setIsActive] = useState(isOpen);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(
    (event?: React.MouseEvent | React.KeyboardEvent) => {
      document.documentElement.classList.add(HTML_CLOSING_CLASSNAME);

      setTimeout(() => {
        document.documentElement.classList.remove(HTML_CLOSING_CLASSNAME);
      }, CLOSE_TRANSITION_DURATION);

      if (onRequestClose) {
        onRequestClose(event);
      }
    },
    [onRequestClose]
  );

  useEffect(() => {
    if (isOpen === true) {
      document.documentElement.classList.add(HTML_OPEN_CLASSNAME);
      setIsActive(true);
    } else if (isOpen === false) {
      document.documentElement.classList.remove(HTML_OPEN_CLASSNAME);
      setIsClosing(true);
      setTimeout(() => {
        setIsActive(false);
        setIsClosing(false);
      }, CLOSE_TRANSITION_DURATION);
    }
  }, [isOpen]);

  return isActive ? (
    <Base
      isOpen={isOpen}
      isClosing={isClosing}
      onRequestClose={handleClose}
      size={size}
      title={title}
      titleAlign={titleAlign}
    >
      {children}
    </Base>
  ) : null;
};

export default Modal;
