import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FormState {
  name: string
  age: string
  email: string
  password: string
  confirmPassword: string
  gender: string
  terms: boolean
  image: string
  country: string
}

const initialState: FormState = {
  name: '',
  age: '',
  email: '',
  password: '',
  confirmPassword: '',
  gender: '',
  terms: false,
  image: '',
  country: '',
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormState>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { setFormData } = formSlice.actions
export default formSlice.reducer
