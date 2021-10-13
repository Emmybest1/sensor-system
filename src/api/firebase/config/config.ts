import * as firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp(
  Object.freeze({
    apiKey: 'AIzaSyBXWgJ9rENPfhZtFQASIO8IphzOajy5kRM',
    authDomain: 'sensor-system-db.firebaseapp.com',
    projectId: 'sensor-system-db',
    storageBucket: 'sensor-system-db.appspot.com',
    messagingSenderId: '874553475043',
    appId: '1:874553475043:web:a1802f46765c25e1456ad6',
    measurementId: 'G-BZ63BQ2NSL'

  })
);

const db = firebase.firestore();

export { firebase, db, };
