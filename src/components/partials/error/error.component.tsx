import React from 'react';
import styled from 'styled-components';

const ErrorNode = styled.div`
  color: #f87272;
  font-size: 0.9rem;
  width: 100%;
`;

type ErrorPropTypes = {
  message: string;
};

export const Error: React.FC<ErrorPropTypes> = ({ message }) => (
  <ErrorNode aria-live="assertive" aria-atomic="true">
    {message}
  </ErrorNode>
);
