// @ts-nocheck
import { render } from '@testing-library/react'
import { AspectRatio } from './AspectRatio'
import React from 'react'
import { TamaguiProvider } from 'tamagui'
import config from '../tamagui.config'

describe('AspectRatio', () => {
  it('renders correctly', () => {
    const { container } = render(
        <TamaguiProvider config={config}>
            <AspectRatio ratio={16/9} />
        </TamaguiProvider>
    )
    expect(container).toBeDefined()
  })
})

