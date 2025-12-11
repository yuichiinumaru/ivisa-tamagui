import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from './NavigationMenu'
import { YStack, Text } from 'tamagui'
import { Button } from '../atoms/Button'

const meta: Meta<typeof NavigationMenu> = {
  title: 'Moléculas/NavigationMenu',
  component: NavigationMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: 'boolean',
    },
    hasError: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isLoading: false,
    hasError: false,
    disabled: false,
  },
  render: (args) => (
    <NavigationMenu {...args}>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Recursos</NavigationMenuTrigger>
        <NavigationMenuContent>
          <YStack space="$2" padding="$2">
            <NavigationMenuLink>Blog</NavigationMenuLink>
            <NavigationMenuLink>Documentação</NavigationMenuLink>
            <NavigationMenuLink>Tutoriais</NavigationMenuLink>
          </YStack>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Produtos</NavigationMenuTrigger>
        <NavigationMenuContent>
          <YStack space="$2" padding="$2">
            <NavigationMenuLink>Software</NavigationMenuLink>
            <NavigationMenuLink>Dispositivos</NavigationMenuLink>
            <NavigationMenuLink>Serviços</NavigationMenuLink>
          </YStack>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <Button variant="ghost">Contato</Button>
      </NavigationMenuItem>
    </NavigationMenu>
  ),
}

export const WithRightSlot: Story = {
  ...Default,
  args: {
    ...Default.args,
    rightSlot: (
      <NavigationMenuItem>
        <Button>Cadastre-se</Button>
      </NavigationMenuItem>
    ),
  },
}

export const Loading: Story = {
  ...Default,
  args: {
    ...Default.args,
    isLoading: true,
  },
}

export const Error: Story = {
  ...Default,
  args: {
    ...Default.args,
    hasError: true,
  },
}

export const Disabled: Story = {
  ...Default,
  args: {
    ...Default.args,
    disabled: true,
  },
}

export const NarrowContainer: Story = {
  ...Default,
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
}
