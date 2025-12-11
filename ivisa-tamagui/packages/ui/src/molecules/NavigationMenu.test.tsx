import { render, screen } from '../test-utils'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from './NavigationMenu'
import { YStack } from 'tamagui'

describe('NavigationMenu', () => {
  it('renders', () => {
    render(
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenu>
    )
    expect(screen.getByText('Link')).toBeInTheDocument()
  })

  it('renders a popover', () => {
    render(
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Trigger</NavigationMenuTrigger>
          <NavigationMenuContent>
            <YStack>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </YStack>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
    )
    expect(screen.getByText('Trigger')).toBeInTheDocument()
  })

  it('renders in a loading state', () => {
    render(<NavigationMenu isLoading />)
    expect(screen.queryByText('Link')).not.toBeInTheDocument()
  })
})
