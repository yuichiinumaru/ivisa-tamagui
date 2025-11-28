import type { Meta } from '@storybook/react'
import { YStack } from 'tamagui'
import { Heading, TypographyText, MutedText, LeadText, Blockquote } from './Typography'

const meta: Meta = {
  title: 'atoms/Typography',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <YStack gap="$4" p="$4" width={500}>
        <Story />
      </YStack>
    ),
  ],
}

export default meta

export const All = {
  render: () => (
    <>
      <Heading size="9xl">Heading 1</Heading>
      <Heading size="8xl">Heading 2</Heading>
      <Heading size="7xl">Heading 3</Heading>
      <Heading size="6xl">Heading 4</Heading>
      <TypographyText>
        This is a standard paragraph. The king's request, however, was not so easily granted. It was a request that would test the limits of his power and the loyalty of his subjects.
      </TypographyText>
      <LeadText>
        This is a lead paragraph. It stands out from the rest. A lead paragraph is a single paragraph that precedes the body of a text.
      </LeadText>
      <MutedText>
        This is a muted text. It's for supplementary information.
      </MutedText>
      <Blockquote>
        "This is a blockquote. It's for quoting text from another source."
      </Blockquote>
    </>
  ),
}
