/* eslint-disable no-unused-vars */
import { action } from 'typesafe-actions';
import { ActionCreator, Action } from 'redux';

import { Paths } from 'routes';
import { PAGES_PERMISSIONS, User } from './session';
import { types } from './session.types';
import { $senTemApi, LoginData } from 'api';
import { CurrentUser, storeCurrentUser } from 'services';

/** *****
 * login actions creators
 */
const loginSuccessful: ActionCreator<Action<string>> = (payload: User) => action(types.LOG_IN_SUCCESS, payload);

const loginFailed: ActionCreator<Action<string>> = (payload: string) => action(types.LOG_IN_FAILURE, payload);

const resetLoginError: ActionCreator<Action<string>> = () => action(types.RESET_LOG_IN_FAILURE);

const login = (data: LoginData, onSuccessDispatch?: Function, onErrorDispatch?: Function) => (dispatch: (arg0: Action<string>) => void) => {
  dispatch(action(types.LOG_IN_STARTED));

  $senTemApi
    .login(`${process.env.REACT_APP_OPENDATA_DATABASE_URL}login`, data)
    .then((response) => {
      const currentUser: CurrentUser = Object.assign(
        { date: new Date(), permissions: [PAGES_PERMISSIONS.HOME, PAGES_PERMISSIONS.HISTORIES, PAGES_PERMISSIONS.HISTORY] },
        response
      ) as unknown as CurrentUser;

      storeCurrentUser(currentUser);

      if (onSuccessDispatch) onSuccessDispatch();

      window.location.replace(Paths.home);

      dispatch(loginSuccessful(response as User));
    })
    .catch((error) => {
      if (onErrorDispatch) onErrorDispatch();

      dispatch(loginFailed(error.message as string));
    });
};

/** *****
 *  signup actions creators
 */
const signupSuccessful: ActionCreator<Action<string>> = (payload: User) => action(types.SIGN_UP_SUCCESS, payload);

const signupFailed: ActionCreator<Action<string>> = (payload: string) => action(types.SIGN_UP_FAILURE, payload);

const resetSignupError: ActionCreator<Action<string>> = () => action(types.RESET_SIGN_UP_FAILURE);

const signup = (data: LoginData, onSuccessDispatch?: Function, onErrorDispatch?: Function) => (dispatch: (arg0: Action<string>) => void) => {
  dispatch(action(types.LOG_IN_STARTED));

  $senTemApi
    .signUp(`${process.env.REACT_APP_OPENDATA_DATABASE_URL}signup`, data)
    .then((response) => {
      const currentUser: CurrentUser = Object.assign(
        { date: new Date(), permissions: [PAGES_PERMISSIONS.HOME, PAGES_PERMISSIONS.HISTORIES, PAGES_PERMISSIONS.HISTORY] },
        response
      ) as unknown as CurrentUser;

      storeCurrentUser(currentUser);

      if (onSuccessDispatch) onSuccessDispatch();

      window.location.replace(Paths.home);

      dispatch(signupSuccessful(response as User));
    })
    .catch((error) => {
      if (onErrorDispatch) onErrorDispatch();

      dispatch(signupFailed(error.message as string));
    });
};

export { login, resetLoginError, signup, resetSignupError };
