import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import MainPage from '../src/pages'
import { store } from '../src/store/store'

const useRouter = vi.fn()
module.exports = { useRouter }
vi.mock('next/router', () => ({
  useRouter: () => ({
    asPath: '/',
    push: vi.fn(),
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

const mockCharacterData = {
  count: 82,
  next: null,
  previos: null,
  results: [
    {
      name: 'Luke Skywalker',
      birth_year: '19BBY',
      eye_color: 'blue',
      hair_color: 'blond',
      height: '172',
      skin_color: 'fair',
    },
    {
      name: 'Darth Vader',
      birth_year: '41.9BBY',
      eye_color: 'yellow',
      hair_color: 'none',
      height: '202',
      skin_color: 'white',
    },
  ],
}

describe('MainPage Component', () => {
  it('displays the title and handles theme button click', async () => {
    render(
      <Provider store={store}>
        <MainPage initialCharacterData={mockCharacterData} initialName="" />
      </Provider>,
    )

    const titleElement = screen.getByText('Search Star Wars characters')
    expect(titleElement).toBeInTheDocument()
  })
})
