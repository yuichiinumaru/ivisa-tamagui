export function logComponentError(componentName: string, error: unknown, componentStack?: string) {
  const timestamp = new Date().toISOString()
  const details = error instanceof Error ? `${error.name}: ${error.message}` : String(error)
  if (componentStack) {
    console.error(`[${timestamp}] [${componentName}] render failure -> ${details}\n${componentStack}`)
  } else {
    console.error(`[${timestamp}] [${componentName}] render failure -> ${details}`)
  }
}

export function logComponentWarning(componentName: string, message: string) {
  const timestamp = new Date().toISOString()
  console.warn(`[${timestamp}] [${componentName}] warning -> ${message}`)
}

