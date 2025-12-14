import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { WizardForm } from './WizardForm'
import { z } from 'zod'
import { TamaguiProvider } from 'tamagui'
import config from '../../tamagui.config'

const renderWithTheme = (component: React.ReactNode) => {
  return render(<TamaguiProvider config={config}>{component}</TamaguiProvider>)
}

describe('WizardForm', () => {
  const schemaStep1 = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
  })

  const schemaStep2 = z.object({
    email: z.string().email('Invalid email'),
  })

  const steps = [
    {
      title: 'Personal Info',
      schema: schemaStep1,
      fields: [
        { name: 'firstName', label: 'First Name', type: 'text' as const },
        { name: 'lastName', label: 'Last Name', type: 'text' as const },
      ],
    },
    {
      title: 'Contact Info',
      schema: schemaStep2,
      fields: [{ name: 'email', label: 'Email', type: 'text' as const }],
    },
  ]

  it('renders the first step correctly', () => {
    renderWithTheme(<WizardForm steps={steps} onSubmit={jest.fn()} />)
    expect(screen.getByText('Personal Info')).toBeTruthy()
    expect(screen.getByLabelText('First Name')).toBeTruthy()
    expect(screen.getByLabelText('Last Name')).toBeTruthy()
    expect(screen.queryByLabelText('Email')).toBeNull()
  })

  it('validates fields and prevents navigation on error', async () => {
    renderWithTheme(<WizardForm steps={steps} onSubmit={jest.fn()} />)

    fireEvent.click(screen.getByText('Próximo'))

    await waitFor(() => {
      const title = screen.getByTestId('stepper-title')
      expect(title.textContent).toBe('Personal Info')
    })

    await waitFor(() => {
        expect(screen.getByText('First name is required')).toBeTruthy()
        expect(screen.getByText('Last name is required')).toBeTruthy()
    })
  })

  it('navigates to the next step when validation passes', async () => {
    renderWithTheme(<WizardForm steps={steps} onSubmit={jest.fn()} />)

    const firstNameInput = screen.getByLabelText('First Name')
    fireEvent.change(firstNameInput, { target: { value: 'John' } })

    const lastNameInput = screen.getByLabelText('Last Name')
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } })

    fireEvent.click(screen.getByText('Próximo'))

    await waitFor(() => {
        const title = screen.getByTestId('stepper-title')
        expect(title.textContent).toBe('Contact Info')
    }, { timeout: 2000 })

    expect(screen.getByLabelText('Email')).toBeTruthy()
  })

  it('submits the form with all data', async () => {
    const handleSubmit = jest.fn()
    renderWithTheme(<WizardForm steps={steps} onSubmit={handleSubmit} />)

    // Step 1
    const firstNameInput = screen.getByLabelText('First Name')
    fireEvent.change(firstNameInput, { target: { value: 'John' } })

    const lastNameInput = screen.getByLabelText('Last Name')
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } })

    fireEvent.click(screen.getByText('Próximo'))

    await waitFor(() => {
        const title = screen.getByTestId('stepper-title')
        expect(title.textContent).toBe('Contact Info')
    })

    // Step 2
    const emailInput = screen.getByLabelText('Email')
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } })
    fireEvent.click(screen.getByText('Enviar'))

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
      })
    })
  })

  it('allows navigation back to previous step', async () => {
    renderWithTheme(<WizardForm steps={steps} onSubmit={jest.fn()} />)

    // Go to Step 2
    const firstNameInput = screen.getByLabelText('First Name')
    fireEvent.change(firstNameInput, { target: { value: 'John' } })

    const lastNameInput = screen.getByLabelText('Last Name')
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } })

    fireEvent.click(screen.getByText('Próximo'))

    await waitFor(() => {
        const title = screen.getByTestId('stepper-title')
        expect(title.textContent).toBe('Contact Info')
    }, { timeout: 2000 })

    // Go back to Step 1
    fireEvent.click(screen.getByText('Voltar'))

    await waitFor(() => {
        const title = screen.getByTestId('stepper-title')
        expect(title.textContent).toBe('Personal Info')
    })

    // Values should persist
    await waitFor(() => {
        expect(screen.getByDisplayValue('John')).toBeTruthy()
    })
  })
})
