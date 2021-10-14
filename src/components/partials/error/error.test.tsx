import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Error } from './error.component';
import { ReduxProvider } from 'redux/__test__/redux-state.mock';

describe('<Error/>', () => {
  test('should render Component', () => {
    const { container } = render(
      <ReduxProvider internal>
        <Router>
          <Error message="Sorry you can't proceed" />
        </Router>
      </ReduxProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
