import { useState } from 'react'

const useLocalStorage = (id, initialState) => {
  const [state, setInnerState] = useState(() => {
    try {
      const existingState = localStorage.getItem(id)
      return existingState ? JSON.parse(existingState) : initialState
    } catch (e) {
      return initialState
    }
  })

  const setState = state => {
    setInnerState(state)
    localStorage.setItem(id, JSON.stringify(state))
  }

  return [state, setState]
}

export { useLocalStorage }
