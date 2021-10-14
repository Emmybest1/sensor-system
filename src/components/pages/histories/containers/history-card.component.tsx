import React from 'react';
import styled from 'styled-components';

import { formatDate } from 'utils';
import { History } from 'redux/histories/histories';
import { Link } from 'react-router-dom';

const HistoryCardWrapper = styled.div`
  background-color: #2f3136;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;

  &:hover {
    opacity: 0.8;
  }
`;

const Header = styled.div`
  color: #fff;

  & > time {
    border-bottom: 1px solid #222427;
    display: block;
    margin-bottom: 10px;
    width: 100%;
  }
  & > h2 {
    font-size: 0.9rem;
    font-weight: 400;
  }
`;

const Body = styled.div``;

const SeasonNodeUl = styled.ul`
  padding: 10px 20px;

  & > li {
    color: #8a8989;
    list-style: georgian;
  }
`;

export const HistoryCard: React.FC<History> = ({ id, date, sensor1, sensor2, sensor3, sensor4 }) => (
  <Link to={`/histories/${id}`}>
    <HistoryCardWrapper>
      <Header>
        <time>{formatDate(date)}</time>
        <h2>Sensors</h2>
      </Header>
      <Body>
        <SeasonNodeUl>
          <li>{sensor1}</li>
          <li>{sensor2}</li>
          <li>{sensor3}</li>
          <li>{sensor4}</li>
        </SeasonNodeUl>
      </Body>
    </HistoryCardWrapper>
  </Link>
);
