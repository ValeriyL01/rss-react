import { useSelector } from 'react-redux'
import { Header } from '../../components/header'
import { RootState } from '../../store/store'

export function MainPage() {
  const formData = useSelector((state: RootState) => state.form)
  return (
    <div className="container">
      <Header />
      <div className="formDataContainer">
        <ul className="formData">
          <li>
            Name: <span>{formData.name}</span>
          </li>
          <li>
            Age:<span> {formData.age}</span>
          </li>
          <li>
            Email: <span>{formData.email}</span>
          </li>
          <li>
            Password: <span>{formData.password}</span>
          </li>
          <li>
            Confirm Password:<span> {formData.confirmPassword}</span>
          </li>
          <li>
            Gender:<span> {formData.gender}</span>
          </li>
          <li>
            Accept Terms:<span> {formData.terms ? 'yes' : 'no'}</span>
          </li>
          <li>
            Country:<span> {formData.country}</span>
          </li>
          <li>
            Image:
            <img src={formData.image} alt="Uploaded" />
          </li>
        </ul>
      </div>
    </div>
  )
}
