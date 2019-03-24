import React from 'react';
import ThemeProvider from '../components/ThemeProvider/ThemeProvider';
import { configure, addDecorator  } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
addDecorator(checkA11y);
addDecorator((storyFn) => <ThemeProvider>
  {storyFn()}
</ThemeProvider>)
function loadStories() {
  const context = require.context('../components', true, /\.stories\.jsx?$/);
  context.keys().forEach((key) => context(key));
}

configure(loadStories, module);