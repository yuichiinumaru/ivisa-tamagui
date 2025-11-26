import React from 'react'
import { render } from '@testing-library/react'
import { TamaguiProvider } from 'tamagui'
import { describe, it, expect } from 'vitest'
import config from '../tamagui.config'
import { IvisaBreadcrumb } from './Breadcrumb'

const renderWithProvider = (ui: React.ReactElement) =>
  render(<TamaguiProvider config={config}>{ui}</TamaguiProvider>)

describe('IvisaBreadcrumb', () => {
  it('renders snapshot', () => {
    const { asFragment } = renderWithProvider(
      <IvisaBreadcrumb
        items={[
          { label: 'Home', href: '#' },
          { label: 'Section', href: '#' },
          { label: 'Page' },
        ]}
      />
    )

    expect(asFragment()).toMatchSnapshot()
  })

  it('marks last item as current page', () => {
    const { getByText } = renderWithProvider(
      <IvisaBreadcrumb
        items={[
          { label: 'Home', href: '#' },
          { label: 'Docs' },
        ]}
      />
    )

    expect(getByText('Docs').getAttribute('aria-current')).toBe('page')
  })
})
