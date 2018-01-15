import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCdgXxyNqCZEeY36Ss9i4jFMSUh7FdGi6M",
  authDomain: "catch-of-the-day-wes-bos.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-wes-bos.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());
console.log(base);
export { firebaseApp };

export default base;
