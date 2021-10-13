import { Reducer } from 'redux';

import { types } from './session.types';
import { User, SessionState } from './session';

const initialState: SessionState = {
  isLoading: false,
  error: null,
  user: {} as User,
};

const sessionReducer: Reducer<SessionState, SessionState | any> = (state = initialState, action): SessionState => {
  switch (action.type) {
    case types.LOG_IN_STARTED: {
      return { ...state, isLoading: true };
    }

    case types.LOG_IN_SUCCESS: {
      return { ...state, isLoading: false, error: null, user: action.payload as User };
    }

    case types.LOG_IN_FAILURE: {
      return { ...state, isLoading: false, error: action.payload as string };
    }

    case types.RESET_LOG_IN_FAILURE: {
      return { ...state, error: null };
    }

    case types.SIGN_UP_STARTED: {
      return { ...state, isLoading: true };
    }

    case types.SIGN_UP_SUCCESS: {
      return { ...state, isLoading: false, error: null, user: action.payload as User };
    }

    case types.SIGN_UP_FAILURE: {
      return { ...state, isLoading: false, error: action.payload as string };
    }

    case types.RESET_SIGN_UP_FAILURE: {
      return { ...state, error: null };
    }

    case types.LOG_OUT_SUCCESS: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export { sessionReducer };
