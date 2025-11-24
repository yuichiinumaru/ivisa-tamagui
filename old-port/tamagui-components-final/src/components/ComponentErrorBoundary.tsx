import React from 'react'

import { logComponentError } from '../utils/logging'

interface ComponentErrorBoundaryProps {
  componentName: string
  children: React.ReactNode
}

interface ComponentErrorBoundaryState {
  hasError: boolean
}

export class ComponentErrorBoundary extends React.Component<ComponentErrorBoundaryProps, ComponentErrorBoundaryState> {
  state: ComponentErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ComponentErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: unknown, errorInfo: React.ErrorInfo) {
    logComponentError(this.props.componentName, error, errorInfo.componentStack)
    if (process.env.NODE_ENV === 'test') {
      throw error
    }
  }

  componentDidUpdate(prevProps: ComponentErrorBoundaryProps) {
    if (prevProps.children !== this.props.children && this.state.hasError) {
      this.setState({ hasError: false })
    }
  }

  render() {
    if (this.state.hasError) {
      return null
    }

    return this.props.children
  }
}
