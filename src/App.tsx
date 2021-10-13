import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Routes } from 'routes';
import { NormalizedStyles } from 'styles';

const SkipToMainContentNode = styled.a`
  background-color: #eee;
  border: solid 1px #333;
  border-radius: 5px;
  color: #333;
  font-size: 0.9rem;
  padding: 8px;
  position: absolute;
  z-index: 10000;
  top: 5px;
  left: -1000px;

  &:focus {
    left: 0;
  }
`;

const App: React.FC = () => (
  <Fragment>
    <NormalizedStyles />
    <SkipToMainContentNode href="#main">Skip to main content</SkipToMainContentNode>
    <Routes />
  </Fragment>
);

export default App;
