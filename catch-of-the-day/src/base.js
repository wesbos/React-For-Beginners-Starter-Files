import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBTJooILf-Z_7-ap0gkOdFyQhvhg8eLqIk',
  authDomain: 'catch-of-the-day-e0148.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-e0148.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
