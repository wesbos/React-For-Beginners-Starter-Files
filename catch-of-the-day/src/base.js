import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB2ly2XWkLNmjOeN0GYvmdigWVTFFxdRPc",
  authDomain: "catch-of-the-day-mahmutkaya.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-mahmutkaya.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
