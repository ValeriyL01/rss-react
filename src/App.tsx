import './App.css'
import { useEffect, useState } from 'react'

import Results from './components/Results'
import Form from './components/Form'
import getCharacter from './api/api'
import { Character } from './types/types'

function App() {
  const [value, setValue] = useState('')
  const [characters, setCharacters] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getResults = async (InputValue: string) => {
    try {
      setIsLoading(true)
      const data = await getCharacter(InputValue.trim())
      if (data) {
        setCharacters(data)
        setIsLoading(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const storageValue = localStorage.getItem('CharacterName') ?? ''
    getResults(storageValue)
  }, [])

  const throwError = () => {
    try {
      throw new Error('Eto error')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="container">
      <h1>Search Star Wars characters</h1>
      <Form value={value} setValue={setValue} getResults={getResults} isLoading={isLoading} />
      {isLoading ? <h2>Loading...</h2> : <Results characters={characters} />}
      <button type="button" onClick={throwError} disabled={isLoading}>
        Error
      </button>
    </div>
  )
}

export default App
