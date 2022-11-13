import React from 'react';
import GlobalStyle from '../src/styles/global';

import NotificationProvider from '../src/components/notification';
import { MainPile, Pile } from '../src/components/layer';

import '../src/styles/global.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: '',
    },
  },
};

export const decorators = [
  (Story) => (
    <MainPile>
      {({ index }) => (
        <NotificationProvider>
          <div style={{ zIndex: index, position: 'relative' }}>
            <Pile>
              <GlobalStyle />
              <Story />
            </Pile>
          </div>
        </NotificationProvider>
      )}
    </MainPile>
  ),
];
