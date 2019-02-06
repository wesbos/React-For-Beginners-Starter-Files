import React from 'react'
import PropTypes from 'prop-types'
import { useAuth, AUTH } from '../hooks/useAuth.js'

const Login = props => {
  const { children, storeId } = props
  const [{ status }, { login, logout }] = useAuth(storeId)

  if (status === AUTH.IsLoggedOut) {
    return (
      <nav className='login'>
        <p> Please sign in to manage your store inventory </p>
        <button className='github' onClick={() => login('Github')}>
          Login with Github
        </button>
      </nav>
    )
  }

  if (status === AUTH.isUser) {
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
