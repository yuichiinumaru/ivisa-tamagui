import { toast as sonnerToast, Toaster as SonnerPrimitive } from 'sonner'
import { useTheme } from 'tamagui'
import { Toast, ToastProps } from './Toast'

type ToasterProps = React.ComponentProps<typeof SonnerPrimitive>

export const Sonner = (props: ToasterProps) => {
  const theme = useTheme()

  return (
    <SonnerPrimitive
      theme={theme.name as 'light' | 'dark' | 'system'}
      toastOptions={{
        unstyled: true,
      }}
      {...props}
    />
  )
}

const showToast = (
  variant: ToastProps['variant'],
  title: React.ReactNode,
  description?: React.ReactNode
) => {
  sonnerToast.custom((t) => (
    <Toast
      variant={variant}
      title={title}
      description={description}
      onDismiss={() => sonnerToast.dismiss(t)}
    />
  ))
}

export const toast = {
  message: (title: React.ReactNode, description?: React.ReactNode) => {
    showToast('info', title, description)
  },
  success: (title: React.ReactNode, description?: React.ReactNode) => {
    showToast('success', title, description)
  },
  error: (title: React.ReactNode, description?: React.ReactNode) => {
    showToast('error', title, description)
  },
  warning: (title: React.ReactNode, description?: React.ReactNode) => {
    showToast('warning', title, description)
  },
  loading: (title: React.ReactNode, description?: React.ReactNode) => {
    showToast('loading', title, description)
  },
  promise: <T,>(
    promise: Promise<T>,
    messages: {
      loading: React.ReactNode
      success: React.ReactNode | ((data: T) => React.ReactNode)
      error: React.ReactNode | ((error: any) => React.ReactNode)
    }
  ) => {
    sonnerToast.promise(promise, {
      loading: (
        <Toast variant="loading" title={messages.loading} />
      ),
      success: (data) => (
        <Toast
          variant="success"
          title={
            typeof messages.success === 'function'
              ? messages.success(data)
              : messages.success
          }
        />
      ),
      error: (error) => (
        <Toast
          variant="error"
          title={
            typeof messages.error === 'function'
              ? messages.error(error)
              : messages.error
          }
        />
      ),
    })
  },
  custom: sonnerToast.custom,
  dismiss: sonnerToast.dismiss,
}
