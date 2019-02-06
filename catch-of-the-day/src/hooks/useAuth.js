import { useState, useEffect } from 'react'
import firebase from 'firebase'
import { credentials } from '../credentials.js'

const AUTH = Object.freeze({
  IsLoggedOut: Symbol('IsLoggedOut'),
  IsUser: Symbol('IsUser'),
  IsOwner: Symbol('IsOwner')
})

/// useAuth takes a storeId, and returns the status of that user
const useAuth = storeId => {
  const [uid, setUid] = useState()
  const [owner, setOwner] = useState()

  useEffect(() => {
    firebase.initializeApp(credentials.firebase, `myapp`)
    if (!owner) setOwner(firebase.database().ref(`${storeId}/owner`))

    firebase.auth().onAuthStateChanged(user => setUid(user.uid))
    return () => firebase.auth().onAuthStateChanged()
  }, [])

  const authProvider = firebase.auth.GithubAuthProvider()
  const login = () => firebase.auth().signInWithPopup(authProvider)
  const logout = () => firebase.auth().signOut()

  let status = AUTH.IsLoggedOut
  if (uid) {
    status = uid === owner ? AUTH.IsOwner : AUTH.IsUser
  }

  return [{ status }, { login, logout }]
}

export { useAuth, AUTH }
