import { render, screen } from '../../test-utils'
import { DashboardLayout } from './DashboardLayout'
import { Text } from 'tamagui'
import React from 'react'

describe('DashboardLayout', () => {
  it('renders header, sidebar, and main content', () => {
    render(
      <DashboardLayout
        header={<Text>Header</Text>}
        sidebar={<Text>Sidebar</Text>}
      >
        <Text>Main Content</Text>
      </DashboardLayout>
    )
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Sidebar')).toBeInTheDocument()
    expect(screen.getByText('Main Content')).toBeInTheDocument()
  })
})
