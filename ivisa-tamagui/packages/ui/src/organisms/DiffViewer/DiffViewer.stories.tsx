import type { Meta, StoryObj } from '@storybook/react'
import { DiffViewer } from './DiffViewer'

const meta: Meta<typeof DiffViewer> = {
  title: 'Organismos/DiffViewer',
  component: DiffViewer,
  tags: ['autodocs'],
  args: {
    oldText: 'const a = 10;\nconsole.log(a);',
    newText: 'const a = 20;\nconsole.log(a);\nconsole.log("Done");',
  },
}

export default meta
type Story = StoryObj<typeof DiffViewer>

export const Padrao: Story = {}

export const NoChanges: Story = {
  args: {
    newText: 'const a = 10;\nconsole.log(a);',
  },
}
