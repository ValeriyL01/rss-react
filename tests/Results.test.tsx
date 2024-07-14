import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Results from '../src/components/Results'
import { Character } from '../src/types/types'

interface LocationState {
  hash: string
  key: string
  pathname: string
  search: string
  state: null
}

interface ResultsProps {
  characters: Character[]
  location: LocationState
}
const mockCharacters: Character[] = [
  {
    name: 'Luke Skywalker',
    birth_year: '19BBY',
    eye_color: 'blue',
    hair_color: 'blond',
    height: '172',
    skin_color: 'fair',
  },
  {
    name: 'Darth Vader',
    birth_year: '41.9BBY',
    eye_color: 'yellow',
    hair_color: 'none',
    height: '202',
    skin_color: 'white',
  },
]

describe('Results component', () => {
  it('displays the correct number of cards', () => {
    const props: ResultsProps = {
      characters: mockCharacters,
      location: {
        hash: 'hash',
        key: 'key',
        pathname: 'pathname',
        search: 'search',
        state: null,
      },
    }

    render(
      <MemoryRouter>
        <Results characters={props.characters} location={props.location} />
      </MemoryRouter>,
    )

    const cardElements = screen.getAllByTestId('link')
    expect(cardElements).toHaveLength(mockCharacters.length)
  })

  it('displays a message if no cards are present', () => {
    const props: ResultsProps = {
      characters: [],
      location: {
        hash: 'hash',
        key: 'key',
        pathname: 'pathname',
        search: 'search',
        state: null,
      },
    }

    render(
      <MemoryRouter>
        <Results characters={props.characters} location={props.location} />
      </MemoryRouter>,
    )

    const messageElement = screen.getByText('Enter the correct character name')
    expect(messageElement).toBeInTheDocument()
  })
})
