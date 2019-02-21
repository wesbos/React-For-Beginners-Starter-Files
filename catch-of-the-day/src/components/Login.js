import React from 'react'
import PropTypes from 'prop-types'
import { useAuth, AuthProvider, createAuthProvider, signInWithPopup, signOut } from '@use-firebase/auth'
import { useFirebase } from '@use-firebase/app'
import { useValue } from '@use-firebase/database'
import { credentials } from '../credentials.js'

const Login = props => {
  const { children, storeId } = props
  const firebase = useFirebase(credentials)

  const auth = useAuth(firebase)
  const { isSignedIn, user } = auth
  const [owner, setOwner] = useValue(firebase, `${storeId}/owner`, 'value', user && user.uid)

  // create login and logout
  const login = () => signInWithPopup(firebase, createAuthProvider(firebase, AuthProvider.GITHUB))
  const logout = () => signOut(firebase)

  if (!isSignedIn || !(user && user.uid)) {
    return (
      <nav className='login'>
        <p> Please sign in to manage your store inventory </p>
        <button className='github' onClick={login}>
          Login with Github
        </button>
      </nav>
    )
  }

  if (!owner) setOwner(user.uid)

  if (owner !== user.uid) {
    return (
      <div>
        <h2>You have no power here!</h2>
        <button onClick={logout}>Log Out!</button>
      </div>
    )
  }

  return children
}

Login.propTypes = {
  storeId: PropTypes.string.isRequired
}
export { Login }
