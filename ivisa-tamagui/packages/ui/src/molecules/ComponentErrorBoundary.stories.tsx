import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ComponentErrorBoundary } from './ComponentErrorBoundary'
import { Text, YStack, Button } from 'tamagui'

const meta: Meta<typeof ComponentErrorBoundary> = {
  title: 'Molecules/ComponentErrorBoundary',
  component: ComponentErrorBoundary,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A wrapper component that catches JavaScript errors in its child component tree, logs them, and displays a fallback UI (currently null).',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

// A component that renders fine
const SafeComponent = () => (
  <YStack padding="$4" backgroundColor="$green4" borderRadius="$4">
    <Text color="$color">I am a safe component. No errors here!</Text>
  </YStack>
)

// A component that throws an error
const BuggyComponent = ({ shouldThrow = true }: { shouldThrow?: boolean }) => {
  if (shouldThrow) {
    throw new Error('I crashed!')
  }
  return (
    <YStack padding="$4" backgroundColor="$red4" borderRadius="$4">
      <Text color="$color">I am a buggy component, but I haven't crashed yet.</Text>
    </YStack>
  )
}

export const Default: Story = {
  args: {
    componentName: 'SafeComponentStory',
    children: <SafeComponent />,
  },
}

export const WithError: Story = {
  decorators: [
    (Story) => (
      <YStack gap="$4" maxWidth={400}>
        <Text fontSize="$3" color="$gray11">
          Below this text, there should be nothing rendered because the error boundary catches the error and renders null.
          Check the console for the error log.
        </Text>
        <YStack borderWidth={1} borderColor="$gray5" minHeight={50} padding="$2" alignItems="center" justifyContent="center" borderStyle="dashed">
            <Story />
        </YStack>
      </YStack>
    ),
  ],
  args: {
    componentName: 'BuggyComponentStory',
    children: <BuggyComponent />,
  },
}

// Interactive demo to trigger error
const InteractiveDemo = () => {
  const [crashed, setCrashed] = useState(false)

  return (
    <YStack gap="$4">
      <Button onPress={() => setCrashed(true)}>
        Trigger Error
      </Button>

      <YStack borderWidth={1} borderColor="$gray5" padding="$4" minHeight={100} alignItems="center" justifyContent="center">
        {!crashed ? (
             <Text>Everything is fine.</Text>
        ) : (
            <ComponentErrorBoundary componentName="InteractiveDemo">
                <BuggyComponent />
            </ComponentErrorBoundary>
        )}
      </YStack>
      {crashed && <Text fontSize="$2" color="$gray10">The component above has crashed and is now hidden (null).</Text>}
    </YStack>
  )
}

export const Interactive: Story = {
    render: () => <InteractiveDemo />
}
