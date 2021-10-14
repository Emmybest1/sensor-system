import { createSelector } from 'reselect';

import { RootState } from '../root';
import { HISTORIES_NAME, HISTORIES_STATE_KEYS } from './histories';

const selectHistoriesState = (state: RootState | any) => state[HISTORIES_NAME];

const selectHistoriesIsLoading = createSelector([selectHistoriesState], (Histories) => Histories[HISTORIES_STATE_KEYS.isLoading]);

const selectGetHistoriesError = createSelector([selectHistoriesState], (Histories) => Histories[HISTORIES_STATE_KEYS.getHistoriesError]);

const selectPostHistoryError = createSelector([selectHistoriesState], (Histories) => Histories[HISTORIES_STATE_KEYS.postHistoryError]);

const selectPostHistorySuccessMessage = createSelector([selectHistoriesState], (Histories) => Histories[HISTORIES_STATE_KEYS.successMessage]);

const selectHistories = createSelector([selectHistoriesState], (Histories) => Histories[HISTORIES_STATE_KEYS[HISTORIES_NAME]]);

export { selectHistoriesIsLoading, selectGetHistoriesError, selectPostHistoryError, selectPostHistorySuccessMessage, selectHistories };
