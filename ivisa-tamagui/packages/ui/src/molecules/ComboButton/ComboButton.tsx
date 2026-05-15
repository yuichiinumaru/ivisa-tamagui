import { ChevronDown } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { Group, ListItem, Popover, YGroup } from 'tamagui'
import { Button, ButtonProps } from '../../atoms/Button'

export interface ComboButtonOption {
  label: string
  onPress: () => void
}

export interface ComboButtonProps extends ButtonProps {
  label: string
  onMainPress: () => void
  options: ComboButtonOption[]
}

export const ComboButton = ({
  label,
  onMainPress,
  options,
  ...props
}: ComboButtonProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Group orientation="horizontal">
      <Group.Item>
        <Button onPress={onMainPress} {...props}>
          {label}
        </Button>
      </Group.Item>
      <Group.Item>
        <Popover open={open} onOpenChange={setOpen} placement="bottom-end">
          <Popover.Trigger asChild>
            <Button icon={ChevronDown} {...props} />
          </Popover.Trigger>
          <Popover.Content
            padding={0}
            minWidth={150}
            borderWidth={1}
            borderColor="$borderColor"
            enterStyle={{ y: -10, opacity: 0 }}
            exitStyle={{ y: -10, opacity: 0 }}
            elevate
            animation={[
              'quick',
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}
          >
            <YGroup>
              {options.map((option, index) => (
                <YGroup.Item key={index}>
                  <ListItem
                    hoverTheme
                    pressTheme
                    onPress={() => {
                      option.onPress()
                      setOpen(false)
                    }}
                  >
                    {option.label}
                  </ListItem>
                </YGroup.Item>
              ))}
            </YGroup>
          </Popover.Content>
        </Popover>
      </Group.Item>
    </Group>
  )
}
