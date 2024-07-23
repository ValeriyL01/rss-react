import { render } from '@testing-library/react'
import { Loading } from '../src/components/loading/Loading'

test('renders Loading component', () => {
  const { getByText } = render(<Loading />)
  const loadingText = getByText('Loading...')
  expect(loadingText).toBeInTheDocument()
})
