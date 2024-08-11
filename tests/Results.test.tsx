import { render, screen } from '@testing-library/react'

import { Provider } from 'react-redux'
import { Results } from '../src/components/results/Results'
import { Character } from '../src/types/types'
import { store } from '../src/store/store'

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

const mockCharactersEmpty: Character[] = []

describe('Results component', () => {
  it('displays the correct number of cards', () => {
    const props = {
      characters: mockCharacters,
    }

    render(
      <Provider store={store}>
        <Results characters={props.characters} />
      </Provider>,
    )

    const cardElements = screen.getAllByTestId('link')
    expect(cardElements).toHaveLength(mockCharacters.length)
  })

  it('displays a message if no cards are present', () => {
    const props = {
      characters: mockCharactersEmpty,
    }

    render(
      <Provider store={store}>
        <Results characters={props.characters} />
      </Provider>,
    )

    const messageElement = screen.getByText('Enter the correct character name')
    expect(messageElement).toBeInTheDocument()
  })
})
