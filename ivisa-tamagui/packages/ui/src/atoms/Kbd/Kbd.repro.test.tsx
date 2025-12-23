import React from 'react'
import { render } from '@testing-library/react'
import { Kbd } from './Kbd'
import { TamaguiProvider, createTamagui } from 'tamagui'
import { config } from '@tamagui/config/v3'

const tamaguiConfig = createTamagui(config)

const Wrapper = ({ children }) => (
  <TamaguiProvider config={tamaguiConfig}>
    {children}
  </TamaguiProvider>
)

describe('Kbd Repro', () => {
  it('renders ComoBotao story logic without crashing', () => {
    // Logic from ComoBotao story
    render(
      <Wrapper>
        <Kbd asChild>
          <button>Botão</button>
        </Kbd>
      </Wrapper>
    )
  })
})
