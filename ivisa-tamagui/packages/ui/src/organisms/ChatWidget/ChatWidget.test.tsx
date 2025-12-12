import { render, screen, waitFor } from '../../test-utils'
import { ChatWidget } from './ChatWidget'

describe('ChatWidget', () => {
  it('renders messages correctly', () => {
    const messages = [
        { id: '1', role: 'user' as const, content: 'Hello', timestamp: new Date() },
        { id: '2', role: 'assistant' as const, content: 'Hi there', timestamp: new Date() }
    ]
    render(<ChatWidget messages={messages} onSendMessage={() => {}} />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText('Hi there')).toBeInTheDocument()
  })

  it('handles user input submission', async () => {
      const onSend = jest.fn()
      const { user } = render(<ChatWidget messages={[]} onSendMessage={onSend} />)

      const input = screen.getByPlaceholderText('Digite sua mensagem...')
      const btn = screen.getByRole('button') // The send button

      await user.type(input, 'New message')
      await user.click(btn)

      await waitFor(() => {
        expect(onSend).toHaveBeenCalledWith('New message')
      })
  })

  it('shows typing indicator', () => {
      render(<ChatWidget messages={[]} onSendMessage={() => {}} isTyping={true} />)
      expect(screen.getByText('Digitando...')).toBeInTheDocument()
  })
})
