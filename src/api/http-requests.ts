import { getCurrentUser } from 'services';
import { db } from './firebase/config/config';

export interface IUser{
    email:string;
    password:string;
}

const headers = new Headers({
  'Content-type': 'application/json',
  credentials: 'omit'
});

/** ******
 * post util to firebase firestore service for storing persistent data history
 */
const post = <T>(collection:string, data:Record<string, T>):Promise<T> => {
  const currentUser = getCurrentUser();

  // a check to ensure user is authenticated and has a data, nota bene: not
  // necessary for our firestore service but just to keep with the auth authorization as the other api
  if (!currentUser) {
    throw new Error('Unauthorized user');
  }

  const response = db.collection(collection).add(data);

  return response as Promise<T>;
};

/** ******
 * get util for getting a collection in firestore service
 */
const getCollection = <T>(collection: string):Promise<T> => {
  const currentUser = getCurrentUser();

  // a check to ensure user is authenticated and has a data, nota bene: not
  // necessary for our firestore service but just to keep with the auth authorization as the other api
  if (!currentUser) {
    throw new Error('Unauthorized user');
  }

  const response = db.collection(collection).get();

  return response as Promise<T>;
};

/** ******
 * get util
 */
const get = async<T>(url:string):Promise<T> => {
  const currentUser = getCurrentUser();

  // a check to ensure user is authenticated and has a data
  if (!currentUser) {
    throw new Error('Unauthorized user');
  }

  headers.append('Authorization', `Bearer ${currentUser.accessToken}`);

  const response = await fetch(url, {
    method: 'GET',
    headers
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<T>;
};

/** ******
 * login util
 */
const login = async <T>(url:string, data:IUser):Promise<T> => {
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<T>;
};

/** ******
 * Signup util
 */
const signUp = async <T>(url:string, data:IUser):Promise<T> => {
  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<T>;
};

export const _senTemAPI = {
  login,
  signUp,
  post,
  get,
  getCollection
};
