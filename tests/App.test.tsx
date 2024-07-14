import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../src/App'

test('renders App component with RouterOutlet, Details, and NotFoundPage', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>,
  )

  const element = container.querySelector('.container-pages')

  expect(element).toBeInTheDocument()
})
