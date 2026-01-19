import React from 'react'
import { render, screen, fireEvent } from '../../test-utils'
import { DashboardShell } from './DashboardShell'

// Mock Tamagui hooks and components
jest.mock('tamagui', () => {
  const original = jest.requireActual('tamagui')
  return {
    ...original,
    useMedia: jest.fn(() => ({ gtMd: true })), // Default to desktop
    keyframes: jest.fn(() => ''), // Mock keyframes to return an empty string
  }
})

const { useMedia } = require('tamagui')

describe('DashboardShell', () => {
  const sidebarContent = <div>Sidebar</div>
  const childContent = <div>Child Content</div>

  beforeEach(() => {
    // Reset to desktop view before each test
    useMedia.mockImplementation(() => ({ gtMd: true }))
  })

  it('renders children, header, and sidebar on desktop', () => {
    render(
      <DashboardShell sidebar={sidebarContent}>
        {childContent}
      </DashboardShell>
    )
    expect(screen.getByText('Child Content')).toBeInTheDocument()
    expect(screen.getByText('Sidebar')).toBeInTheDocument()
  })

  it('renders skeleton when isLoading is true', () => {
    render(
      <DashboardShell isLoading sidebar={sidebarContent}>
        {childContent}
      </DashboardShell>
    )
    expect(screen.queryByText('Child Content')).not.toBeInTheDocument()
    expect(screen.queryByText('Sidebar')).not.toBeInTheDocument()
  })

  it('renders empty state when isEmpty is true', () => {
    render(
      <DashboardShell isEmpty sidebar={sidebarContent}>
        {childContent}
      </DashboardShell>
    )
    expect(screen.queryByText('Child Content')).not.toBeInTheDocument()
    expect(screen.getByText('Nenhum dado encontrado')).toBeInTheDocument()
  })

  it('renders error state when hasError is true', () => {
    render(
      <DashboardShell hasError sidebar={sidebarContent}>
        {childContent}
      </DashboardShell>
    )
    expect(screen.queryByText('Child Content')).not.toBeInTheDocument()
    expect(screen.getByText('Ocorreu um erro')).toBeInTheDocument()
  })

  describe('Mobile View', () => {
    beforeEach(() => {
      // Switch to mobile view for these tests
      useMedia.mockImplementation(() => ({ gtMd: false }))
    })

    it('hides the sidebar by default on mobile', () => {
      render(
        <DashboardShell sidebar={sidebarContent}>
          {childContent}
        </DashboardShell>
      )
      expect(screen.queryByText('Sidebar')).not.toBeInTheDocument()
    })

    it('shows a menu button on mobile', () => {
      render(
        <DashboardShell sidebar={sidebarContent}>
          {childContent}
        </DashboardShell>
      )
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('opens the sidebar when the menu button is clicked', () => {
      render(
        <DashboardShell sidebar={sidebarContent}>
          {childContent}
        </DashboardShell>
      )
      const menuButton = screen.getByRole('button')
      fireEvent.click(menuButton)
      expect(screen.getByText('Sidebar')).toBeInTheDocument()
    })

    it('closes the sidebar when the close button is clicked', () => {
      render(
        <DashboardShell sidebar={sidebarContent}>
          {childContent}
        </DashboardShell>
      )
      const menuButton = screen.getByRole('button')
      fireEvent.click(menuButton) // Open sidebar
      expect(screen.getByText('Sidebar')).toBeInTheDocument()

      const closeButton = screen.getByRole('button') // Button icon changes to 'X'
      fireEvent.click(closeButton)
      expect(screen.queryByText('Sidebar')).not.toBeInTheDocument()
    })
  })
})

