/* eslint-disable consistent-return */
import { Events } from 'redux/events/events';
import { History } from 'redux/histories/histories';

const getHistory = (histories: History[], events: Events): History | void => {
  if (!histories.length) return;

  // this is a filter system since we need a way to get back events as a history from firestore with UID
  const history = histories.filter(({ date }) => date === events.date);

  if (Array.isArray(history)) return history[0] as History;

  return history as History;
};

export const filters = {
  getHistory,
};
