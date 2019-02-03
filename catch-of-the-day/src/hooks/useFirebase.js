import firebase from 'firebase'
import { useEffect, useState } from 'react'

// Requires a handle to a firebaseApp
const useFirebase = (firebase, key, initialState) => {
  const [state, setState] = useState(initialState)

  const firebaseRef = firebase.database().ref(key)
  firebaseRef.set(initialState)

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
