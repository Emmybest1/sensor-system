import React from 'react';
import { Link } from 'react-router-dom';
import { Paths } from 'routes';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  font-size: 2rem;
  font-weight: 500;
`;

const BlueNode = styled.span`
  color: #3497fa;
`;

const GreenNode = styled.span`
  color: #76be76;
`;

const RedNode = styled.span`
  color: #f86c6c;
`;

const OrangeNode = styled.span`
  color: #ffa500;
`;

type LogoPropTypes = {
  noLink?: boolean;
};

export const Logo: React.FC<LogoPropTypes> = ({ noLink }) => {
  const logoElement = (
    <LogoWrapper>
      <GreenNode>S</GreenNode>
      <OrangeNode>e</OrangeNode>
      <RedNode>n</RedNode>
      <GreenNode>T</GreenNode>
      <BlueNode>e</BlueNode>
      <RedNode>m</RedNode>
    </LogoWrapper>
  );

  if (noLink) return logoElement;

  return <Link to={Paths.home}>{logoElement}</Link>;
};

Logo.defaultProps = {
  noLink: false,
};
