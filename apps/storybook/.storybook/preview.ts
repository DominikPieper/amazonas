import { withThemeByDataAttribute } from '@storybook/addon-styling';
import type { Decorator, Preview } from '@storybook/angular';

import './tailwind.css';

export const decorators: Decorator[] = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];

const preview: Preview = {
  parameters: {
    docs: {
      toc: true, // 👈 Enables the table of contents
    },
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
  },
};

export default preview;
