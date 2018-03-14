import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCaYlR1mnKT4fIv2LjHANytPBRgcuSsi0M",
  authDomain: "react-for-beginners-c8bb6.firebaseapp.com",
  databaseURL: "https://react-for-beginners-c8bb6.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export.
export { firebaseApp };

// This is a default export.
export default base;
