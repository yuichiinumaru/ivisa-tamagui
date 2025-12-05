import { render, screen } from '../../test-utils'
import { HoverCard, HoverCardTrigger, HoverCardContent } from './HoverCard'
import { Text } from 'tamagui'

describe('HoverCard', () => {
  it('renders trigger', () => {
    render(
      <HoverCard>
        <HoverCardTrigger>
            <Text>Trigger</Text>
        </HoverCardTrigger>
        <HoverCardContent>
            <Text>Content</Text>
        </HoverCardContent>
      </HoverCard>
    )
    expect(screen.getByText('Trigger')).toBeInTheDocument()
    // Content is usually hidden until hover.
  })
})
