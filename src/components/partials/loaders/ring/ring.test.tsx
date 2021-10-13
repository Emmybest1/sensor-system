import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { RingLoader } from 'components/partials';

describe('<RingLoader/>', () => {
  test('should render Component', () => {
    const { container } = render(
      <Router>
        <RingLoader isLoading={1 < 2} />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
