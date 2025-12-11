import type { Meta, StoryObj } from '@storybook/react'
import { FileUpload } from './FileUpload'
import { YStack } from 'tamagui'

const meta: Meta<typeof FileUpload> = {
  title: 'Organisms/FileUpload',
  component: FileUpload,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'FileUpload provides a stylized dropzone area for file selection, with support for loading, error, and empty states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onFileSelect: { action: 'fileSelected' },
    accept: { control: 'text', description: 'Allowed file types (e.g., "image/*, .pdf").' },
    title: { control: 'text', description: 'Main title text (localized in PT-BR).' },
    subtitle: { control: 'text', description: 'Subtitle text with file type hints (localized in PT-BR).' },
    isLoading: { control: 'boolean', description: 'Toggles the loading skeleton view.' },
    hasError: { control: 'boolean', description: 'Toggles the error state styling.' },
    errorMessage: { control: 'text', description: 'Message to display in the error state.' },
  },
}

export default meta

type Story = StoryObj<typeof FileUpload>

export const GoldenPath: Story = {
  name: 'Padrão (Golden Path)',
  args: {
    // All props use default PT-BR values
  },
}

export const Loading: Story = {
  name: 'Carregando (Loading)',
  args: {
    isLoading: true,
  },
}

export const Error: Story = {
  name: 'Erro (Error)',
  args: {
    hasError: true,
    errorMessage: 'O arquivo é muito grande. O tamanho máximo é de 2MB.',
  },
}

export const ImagesOnly: Story = {
  name: 'Apenas Imagens',
  args: {
    accept: 'image/png, image/jpeg, image/gif',
    subtitle: 'Apenas arquivos PNG, JPG, ou GIF são permitidos.',
  },
}

export const LayoutStress: Story = {
  name: 'Responsividade (Layout Stress)',
  decorators: [
    (Story) => (
      <YStack width={300} alignItems="center">
        <Story />
      </YStack>
    ),
  ],
  args: {},
}
