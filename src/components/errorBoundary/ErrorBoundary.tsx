import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface ErrorState {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, ErrorState> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error, errorInfo)
    this.setState({ hasError: true })
  }

  render() {
    const { children } = this.props
    const { hasError } = this.state

    if (hasError) {
      return <h2>An error has occurred. Please refresh the page.</h2>
    }
    return children
  }
}
