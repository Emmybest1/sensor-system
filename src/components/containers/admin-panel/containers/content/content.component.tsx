import React from 'react';
import styled from 'styled-components';

const ContentWrapper = styled.div``;

const Header = styled.h1`
  border-bottom: 1px solid #222427;
  font-size: 1.2rem;
  padding: 8px;
`;

const Body = styled.div`
  font-size: 0.9rem;
  padding: 20px;
`;

type ContentPropTypes = {
  title: string;
  children: React.ReactNode;
};

export const Content: React.FC<ContentPropTypes> = ({ title, children }) => (
  <ContentWrapper>
    <Header>
      <span className="panel-hash">#</span>&nbsp;{title}
    </Header>

    <Body>{children}</Body>
  </ContentWrapper>
);
