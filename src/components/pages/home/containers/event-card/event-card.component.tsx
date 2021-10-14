import React from 'react';
import styled from 'styled-components';

import { formatDate } from 'utils';

const EventCardWrapper = styled.div`
  border-radius: 10px;
  background-color: #2f3136;
  color: #fff;
  min-height: 100px;
  margin: 10px 0;
  max-width: 300px;
  padding: 10px 20px;
  word-wrap: break-word;

  &:hover {
    opacity: 0.8;
  }
`;

const Header = styled.time`
  border-bottom: 1px solid #222427;
  margin-bottom: 1rem;
  display: block;
`;

const Body = styled.div`
  & .value {
    color: #8a8989;
  }
`;

type EventCardPropTypes = {
  date: string;
  name: string;
  value: string;
};

export const EventCard: React.FC<EventCardPropTypes> = ({ date, name, value }) => (
  <EventCardWrapper>
    <Header>{formatDate(date)}</Header>
    <Body>
      <strong className="name">{name}</strong>&nbsp;<small className="value">{value}</small>
    </Body>
  </EventCardWrapper>
);
