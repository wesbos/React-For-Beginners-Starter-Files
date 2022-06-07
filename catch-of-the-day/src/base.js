// import Rebase from "re-base";
// // Import the functions you need from the SDKs you need
// import firebase from "firebase";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBo2KmEvBnUmmJsgNSt3p-AeeXsEJsHq6U",
//   authDomain: "catch-of-the-day-20d86.firebaseapp.com",
//   databaseURL: "https://catch-of-the-day-20d86-default-rtdb.asia-southeast1.firebasedatabase.app"
// };

// // Initialize Firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const base = Rebase.createClass(firebaseApp.database());

// export { firebaseApp };

// export default base;

import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';
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