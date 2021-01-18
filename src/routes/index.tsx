import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './MainPage';
import PublicRoute from './PublicRoute';



export default function Routes() {
  const routes = {
    main: '/'
  };

  return (
    <Router>
      <Switch>
        <PublicRoute exact path={routes.main}>
          <MainPage />
        </PublicRoute>
      </Switch>
    </Router>
  );
}