import React from 'react';
import styled from 'styled-components';

import { Main } from 'components/layouts';
import { Content } from './containers/content/content.component';
import { LeftNavigation } from './containers/left-navigation/left-navigation.component';

const AdminPanelWrapper = styled.div`
  color: #eee;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  width: 100%;
`;

const Col1 = styled.div`
  background-color: #2f3136;
  width: 40%;

  @media (min-width: 701px) {
    width: 20%;
  }
`;

const Col2 = styled.div`
  background-color: #36393f;
  font-size: 0.9rem;
  width: 60%;

  @media (min-width: 701px) {
    width: 80%;
  }
`;

type AdminPanelPropTypes = {
  title: string;
  children: React.ReactNode;
};

export const AdminPanel: React.FC<AdminPanelPropTypes> = ({ title, children }) => (
  <Main>
    <AdminPanelWrapper>
      <Col1>
        <LeftNavigation />
      </Col1>

      <Col2>
        <Content title={title}>{children}</Content>
      </Col2>
    </AdminPanelWrapper>
  </Main>
);
