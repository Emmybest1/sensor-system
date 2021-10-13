/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ErrorBoundary } from 'components/containers';
import { SignUp, Login, Fallback } from 'components/pages';

enum Paths {
  home = '/',
  login = '/login',
  signUp = '/signup',
  histories = '/histories',
  history = '/histories/:historyId',
}

const Routes: React.FC = () => (
  <Router>
    <ErrorBoundary>
      <Switch>
        <Route exact path={Paths.login} component={Login} />
        <Route exact path={Paths.signUp} component={SignUp} />
        <Route exact path={Paths.home} render={() => <h1>Home</h1>} />
        <Route exact path={Paths.histories} render={() => <h1>Histories</h1>} />
        <Route exact path={Paths.history} render={() => <h1>History</h1>} />
        <Route component={Fallback} />
      </Switch>
    </ErrorBoundary>
  </Router>
);

export { Paths, Routes };
