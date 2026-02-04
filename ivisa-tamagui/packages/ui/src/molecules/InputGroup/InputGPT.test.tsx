import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { InputGPT } from './InputGPT'
import { TamaguiProvider } from 'tamagui'
import config from '../../tamagui.config'

const renderWithTamagui = (component: React.ReactElement) => {
  return render(
    <TamaguiProvider config={config}>{component}</TamaguiProvider>
  )
}

describe('InputGPT', () => {
  it('should render with placeholder', () => {
    renderWithTamagui(<InputGPT />)
    const input = screen.getByPlaceholderText('Envie uma mensagem...')
    expect(input).toBeInTheDocument()
  })

  it('should call onSend when button is clicked', () => {
    const onSend = jest.fn()
    renderWithTamagui(<InputGPT onSend={onSend} />)
    const input = screen.getByPlaceholderText('Envie uma mensagem...')
    fireEvent.change(input, { target: { value: 'Hello' } })
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(onSend).toHaveBeenCalledWith('Hello')
  })

  it('should clear input after sending', () => {
    const onSend = jest.fn()
    renderWithTamagui(<InputGPT onSend={onSend} />)
    const input = screen.getByPlaceholderText(
      'Envie uma mensagem...'
    ) as HTMLInputElement
    fireEvent.change(input, { target: { value: 'Hello' } })
    expect(input.value).toBe('Hello')
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(input.value).toBe('')
  })

  it('should send on Enter key press', () => {
    const onSend = jest.fn()
    renderWithTamagui(<InputGPT onSend={onSend} />)
    const input = screen.getByPlaceholderText('Envie uma mensagem...')
    fireEvent.change(input, { target: { value: 'Hello' } })
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(onSend).toHaveBeenCalledWith('Hello')
  })

  it('should not send on Shift+Enter', () => {
    const onSend = jest.fn()
    renderWithTamagui(<InputGPT onSend={onSend} />)
    const input = screen.getByPlaceholderText('Envie uma mensagem...')
    fireEvent.change(input, { target: { value: 'Hello' } })
    fireEvent.keyDown(input, { key: 'Enter', shiftKey: true })
    expect(onSend).not.toHaveBeenCalled()
  })

  it('should disable button when input is empty', () => {
    renderWithTamagui(<InputGPT />)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('should enable button when input has text', () => {
    renderWithTamagui(<InputGPT />)
    const input = screen.getByPlaceholderText('Envie uma mensagem...')
    fireEvent.change(input, { target: { value: 'Hello' } })
    const button = screen.getByRole('button')
    expect(button).not.toBeDisabled()
  })

  it('should accept custom placeholder', () => {
    renderWithTamagui(<InputGPT placeholder="Custom placeholder" />)
    const input = screen.getByPlaceholderText('Custom placeholder')
    expect(input).toBeInTheDocument()
  })
})
