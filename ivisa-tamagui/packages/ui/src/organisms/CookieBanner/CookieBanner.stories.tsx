import type { Meta, StoryObj } from '@storybook/react'
import { CookieBanner } from './CookieBanner'

const meta: Meta<typeof CookieBanner> = {
  title: 'Organismos/CookieBanner',
  component: CookieBanner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
      onAcceptAll: { action: 'accepted all' },
      onRejectAll: { action: 'rejected all' },
      onSavePreferences: { action: 'saved preferences' }
  }
}

export default meta

type Story = StoryObj<typeof CookieBanner>

export const Padrao: Story = {
  args: {
    isOpen: true,
  },
}

export const WithCustomPolicy: Story = {
    args: {
        isOpen: true,
        policyUrl: '/privacy-policy'
    }
}
