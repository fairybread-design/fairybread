import React, { useState } from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../button';

import Modal from '.';

export default {
  title: 'Design System/Modal',
  component: Modal,
  args: {
    size: 'md',
    title: 'I am a modal',
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md'],
      control: 'select',
    },
    isOpen: {
      type: 'boolean',
    },
    onAfterOpen: {
      type: 'function',
    },
    onAfterClose: {
      type: 'function',
    },
    onRequestClose: {
      type: 'function',
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = ({
  isOpen,
  onRequestClose,
  ...args
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal2IsOpen, set2IsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const openModal2 = () => {
    set2IsOpen(true);
  };
  const closeModal2 = () => {
    set2IsOpen(false);
  };

  const closeModal = (
    event?: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
  ) => {
    setIsOpen(false);
    if (event && onRequestClose) onRequestClose(event);
  };

  return (
    <>
      <Button onClick={openModal}>Open modal</Button>
      <Modal
        isOpen={isOpen || modalIsOpen}
        onRequestClose={closeModal}
        {...args}
      >
        <Button appearance="secondary" onClick={closeModal}>
          Ok
        </Button>
        <Button appearance="secondary" onClick={openModal2}>
          Open
        </Button>
        <Modal title="Test" isOpen={modal2IsOpen} onRequestClose={closeModal2}>
          Test222
        </Modal>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
