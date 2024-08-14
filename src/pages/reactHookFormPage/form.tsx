import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setFormData } from '../../store/reactHookFormSlice'
import { RootState } from '../../store/store'
import { schema } from './validation'

interface IForm {
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

export function Form() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
  } = useForm<IForm>({ resolver: yupResolver(schema), mode: 'onChange' })
  const countries = useSelector((state: RootState) => state.countries.countries)
  const onSubmit = (data: IForm) => {
    dispatch(setFormData(data))
    navigate('/')
  }
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setValue('image', reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input {...register('name')} />
      {errors.name && <p>{errors.name.message}</p>}

      <label>Age</label>
      <input {...register('age')} />
      {errors.age && <p>{errors.age.message}</p>}

      <label>Email</label>
      <input {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}

      <label>Password</label>
      <input type="password" {...register('password')} />
      {errors.password && <p>{errors.password.message}</p>}

      <label> Confirm Password</label>
      <input type="password" {...register('confirmPassword')} />
      {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

      <label>Gender</label>
      <div className="genderWrapper">
        <label className="ladelRadio">
          <input type="radio" value="male" {...register('gender')} />
          Male
        </label>
        <label className="ladelRadio">
          <input type="radio" value="female" {...register('gender')} />
          Female
        </label>
        {errors.gender && <p>{errors.gender.message}</p>}
      </div>

      <label className="ladelRadio">
        <input type="checkbox" {...register('terms')} />I accept the Terms and
        Conditions
      </label>
      {errors.terms && <p>{errors.terms.message}</p>}

      <label>Image</label>
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
      />
      {errors.image && <p>{errors.image.message}</p>}

      <label htmlFor="country">Country</label>

      <select id="country" {...register('country')}>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>

      {errors.country && <p>{errors.country.message}</p>}

      <button disabled={!isValid} type="submit">
        Submit
      </button>
    </form>
  )
}
