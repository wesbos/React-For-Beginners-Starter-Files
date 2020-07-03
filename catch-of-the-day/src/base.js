import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCxgD873qRiuyGcImRpsVZTmK54nA1W5HI",
  authDomain: "catch-of-the-day-d2fa8.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-d2fa8.firebaseio.com",
});
// would this normally go in an env file?

const base = Rebase.createClass(firebaseApp.database());
// returns the actual database, this seems similar to how expressjs creates the express object that becomes where you get your database information back from.

export { firebaseApp };
// TODO: what does this ^^ part do?

export default base;
