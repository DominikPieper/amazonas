import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../../../**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../libs/shared/ui-design-system/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  docs: {
    //👇 See the table below for the list of supported options
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-styling',
      options: {
        // Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
        // For more details on this addon's options.
        postCss: true,
      },
    },
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  staticDirs: ['../public'], //👈 Configures the static asset folder in Storybook
};

export default config;

// To customize your webpack configuration you can use the webpackFinal field.
// Check https://storybook.js.org/docs/react/builders/webpack#extending-storybooks-webpack-config
// and https://nx.dev/packages/storybook/documents/custom-builder-configs
