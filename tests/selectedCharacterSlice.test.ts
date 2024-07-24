import selectedCharacterReducer, {
  addSelectedCharacter,
  removeAllCharacters,
  removeSelectedCharacter,
} from '../src/store/selectedCharacterSlice'
import { Character } from '../src/types/types'

describe('selectedCharacterSlice', () => {
  interface InitialState {
    character: Character[]
  }

  const initialState: InitialState = {
    character: [],
  }

  it('should add a selected character', () => {
    const character: Character = {
      name: 'Luke Skywalker',
      birth_year: '19 BBY',
      eye_color: 'Blue',
      hair_color: 'Blond',
      height: '172',
      skin_color: 'Fair',
    }
    const action = addSelectedCharacter(character)
    const state = selectedCharacterReducer(initialState, action)
    expect(state.character).toEqual([character])
  })

  it('should remove a selected character', () => {
    const character: Character = {
      name: 'Luke Skywalker',
      birth_year: '19 BBY',
      eye_color: 'Blue',
      hair_color: 'Blond',
      height: '172',
      skin_color: 'Fair',
    }
    const action1 = addSelectedCharacter(character)
    let state = selectedCharacterReducer(initialState, action1)
    expect(state.character).toEqual([character])

    const action2 = removeSelectedCharacter(character)
    state = selectedCharacterReducer(state, action2)
    expect(state.character).toEqual([])
  })

  it('should remove all selected characters', () => {
    const character1: Character = {
      name: 'Luke Skywalker',
      birth_year: '19 BBY',
      eye_color: 'Blue',
      hair_color: 'Blond',
      height: '172',
      skin_color: 'Fair',
    }
    const character2: Character = {
      name: 'Darth Vader',
      birth_year: '41.9 BBY',
      eye_color: 'Yellow',
      hair_color: 'None',
      height: '202',
      skin_color: 'White',
    }
    const action1 = addSelectedCharacter(character1)
    const action2 = addSelectedCharacter(character2)
    let state = selectedCharacterReducer(initialState, action1)
    state = selectedCharacterReducer(state, action2)
    expect(state.character).toEqual([character1, character2])

    const action3 = removeAllCharacters()
    state = selectedCharacterReducer(state, action3)
    expect(state.character).toEqual([])
  })
})
