import firebase from 'firebase'
import { firebaseOptions } from './firebaseOptions.js'

const firebaseApp = firebase.initializeApp(firebaseOptions)
const { auth } = firebase.auth

export { firebaseApp, auth }
