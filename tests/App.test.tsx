import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../src/store/store'
import themeContext from '../src/context/themeContext'
import RootLayout from '../src/app/layout'

function MockChildComponent() {
  return <div>Child Component</div>
}

describe('RootLayout Component', () => {
  it('renders children correctly and applies the dark theme class based on state', () => {
    const mockThemeContextValue = {
      isDarkTheme: false,
      setIsDarkTheme: vi.fn(),
    }

    const { container } = render(
      <Provider store={store}>
        <themeContext.Provider value={mockThemeContextValue}>
          <RootLayout>
            <MockChildComponent />
          </RootLayout>
        </themeContext.Provider>
      </Provider>,
    )

    expect(container).toHaveTextContent('Child Component')

    const element = container.querySelector('.container-pages')
    expect(element).toBeInTheDocument()
    expect(element).not.toHaveClass('dark')
  })
})
