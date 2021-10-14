import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { useIsMounted } from 'hooks';
import { Main } from 'components/layouts';
import { RingLoader } from 'components/partials';
import { getHistories } from 'redux/root.actions';
import { History } from 'redux/histories/histories';
import { selectHistories } from 'redux/root.selectors';
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

const LoaderWrapper = styled.div`
  top: 100px;
  position: absolute;
  z-index: 200000;
  top: 20px;
  left: 0;
  right: 0;
`;

type AdminPanelPropTypes = {
  title: string;
  isLoading?: boolean;
  children: React.ReactNode;
};

export const AdminPanel: React.FC<AdminPanelPropTypes> = ({ title, isLoading, children }) => {
  const dispatch = useDispatch();
  const isMounted = useIsMounted();
  const histories: History[] = useSelector(selectHistories);

  useEffect(() => {
    if (isMounted && !histories.length) {
      dispatch(getHistories());
    }
  }, [isMounted]);

  return (
    <>
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

      {isLoading && (
        <LoaderWrapper>
          <RingLoader isLoading={isLoading} />
        </LoaderWrapper>
      )}
    </>
  );
};
