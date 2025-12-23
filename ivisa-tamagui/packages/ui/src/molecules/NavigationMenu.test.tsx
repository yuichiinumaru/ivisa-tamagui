import { render, screen } from '../test-utils'
import {
  NavigationMenu,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink
} from './NavigationMenu'

describe('NavigationMenu', () => {
  it('renders correctly', () => {
    render(
      <NavigationMenu>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Item 1</NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink href="#">Link 1</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenu>
    )

    expect(screen.getByText('Item 1')).toBeInTheDocument()
  })
})
