import type { Meta } from '@storybook/react'
import React from 'react'
import { YStack, Text } from 'tamagui'

import { OTPInput } from './OTPInput'

const meta: Meta<typeof OTPInput> = {
  title: 'Molecules/OTPInput',
  component: OTPInput,
  tags: ['autodocs'],
  args: {
    length: 6,
  },
}

export default meta

export const Default = () => {
  const [value, setValue] = React.useState('')
  const [completedValue, setCompletedValue] = React.useState<string | null>(null)

  return (
    <YStack gap="$4" width={320}>
      <OTPInput
        value={value}
        onChange={setValue}
        onComplete={setCompletedValue}
        autoFocus
      />
      <Text fontSize="$3">Value: {value || '—'}</Text>
      <Text fontSize="$3">Completed: {completedValue || 'Waiting…'}</Text>
    </YStack>
  )
}

export const MaskedAlphanumeric = () => {
  const [value, setValue] = React.useState('')

  return (
    <YStack gap="$4" width={320}>
      <OTPInput
        value={value}
        onChange={setValue}
        allowedCharacters="alphanumeric"
        mask
        length={8}
        inputProps={{ borderColor: '$color.gray7' }}
      />
      <Text fontSize="$3">Masked Value: {value || '—'}</Text>
    </YStack>
  )
}
