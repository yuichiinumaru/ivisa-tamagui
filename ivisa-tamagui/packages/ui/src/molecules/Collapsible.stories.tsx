import type { Meta, StoryObj } from '@storybook/react'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './Collapsible'
import { Button, Text, Stack, XStack } from 'tamagui'
import { ChevronsUpDown } from '@tamagui/lucide-icons'
import React from 'react'

const meta: Meta<typeof Collapsible> = {
  title: 'Molecules/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Collapsible>

export const Default: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        width={350}
        space="$2"
        {...args}
      >
        <XStack alignItems="center" justifyContent="space-between" padding="$2" borderWidth={1} borderColor="$borderColor" borderRadius="$4">
          <Text fontSize="$4" fontWeight="bold">
            @peduarte starred 3 repositories
          </Text>
          <CollapsibleTrigger asChild>
            <Button size="$3" chromeless icon={ChevronsUpDown} />
          </CollapsibleTrigger>
        </XStack>

        <Stack padding="$2" borderWidth={1} borderColor="$borderColor" borderRadius="$4" marginVertical="$2">
            <Text>@radix-ui/primitives</Text>
        </Stack>

        <CollapsibleContent>
            <Stack space="$2">
                <Stack padding="$2" borderWidth={1} borderColor="$borderColor" borderRadius="$4">
                    <Text>@radix-ui/colors</Text>
                </Stack>
                <Stack padding="$2" borderWidth={1} borderColor="$borderColor" borderRadius="$4">
                    <Text>@stitches/react</Text>
                </Stack>
            </Stack>
        </CollapsibleContent>
      </Collapsible>
    )
  },
}
