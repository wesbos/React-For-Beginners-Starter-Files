import Rebase from "re-base";
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA57GNGta5ifxM0Saiz7w2nH79NujL4SZQ",
    authDomain: "catch-of-the-day-8ad06.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-8ad06.firebaseio.com",
    projectId: "catch-of-the-day-8ad06",
    storageBucket: "catch-of-the-day-8ad06.appspot.com",
    messagingSenderId: "722157214800",
    appId: "1:722157214800:web:c88ccd06e39413b7d00555"
});

const base =Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
