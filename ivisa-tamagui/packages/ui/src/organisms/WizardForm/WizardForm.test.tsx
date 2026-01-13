// @ts-nocheck
import { render, screen, waitFor } from '../../test-utils'
import { WizardForm } from './WizardForm'
import { z } from 'zod'

describe('WizardForm', () => {
  const schemaStep1 = z.object({
    firstName: z.string().min(1, 'First name is required').default(''),
    lastName: z.string().min(1, 'Last name is required').default(''),
  })

  const schemaStep2 = z.object({
    email: z.string().email('Invalid email').default(''),
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
    render(<WizardForm steps={steps} onSubmit={jest.fn()} />)
    expect(screen.getByText('Personal Info')).toBeTruthy()
    expect(screen.getByLabelText('First Name')).toBeTruthy()
    expect(screen.getByLabelText('Last Name')).toBeTruthy()
    expect(screen.queryByLabelText('Email')).toBeNull()
  })

  it('validates fields and prevents navigation on error', async () => {
    const { user } = render(<WizardForm steps={steps} onSubmit={jest.fn()} />)

    await user.click(screen.getByText('Next'))

    await waitFor(() => {
      expect(screen.getByText('First name is required')).toBeTruthy()
      expect(screen.getByText('Last name is required')).toBeTruthy()
    }, { timeout: 3000 })
    const title = screen.getByTestId('stepper-title')
    expect(title.textContent).toBe('Personal Info')
  })

  it('navigates to the next step when validation passes', async () => {
    const { user } = render(<WizardForm steps={steps} onSubmit={jest.fn()} />)

    const firstNameInput = screen.getByLabelText('First Name')
    await user.type(firstNameInput, 'John')

    const lastNameInput = screen.getByLabelText('Last Name')
    await user.type(lastNameInput, 'Doe')

    await user.click(screen.getByText('Next'))

    await waitFor(() => {
      const title = screen.getByTestId('stepper-title')
      expect(title.textContent).toBe('Contact Info')
    }, { timeout: 2000 })

    expect(screen.getByLabelText('Email')).toBeTruthy()
  })

  it('submits the form with all data', async () => {
    const handleSubmit = jest.fn()
    const { user } = render(<WizardForm steps={steps} onSubmit={handleSubmit} />)

    // Step 1
    const firstNameInput = screen.getByLabelText('First Name')
    await user.type(firstNameInput, 'John')

    const lastNameInput = screen.getByLabelText('Last Name')
    await user.type(lastNameInput, 'Doe')

    await user.click(screen.getByText('Next'))

    await waitFor(() => {
      const title = screen.getByTestId('stepper-title')
      expect(title.textContent).toBe('Contact Info')
    })

    // Step 2
    const emailInput = screen.getByLabelText('Email')
    await user.type(emailInput, 'john@example.com')
    await user.click(screen.getByText('Submit'))

    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalledWith({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
      })
    })
  })

  it('allows navigation back to previous step', async () => {
    const { user } = render(<WizardForm steps={steps} onSubmit={jest.fn()} />)

    // Go to Step 2
    const firstNameInput = screen.getByLabelText('First Name')
    await user.type(firstNameInput, 'John')

    const lastNameInput = screen.getByLabelText('Last Name')
    await user.type(lastNameInput, 'Doe')

    await user.click(screen.getByText('Next'))

    await waitFor(() => {
      const title = screen.getByTestId('stepper-title')
      expect(title.textContent).toBe('Contact Info')
    }, { timeout: 2000 })

    // Go back to Step 1
    await user.click(screen.getByText('Back'))

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
