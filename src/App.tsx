import './App.css'
import { Component } from 'react'

import Form from './components/Form'
import getCharacter from './api/api'

interface MyProps {
  value: string
  isLoading: boolean
}
type MyState = object
class App extends Component<MyState, MyProps> {
  constructor(props: MyProps) {
    super(props)
    this.state = {
      value: '',
      isLoading: false,
    }
  }

  componentDidMount() {
    const storageValue = localStorage.getItem('CharacterName') ?? ''
    this.setState({ value: storageValue }, () => {
      this.getResults()
    })
  }

  setValue = (value: string) => {
    this.setState({ value })
  }

  getResults = async () => {
    const { value } = this.state
    try {
      this.setState({ isLoading: true })
      const data = await getCharacter(value.trim())
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }

  error = () => {
    this.setState(() => {
      throw new Error('Eto error')
    })
  }

  render() {
    const { value, isLoading } = this.state
    return (
      <div className="container">
        <h1>Search Star Wars characters</h1>
        <Form value={value} setValue={this.setValue} searchItems={this.getResults} isLoading={isLoading} />
        <button type="button" onClick={this.error} disabled={isLoading}>
          Error
        </button>
      </div>
    )
  }
}

export default App
