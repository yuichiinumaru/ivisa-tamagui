import type { Meta, StoryObj } from '@storybook/react'
import { useArgs } from '@storybook/preview-api'
import React, { useState, ReactNode } from 'react'
import { Button, Paragraph, Text, XStack, YStack } from 'tamagui'
import { ComponentErrorBoundary } from './ComponentErrorBoundary'

const meta: Meta<typeof ComponentErrorBoundary> = {
  title: 'Molecules/ComponentErrorBoundary',
  component: ComponentErrorBoundary,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A molecule that catches JavaScript errors in its child component tree, logs them, and displays a fallback UI with recovery options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    componentName: {
      control: { type: 'text' },
      description: 'The name of the component being wrapped, used for logging purposes.',
    },
    onReset: {
      action: 'reset',
      description: 'A callback function to reset the component state and re-render the children.',
    },
    fallback: {
      control: { type: 'object' },
      description: 'A custom ReactNode to display as a fallback UI instead of the default one.',
    },
    children: {
      control: { disable: true },
      description: 'The child components to render within the error boundary.',
    },
  },
}

export default meta

type Story = StoryObj<typeof ComponentErrorBoundary>

const BuggyComponent = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Component crashed intentionally for the story!')
  }
  return (
    <YStack p="$4" backgroundColor="$green4" borderRadius="$4">
      <Paragraph color="$color">I am a safe component. No errors here!</Paragraph>
    </YStack>
  )
}

const InteractiveStory = ({
  children,
  ...args
}: {
  children: ReactNode
  args: Story['args']
}) => {
  const [key, setKey] = useState(0)
  const [{ shouldThrow }, updateArgs] = useArgs()

  const handleReset = () => {
    args.onReset?.()
    setKey((prev) => prev + 1)
    updateArgs({ shouldThrow: false })
  }

  return (
    <YStack gap="$4" width={400} alignItems="center">
      <ComponentErrorBoundary {...args} key={key} onReset={handleReset}>
        <BuggyComponent shouldThrow={shouldThrow} />
      </ComponentErrorBoundary>
      <Button onPress={() => updateArgs({ shouldThrow: true })} disabled={shouldThrow}>
        Trigger Error
      </Button>
    </YStack>
  )
}

export const Default: Story = {
  render: (args) => <InteractiveStory args={args}> </InteractiveStory>,
  args: {
    componentName: 'DefaultStory',
    shouldThrow: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          'This is the default state. The child component renders normally. Click "Trigger Error" to see the fallback UI.',
      },
    },
  },
}

export const WithErrorAndRecovery: Story = {
  render: (args) => <InteractiveStory args={args}> </InteractiveStory>,
  args: {
    componentName: 'RecoveryStory',
    shouldThrow: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story shows the default error fallback UI with a "Tentar Novamente" (Try Again) button. Clicking it will reset the error state and re-render the child component.',
      },
    },
  },
}

export const StressTestNarrowContainer: Story = {
  render: (args) => (
    <YStack width={250}>
      <ComponentErrorBoundary {...args}>
        <BuggyComponent shouldThrow={true} />
      </ComponentErrorBoundary>
    </YStack>
  ),
  args: {
    componentName: 'NarrowContainerStory',
    onReset: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates how the fallback UI adapts to a narrow container.',
      },
    },
  },
}

const CustomFallback = () => (
  <XStack
    gap="$4"
    p="$4"
    backgroundColor="$blue4"
    borderRadius="$6"
    alignItems="center"
    borderColor="$blue7"
    borderWidth={2}
    borderStyle="dashed"
  >
    <Text fontSize="$8">🤔</Text>
    <YStack>
      <Paragraph fontWeight="bold">Oops, custom fallback!</Paragraph>
      <Paragraph fontSize="$2">Something went wrong, but we have a custom UI for it.</Paragraph>
    </YStack>
  </XStack>
)

export const WithCustomFallback: Story = {
  args: {
    componentName: 'CustomFallbackStory',
    fallback: <CustomFallback />,
    children: <BuggyComponent shouldThrow={true} />,
  },
  parameters: {
    docs: {
      description: {
        story:
          'This story shows how you can provide a custom `fallback` component to be rendered on error.',
      },
    },
  },
}
