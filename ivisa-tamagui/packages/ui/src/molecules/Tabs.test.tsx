import { render, screen, fireEvent } from '../test-utils'
import { Tabs } from './Tabs'
import { Text } from 'tamagui'

describe('Tabs', () => {
  it('renders tabs and switches content', () => {
    const tabs = [
      { value: 'tab1', label: 'Tab 1', content: <Text>Content 1</Text> },
      { value: 'tab2', label: 'Tab 2', content: <Text>Content 2</Text> },
    ]

    render(<Tabs defaultValue="tab1" tabs={tabs} />)

    expect(screen.getByText('Tab 1')).toBeInTheDocument()
    expect(screen.getByText('Content 1')).toBeInTheDocument()

    // Switch tab
    fireEvent.click(screen.getByText('Tab 2'))
    expect(screen.getByText('Content 2')).toBeInTheDocument()
  })
})
