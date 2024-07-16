import { configureStore } from '@reduxjs/toolkit'
import { swapi } from './api/swapi'

export const store = configureStore({
  reducer: {
    [swapi.reducerPath]: swapi.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(swapi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
