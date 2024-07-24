import { render } from '@testing-library/react'
import { Loading } from '../src/components/loading/Loading'

import themeContext from '../src/context/themeContext'

test('renders Loading component', () => {
  const { getByText } = render(<Loading />)
  const loadingText = getByText('Loading...')
  expect(loadingText).toBeInTheDocument()
})
test('renders Loading component with dark theme', () => {
  const { getByText } = render(
    <themeContext.Provider value={{ isDarkTheme: true, setIsDarkTheme: () => {} }}>
      <Loading />
    </themeContext.Provider>,
  )
  const loadingText = getByText('Loading...')
  expect(loadingText).toHaveClass(/loadingDark/i)
})
