import { configureStore } from '@reduxjs/toolkit'
import reactHookFormReducer from './reactHookFormSlice'
import countriesReducer from './countriesSlice'

export const store = configureStore({
  reducer: {
    form: reactHookFormReducer,
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
