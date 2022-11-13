import { faCircleQuestion } from '@fortawesome/sharp-solid-svg-icons';
import { useState, useCallback } from 'react';
import IconButton from '../icon-button';
import type { IconButtonProps } from '../icon-button';
import Modal from '../modal';

export interface InputHelpProps {
  type: 'modal' | 'tooltip';
  content: React.ReactNode;
  title?: string;
  id: string;
  onOpen?({}: { id: string }): void;
}

export type InputHelpType = Pick<InputHelpProps, 'content' | 'title' | 'type'>;

const HelpButton = ({
  onClick,
  hasTooltip,
  label,
}: Pick<IconButtonProps, 'onClick' | 'hasTooltip' | 'label'>) => (
  <IconButton
    size="xs"
    label={label}
    icon={faCircleQuestion}
    onClick={onClick}
    hasTooltip={hasTooltip}
  />
);

export const InputHelp = ({
  type,
  title = 'Help',
  content,
  onOpen,
  id,
}: InputHelpProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openHelp = useCallback(() => {
    setIsOpen(true);
    if (onOpen) {
      onOpen({ id });
    }
  }, [onOpen, id]);
  const closeHelp = useCallback(() => setIsOpen(false), []);

  let render;

  if (type === 'modal') {
    render = (
      <>
        <HelpButton label="Help" onClick={openHelp} hasTooltip={false} />
        <Modal
          isOpen={isOpen}
          onRequestClose={closeHelp}
          title={title}
          size="sm"
        >
          {content}
        </Modal>
      </>
    );
  } else if (type === 'tooltip') {
    render = <HelpButton label={content} onClick={openHelp} />;
  }

  return <>{render}</>;
};
