import { render } from '@testing-library/react';

import { Footer } from '..';

describe('<Footer/>', () => {
  test('should render Component', () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
