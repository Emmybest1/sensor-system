import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Events } from 'redux/events/events';
import { useIsMounted, useTitle } from 'hooks';
import { AdminPanel } from 'components/containers';
import { Notification, SkeletonUi } from 'components/partials';
import { EventCard } from './containers/event-card/event-card.component';
import { getEvents, postHistory, resetEventError } from 'redux/root.actions';
import { selectEventsIsLoading, selectEventsError, selectEvents } from 'redux/root.selectors';

const Home: React.FC = () => {
  useTitle('Home 🏚');
  const dispatch = useDispatch();
  const isMounted = useIsMounted();
  const events: Events = useSelector(selectEvents);
  const eventsError = useSelector(selectEventsError);
  const isLoadingEvents = useSelector(selectEventsIsLoading);
  const [hoursCount, setHoursCount] = useState<number>(0);

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
    // will only run if hoursCount result to truthy ie. plus 1 hr
    if (events && hoursCount) {
      dispatch(postHistory(events));
    }
  }, [events]);

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
      <AdminPanel title="Latest Events" isLoading={isLoadingEvents}>
        {isLoadingEvents ? (
          <>
            {[...new Array(5)].map((v, i) => (
              <SkeletonUi shape="radiusHorizone" width="100%" height="5px" key={`${v}${i}skui`.trim()} />
            ))}
          </>
        ) : null}
        {events ? (
          <EventCardsWrapper>
            <EventCard date={events.date} name={Object.keys(events)[1]} value={events.sensor1.toString()} />
            <EventCard date={events.date} name={Object.keys(events)[2]} value={events.sensor2.toString()} />
            <EventCard date={events.date} name={Object.keys(events)[3]} value={events.sensor3.toString()} />
            <EventCard date={events.date} name={Object.keys(events)[4]} value={events.sensor4.toString()} />
          </EventCardsWrapper>
        ) : (
          <>{!isLoadingEvents ? <p>Sorry no Events currently.</p> : null}</>
        )}
      </AdminPanel>

      <Notification
        type="danger"
        heading="Events Error"
        message={eventsError}
        shownModal={!!eventsError}
        onCloseHandler={() => dispatch(resetEventError())}
      />
    </>
  );
};

export default Home;
