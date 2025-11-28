import type { Meta, StoryObj } from '@storybook/react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from './NavigationMenu'
import { H3, Paragraph, YStack } from 'tamagui'

const meta: Meta<typeof NavigationMenu> = {
  title: 'molecules/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'fullscreen',
  },
  render: (args) => (
    <YStack height={200} alignItems="center" justifyContent="center">
      <NavigationMenu {...args}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <YStack padding="$4" width={300}>
                <NavigationMenuLink href="/docs" passHref>
                  <H3>Introduction</H3>
                  <Paragraph size="$2" theme="alt2">
                    Learn about Tamagui and its ecosystem.
                  </Paragraph>
                </NavigationMenuLink>
                <NavigationMenuLink href="/docs/install" passHref>
                  <H3>Installation</H3>
                  <Paragraph size="$2" theme="alt2">
                    How to install and set up your project.
                  </Paragraph>
                </NavigationMenuLink>
              </YStack>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <YStack padding="$4" width={300}>
                <NavigationMenuLink href="/docs/components/button" passHref>
                  <H3>Button</H3>
                  <Paragraph size="$2" theme="alt2">
                    Interactive button component.
                  </Paragraph>
                </NavigationMenuLink>
                <NavigationMenuLink href="/docs/components/alert" passHref>
                  <H3>Alert</H3>
                  <Paragraph size="$2" theme="alt2">
                    Displays a short, important message.
                  </Paragraph>
                </NavigationMenuLink>
              </YStack>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/docs/guide" passHref>
              <Paragraph>Guide</Paragraph>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport />
      </NavigationMenu>
    </YStack>
  ),
}

export default meta

type Story = StoryObj<typeof NavigationMenu>

export const Default: Story = {
  args: {},
}
