import { createSelector } from 'reselect';

import { RootState } from 'redux/root';
import { SESSION_NAME, SESSION_STATE_KEYS } from './session';

const selectSessionState = (state: RootState | any) => state[SESSION_NAME];

const selectSessionIsLoading = createSelector(selectSessionState, (session) => session[SESSION_STATE_KEYS.isLoading]);

const selectSessionError = createSelector(selectSessionState, (session) => session[SESSION_STATE_KEYS.isLoading]);

export { selectSessionError, selectSessionIsLoading };
