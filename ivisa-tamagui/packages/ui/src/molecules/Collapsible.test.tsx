import { render, screen } from '@testing-library/react'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from './Collapsible'
import React from 'react'
import { TamaguiProvider, Text } from 'tamagui'
import config from '../tamagui.config'

describe('Collapsible', () => {
  it('renders correctly', () => {
    render(
      <TamaguiProvider config={config}>
          <Collapsible>
            <CollapsibleTrigger><Text>Trigger</Text></CollapsibleTrigger>
            <CollapsibleContent><Text>Content</Text></CollapsibleContent>
          </Collapsible>
      </TamaguiProvider>
    )
    expect(screen.getByText('Trigger')).toBeDefined()
  })
})
