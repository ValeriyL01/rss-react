import { ChangeEvent, FormEvent } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

type FormProps = {
  value: string
  setValue: (value: string) => void
  getResults: (inputValue: string) => void
  isLoading: boolean
}

function Form({ value, setValue, getResults, isLoading }: FormProps) {
  const [, setStorageValue] = useLocalStorage('CharacterName', '')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    getResults(value)
    setStorageValue(value)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="input" type="text" value={value} onChange={handleChange} disabled={isLoading} />
      <button className="button" type="submit" disabled={isLoading}>
        Search
      </button>
    </form>
  )
}

export default Form
