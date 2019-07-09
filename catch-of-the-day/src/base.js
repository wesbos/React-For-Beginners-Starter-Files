import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBkBDhNQbZ-KNvuTrskgAtm9_m395mBuOk",
  authDomain: "catch-of-the-day-jasonthered.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jasonthered.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

// this is a default export
export default base;
