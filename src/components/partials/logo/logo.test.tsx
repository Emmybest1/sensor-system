import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Logo } from './logo.component';

describe('<Logo/>', () => {
  test('should render Component', () => {
    const { container } = render(
      <Router>
        <Logo />
        <Logo noLink />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
