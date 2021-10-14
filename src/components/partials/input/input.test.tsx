import { render, screen } from '@testing-library/react';

import { Input } from '..';

const renderInput = () => {
  const { rerender } = render(<Input id="name" type="text" placeholder="name" />);

  return rerender;
};
describe('<Input/>', () => {
  test('should render Component', () => {
    const rerender = renderInput();

    expect(screen.getByPlaceholderText(/name/i)).toHaveAttribute('type', 'text');

    rerender(<Input type="textarea" label="Info" id="info" />);
    expect(screen.getByLabelText(/info/i)).not.toHaveAttribute('type', 'text');
  });
});
