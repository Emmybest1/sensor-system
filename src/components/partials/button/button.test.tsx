import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Button } from '..';
import { ReduxProvider } from 'redux/__test__/redux-state.mock';

describe('<Button/>', () => {
  test('should render Component', () => {
    const { container } = render(
      <ReduxProvider internal>
        <Router>
          <Button testId="testBtn" shape="radius" width="80%">
            Radius
          </Button>
          <Button testId="testBtn" shape="block" bg="#333" color="red">
            Block
          </Button>
        </Router>
      </ReduxProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
