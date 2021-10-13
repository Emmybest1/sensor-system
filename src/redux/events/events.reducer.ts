import { Reducer } from 'redux';

import { types } from './events.types';
import { Events, EventsActions, EventsState } from './events';

const initialState: EventsState = {
  isLoading: false,
  error: null,
  events: {} as Events,
};

const eventsReducer: Reducer<EventsState, EventsActions | any> = (state = initialState, action): EventsState => {
  switch (action.type) {
    case types.GET_EVENTS_STARTED: {
      return { ...state, isLoading: true };
    }

    case types.GET_EVENTS_SUCCESS: {
      return { ...state, isLoading: false, error: null, events: action.payload as Events };
    }

    case types.GET_EVENTS_FAILURE: {
      return { ...state, isLoading: false, error: action.payload as string };
    }

    case types.RESET_GET_EVENTS_FAILURE: {
      return { ...state, error: action.payload as string };
    }

    default: {
      return state;
    }
  }
};

export { eventsReducer };
