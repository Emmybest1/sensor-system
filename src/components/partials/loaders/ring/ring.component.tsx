/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const ringLoaderAnimation = keyframes`
  0%,
  100% {
    box-shadow: 0em -2.6em 0em 0em #007bff, 1.8em -1.8em 0 0em rgba(0,123,255, 0.2), 2.5em 0em 0 0em rgba(0,123,255, 0.2), 1.75em 1.75em 0 0em rgba(0,123,255, 0.2), 0em 2.5em 0 0em rgba(0,123,255, 0.2), -1.8em 1.8em 0 0em rgba(0,123,255, 0.2), -2.6em 0em 0 0em rgba(0,123,255, 0.5), -1.8em -1.8em 0 0em rgba(0,123,255, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,123,255, 0.7), 1.8em -1.8em 0 0em #007bff, 2.5em 0em 0 0em rgba(0,123,255, 0.2), 1.75em 1.75em 0 0em rgba(0,123,255, 0.2), 0em 2.5em 0 0em rgba(0,123,255, 0.2), -1.8em 1.8em 0 0em rgba(0,123,255, 0.2), -2.6em 0em 0 0em rgba(0,123,255, 0.2), -1.8em -1.8em 0 0em rgba(0,123,255, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,123,255, 0.5), 1.8em -1.8em 0 0em rgba(0,123,255, 0.7), 2.5em 0em 0 0em #007bff, 1.75em 1.75em 0 0em rgba(0,123,255, 0.2), 0em 2.5em 0 0em rgba(0,123,255, 0.2), -1.8em 1.8em 0 0em rgba(0,123,255, 0.2), -2.6em 0em 0 0em rgba(0,123,255, 0.2), -1.8em -1.8em 0 0em rgba(0,123,255, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,123,255, 0.2), 1.8em -1.8em 0 0em rgba(0,123,255, 0.5), 2.5em 0em 0 0em rgba(0,123,255, 0.7), 1.75em 1.75em 0 0em #007bff, 0em 2.5em 0 0em rgba(0,123,255, 0.2), -1.8em 1.8em 0 0em rgba(0,123,255, 0.2), -2.6em 0em 0 0em rgba(0,123,255, 0.2), -1.8em -1.8em 0 0em rgba(0,123,255, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,123,255, 0.2), 1.8em -1.8em 0 0em rgba(0,123,255, 0.2), 2.5em 0em 0 0em rgba(0,123,255, 0.5), 1.75em 1.75em 0 0em rgba(0,123,255, 0.7), 0em 2.5em 0 0em #007bff, -1.8em 1.8em 0 0em rgba(0,123,255, 0.2), -2.6em 0em 0 0em rgba(0,123,255, 0.2), -1.8em -1.8em 0 0em rgba(0,123,255, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,123,255, 0.2), 1.8em -1.8em 0 0em rgba(0,123,255, 0.2), 2.5em 0em 0 0em rgba(0,123,255, 0.2), 1.75em 1.75em 0 0em rgba(0,123,255, 0.5), 0em 2.5em 0 0em rgba(0,123,255, 0.7), -1.8em 1.8em 0 0em #007bff, -2.6em 0em 0 0em rgba(0,123,255, 0.2), -1.8em -1.8em 0 0em rgba(0,123,255, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,123,255, 0.2), 1.8em -1.8em 0 0em rgba(0,123,255, 0.2), 2.5em 0em 0 0em rgba(0,123,255, 0.2), 1.75em 1.75em 0 0em rgba(0,123,255, 0.2), 0em 2.5em 0 0em rgba(0,123,255, 0.5), -1.8em 1.8em 0 0em rgba(0,123,255, 0.7), -2.6em 0em 0 0em #007bff, -1.8em -1.8em 0 0em rgba(0,123,255, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,123,255, 0.2), 1.8em -1.8em 0 0em rgba(0,123,255, 0.2), 2.5em 0em 0 0em rgba(0,123,255, 0.2), 1.75em 1.75em 0 0em rgba(0,123,255, 0.2), 0em 2.5em 0 0em rgba(0,123,255, 0.2), -1.8em 1.8em 0 0em rgba(0,123,255, 0.5), -2.6em 0em 0 0em rgba(0,123,255, 0.7), -1.8em -1.8em 0 0em #007bff;
  }
`;

const RingLoaderWrapper = styled.div`
  color: #007bff;
  margin: 0 auto;
  width: 100%;
`;

const RingLoaderNode = styled.div<{ fontSize?: string }>`
  margin: inherit;
  font-size: ${({ fontSize }) => fontSize};
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  animation: ${ringLoaderAnimation} 1.1s infinite ease;
  transform: translateZ(0);
`;

const DoneLoadingNode = styled.p`
  text-align: center;
`;

type RingLoaderPropTypes = {
  isLoading: boolean;
  fontSize?: string;
};

export const RingLoader: React.FC<RingLoaderPropTypes> = ({ isLoading, fontSize }) => {
  const [shownLoader, setShownLoader] = useState<boolean | null>(null);
  const [shownDoneLoading, setShownDoneLoading] = useState<boolean>(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (!isLoading && shownLoader) {
      setShownLoader(false);
      setShownDoneLoading(true);
    }

    if (isLoading) {
      timeout = setTimeout(() => {
        setShownLoader(true);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isLoading]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (shownDoneLoading) {
      timeout = setTimeout(() => {
        setShownDoneLoading(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [shownDoneLoading]);

  return (
    <RingLoaderWrapper>
      {shownLoader && <RingLoaderNode fontSize={fontSize} aria-live="assertive" />}
      {shownDoneLoading && <DoneLoadingNode aria-live="polite">Done Loading</DoneLoadingNode>}
    </RingLoaderWrapper>
  );
};

RingLoader.defaultProps = {
  fontSize: '0.375rem',
};
