import { ActionType } from 'typesafe-actions';

import { Events } from 'redux/events/events';

export interface History extends Events {
  id: string;
}
export interface HistoriesState {
  isLoading: boolean;
  histories: Events[];
  successMessage: string;
  getHistoriesError: string | null;
  postHistoryError: string | null;
}

export type HistoriesActions = ActionType<typeof import('./histories.actions')>;

const HISTORIES_NAME = 'histories';

const HISTORIES_STATE_KEYS = {
  isLoading: 'isLoading',
  getHistoriesError: 'getHistoriesError',
  postHistoryError: 'postHistoryError',
  successMessage: 'successMessage',
  [HISTORIES_NAME]: HISTORIES_NAME,
};

export { HISTORIES_NAME, HISTORIES_STATE_KEYS };
