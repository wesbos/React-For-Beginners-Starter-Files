import Rebase from 're-base'
import { initializeApp } from 'firebase'

const firebase = initializeApp({
  apiKey: "AIzaSyBrv7gtEDGn8Jr90kCI-ZD-CDQMxUiMHU4",
  authDomain: "catch-of-the-day-92a28.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-92a28.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebase }

export default base