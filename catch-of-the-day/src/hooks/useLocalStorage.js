import { useState } from 'react'

const useLocalStorage = (id, initialState) => {
  const [state, setInnerState] = useState(() => {
    try {
      return localStorage.getItem(id) ? localStorage.getItem(id) : initialState
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
