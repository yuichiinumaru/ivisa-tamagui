// @ts-nocheck
import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Coachmark } from './Coachmark'
import { Button } from '../Button'
import { YStack } from 'tamagui'

const meta: Meta<typeof Coachmark> = {
  title: 'Átomos/Coachmark',
  component: Coachmark,
}

export default meta

type Story = StoryObj<typeof Coachmark>

export const Default: Story = {
  render: (args) => (
    <YStack padding="$10" alignItems="center">
      <Coachmark {...args}>
        <Button>Hover or Focus me (Trigger)</Button>
      </Coachmark>
    </YStack>
  ),
  args: {
    title: 'Nova Funcionalidade',
    description: 'Agora você pode exportar relatórios em PDF diretamente daqui.',
    onClose: () => console.log('Closed'),
    defaultOpen: true,
  },
}
