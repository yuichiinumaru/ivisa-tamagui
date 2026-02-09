// Removed @ts-nocheck to enable TypeScript checking
import { AlertTriangle } from '@tamagui/lucide-icons'
import React, { Component, ReactNode } from 'react'
import { Button, H4, Paragraph, Separator, YStack } from 'tamagui'

import { logComponentError } from '../utils/logging'

type ErrorBoundaryProps = {
  children: ReactNode
  componentName: string
  fallback?: ReactNode
  onReset?: () => void
}

type ErrorBoundaryState = {
  hasError: boolean
  error?: Error
}

const initialState: ErrorBoundaryState = {
  hasError: false,
  error: undefined,
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = initialState

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    logComponentError(this.props.componentName, error, errorInfo.componentStack)
  }

  resetBoundary = () => {
    this.props.onReset?.()
    this.setState(initialState)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return <>{this.props.fallback}</>
      }

      return (
        <YStack
          gap="$4"
          p="$6"
          m="$4"
          borderRadius="$4"
          backgroundColor="$background"
          borderColor="$borderColor"
          borderWidth={1}
          alignItems="center"
          justifyContent="center"
          testID="component-error-boundary-fallback"
        >
          <AlertTriangle size="$3" color="$red10" />
          <YStack gap="$2" alignItems="center">
            <H4 color="$red10">Algo deu errado</H4>
            <Paragraph textAlign="center" color="$gray11">
              Ocorreu um erro inesperado neste componente. Por favor, tente novamente. Se o problema
              persistir, entre em contato com o suporte.
            </Paragraph>
          </YStack>

          {typeof process !== 'undefined' && process.env.NODE_ENV === 'development' && this.state.error && (
            <YStack
              gap="$2"
              p="$3"
              borderRadius="$2"
              backgroundColor="$backgroundPress"
              alignSelf="stretch"
            >
              <Paragraph size="$2" fontFamily="$mono">
                {this.state.error.message}
              </Paragraph>
            </YStack>
          )}

          {this.props.onReset && (
            <>
              <Separator />
              <Button theme="primary" onPress={this.resetBoundary}>
                Tentar Novamente
              </Button>
            </>
          )}
        </YStack>
      )
    }

    return <>{this.props.children}</>
  }
}

function withErrorBoundary<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  errorBoundaryProps: Omit<ErrorBoundaryProps, 'children'>
): React.FC<P> {
  const ComponentWithErrorBoundary = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <WrappedComponent {...props} />
    </ErrorBoundary>
  )

  const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component'
  ComponentWithErrorBoundary.displayName = `withErrorBoundary(${componentName})`

  return ComponentWithErrorBoundary
}

export { ErrorBoundary as ComponentErrorBoundary, withErrorBoundary }

// Removed trailing alias export to avoid duplicate-type declarations
