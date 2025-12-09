import { render, screen } from '../../test-utils'
import { Timeline, TimelineItem } from './Timeline'
import { Text } from 'tamagui'
import React from 'react'

describe('Timeline', () => {
  it('renders timeline items', () => {
    render(
      <Timeline>
        <TimelineItem>
          <Text>Step 1</Text>
        </TimelineItem>
        <TimelineItem>
          <Text>Step 2</Text>
        </TimelineItem>
      </Timeline>
    )
    expect(screen.getByText('Step 1')).toBeInTheDocument()
    expect(screen.getByText('Step 2')).toBeInTheDocument()
  })
})
