import { useEffect, useState } from 'react'

function useLocalStorage(key: string, initValue: string): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [state, setState] = useState(() => {
    const storageDate = localStorage.getItem(key)
    return storageDate || initValue
  })

  useEffect(() => {
    localStorage.setItem(key, state)
  }, [key, state])
  return [state, setState]
}

export default useLocalStorage
