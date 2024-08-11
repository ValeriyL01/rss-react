import { render } from '@testing-library/react'

import MyApp from '../src/pages/_app'
import themeContext from '../src/context/themeContext'

function MockComponent() {
  return <div>Mock Component</div>
}

test('renders App component with RouterOutlet, Details, and NotFoundPage', () => {
  const mockThemeContextValue = {
    isDarkTheme: false,
    setIsDarkTheme: vi.fn(),
  }

  const { container } = render(
    <themeContext.Provider value={mockThemeContextValue}>
      <MyApp Component={MockComponent} pageProps={{}} />
    </themeContext.Provider>,
  )

  const element = container.querySelector('.container-pages')

  expect(element).toBeInTheDocument()
  expect(element).not.toHaveClass('dark')
})
