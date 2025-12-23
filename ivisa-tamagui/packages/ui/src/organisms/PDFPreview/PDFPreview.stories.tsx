import type { Meta, StoryObj } from '@storybook/react'
import { PDFPreview } from './PDFPreview'

const meta: Meta<typeof PDFPreview> = {
  title: 'Organismos/PDFPreview',
  component: PDFPreview,
  tags: ['autodocs'],
  args: {
    // Uses the local asset downloaded to packages/ui/public/assets/
    fileUrl: '/assets/2510.09244.pdf',
    title: 'Visual Multi-Agent System Architecture',
  },
}

export default meta
type Story = StoryObj<typeof PDFPreview>

export const Padrao: Story = {}

export const Carregando: Story = {
  args: {
    isLoading: true,
  },
}

export const Error: Story = {
  args: {
    error: 'Arquivo corrompido ou não encontrado.',
  },
}

export const Empty: Story = {
  args: {
    fileUrl: undefined,
  },
}
