import { ChangeEvent } from 'react'
import useLocalStorage from '../../hooks/useLocalStorage'
import styles from './form.module.css'

type FormProps = {
  value: string
  setValue: (value: string) => void
  isLoading: boolean
  handleValueChange: (name: string) => void
}

export function Form({ value, setValue, isLoading, handleValueChange }: FormProps) {
  const [, setStorageValue] = useLocalStorage('CharacterName', '')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <form
      className={styles.formSearch}
      onSubmit={() => {
        handleValueChange(value)
        setStorageValue(value)
      }}
    >
      <input
        className={styles.inputSearch}
        type="text"
        value={value}
        onChange={handleInputChange}
        disabled={isLoading}
      />
      <button className="button" type="submit" disabled={isLoading}>
        Search
      </button>
    </form>
  )
}
