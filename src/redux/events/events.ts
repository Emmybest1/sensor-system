import { GenericState, GENERIC_STATE_KEYS } from 'redux/root';
import { ActionType } from 'typesafe-actions';

export interface Events {
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
  events: 'events',
};

export { EVENTS_NAME, EVENTS_STATE_KEYS };
