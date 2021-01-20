import * as React from 'react';
import { queryCache } from 'react-query';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';
import { render as rtlRender, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { LightTheme } from '../theme/LightTheme';

type Options = {
  route?: string;
  history?: MemoryHistory;
};

// this is a handy function that we can utilize for any component
// that relies on the theme and router being in context
function render(
  ui: React.ReactElement,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: Options = {}
) {
  const Wrapper = ({ children }: any) => (
    <Router history={history}>
      <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>
    </Router>
  );

  return {
    ...rtlRender(ui, { wrapper: Wrapper }),
    history,
  };
}

function waitForLoadingToFinish() {
  return waitFor(
    () => {
      if (queryCache.isFetching) {
        throw new Error('The react-query queryCache is still fetching');
      }
      if (screen.queryAllByTestId(/skeleton/i).length) {
        throw new Error('App loading indicators are still running');
      }
    },
    { timeout: 5000 }
  ).catch((e) => {
    screen.debug();
    return Promise.reject(e);
  });
}

export * from '@testing-library/react';
export { render, userEvent, waitForLoadingToFinish };
