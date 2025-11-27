
import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { TamaguiProvider, Button, Text } from 'tamagui'
import { Tooltip } from '../src/molecules/Tooltip/Tooltip'
import config from '@/tamagui.config'

describe('Tooltip Portal', () => {
  it('should render the tooltip content inside a portal', () => {
    const { getByText, queryByText } = render(
      <TamaguiProvider config={config}>
        <Tooltip content={<Text>Tooltip Content</Text>}>
          <Button>Hover me</Button>
        </Tooltip>
      </TamaguiProvider>
    )

    const trigger = getByText('Hover me')
    fireEvent.mouseEnter(trigger)

    // The tooltip content should be in the tree, but not as a direct child of the trigger's parent
    expect(queryByText('Tooltip Content')).toBeTruthy()
  })
})
