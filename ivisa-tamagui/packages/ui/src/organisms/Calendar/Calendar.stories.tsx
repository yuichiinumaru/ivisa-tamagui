// @ts-nocheck

import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Calendar } from './Calendar'


const meta: Meta<React.ComponentProps<typeof Calendar>> = {
  title: 'Organismos/Calendar',
  component: Calendar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Calendar is a high-level organism for booking or scheduling, wrapping the Calendar molecule.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof Calendar>>

export const Padrao: Story = {}
