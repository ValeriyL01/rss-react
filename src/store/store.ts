import { configureStore } from '@reduxjs/toolkit'
import reactHookFormReducer from './reactHookFormSlice'
import formReducer from './formSlice'
import countriesReducer from './countriesSlice'

export const store = configureStore({
  reducer: {
    reactHookForm: reactHookFormReducer,
    form: formReducer,
    countries: countriesReducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
