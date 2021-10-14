/* eslint-disable no-useless-return */
/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
import { action } from 'typesafe-actions';
import { ActionCreator, Action } from 'redux';

import { $senTemApi } from 'api';
import { types } from './histories.types';
import { Events } from 'redux/events/events';
import { firebaseQuery } from 'middlewares';

const getHistoriesSuccessful: ActionCreator<Action<string>> = (payload: Events[]) => action(types.GET_HISTORIES_SUCCESS, payload);

const getHistoriesFailed: ActionCreator<Action<string>> = (payload: string) => action(types.GET_HISTORIES_FAILURE, payload);

const getHistories = (onSuccessDispatch?: Function, onErrorDispatch?: Function) => (dispatch: (arg0: Action<string>) => void) => {
  dispatch(action(types.GET_HISTORIES_STARTED));

  $senTemApi
    .getCollection('histories')
    .then((response) => {
      const histories: History[] = [];

      response.forEach((history) => {
        histories.push({ id: history.id, ...history.data() } as unknown as History);
      });

      if (onSuccessDispatch) onSuccessDispatch();

      dispatch(getHistoriesSuccessful(histories));
    })
    .catch((error) => {
      if (onErrorDispatch) onErrorDispatch();

      dispatch(getHistoriesFailed(error?.message || 'Failed to histories news.'));
    });
};

const resetGetHistoriesError: ActionCreator<Action<string>> = () => action(types.RESET_GET_HISTORIES_FAILURE);

export const postHistorySuccess: ActionCreator<Action<string>> = (payload: string) => action(types.POST_HISTORY_SUCCESS, payload);

export const postHistoryFailed: ActionCreator<Action<string>> = (payload: string) => action(types.POST_HISTORY_FAILURE, payload);

export const postHistory = (data: Events) => (dispatch: (arg0: { type: string; payload?: string }) => void) => {
  if (data.id) {
    return firebaseQuery.queryIsDocExisting('histories', data.id).then((response) => {
      if (response) return;
    });
  }

  dispatch(action(types.POST_HISTORY_STARTED));

  $senTemApi
    .post('histories', data)
    .then(() => {
      dispatch(postHistorySuccess('Successfully posted history to db.'));
    })
    .catch((error) => {
      dispatch(postHistoryFailed(error?.message || 'Failed to post history to db.'));
    });
};

const resetPostHistoryError: ActionCreator<Action<string>> = () => action(types.RESET_POST_HISTORY_FAILURE);

const resetPostHistorySuccessMessage: ActionCreator<Action<string>> = () => action(types.RESET_POST_HISTORY_SUCCESS_MESSAGE);

export { getHistories, resetGetHistoriesError, resetPostHistoryError, resetPostHistorySuccessMessage };
