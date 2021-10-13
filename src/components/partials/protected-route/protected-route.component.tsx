import React from 'react';
import { Route, RouteComponentProps, useHistory } from 'react-router-dom';

import { Paths } from 'routes';
import { getCurrentUser } from 'services';
import { checkIsUserAuthorizedToAccessPage } from 'utils';

type ProtectedRoutePropTypes = {
  pagePermissionNumber: number;
  [key: string]: any;
};

const ProtectedRoute: React.FC<ProtectedRoutePropTypes> = ({ pagePermissionNumber, component: Component, ...restProps }) => {
  const history = useHistory();

  const currentUser = getCurrentUser();

  const isAuthorized = checkIsUserAuthorizedToAccessPage(pagePermissionNumber, currentUser?.permissions);

  if (!isAuthorized) {
    history.push({
      pathname: Paths.fallback,
      state: {
        heading: 'Not Authorized',
        message: 'You are not authorized to access this page.',
        shownButton: true,
        fallbackPath: Paths.login,
      },
    });
    return null;
  }

  return <Route {...restProps} render={(props: RouteComponentProps) => <Component {...restProps} {...props} />} />;
};

export { ProtectedRoute };
