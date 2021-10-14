import { ActionType } from 'typesafe-actions';

import { GenericState, GENERIC_STATE_KEYS } from 'redux/root';

export interface Events {
  id?: string;
  date: string;
  sensor1: number;
  sensor2: number;
  sensor3: number;
  sensor4: number;
}

export interface EventsState extends GenericState {
  events: Events;
}

export type EventsActions = ActionType<typeof import('./events.actions')>;

const EVENTS_NAME = 'events';

const EVENTS_STATE_KEYS = {
  ...GENERIC_STATE_KEYS,
  [EVENTS_NAME]: EVENTS_NAME,
};

export { EVENTS_NAME, EVENTS_STATE_KEYS };
