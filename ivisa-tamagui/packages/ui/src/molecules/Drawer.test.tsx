import { render, screen, fireEvent } from '../test-utils'
import { Drawer } from './Drawer'
import { Button } from '../atoms/Button'
import { Text } from 'tamagui'
import React from 'react'

// Mock the Sheet component to avoid 'useAnimatedNumber' crash in JSDOM
// This mock simulates the structure Drawer expects from Sheet
jest.mock('./Sheet', () => {
  const React = require('react')
  const { View } = require('react-native')

  const MockSheet = ({ children, open, onOpenChange }: any) => {
    return (
      <View data-testid="sheet-root">
        {open && children}
      </View>
    )
  }

  const MockPart = ({ children }: any) => <View>{children}</View>

  const Sheet = Object.assign(MockSheet, {
    Portal: ({ children }: any) => <>{children}</>, // Generic Portal mock
    Overlay: () => <View data-testid="sheet-overlay" />,
    Handle: () => <View />,
    Frame: MockPart,
    // Content usually includes Portal/Overlay in the real component if unmodified,
    // but in Drawer we might rely on it.
    // Since we mocked Sheet, we control what Content does.
    Content: ({ children }: any) => <View data-testid="sheet-content">{children}</View>,
    Header: MockPart,
    Footer: MockPart,
    Title: MockPart,
    Description: MockPart,
    Close: MockPart,
  })

  return {
    Sheet,
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

    const trigger = screen.getByText('Open Drawer')
    expect(trigger).toBeInTheDocument()

    fireEvent.click(trigger)

    expect(screen.getByText('Drawer Title')).toBeInTheDocument()
    expect(screen.getByText('Drawer Content')).toBeInTheDocument()
  })
})
