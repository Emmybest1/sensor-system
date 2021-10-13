import { User } from 'redux/session/session';

export interface CurrentUser extends User {
  permissions: number[];
}

const storeCurrentUser = (currentUser: CurrentUser): void => {
  window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
};

const getCurrentUser = (): CurrentUser => {
  const currentUser = window.localStorage.getItem('currentUser');

  const augmentedCurrentUserData = Object.assign({ date: new Date(), currentUser });

  return currentUser ? JSON.parse(augmentedCurrentUserData) : currentUser;
};

const removeCurrentUser = (): void => {
  window.localStorage.removeItem('currentUser');
};

export { storeCurrentUser, getCurrentUser, removeCurrentUser };
