import { combineReducers } from 'redux';

import { SESSION_NAME } from './session/session';
import { sessionReducer } from './session/session.reducer';

const rootReducer = combineReducers({
  [SESSION_NAME]: sessionReducer,
});

export { rootReducer };
