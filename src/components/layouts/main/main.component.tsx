import React from 'react';
import styled from 'styled-components';

const MainNode = styled.main``;

type MainPropTypes = {
  children: React.ReactNode;
};

export const Main: React.FC<MainPropTypes> = ({ children }) => <MainNode id="main">{children}</MainNode>;
