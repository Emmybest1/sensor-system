import { db } from 'api/firebase/config/config';

function queryIsDocExisting(targetedCollection: string, id: string): Promise<boolean> {
  const usersRef = db.collection(targetedCollection).doc(id);

  return usersRef.get().then((docSnapshot) => docSnapshot.exists);
}

export const firebaseQuery = {
  queryIsDocExisting,
};
