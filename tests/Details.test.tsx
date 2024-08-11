import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import Details from '../src/pages/details/[name]'
import { store } from '../src/store/store'

const useRouter = vi.fn()
module.exports = { useRouter }
vi.mock('next/router', () => ({
  useRouter: () => ({
    push: vi.fn(),
  }),
}))

const mockThemeContext = {
  isDarkTheme: false,
}

vi.mock('../../context/themeContext', () => ({
  __esModule: true,
  default: mockThemeContext,
}))

describe('Details', () => {
  it('displays the Loading component', async () => {
    render(
      <Provider store={store}>
        <Details initialCharacterData={null} />
      </Provider>,
    )

    const loadingElement = screen.queryByText('Loading...')
    expect(loadingElement).toBeInTheDocument()
  })
})
