import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs'
import { Paragraph, YStack } from 'tamagui'
import React from 'react'

const meta: Meta<typeof Tabs> = {
  title: 'molecules/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'The value of the tab that should be active when initially rendered.',
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs.',
    },
    // Add other TamaguiTabs props as needed, e.g., value, onValueChange, activationMode
  },
  render: (args) => (
    <Tabs {...args}>
      <TabsList>
        <TabsTrigger value="tab1">
          <Paragraph>Account</Paragraph>
        </TabsTrigger>
        <TabsTrigger value="tab2">
          <Paragraph>Password</Paragraph>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <YStack>
          <Paragraph>Make changes to your account here.</Paragraph>
        </YStack>
      </TabsContent>
      <TabsContent value="tab2">
        <YStack>
          <Paragraph>Change your password here.</Paragraph>
        </YStack>
      </TabsContent>
    </Tabs>
  ),
}

export default meta

type Story = StoryObj<typeof Tabs>

export const Default: Story = {
  args: {
    defaultValue: 'tab1',
    orientation: 'horizontal',
  },
}

export const Vertical: Story = {
  args: {
    defaultValue: 'tab1',
    orientation: 'vertical',
    // Override the render function to adjust layout for vertical tabs
    render: (args) => (
      <Tabs {...args}>
        <YStack flexDirection="row" gap="$4"> {/* Use YStack for vertical layout */}
          <TabsList flexDirection="column"> {/* Make TabsList vertical */}
            <TabsTrigger value="tab1">
              <Paragraph>Account</Paragraph>
            </TabsTrigger>
            <TabsTrigger value="tab2">
              <Paragraph>Password</Paragraph>
            </TabsTrigger>
          </TabsList>
          <YStack flex={1}>
            <TabsContent value="tab1">
              <YStack>
                <Paragraph>Make changes to your account here.</Paragraph>
              </YStack>
            </TabsContent>
            <TabsContent value="tab2">
              <YStack>
                <Paragraph>Change your password here.</Paragraph>
              </YStack>
            </TabsContent>
          </YStack>
        </YStack>
      </Tabs>
    ),
  },
}

export const InitiallySelectedTab: Story = {
  args: {
    defaultValue: 'tab2',
    orientation: 'horizontal',
  },
}
