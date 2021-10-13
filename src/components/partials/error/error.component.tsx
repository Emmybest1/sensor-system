import React from 'react';
import styled from 'styled-components';

const ErrorNode = styled.div`
  color: #f87272;
  font-size: 0.9rem;
  width: 100%;
`;

type ErrorPropTypes = {
  children: React.ReactNode;
};

const Error: React.FC<ErrorPropTypes> = ({ children }) => <ErrorNode>{children}</ErrorNode>;

export default Error;
