import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { ComboButton } from './ComboButton'
import { TamaguiProvider, createTamagui } from 'tamagui'
import { config } from '@tamagui/config/v3'

// Setup basic provider
const tamaguiConfig = createTamagui(config)

const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
  <TamaguiProvider config={tamaguiConfig}>
    {children}
  </TamaguiProvider>
)

// Mock Tamagui components
jest.mock('tamagui', () => {
  const Actual = jest.requireActual('tamagui')

  const Group = ({ children, ...props }: any) => <div data-testid="group" {...props}>{children}</div>
  Group.Item = ({ children }: any) => <div>{children}</div>

  const Popover = ({ children, open }: any) => <div data-testid="popover">{open ? children : null}</div>
  Popover.Trigger = ({ children }: any) => <div data-testid="popover-trigger">{children}</div>
  Popover.Content = ({ children }: any) => <div data-testid="popover-content">{children}</div>

  const YGroup = ({ children }: any) => <div>{children}</div>
  YGroup.Item = ({ children }: any) => <div>{children}</div>

  return {
    ...Actual,
    Group,
    Popover,
    YGroup,
    ListItem: ({ children, onPress }: any) => (
      <div role="button" onClick={onPress}>
        {children}
      </div>
    ),
  }
})

jest.mock('../../atoms/Button', () => ({
  Button: ({ children, onPress, icon: Icon, ...props }: any) => (
    <button onClick={onPress} {...props}>
      {children}
      {Icon ? <Icon /> : null}
    </button>
  ),
}))

// Mock lucide icons
jest.mock('@tamagui/lucide-icons', () => ({
  ChevronDown: () => <svg data-testid="chevron-down" />,
}))

describe('ComboButton', () => {
  const mockMainPress = jest.fn()
  const mockOptionPress = jest.fn()
  const options = [{ label: 'Option 1', onPress: mockOptionPress }]

  it('renders correctly', () => {
    render(
      <ThemeProvider>
        <ComboButton label="Main" onMainPress={mockMainPress} options={options} />
      </ThemeProvider>
    )
    expect(screen.getByText('Main')).toBeInTheDocument()
  })

  it('handles main press', () => {
    render(
      <ThemeProvider>
        <ComboButton label="Main" onMainPress={mockMainPress} options={options} />
      </ThemeProvider>
    )
    fireEvent.click(screen.getByText('Main'))
    expect(mockMainPress).toHaveBeenCalled()
  })
})
