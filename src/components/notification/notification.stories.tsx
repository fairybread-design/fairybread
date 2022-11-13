import React, { useContext, useCallback } from 'react';
import type { ComponentMeta } from '@storybook/react';

import { NotificationContext } from '.';
import Button from '../button';
import Stack from '../stack';

export default {
  title: 'Design System/Notification',
} as ComponentMeta<any>;

const Template = () => {
  const { notify } = useContext(NotificationContext);

  const addSuccess = useCallback(() => {
    notify({ title: 'You have done it', appearance: 'success' });
  }, [notify]);

  const addWarning = useCallback(() => {
    notify({ title: 'Watch out! You have done it!', appearance: 'warning' });
  }, [notify]);

  const addInformation = useCallback(() => {
    notify({
      title: 'Did you know that you have done it?',
      appearance: 'information',
    });
  }, [notify]);

  const addDanger = useCallback(() => {
    notify({
      title: 'You have really done it this time buddy',
      appearance: 'danger',
    });
  }, [notify]);

  return (
    <Stack>
      <Button onClick={addSuccess}>Success</Button>
      <Button onClick={addWarning}>Warning</Button>
      <Button onClick={addInformation}>Information</Button>
      <Button onClick={addDanger}>Danger</Button>
    </Stack>
  );
};

export const Default = Template.bind({});
