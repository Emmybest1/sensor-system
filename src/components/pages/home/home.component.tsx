import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Events } from 'redux/events/events';
import { useIsMounted, useTitle } from 'hooks';
import { AdminPanel } from 'components/containers';
import { History } from 'redux/histories/histories';
import { Notification, RingLoader, SkeletonUi } from 'components/partials';
import { getEvents, postHistory, resetEventError, resetPostHistorySuccessMessage } from 'redux/root.actions';
import { selectEventsIsLoading, selectEventsError, selectEvents, selectPostHistorySuccessMessage, selectHistories } from 'redux/root.selectors';
import { EventCard } from './containers/event-card/event-card.component';
import { filters } from 'utils/filter.util';

const Home: React.FC = () => {
  useTitle('Home 🏚');
  const dispatch = useDispatch();
  const isMounted = useIsMounted();
  const events: Events = useSelector(selectEvents);
  const eventsError = useSelector(selectEventsError);
  const isLoadingEvents = useSelector(selectEventsIsLoading);
  const postHistoriesSuccessMessage = useSelector(selectPostHistorySuccessMessage);
  const [hoursCount, setHoursCount] = useState<number>(1);

  const histories: History[] = useSelector(selectHistories);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isMounted) {
      dispatch(getEvents());

      // runs every one hour because the api sensor data persists every one hour
      interval = setInterval(() => {
        setHoursCount((prevHours) => prevHours + 1);
      }, 3600000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isMounted, hoursCount]);

  // send new sensor data to histories api ones the events data changes every one hour
  useEffect(() => {
    if (events && histories.length) {
      const history = filters.getHistory(histories, events);

      dispatch(postHistory(history || events));
    }
  }, [events, histories]);

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
        {isLoadingEvents || !events ? (
          <>
            {[...new Array(5)].map((v, i) => (
              <SkeletonUi shape="radiusHorizone" width="100%" height="5px" key={`${v}${i}skui`.trim()} />
            ))}
          </>
        ) : (
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
      <Notification
        shownModal={!!postHistoriesSuccessMessage}
        type="success"
        heading="History Posted"
        message={postHistoriesSuccessMessage}
        onCloseHandler={() => {
          dispatch(resetPostHistorySuccessMessage());
        }}
      />
    </>
  );
};

export default Home;
