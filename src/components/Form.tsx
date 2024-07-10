import { ChangeEvent, FormEvent, Component } from 'react'

type FormProps = {
  value: string
  setValue: (value: string) => void
  searchItems: () => void
  isLoading: boolean
}

class Form extends Component<FormProps> {
  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { setValue } = this.props
    setValue(e.target.value)
  }

  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const { searchItems, value } = this.props
    e.preventDefault()
    searchItems()
    localStorage.setItem('CharacterName', value)
  }

  render() {
    const { isLoading, value } = this.props
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <input className="input" type="text" value={value} onChange={this.handleChange} disabled={isLoading} />
        <button className="button" type="submit" disabled={isLoading}>
          Search
        </button>
      </form>
    )
  }
}

export default Form
