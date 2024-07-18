import { configureStore } from '@reduxjs/toolkit'
import { swapi } from '../api/swapi'
import selectedCharacterReducer from './selectedCharacterSlice'

export const store = configureStore({
  reducer: {
    [swapi.reducerPath]: swapi.reducer,
    selectedCharacter: selectedCharacterReducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(swapi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
