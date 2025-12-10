import { render, screen, fireEvent } from '../../test-utils'
import { FileUpload } from './FileUpload'
import React from 'react'

describe('FileUpload', () => {
  it('renders correctly', () => {
    render(<FileUpload />)
    expect(screen.getByText('Click to upload')).toBeInTheDocument()
  })

  it('triggers input click on press', () => {
    render(<FileUpload />)
    const input = screen.getByTestId('file-input')
    const clickSpy = jest.spyOn(input, 'click')

    // Simulate press on the container (which calls input.click())
    // Note: Tamagui onPress might not fire in JSDOM easily with just fireEvent.click on container?
    // Let's find the container. Usually it's a div.
    const container = screen.getByText('Click to upload').parentElement?.parentElement
    if (container) fireEvent.click(container)

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
})
