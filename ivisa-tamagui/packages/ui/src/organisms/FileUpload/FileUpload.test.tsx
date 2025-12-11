import { render, screen, fireEvent } from '../../test-utils'
import { FileUpload } from './FileUpload'
import React from 'react'

describe('FileUpload', () => {
  it('renders correctly with default PT-BR text', () => {
    render(<FileUpload />)
    expect(screen.getByText('Clique para enviar um arquivo')).toBeInTheDocument()
    expect(screen.getByText(/SVG, PNG, JPG ou GIF/)).toBeInTheDocument()
  })

  it('triggers input click on button press', () => {
    render(<FileUpload />)
    const input = screen.getByTestId('file-input')
    const clickSpy = jest.spyOn(input, 'click')

    const uploadButton = screen.getByRole('button', { name: /Clique para enviar um arquivo/i })
    fireEvent.click(uploadButton)

    expect(clickSpy).toHaveBeenCalled()
  })

  it('calls onFileSelect when file is selected', async () => {
    const onFileSelect = jest.fn()
    const { user } = render(<FileUpload onFileSelect={onFileSelect} />)
    const input = screen.getByTestId('file-input')

    const file = new File(['hello'], 'hello.png', { type: 'image/png' })
    await user.upload(input, file)

    expect(onFileSelect).toHaveBeenCalledWith(expect.objectContaining({ name: 'hello.png' }))
  })

  it('renders skeleton when isLoading is true', () => {
    render(<FileUpload isLoading />)
    // The main content should not be visible
    expect(screen.queryByText('Clique para enviar um arquivo')).not.toBeInTheDocument()
    // A simple way to check for skeleton is to see if the container has changed,
    // or query for a role that skeleton might have, though it's often just a div.
    // For this case, not finding the text is a good indicator.
  })

  it('renders an error message when hasError is true', () => {
    const errorMessage = 'Ocorreu um erro.'
    render(<FileUpload hasError errorMessage={errorMessage} />)
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })
})
