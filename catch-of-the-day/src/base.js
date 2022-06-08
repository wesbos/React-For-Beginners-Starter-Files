import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBo2KmEvBnUmmJsgNSt3p-AeeXsEJsHq6U",
  authDomain: "catch-of-the-day-20d86.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-20d86-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "catch-of-the-day-20d86",
  storageBucket: "catch-of-the-day-20d86.appspot.com",
  messagingSenderId: "102547133228",
  appId: "1:102547133228:web:126b73e94f630708aa1289"
});

const base = Rebase.createClass(firebaseApp.database());
const db = firebaseApp.firestore();

export { firebaseApp, db };

export default base;