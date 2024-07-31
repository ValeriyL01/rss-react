import { render, fireEvent, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import userEvent from '@testing-library/user-event'
import MainPage from '../src/pages'
import { store } from '../src/store/store'

vi.mock('react-router-dom', () => ({
  useLocation: vi.fn().mockReturnValue({ search: '' }),
  useNavigate: vi.fn(),
}))

describe('MainPage Component', () => {
  it('handles form submission correctly', async () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>,
    )

    const inputElement = screen.getByRole('textbox') as HTMLInputElement
    const submitButton = screen.getByRole('button', { name: /search/i })

    fireEvent.change(inputElement, { target: { value: 'Luke Skywalker' } })
    fireEvent.click(submitButton)

    const loadingElement = screen.getByText('Loading...')
    expect(loadingElement).toBeInTheDocument()
  })
  it('is there a title on the main page', async () => {
    render(
      <Provider store={store}>
        <MainPage />
      </Provider>,
    )

    const buttonTheme = screen.getByText('Theme')

    const user = userEvent.setup()
    await user.click(buttonTheme)
    const titleElement = screen.getByText('Search Star Wars characters')

    expect(titleElement).toBeInTheDocument()
  })
})
