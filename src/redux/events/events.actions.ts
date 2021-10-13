/* eslint-disable no-unused-vars */
import { action } from 'typesafe-actions';
import { ActionCreator, Action } from 'redux';

import { $senTemApi } from 'api';
import { Events } from './events';
import { types } from './events.types';

const getEventsSuccessful: ActionCreator<Action<string>> = (payload: Events) => action(types.GET_EVENTS_SUCCESS, payload);

const getEventsFailed: ActionCreator<Action<string>> = (payload: string) => action(types.GET_EVENTS_FAILURE, payload);

const getEvents = (onSuccessDispatch?: Function, onErrorDispatch?: Function) => (dispatch: (arg0: Action<string>) => void) => {
  dispatch(action(types.GET_EVENTS_STARTED));

  $senTemApi
    .get('events')
    .then((response) => {
      if (onSuccessDispatch) onSuccessDispatch();
      dispatch(getEventsSuccessful(response as Events));
    })
    .catch((error) => {
      if (onErrorDispatch) onErrorDispatch();

      dispatch(getEventsFailed(error.message));
    });
};

const resetEventError: ActionCreator<Action<string>> = () => action(types.RESET_GET_EVENTS_FAILURE);

export { getEvents, resetEventError };
