import { useSelector } from 'react-redux'
import { Header } from '../../components/header'
import { RootState } from '../../store/store'
import { FormData } from './formData'

export function MainPage() {
  const reactHookFormData = useSelector(
    (state: RootState) => state.reactHookForm,
  )
  const formData = useSelector((state: RootState) => state.form)

  return (
    <div className="container">
      <Header />
      <div className="formDataContainer">
        {formData.name && <FormData formData={formData} />}
        {reactHookFormData.name && <FormData formData={reactHookFormData} />}
      </div>
    </div>
  )
}
