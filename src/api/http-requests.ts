import firebase from 'firebase';

import { getCurrentUser } from 'services';
import { db } from './firebase/config/config';

export interface LoginData {
  email: string;
  password: string;
}

const headers = new Headers({
  'Content-type': 'application/json',
  credentials: 'omit',
});

/** ******
 * post util to firebase firestore service for storing persistent data history
 */
const post = <T>(collection: string, data: Record<string, T>): Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>> => {
  const currentUser = getCurrentUser();

  // a check to ensure user is authenticated and has a data, nota bene: not
  // necessary for our firestore service but just to keep with the auth authorization as the other api
  if (!currentUser) {
    throw new Error('Unauthorized user');
  }

  const response: Promise<firebase.firestore.DocumentReference<firebase.firestore.DocumentData>> = db.collection(collection).add(data);

  return response;
};

/** ******
 * get util for getting a collection in firestore service
 */
const getCollection = (collection: string): Promise<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>> | void => {
  const currentUser = getCurrentUser();

  // a check to ensure user is authenticated and has a data, nota bene: not
  // necessary for our firestore service but just to keep with the auth authorization as the other api
  if (!currentUser) {
    throw new Error('Unauthorized user');
  }

  const response: Promise<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>> = db.collection(collection).get();

  return response;
};

/** ******
 * get util
 */
const get = async <T>(url: string): Promise<T> => {
  const currentUser = getCurrentUser();

  // a check to ensure user is authenticated and has a data
  if (!currentUser) {
    throw new Error('Unauthorized user');
  }

  headers.append('Authorization', `Bearer ${currentUser.accessToken}`);

  const response = await fetch(url, {
    method: 'GET',
    headers,
  });

  if (!response.ok) {
    const errorMessage = await response.text();

    throw new Error(errorMessage || response.statusText);
  }

  return response.json() as Promise<T>;
};

/** ******
 * login util
 */
const login = async <T>(url: string, data: LoginData): Promise<T> => {
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error((await response.text()) || response.statusText);
  }

  return response.json() as Promise<T>;
};

/** ******
 * Signup util
 */
const signUp = async <T>(url: string, data: LoginData): Promise<T> => {
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error((await response.text()) || response.statusText);
  }

  return response.json() as Promise<T>;
};

export const $senTemApi = {
  login,
  signUp,
  post,
  get,
  getCollection,
};
