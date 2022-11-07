import { addDecorator } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import themeDecorator from './theme-decorator';
import { BrowserRouter } from 'react-router-dom'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: {
       ...INITIAL_VIEWPORTS,
    },
  },
}

addDecorator(themeDecorator);
addDecorator((story) => <BrowserRouter>{story()}</BrowserRouter>);
