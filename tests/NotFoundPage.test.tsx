import { render } from '@testing-library/react'
import NotFoundPage from '../src/pages/notFoundPage/NotFoundPage'

test('renders 404 text in h1 element', () => {
  const { container } = render(<NotFoundPage />)
  const headingElement = container.querySelector('h1') as HTMLHeadingElement

  expect(headingElement).not.toBeNull()
  expect(headingElement.textContent).toBe('404')
})
