import type { Meta, StoryObj } from '@storybook/react'
import { Stepper } from './Stepper'
import { Button } from '../../atoms/Button'
import { YStack, Text, XStack } from 'tamagui'

const meta: Meta<typeof Stepper> = {
  title: 'Molecules/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    height: { control: 'number' },
    width: { control: 'number' },
  },
}

export default meta

type Story = StoryObj<typeof Stepper>

export const Default: Story = {
  render: () => (
    <YStack gap="$4" width={400}>
      <XStack gap="$2" justifyContent="center">
        <Stepper.Trigger targetPage={0}>
          <Button size="sm">Step 1</Button>
        </Stepper.Trigger>
        <Stepper.Trigger targetPage={1}>
          <Button size="sm">Step 2</Button>
        </Stepper.Trigger>
        <Stepper.Trigger targetPage={2}>
          <Button size="sm">Step 3</Button>
        </Stepper.Trigger>
      </XStack>

      <Stepper height={150} width={400} backgroundColor="$background" borderWidth={1} borderColor="$borderColor" borderRadius="$4">
        <Stepper.Page justifyContent="center" alignItems="center" height="100%">
          <Text fontSize="$6">Page 1 Content</Text>
        </Stepper.Page>
        <Stepper.Page justifyContent="center" alignItems="center" height="100%">
          <Text fontSize="$6">Page 2 Content</Text>
        </Stepper.Page>
        <Stepper.Page justifyContent="center" alignItems="center" height="100%">
          <Text fontSize="$6">Page 3 Content</Text>
        </Stepper.Page>
      </Stepper>
    </YStack>
  ),
}

export const FormWizard: Story = {
  render: () => (
    <YStack gap="$4" width={400} height={300}>
      <Text fontSize="$5" fontWeight="bold" textAlign="center">Registration Wizard</Text>

      <Stepper height={200} width={400} backgroundColor="$muted" borderRadius="$4">
        <Stepper.Page justifyContent="center" alignItems="center" padding="$4">
          <Text>Enter your personal details...</Text>
        </Stepper.Page>
        <Stepper.Page justifyContent="center" alignItems="center" padding="$4">
          <Text>Enter your address...</Text>
        </Stepper.Page>
        <Stepper.Page justifyContent="center" alignItems="center" padding="$4">
          <Text>Review and Submit</Text>
        </Stepper.Page>
      </Stepper>

      <XStack justifyContent="space-between">
        <Stepper.Trigger targetPage={0}>
          <Button variant="outline">Back to Start</Button>
        </Stepper.Trigger>
        <XStack gap="$2">
          <Stepper.Trigger targetPage={1}>
             <Button>Next</Button>
          </Stepper.Trigger>
          <Stepper.Trigger targetPage={2}>
             <Button theme="active">Finish</Button>
          </Stepper.Trigger>
        </XStack>
      </XStack>
    </YStack>
  )
}
