import { FormState } from '../../types/formType'

interface FormDataProps {
  formData: FormState
}
export function FormData({ formData }: FormDataProps) {
  return (
    <div>
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
          Accept Terms:
          <span> {formData.terms ? 'yes' : 'no'}</span>
        </li>
        <li>
          Country:<span> {formData.country}</span>
        </li>
        <li>
          Image:
          <img src={formData.image} alt="img" />
        </li>
      </ul>
    </div>
  )
}
