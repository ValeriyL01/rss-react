import { useEffect, useState } from 'react'

function useLocalStorage(key: string, initValue: string): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [state, setState] = useState(() => {
    if (typeof window === 'undefined') {
      return initValue
    }

    const storageValue = window.localStorage.getItem(key)
    return storageValue !== null ? storageValue : initValue
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, state)
    }
  }, [key, state])

  return [state, setState]
}

export default useLocalStorage
