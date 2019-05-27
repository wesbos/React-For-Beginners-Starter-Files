import Rebase from "re-base";
import firebase from "firebase";


const app = firebase.initializeApp({
 	apiKey: "AIzaSyAUedOAbxWbxs0eHKI8-r11IsvRCcaDXbI",
    authDomain: "catch-of-the-day-c3908.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-c3908.firebaseio.com"
});

const base = Rebase.createClass(app.database());


//export const firebaseApp = app;
export {app};

export default base;