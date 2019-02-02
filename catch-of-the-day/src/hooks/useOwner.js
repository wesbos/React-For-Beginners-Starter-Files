import { useAuth } from './useAuth.js'

const AUTH = Object.freeze({
  IsLoggedOut: Symbol('IsLoggedOut'),
  IsUser: Symbol('IsUser'),
  IsOwner: Symbol('IsOwner')
})

const useOwner = storeId => {
  const [{ uid, owner }, auth] = useAuth(storeId)
  let status = AUTH.IsLoggedOut
  if (uid) {
    status = uid === owner ? AUTH.IsOwner : AUTH.IsUser
  }

  return [{ status }, auth]
}

export { useOwner, AUTH }
