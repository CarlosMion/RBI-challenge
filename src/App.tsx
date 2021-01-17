import React from 'react';
import { LightTheme } from './theme';
import { ThemeProvider } from 'styled-components';

import Routes from './routes';

export function App() {
    return (
      <ThemeProvider theme={LightTheme}>
          <Routes />
      </ThemeProvider>
    );
  }
  