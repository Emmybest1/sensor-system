import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Events } from 'redux/events/events';
import { useIsMounted, useTitle } from 'hooks';
import { AdminPanel } from 'components/containers';
import { getEvents, resetEventError } from 'redux/root.actions';
import { Notification, RingLoader } from 'components/partials';
import { selectEventsIsLoading, selectEventsError, selectEvents } from 'redux/root.selectors';
import { EventCard } from './containers/event-card/event-card.component';

const Home: React.FC = () => {
  useTitle('Home 🏚');
  const dispatch = useDispatch();
  const isMounted = useIsMounted();
  const events: Events = useSelector(selectEvents);
  const eventsError = useSelector(selectEventsError);
  const isLoadingEvents = useSelector(selectEventsIsLoading);

  useEffect(() => {
    if (isMounted && !events) {
      dispatch(getEvents());
    }
  }, [isMounted]);

  const LoaderWrapper = styled.div`
    top: 100px;
    position: absolute;
    z-index: 200000;
    top: 20px;
    left: 0;
    right: 0;
  `;

  const EventCardsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;

    & > * {
      width: 31%;

      @media (max-width: 800px) {
        width: 100%;
      }
    }

    @media (max-width: 800px) {
      flex-direction: column;
    }
  `;

  return (
    <>
      <AdminPanel title="Home">
        {events && (
          <EventCardsWrapper>
            <EventCard date={events.date} name={Object.keys(events)[1]} value={events.sensor1.toString()} />
            <EventCard date={events.date} name={Object.keys(events)[2]} value={events.sensor2.toString()} />
            <EventCard date={events.date} name={Object.keys(events)[3]} value={events.sensor3.toString()} />
            <EventCard date={events.date} name={Object.keys(events)[4]} value={events.sensor4.toString()} />
          </EventCardsWrapper>
        )}
      </AdminPanel>

      <LoaderWrapper>
        <RingLoader isLoading={isLoadingEvents} />
      </LoaderWrapper>

      <Notification
        shownModal={!!eventsError}
        type="danger"
        heading="Events Error"
        message={eventsError}
        onCloseHandler={() => {
          dispatch(resetEventError());
        }}
      />
    </>
  );
};

export default Home;
