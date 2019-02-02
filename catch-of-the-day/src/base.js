import Rebase from 're-base'
import { initializeApp } from 'firebase'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyBrv7gtEDGn8Jr90kCI-ZD-CDQMxUiMHU4',
  authDomain: 'catch-of-the-day-92a28.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-92a28.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

export { firebaseApp }

export default base
