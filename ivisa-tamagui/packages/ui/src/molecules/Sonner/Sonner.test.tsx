// @ts-nocheck
import { render, screen } from '../../test-utils'
import { Sonner, toast } from './Sonner'
import { Button } from '../../atoms/Button'
import { Toast } from './Toast'

// Mock the sonner library
jest.mock('sonner', () => {
  const original = jest.requireActual('sonner')
  return {
    ...original,
    Toaster: (props: any) => <div data-testid="sonner-toaster" {...props} />,
    toast: {
      ...original.toast,
      custom: jest.fn(),
      promise: jest.fn(),
    },
  }
})

describe('Sonner', () => {
  it('renders the Sonner provider component', () => {
    render(<Sonner />)
    expect(screen.getByTestId('sonner-toaster')).toBeTruthy()
  })

  it('calls the custom toast function with the correct parameters', async () => {
    const { user } = render(
      <>
        <Sonner />
        <Button onPress={() => toast.success('Operação bem-sucedida', 'Seu arquivo foi salvo.')}>
          Mostrar Sucesso
        </Button>
      </>
    )

    await user.click(screen.getByText('Mostrar Sucesso'))
    expect(require('sonner').toast.custom).toHaveBeenCalled()
  })

  it('handles promise toast correctly', async () => {
    const promise = Promise.resolve('Success data')
    toast.promise(promise, {
      loading: 'Loading...',
      success: (data) => `Success: ${data}`,
      error: 'Error!',
    })
    expect(require('sonner').toast.promise).toHaveBeenCalled()
  })
})


describe('Toast Component', () => {
    it('renders title and description correctly', () => {
      render(<Toast variant="success" title="Success Title" description="Success Description" />)
      expect(screen.getByText('Success Title')).toBeTruthy()
      expect(screen.getByText('Success Description')).toBeTruthy()
    })

    it('renders custom icon', () => {
      render(<Toast variant="success" title="Success Title" description="Success Description" icon={<div data-testid="custom-icon" />} />)
      expect(screen.getByTestId('custom-icon')).toBeTruthy()
    })

    it('renders action button and handles click', async () => {
      const handleClick = jest.fn()
      const { user } = render(
        <Toast
          variant="info"
          title="Action Test"
          action={{ label: 'Undo', onClick: handleClick }}
        />
      )

      const button = screen.getByText('Undo')
      await user.click(button)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('renders dismiss button and handles click', async () => {
      const handleDismiss = jest.fn()
      const { user } = render(
        <Toast variant="warning" title="Dismiss Test" onDismiss={handleDismiss} />
      )

      const dismissButton = screen.getByRole('button')
      await user.click(dismissButton)
      expect(handleDismiss).toHaveBeenCalledTimes(1)
    })
  })

