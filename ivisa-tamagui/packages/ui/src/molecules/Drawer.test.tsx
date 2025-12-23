import { render, screen, fireEvent } from '../test-utils'
import { Drawer } from './Drawer'
import { Button } from '../atoms/Button'
import { Text } from 'tamagui'
import React from 'react'

// Mock the Sheet component to avoid 'useAnimatedNumber' crash in JSDOM
jest.mock('./Sheet', () => {
  const React = require('react')
  const { View } = require('react-native')

  const MockSheet = ({ children, open, onOpenChange }: any) => {
    return (
      <View data-testid="sheet-root">
        {/* Render children if open, or always if we want to simulate Portal behavior roughly */}
        {open && children}
      </View>
    )
  }

  const MockPart = ({ children }: any) => <View>{children}</View>

  const Sheet = Object.assign(MockSheet, {
    Portal: ({ children }: any) => <>{children}</>,
    Overlay: () => <View data-testid="sheet-overlay" />,
    Handle: () => <View />,
    Frame: MockPart,
    Content: ({ children }: any) => <View data-testid="sheet-content">{children}</View>,
    Header: MockPart,
    Footer: MockPart,
    Title: MockPart,
    Description: MockPart,
    Close: MockPart,
  })

  return {
    Sheet,
    // Mock other named exports if necessary
    SheetContent: Sheet.Content,
    SheetOverlay: Sheet.Overlay,
    SheetHandle: Sheet.Handle,
    SheetHeader: Sheet.Header,
    SheetFooter: Sheet.Footer,
    SheetTitle: Sheet.Title,
    SheetDescription: Sheet.Description,
    SheetClose: Sheet.Close,
  }
})

describe('Drawer', () => {
  it('renders correctly and opens on trigger press', () => {
    render(
      <Drawer
        title="Drawer Title"
        trigger={<Button>Open Drawer</Button>}
      >
        <Text>Drawer Content</Text>
      </Drawer>
    )

    // Check if trigger is present
    const trigger = screen.getByText('Open Drawer')
    expect(trigger).toBeInTheDocument()

    // Open drawer
    fireEvent.click(trigger)

    // Check content
    expect(screen.getByText('Drawer Title')).toBeInTheDocument()
    expect(screen.getByText('Drawer Content')).toBeInTheDocument()
  })
})
