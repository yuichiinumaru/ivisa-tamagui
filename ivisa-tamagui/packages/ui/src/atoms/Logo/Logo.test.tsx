// @ts-nocheck
import { render } from '@testing-library/react'
import { Logo } from './Logo'
import { TamaguiProvider } from 'tamagui'
import config from '../../tamagui.config'

describe('Logo', () => {
  it('renders the full logo by default', () => {
    const { getByLabelText } = render(
      <TamaguiProvider config={config}>
        <Logo aria-label="logo" />
      </TamaguiProvider>
    )
    const logoElement = getByLabelText('logo')
    expect(logoElement).toBeInTheDocument()
  })

  it('renders the symbol variant', () => {
    const { getByLabelText } = render(
      <TamaguiProvider config={config}>
        <Logo variant="symbol" aria-label="logo-symbol" />
      </TamaguiProvider>
    )
    const logoElement = getByLabelText('logo-symbol')
    expect(logoElement).toBeInTheDocument()
  })
})
