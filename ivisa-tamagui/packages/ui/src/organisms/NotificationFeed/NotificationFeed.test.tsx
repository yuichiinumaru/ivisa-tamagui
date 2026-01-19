import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { NotificationFeed } from './NotificationFeed'
import { TamaguiProvider } from 'tamagui'
import config from '../../tamagui.config'

// Wrapper to provide Tamagui context
const renderWithTheme = (component: React.ReactNode) => {
  return render(<TamaguiProvider config={config}>{component}</TamaguiProvider>)
}

describe('NotificationFeed', () => {
  const notifications = [
    {
      id: '1',
      title: 'New Message',
      description: 'You have a new message from John.',
      date: '2 hours ago',
      isRead: false,
    },
    {
      id: '2',
      title: 'System Update',
      description: 'System update completed successfully.',
      date: '1 day ago',
      isRead: true,
    },
  ]

  it('renders notifications correctly', () => {
    renderWithTheme(<NotificationFeed notifications={notifications} />)

    expect(screen.getByText('New Message')).toBeTruthy()
    expect(screen.getByText('You have a new message from John.')).toBeTruthy()
    expect(screen.getByText('System Update')).toBeTruthy()
  })

  it('renders empty state when no notifications', () => {
    renderWithTheme(<NotificationFeed notifications={[]} />)
    expect(screen.getByText('Nenhuma notificação')).toBeTruthy()
  })

  it('triggers onMarkAsRead when a notification is clicked', () => {
    const handleMarkAsRead = jest.fn()
    renderWithTheme(
        <NotificationFeed
            notifications={notifications}
            onMarkAsRead={handleMarkAsRead}
        />
    )

    fireEvent.click(screen.getByText('New Message'))
    expect(handleMarkAsRead).toHaveBeenCalledWith('1')
  })
})

