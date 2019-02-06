import { useEffect, useState } from 'react'
import firebase from 'firebase'
import { credentials: { firebase: credentials } } from '../credentials.js'

// Requires a handle to a firebaseApp
const useFirebase = (key, initialState) => {
  const [state, setState] = useState(initialState)

  const firebaseRef = useRef()
  let firebaseApp

  useEffect(() => {
    if (!firebase.apps.length) firebase.initializeApp(credentials, `auth`)
    firebaseApp = firebase.apps.find(app => app.name === `auth`)
    firebaseRef.current = firebase.database().ref(key)
    firebaseRef.current.set(initialState)

    return () => firebaseApp.delete()
  }, [])

  useEffect(
    () => {
      const handleUpdate = snapshot => {
        const newState = snapshot.val()
        if (newState) setState(newState)
      }
      firebaseRef.on(`value`, handleUpdate)
      return () => firebaseRef.off(`value`, handleUpdate)
    },
    [key]
  )

  // Update locally, then to firebase
  // Note that we subscribe to changes in case the firebase write fails
  const setFirebaseState = newState => {
    setState(newState)
    firebaseRef.update(newState)
  }

  return [state, setFirebaseState]
}

export { useFirebase }
