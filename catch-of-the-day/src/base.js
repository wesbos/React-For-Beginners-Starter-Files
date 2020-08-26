import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB_kunwc--nkT5vs2-E9Zd5JpCRJ3qYod0",
    authDomain: "catch-of-the-day-mateo.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-mateo.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

//Named export
export {firebaseApp};

//Default export
export default base