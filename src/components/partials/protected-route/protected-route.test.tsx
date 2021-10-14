import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Paths } from 'routes';
import { Home } from 'components/pages';
import { getCurrentUser } from 'services';
import { PAGES_PERMISSIONS } from 'redux/session/session';
import { ProtectedRoute } from './protected-route.component';

describe('<ProtectedRouter/>', () => {
  test('should render Component', () => {
    const { container } = render(
      <Router>
        <ProtectedRoute exact path={Paths.event} component={Home} pagePermissionNumber={PAGES_PERMISSIONS.HOME} />
      </Router>
    );
    const currentUser = getCurrentUser();

    if (currentUser) {
      expect(window.location.pathname).toEqual(Paths.home);
    } else {
      expect(window.location.pathname).toEqual(Paths.fallback);
    }

    expect(container.firstChild).toMatchSnapshot();
  });
});
