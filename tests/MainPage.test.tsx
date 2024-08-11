import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import { store } from '../src/store/store'
import MainPage from '../src/app/page'

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    asPath: '/',
    push: vi.fn(),
  }),
  useSearchParams: () => ({
    get: (param: string) => {
      if (param === 'page') {
        return null
      }
      return null
    },
  }),
}))

const mockThemeContext = {
  isDarkTheme: false,
  setIsDarkTheme: vi.fn(),
}

vi.mock('../context/themeContext', () => ({
  __esModule: true,
  default: mockThemeContext,
}))

describe('MainPage Component', () => {
  it('displays the title and handles theme button click', async () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>,
    )

    const titleElement = screen.getByText('Search Star Wars characters')
    expect(titleElement).toBeInTheDocument()
  })
})
