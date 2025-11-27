import type { Meta, StoryObj } from '@storybook/react'
import { Menubar, MenubarMenu, MenubarTrigger } from './Menubar'

const meta: Meta<typeof Menubar> = {
  title: 'Molecules/Menubar',
  component: Menubar,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof Menubar>

export const Default: Story = {
  render: (args) => (
    <Menubar {...args}>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  ),
}
