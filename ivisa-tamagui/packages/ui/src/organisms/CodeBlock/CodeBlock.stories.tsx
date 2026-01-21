import type { Meta, StoryObj } from '@storybook/react'
import { CodeBlock } from './CodeBlock'

const meta: Meta<typeof CodeBlock> = {
  title: 'Organismos/CodeBlock',
  component: CodeBlock,
}

export default meta
type Story = StoryObj<typeof CodeBlock>

const SAMPLE_CODE = `function helloWorld() {
  console.log("Hello, world!");
  return true;
}`

export const Default: Story = {
  args: {
    code: SAMPLE_CODE,
    language: 'javascript',
  },
}

export const LongCode: Story = {
  args: {
    code: Array(50).fill('const x = 1;').join('\n'),
    language: 'typescript',
    maxHeight: 200,
  },
}
