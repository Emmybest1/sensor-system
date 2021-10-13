import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { SkeletonUi } from './skeleton-ui.component';

describe('<SkeletonUi/>', () => {
  test('should render Component', () => {
    const { container } = render(
      <Router>
        <SkeletonUi shape="blockHorizone" />
        <SkeletonUi shape="blockVerticone" />
        <SkeletonUi shape="radiusHorizone" width="31.25rem" height="2rem" />
        <SkeletonUi shape="radiusVerticone" width="90%" height="2rem" />
      </Router>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
