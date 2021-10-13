import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Main } from 'components/layouts';
import { Logo } from 'components/partials';

const FallbackWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const Head = styled.div``;

const Body = styled.div``;

const Footer = styled.div``;

const Heading = styled.h1`
  font-size: 1rem;
`;

const Message = styled.p`
  font-size: 0.9rem;
  margin-top: 2rem;
`;

const GreyText = styled.span`
  color: #8a8888;
  font-size: 0.9rem;
  font-weight: 400;
`;

type FallbackPropTypes = {
  heading?: React.ReactNode;
  message?: string;
  buttonNode?: HTMLButtonElement;
};

const Fallback: React.FC<FallbackPropTypes> = ({ heading, message, buttonNode }) => {
  const location = useLocation();

  return (
    <FallbackWrapper className="page">
      <Main>
        <Head>
          <Logo />
          <Heading>{heading}</Heading>
        </Head>
        <Body>
          <Message>{message || `The requested URL "${location.pathname}" was not found on this server. `}</Message>
        </Body>
      </Main>
      {buttonNode && <Footer>{buttonNode}</Footer>}
    </FallbackWrapper>
  );
};

Fallback.defaultProps = {
  heading: (
    <>
      404. <GreyText>That’s an error.</GreyText>
    </>
  ),
};

export default Fallback;
