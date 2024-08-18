import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FormState } from '../types/formType'

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

const reactHookFormSlice = createSlice({
  name: 'reactHookForm',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<FormState>) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { setFormData } = reactHookFormSlice.actions
export default reactHookFormSlice.reducer
