import { Reducer } from 'redux';

import { types } from './histories.types';
import { HistoriesActions, HistoriesState } from './histories';

const initialState: HistoriesState = {
  isLoading: false,
  getHistoriesError: null,
  postHistoryError: null,
  successMessage: '',
  histories: [],
};

const historiesReducer: Reducer<HistoriesState, HistoriesActions | any> = (state = initialState, action): HistoriesState => {
  switch (action.type) {
    case types.GET_HISTORIES_STARTED: {
      return { ...state, isLoading: true };
    }

    case types.GET_HISTORIES_SUCCESS: {
      return { ...state, isLoading: false, getHistoriesError: null, histories: action.payload };
    }

    case types.GET_HISTORIES_FAILURE: {
      return { ...state, isLoading: false, getHistoriesError: action.payload as string };
    }

    case types.RESET_GET_HISTORIES_FAILURE: {
      return { ...state, getHistoriesError: null };
    }

    case types.POST_HISTORY_STARTED: {
      return { ...state, isLoading: true };
    }

    case types.POST_HISTORY_SUCCESS: {
      return { ...state, isLoading: false, postHistoryError: null, successMessage: action.payload as string };
    }

    case types.POST_HISTORY_FAILURE: {
      return { ...state, isLoading: false, postHistoryError: null };
    }

    case types.RESET_POST_HISTORY_FAILURE: {
      return { ...state, postHistoryError: null };
    }

    case types.RESET_POST_HISTORY_SUCCESS_MESSAGE: {
      return { ...state, successMessage: '' };
    }

    default: {
      return state;
    }
  }
};

export { historiesReducer };
