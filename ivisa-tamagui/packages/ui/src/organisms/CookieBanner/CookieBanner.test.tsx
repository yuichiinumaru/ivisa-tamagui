// @ts-nocheck
import { render, screen, fireEvent, waitFor } from '../../test-utils'
import { CookieBanner } from './CookieBanner'

describe('CookieBanner', () => {
  it('renders correctly when open', () => {
    render(
      <CookieBanner
        onAcceptAll={() => {}}
        onRejectAll={() => {}}
        onSavePreferences={() => {}}
        isOpen={true}
      />
    )
    expect(screen.getByText('Valorizamos sua privacidade')).toBeInTheDocument()
  })

  it('does not render when closed', () => {
    render(
        <CookieBanner
          onAcceptAll={() => {}}
          onRejectAll={() => {}}
          onSavePreferences={() => {}}
          isOpen={false}
        />
      )
      expect(screen.queryByText('Valorizamos sua privacidade')).not.toBeInTheDocument()
  })

  it('calls onAcceptAll', () => {
      const onAccept = jest.fn()
      render(
        <CookieBanner
          onAcceptAll={onAccept}
          onRejectAll={() => {}}
          onSavePreferences={() => {}}
        />
      )

      fireEvent.click(screen.getByText('Aceitar Todos'))
      expect(onAccept).toHaveBeenCalled()
  })

  it('opens preferences dialog', async () => {
      render(
        <CookieBanner
          onAcceptAll={() => {}}
          onRejectAll={() => {}}
          onSavePreferences={() => {}}
        />
      )

      fireEvent.click(screen.getByText('Personalizar'))

      await waitFor(() => {
          expect(screen.getByText('Preferências de Cookies')).toBeInTheDocument()
      })
  })
})

