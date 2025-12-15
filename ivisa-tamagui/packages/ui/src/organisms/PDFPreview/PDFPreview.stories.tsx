import type { Meta, StoryObj } from '@storybook/react'
import { PDFPreview } from './PDFPreview'

const meta: Meta<typeof PDFPreview> = {
  title: 'Organismos/PDFPreview',
  component: PDFPreview,
  tags: ['autodocs'],
  args: {
    fileUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
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
