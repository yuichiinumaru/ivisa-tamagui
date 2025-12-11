import { render, screen } from '../../test-utils'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  HoverCardProfileContent,
} from './HoverCard'
import { Text } from 'tamagui'
import userEvent from '@testing-library/user-event'

const mockUser = {
  name: 'Ivisa',
  handle: '@ivisa',
  avatar: 'https://github.com/ivisa.png',
  bio: 'Simplificando o mundo das viagens.',
  followers: 100,
  following: 10,
}

describe('HoverCard', () => {
  it('renders trigger and shows content on hover', async () => {
    render(
      <HoverCard>
        <HoverCardTrigger>
          <Text>Trigger</Text>
        </HoverCardTrigger>
        <HoverCardContent>
          <HoverCardProfileContent user={mockUser} />
        </HoverCardContent>
      </HoverCard>
    )

    // Check if the trigger is rendered
    const trigger = screen.getByText('Trigger')
    expect(trigger).toBeInTheDocument()

    // Content should not be visible initially
    expect(screen.queryByText(mockUser.name)).not.toBeInTheDocument()

    // Simulate hover
    await userEvent.hover(trigger)

    // Content should now be visible
    expect(await screen.findByText(mockUser.name)).toBeInTheDocument()
  })
})
