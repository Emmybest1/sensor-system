import { combineReducers } from 'redux';

import { EVENTS_NAME } from './events/events';
import { SESSION_NAME } from './session/session';
import { HISTORIES_NAME } from './histories/histories';
import { eventsReducer } from './events/events.reducer';
import { sessionReducer } from './session/session.reducer';
import { historiesReducer } from './histories/histories.reducer';

const rootReducer = combineReducers({
  [SESSION_NAME]: sessionReducer,
  [EVENTS_NAME]: eventsReducer,
  [HISTORIES_NAME]: historiesReducer,
});

export { rootReducer };
