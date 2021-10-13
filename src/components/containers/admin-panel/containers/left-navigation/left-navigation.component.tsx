import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { Paths } from 'routes';
import { getCurrentUser } from 'services';
import { Logo } from 'components/partials';
import { logout } from 'redux/root.actions';
import { Accordion } from 'components/partials/accordion/accordion.component';

const LeftNavigationWrapper = styled.div`
  height: 100%;
  position: relative;
`;

const Header = styled.div`
  border-bottom: 1px solid #222427;
  font-size: 1.2rem;
  padding: 8px;
`;

const Body = styled.div`
  padding: 10px;
`;

const Footer = styled.div`
  padding: 10px;
  width: 100%;
  position: absolute;
  z-index: 30;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: 0;
`;

const LogoutBtnNode = styled.button`
  border: 0;
  background-color: #36393f;
  border-radius: 5px;
  color: #fff;
  font-size: 0.8rem;
  padding: 10px;
  margin: 0 auto;
  width: 100%;
`;

const EmailNode = styled.a`
  display: inline-block;
  color: #4a4b4e;
  font-size: 0.8em;
  text-align: center;
  margin: 0.7rem auto;
  width: 100%;

  &:hover {
    color: #eee;
  }
`;

const LogoWrapper = styled.div`
  margin: 1rem 0;
`;

export const LeftNavigation: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = getCurrentUser();

  return (
    <LeftNavigationWrapper>
      <Header>SenTem Admin 🛰</Header>

      <Body>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <Accordion>
          <Accordion.Header title="Histories" />
          <Accordion.Body>
            <Link to={Paths.histories}>View histories</Link>
          </Accordion.Body>
        </Accordion>
      </Body>

      <Footer>
        <LogoutBtnNode onClick={() => dispatch(logout())}>Logout</LogoutBtnNode>
        <EmailNode href={`mailto:${currentUser.email}?subject=Mail from Sensor system`}>{currentUser.email}</EmailNode>
      </Footer>
    </LeftNavigationWrapper>
  );
};
