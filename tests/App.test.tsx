import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import App from 'next/app'
import { store } from '../src/store/store'

test('renders App component with RouterOutlet, Details, and NotFoundPage', async () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  )

  const element = container.querySelector('.container-pages')

  expect(element).toBeInTheDocument()

  expect(element).not.toHaveClass('dark')
})
