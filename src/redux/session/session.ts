import { ActionType } from 'typesafe-actions';

import { GenericState, GENERIC_STATE_KEYS } from 'redux/root';

export interface User {
  id: number | string;
  email: string;
  accessToken: string;
}

export interface SessionState extends GenericState {
  user: User;
}
export type SessionActions = ActionType<typeof import('./session.actions')>;

const SESSION_NAME = 'session';

const SESSION_STATE_KEYS = {
  ...GENERIC_STATE_KEYS,
  user: 'user',
};

export { SESSION_NAME, SESSION_STATE_KEYS };
