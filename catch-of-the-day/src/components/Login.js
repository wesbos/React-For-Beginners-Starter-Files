import React from 'react'
import PropTypes from 'prop-types'
import { useAuth } from '../hooks/useAuth.js'

const Login = props => {
  const { storeId, children } = props
  const [{ uid, owner }, { authenticate, logout }] = useAuth(storeId)

  if (!uid) {
    return (
      <nav className='login'>
        <h2>Inventory Login</h2>
        <p> sign in to manage your store inventory </p>
        <button className='github' onClick={() => authenticate('Github')}>
          Login with Github
        </button>
      </nav>
    )
  }

  if (uid !== owner) {
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
