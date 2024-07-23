import { render, fireEvent, screen } from '@testing-library/react'
import MainPage from '../src/pages/mainPage/MainPage'

vi.mock('react-router-dom', () => ({
  useLocation: vi.fn().mockReturnValue({ search: '' }),
  useNavigate: vi.fn(),
}))

describe('MainPage Component', () => {
  it('handles form submission correctly', async () => {
    render(<MainPage />)

    const inputElement = screen.getByRole('textbox') as HTMLInputElement
    const submitButton = screen.getByRole('button', { name: /search/i })

    fireEvent.change(inputElement, { target: { value: 'Luke Skywalker' } })
    fireEvent.click(submitButton)

    const loadingElement = screen.getByText('Loading...')
    expect(loadingElement).toBeInTheDocument()
  })
})
