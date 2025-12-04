import { render, screen } from '../../vitest.setup'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from './NavigationMenu'

describe('NavigationMenu', () => {
  it('renders', () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    )
    expect(screen.getByText('Link')).toBeInTheDocument()
  })
})
