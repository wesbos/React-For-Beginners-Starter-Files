import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBo2KmEvBnUmmJsgNSt3p-AeeXsEJsHq6U",
  authDomain: "catch-of-the-day-20d86.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-20d86-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;