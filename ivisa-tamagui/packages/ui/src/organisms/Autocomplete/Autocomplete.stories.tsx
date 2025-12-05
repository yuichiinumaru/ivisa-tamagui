import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Autocomplete, AutocompleteOption } from './Autocomplete'

const meta: Meta<typeof Autocomplete> = {
  title: 'Organisms/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
}

const OPTIONS = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Blueberry', value: 'blueberry' },
  { label: 'Grapes', value: 'grapes' },
  { label: 'Pineapple', value: 'pineapple' },
]

export default meta
type Story = StoryObj<typeof Autocomplete>

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState<AutocompleteOption | null>(null)
    return <Autocomplete options={OPTIONS} value={value} onValueChange={setValue} />
  },
}
