import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Results } from '../src/components/results/Results'
import { ResponseCharacter } from '../src/types/types'
import { store } from '../src/store/store'

interface LocationState {
  hash: string
  key: string
  pathname: string
  search: string
  state: null
}

interface ResultsProps {
  charactersData: ResponseCharacter
  location: LocationState
}
const mockCharacters: ResponseCharacter = {
  count: 82,
  next: null,
  previos: null,

  results: [
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
  ],
}
const mockCharactersEmptyData: ResponseCharacter = {
  count: 82,
  next: null,
  previos: null,

  results: [],
}
describe('Results component', () => {
  it('displays the correct number of cards', () => {
    const props: ResultsProps = {
      charactersData: mockCharacters,
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
        <Provider store={store}>
          <Results charactersData={props.charactersData} location={props.location} />
        </Provider>
      </MemoryRouter>,
    )

    const cardElements = screen.getAllByTestId('link')
    expect(cardElements).toHaveLength(mockCharacters.results.length)
  })

  it('displays a message if no cards are present', () => {
    const props: ResultsProps = {
      charactersData: mockCharactersEmptyData,
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
        <Provider store={store}>
          <Results charactersData={props.charactersData} location={props.location} />
        </Provider>
      </MemoryRouter>,
    )

    const messageElement = screen.getByText('Enter the correct character name')
    expect(messageElement).toBeInTheDocument()
  })
})
