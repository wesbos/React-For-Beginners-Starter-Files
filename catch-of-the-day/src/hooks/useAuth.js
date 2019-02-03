import { useAuthState } from 'react-firebase-hooks/auth'
import { useObject } from 'react-firebase-hooks/database'

const AUTH = Object.freeze({
  IsLoggedOut: Symbol('IsLoggedOut'),
  IsUser: Symbol('IsUser'),
  IsOwner: Symbol('IsOwner')
})

/// useAuth takes a storeId, and returns the status of that user
const useAuth = (firebase, storeId) => {
  const authProvider = new firebase.auth.GithubAuthProvider()
  const { initialising, user } = useAuthState(firebase.auth())

  const ownerRef = firebase.database().ref(`${storeId}/owner`)
  const { error, loading, value: owner } = useObject(ownerRef)
  if (!error && !loading && !owner) ownerRef.set(user)

  const login = () => firebase.auth().signInWithPopup(authProvider)
  const logout = () => firebase.auth().signOut()

  login()

  let status = AUTH.IsLoggedOut
  if (!initialising && user) {
    status = user === owner ? AUTH.IsOwner : AUTH.IsUser
  }

  return [{ status }, { login, logout }]
}

export { useAuth, AUTH }
