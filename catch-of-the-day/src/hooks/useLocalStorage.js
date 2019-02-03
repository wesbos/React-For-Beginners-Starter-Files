import { useEffect, useState } from 'react'

const useLocalStorage = (id, initialState) => {
  const [state, setState] = useState(initialState)
  // On mount, get state from localstorage
  useEffect(() => {
    const state = localStorage.getItem(id)
    if (state) setState(JSON.parse(state))
  }, [])

  // When updating, save state to localstorage
  useEffect(() => localStorage.setItem(id, JSON.stringify(state)))

  return [state, setState]
}

export { useLocalStorage }
