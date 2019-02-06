import { useEffect, useState, useRef } from 'react'
import firebase from 'firebase'
import { credentials } from '../credentials.js'

// Requires a handle to a firebaseApp
const useFirebase = (key, initialState) => {
  const [state, setState] = useState(initialState)

  const firebaseRef = useRef()
  let firebaseApp

  useEffect(() => {
    firebaseApp = firebase.apps.length
      ? firebase.apps[0]
      : firebase.initializeApp(credentials.firebase)
    firebaseRef.current = firebaseApp.database().ref(key)
    firebaseRef.current.set(initialState)

    return () => firebaseApp.delete()
  }, [])

  useEffect(
    () => {
      const handleUpdate = snapshot => {
        const newState = snapshot.val()
        if (newState) setState(newState)
      }
      firebaseRef.current.on(`value`, handleUpdate)
      return () => firebaseRef.current.off(`value`, handleUpdate)
    },
    [key]
  )

  // Update locally, then to firebase
  // Note that we subscribe to changes in case the firebase write fails
  const setFirebaseState = newState => {
    setState(newState)
    firebaseRef.current.update(newState)
  }

  return [state, setFirebaseState]
}

export { useFirebase }
