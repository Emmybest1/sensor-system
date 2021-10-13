import { User } from 'redux/session/session';

export interface CurrentUser extends User {
  date: Date;
  permissions: number[];
}

const storeCurrentUser = (currentUser: CurrentUser): void => {
  window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
};

const getCurrentUser = (): CurrentUser => {
  const currentUser = window.localStorage.getItem('currentUser');

  return currentUser ? JSON.parse(currentUser) : currentUser;
};

const removeCurrentUser = (): void => {
  window.localStorage.removeItem('currentUser');
};

export { storeCurrentUser, getCurrentUser, removeCurrentUser };
