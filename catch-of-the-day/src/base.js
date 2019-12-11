import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBv0F8bT0VgREvj5p7njzbjEjgObIGy_FE",
  authDomain: "cath-of-the-day-mm2.firebaseapp.com",
  databaseURL: "https://cath-of-the-day-mm2.firebaseio.com"
});

const base = Rebase.createClass(firebase.database());

// named export
export { firebaseApp };

// this is a default export
export default base;
