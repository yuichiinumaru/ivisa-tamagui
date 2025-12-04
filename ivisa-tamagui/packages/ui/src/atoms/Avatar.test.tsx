import { render, screen } from '../../vitest.setup'
import { Avatar, AvatarImage, AvatarFallback } from './Avatar'

describe('Avatar', () => {
  it('renders image', () => {
    render(
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    )
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', 'https://github.com/shadcn.png')
  })

  it('renders fallback', () => {
      render(
        <Avatar>
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      )
      expect(screen.getByText('CN')).toBeInTheDocument()
  })
})
