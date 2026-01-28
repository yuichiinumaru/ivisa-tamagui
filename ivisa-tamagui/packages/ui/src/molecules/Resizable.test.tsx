// Removed @ts-nocheck — enabling type checking
import { render, screen } from '../test-utils'
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './Resizable'
import { Text } from 'tamagui'

describe('Resizable', () => {
  it('renders panels', () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
            <Text>Panel 1</Text>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
            <Text>Panel 2</Text>
        </ResizablePanel>
      </ResizablePanelGroup>
    )
    expect(screen.getByText('Panel 1')).toBeInTheDocument()
    expect(screen.getByText('Panel 2')).toBeInTheDocument()
  })
})

