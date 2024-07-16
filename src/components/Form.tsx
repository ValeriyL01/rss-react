import { ChangeEvent } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

type FormProps = {
  value: string
  setValue: (value: string) => void
  isLoading: boolean
  handleValueChange: (name: string) => void
}

function Form({ value, setValue, isLoading, handleValueChange }: FormProps) {
  const [, setStorageValue] = useLocalStorage('CharacterName', '')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <form
      className="form"
      onSubmit={() => {
        handleValueChange(value)
        setStorageValue(value)
      }}
    >
      <input className="input" type="text" value={value} onChange={handleChange} disabled={isLoading} />
      <button className="button" type="submit" disabled={isLoading}>
        Search
      </button>
    </form>
  )
}

export default Form
