const path = require('path');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    /**
     * Fixes font files linked in css loading from static directory
     * https://github.com/storybookjs/storybook/issues/10990#issuecomment-1000787368
     */
    for (let rule of config.module.rules) {
      if (rule.use && rule.use.length > 0) {
        for (let use of rule.use) {
          if (use.loader && use.loader.includes('/css-loader/')) {
            use.options = {
              ...use.options,
              url: (url, resourcePath) => !url.startsWith('/'),
            };
          }
        }
      }
    }
    return config;
  },
};
