import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Character } from '../types/types'

export interface InitialState {
  character: Character[]
}

const initialState: InitialState = {
  character: [],
}

const selectedCharacterSlice = createSlice({
  name: 'selectedCharacter',
  initialState,
  reducers: {
    addSelectedCharacter: (state, action: PayloadAction<Character>) => {
      state.character.push(action.payload)
    },
    removeSelectedCharacter: (state, action: PayloadAction<Character>) => {
      state.character = state.character.filter((character) => character.name !== action.payload.name)
    },
    removeAllCharacters: (state) => {
      state.character = []
    },
  },
})

export const { addSelectedCharacter, removeSelectedCharacter, removeAllCharacters } = selectedCharacterSlice.actions
export default selectedCharacterSlice.reducer
