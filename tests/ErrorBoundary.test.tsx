import { render } from '@testing-library/react'
import ErrorBoundary from '../src/components/ErrorBoundary'

describe('ErrorBoundary Component', () => {
  it('should render children when no error', () => {
    function MockChild() {
      return <div>Mock Child Component</div>
    }

    const { queryByText } = render(
      <ErrorBoundary>
        <MockChild />
      </ErrorBoundary>,
    )

    expect(queryByText('Mock Child Component')).not.toBeNull()
  })

  it('should render error message when an error occurs', () => {
    const ErrorGeneratingChild = () => {
      throw new Error('Test Error')
    }

    const { queryByText } = render(
      <ErrorBoundary>
        <ErrorGeneratingChild />
      </ErrorBoundary>,
    )

    expect(queryByText('An error has occurred. Please refresh the page.')).not.toBeNull()
  })
})
