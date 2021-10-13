import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Main } from 'components/layouts';
import { Button, Logo } from 'components/partials';

const FallbackWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const Head = styled.div``;

const Body = styled.div``;

const Footer = styled.div`
  margin-top: 1rem;
`;

const Heading = styled.h1`
  font-size: 1rem;
`;

const Message = styled.p`
  font-size: 0.9rem;
  margin-top: 1rem;
`;

const GreyText = styled.span`
  color: #8a8888;
  font-size: 0.9rem;
  font-weight: 400;
`;

type FallbackPropTypes = {
  heading?: React.ReactNode;
  message?: string;
  fallbackPath?: string;
};

type LocationState = {
  heading?: string;
  message?: string;
  shownButton?: boolean;
  fallbackPath?: string;
};

const Fallback: React.FC<FallbackPropTypes> = ({ heading, message, fallbackPath }) => {
  const history = useHistory();
  const location = useLocation<LocationState>();

  const { pathname, state } = location;

  return (
    <FallbackWrapper className="page">
      <Main>
        <Head>
          <Logo />
          <Heading>{state?.heading || heading}</Heading>
        </Head>
        <Body>
          <Message>{state?.message || message || `The requested URL "${pathname}" was not found on this server. `}</Message>
        </Body>
      </Main>
      {(fallbackPath || state?.shownButton) && (
        <Footer>
          <Button
            type="button"
            onClick={() => {
              history.push(fallbackPath || state?.fallbackPath!);
            }}
            shape="radius"
          >
            Proceed
          </Button>
        </Footer>
      )}
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
