import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { ValidationError } from 'yup'
import { RootState } from '../../store/store'
import { schema } from '../../validation/validation'
import { setFormData } from '../../store/formSlice'

interface FormErrors {
  name?: string
  age?: string
  email?: string
  password?: string
  confirmPassword?: string
  gender?: string
  terms?: string
  image?: string
  country?: string
}
export function Form() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [imgFile, setImgFile] = useState('')
  const [errors, setErrors] = useState<FormErrors>({})
  const countries = useSelector((state: RootState) => state.countries.countries)
  const nameRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const confirmPasswordRef = useRef<HTMLInputElement>(null)
  const genderRef = useRef<HTMLInputElement>(null)
  const termsRef = useRef<HTMLInputElement>(null)
  const imageRef = useRef<HTMLInputElement>(null)
  const countryRef = useRef<HTMLSelectElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const formData = {
      name: nameRef.current?.value || '',
      age: ageRef.current?.value || '',
      email: emailRef.current?.value || '',
      password: passwordRef.current?.value || '',
      confirmPassword: confirmPasswordRef.current?.value || '',
      gender: genderRef.current?.value || '',
      terms: termsRef.current?.checked || false,
      image: imgFile,
      country: countryRef.current?.value || '',
    }

    try {
      await schema.validate(formData, { abortEarly: false })
      dispatch(setFormData(formData))
      navigate('/')
    } catch (err) {
      if (err instanceof ValidationError) {
        const validationErrors: Record<string, string> = {}
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message
        })
        setErrors(validationErrors)
      }
    }
  }
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImgFile(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" ref={nameRef} />
      {errors.name && <p>{errors.name}</p>}

      <label>Age</label>
      <input type="text" ref={ageRef} />
      {errors.age && <p>{errors.age}</p>}

      <label>Email</label>
      <input type="email" ref={emailRef} />
      {errors.email && <p>{errors.email}</p>}

      <label>Password</label>
      <input type="password" ref={passwordRef} />
      {errors.password && <p>{errors.password}</p>}

      <label>Confirm Password</label>
      <input type="password" ref={confirmPasswordRef} />
      {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

      <label>Gender</label>
      <div className="genderWrapper">
        <label>
          <input type="radio" value="male" ref={genderRef} />
          Male
        </label>
        <label>
          <input type="radio" value="female" ref={genderRef} />
          Female
        </label>
        {errors.gender && <p>{errors.gender}</p>}
      </div>

      <label>
        <input type="checkbox" ref={termsRef} />I accept the Terms and
        Conditions
      </label>
      {errors.terms && <p>{errors.terms}</p>}

      <label htmlFor="image">Image</label>
      <input
        type="file"
        id="image"
        accept="image/png, image/jpeg"
        ref={imageRef}
        onChange={handleFileChange}
      />
      {errors.image && <p>{errors.image}</p>}

      <label htmlFor="country">Country</label>
      <select id="country" ref={countryRef}>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      {errors.country && <p>{errors.country}</p>}

      <button type="submit">Submit</button>
    </form>
  )
}
