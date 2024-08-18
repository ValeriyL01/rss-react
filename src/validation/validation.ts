import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is a required field')
    .matches(/^[A-Z].*$/, 'First letter must be uppercase'),
  age: yup
    .string()
    .required('Age is a required field')
    .matches(/^(?!-)\d+$/, 'Age must be a positive number'),

  email: yup
    .string()
    .required('Email is a required field')
    .matches(
      /^^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Invalid email address',
    ),

  password: yup
    .string()
    .required('Password is a required field')
    .test('has-number', 'Password must contain at least one number', (value) =>
      /\d/.test(value || ''),
    )
    .test(
      'has-uppercase',
      'Password must contain at least one uppercase letter',
      (value) => /[A-Z]/.test(value || ''),
    )
    .test(
      'has-lowercase',
      'Password must contain at least one lowercase letter',
      (value) => /[a-z]/.test(value || ''),
    )
    .test(
      'has-special-char',
      'Password must contain at least one special character',
      (value) => /[!@#$%^&*(),.?":{}|<>]/.test(value || ''),
    ),

  confirmPassword: yup
    .string()
    .required('Confirm Password is a required field')
    .oneOf([yup.ref('password')], 'Passwords must match'),

  gender: yup.string().required('Gender is a required field'),

  terms: yup
    .boolean()
    .oneOf([true], 'You must accept the Terms and Conditions'),
  image: yup
    .string()
    .required('Image is a required field')
    .matches(/^data:image\/(png|jpeg);base64,/, 'Invalid image format'),
  country: yup.string().required('Country is a required field'),
})
