/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ErrorBoundary } from 'components/containers';
import { PAGES_PERMISSIONS } from 'redux/session/session';
import { SignUp, Login, Fallback, Histories, History, Home } from 'components/pages';
import { ProtectedRoute } from 'components/partials/protected-route/protected-route.component';

enum Paths {
  home = '/',
  login = '/login',
  signUp = '/signup',
  fallback = '/fallback',
  histories = '/histories',
  history = '/histories/:historyId',
}

const Routes: React.FC = () => (
  <Router>
    <ErrorBoundary>
      <Switch>
        <Route exact path={Paths.login} component={Login} />
        <Route exact path={Paths.signUp} component={SignUp} />
        <Route exact path={Paths.fallback} component={Fallback} />
        <ProtectedRoute exact path={Paths.home} component={Home} pagePermissionNumber={PAGES_PERMISSIONS.HOME} />
        <ProtectedRoute exact path={Paths.history} component={History} pagePermissionNumber={PAGES_PERMISSIONS.HISTORY} />
        <ProtectedRoute exact path={Paths.histories} component={Histories} pagePermissionNumber={PAGES_PERMISSIONS.HISTORIES} />
        <Route component={Fallback} />
      </Switch>
    </ErrorBoundary>
  </Router>
);

export { Paths, Routes };
