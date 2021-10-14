import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Accordion } from './accordion.component';

describe('<Accordion/>', () => {
  test('Should render Component', () => {
    const { container } = render(
      <Router>
        <Accordion>
          <Accordion.Header title="Header" />
          <Accordion.Body>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </Accordion.Body>
        </Accordion>
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
