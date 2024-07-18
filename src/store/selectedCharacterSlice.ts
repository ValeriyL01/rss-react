import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Character } from '../types/types'

const initialState: Character[] = []

const selectedCharacterSlice = createSlice({
  name: 'selectedCharacter',
  initialState,
  reducers: {
    addSelectedCharacter: (state, action: PayloadAction<Character>) => {
      state.push(action.payload)
    },
    removeSelectedCharacter: (state, action: PayloadAction<Character>) => {
      return state.filter((character) => character.name !== action.payload.name)
    },
  },
})

export const { addSelectedCharacter, removeSelectedCharacter } = selectedCharacterSlice.actions
export default selectedCharacterSlice.reducer
