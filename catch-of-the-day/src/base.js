import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCOgyyO9GYgXRA6UqRAGZBNgs4Ir897UAo",
  authDomain: "catch-of-the-day-a5509.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-a5509.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
