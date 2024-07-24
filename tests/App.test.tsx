import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { store } from '../src/store/store'
import App from '../src/App'

test('renders App component with RouterOutlet, Details, and NotFoundPage', async () => {
  const { container } = render(
    <Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    </Provider>,
  )

  const element = container.querySelector('.container-pages')

  expect(element).toBeInTheDocument()

  expect(element).not.toHaveClass('dark')
})
