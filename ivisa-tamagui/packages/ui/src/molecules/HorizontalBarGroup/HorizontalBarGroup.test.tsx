// @ts-nocheck

import { render, fireEvent } from '../../test-utils'
import { HorizontalBarGroup } from './HorizontalBarGroup'
import { Button } from '../../atoms/Button'
import { Text } from 'tamagui'

describe('HorizontalBarGroup', () => {
  it('renders title and subtitle', () => {
    const { getByText } = render(
      <HorizontalBarGroup title="Test Title" subtitle="Test Subtitle" />
    )
    expect(getByText('Test Title')).toBeTruthy()
    expect(getByText('Test Subtitle')).toBeTruthy()
  })

  it('renders actions', () => {
    const { getByText } = render(
      <HorizontalBarGroup
        title="Test Title"
        actions={<Button>Click Me</Button>}
      />
    )
    expect(getByText('Click Me')).toBeTruthy()
  })

  it('renders leftSlot', () => {
    const { getByText } = render(
      <HorizontalBarGroup
        title="Test Title"
        leftSlot={<Text>Left Slot</Text>}
      />
    )
    expect(getByText('Left Slot')).toBeTruthy()
  })

  it('handles onPress', () => {
    const onPress = jest.fn()
    const { getByText } = render(
      <HorizontalBarGroup title="Test Title" onPress={onPress} />
    )
    fireEvent.click(getByText('Test Title'))
    expect(onPress).toHaveBeenCalled()
  })

  it('shows skeleton when loading', () => {
    const { queryByText } = render(<HorizontalBarGroup isLoading />)
    expect(queryByText('Test Title')).toBeNull()
  })

  it('applies error styles', () => {
    const { container } = render(<HorizontalBarGroup hasError />)
    expect(container.firstChild).toBeTruthy()
  })

  it('applies success styles', () => {
    const { container } = render(<HorizontalBarGroup isSuccess />)
    expect(container.firstChild).toBeTruthy()
  })

  it('applies warning styles', () => {
    const { container } = render(<HorizontalBarGroup isWarning />)
    expect(container.firstChild).toBeTruthy()
  })

  it('applies disabled styles', () => {
    const { container } = render(<HorizontalBarGroup disabled />)
    expect(container.firstChild).toBeTruthy()
  })
})

