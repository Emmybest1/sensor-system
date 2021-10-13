import { StateType } from 'typesafe-actions';

export interface GenericState {
  isLoading: boolean;
  error: null | string;
}

export type RootState = StateType<typeof import('./root.reducer')>;

const GENERIC_STATE_KEYS = {
  isLoading: 'isLoading',
  error: 'error',
};

export { GENERIC_STATE_KEYS };
