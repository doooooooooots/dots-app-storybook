import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { addDecorator } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';
import { createTheme } from './theme/index';
import { ThemeProvider } from '@mui/material/styles';
import { themes } from '@storybook/theming';

const brandTheme = {
  brandTitle: 'Dots design system',
  brandUrl: 'https://dots.cool'
};

// Initialize MSW
initialize();
addDecorator(mswDecorator);

export const decorators = [
  (Story) => {
    const mode = useDarkMode();
    return (
      <>
        <ThemeProvider
          theme={createTheme({
            mode: mode ? 'dark' : 'light'
          })}
        >
          <CssBaseline />
          <Story />
        </ThemeProvider>
      </>
    );
  }
];


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    // Override the default dark theme
    dark: {
      ...themes.dark,
      ...brandTheme,
      barBg: '#0B0F19',
      brandImage:
        'https://res.cloudinary.com/connect-the-dots/image/upload/v1647134887/logos/dots-logo-font-white_qhx3bv.svg'
    },
    // Override the default light theme
    light: {
      ...themes.normal,
      ...brandTheme,
      brandImage: 'https://res.cloudinary.com/connect-the-dots/image/upload/v1647134887/logos/dots-logo-font_yudzev.svg'
    }
  }
};
