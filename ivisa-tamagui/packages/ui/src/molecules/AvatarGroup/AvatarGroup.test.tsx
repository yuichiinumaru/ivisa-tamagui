import { render, screen } from '../../jest.setup'
import { AvatarGroup } from './AvatarGroup'
import { Avatar, AvatarFallback } from '../../atoms/Avatar'
import { Text } from 'tamagui'
import React from 'react'

describe('AvatarGroup', () => {
  it('renders children correctly', () => {
    render(
      <AvatarGroup>
        <Avatar><AvatarFallback><Text>A</Text></AvatarFallback></Avatar>
      </AvatarGroup>
    )
    expect(screen.getByText('A')).toBeTruthy()
  })
})
