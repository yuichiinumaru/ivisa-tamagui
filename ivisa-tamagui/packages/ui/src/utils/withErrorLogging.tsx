import React from 'react'

import { logComponentError } from './logging'

export function withErrorLogging<P, R>(
  componentName: string,
  Component: React.ForwardRefExoticComponent<React.PropsWithoutRef<P> & React.RefAttributes<R>>
) {
  const Wrapped = React.forwardRef<R, P>((props, ref) => {
    try {
      return <Component {...props} ref={ref} />
    } catch (error) {
      logComponentError(componentName, error)
      throw error
    }
  })

  Wrapped.displayName = componentName

  return Wrapped
}

