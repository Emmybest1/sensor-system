import { RootState } from 'redux/root';
import { createSelector } from 'reselect';

import { EVENTS_NAME, EVENTS_STATE_KEYS } from './events';

const selectEventsState = (state: RootState | any) => state[EVENTS_NAME];

const selectEventsIsLoading = createSelector(selectEventsState, (events) => events[EVENTS_STATE_KEYS.isLoading]);

const selectEventsError = createSelector(selectEventsState, (events) => events[EVENTS_STATE_KEYS.error]);

const selectEvents = createSelector(selectEventsState, (events) => events[EVENTS_STATE_KEYS.events]);

export { selectEventsIsLoading, selectEventsError, selectEvents };
