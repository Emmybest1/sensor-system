import { combineReducers } from 'redux';

import { EVENTS_NAME } from './events/events';
import { SESSION_NAME } from './session/session';
import { eventsReducer } from './events/events.reducer';
import { sessionReducer } from './session/session.reducer';

const rootReducer = combineReducers({
  [SESSION_NAME]: sessionReducer,
  [EVENTS_NAME]: eventsReducer,
});

export { rootReducer };
