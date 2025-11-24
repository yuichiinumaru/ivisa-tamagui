import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppProviders } from './providers'
import { TamaguiGallery } from './gallery/TamaguiGallery'

export const RootApp = () => (
  <React.StrictMode>
    <AppProviders>
      <TamaguiGallery />
    </AppProviders>
  </React.StrictMode>
)

const mount = () => {
  const rootElement = document.getElementById('root')

  if (!rootElement) {
    throw new Error('Missing #root element for Tamagui sandbox rendering')
  }

  const root = ReactDOM.createRoot(rootElement)
  root.render(<RootApp />)
}

if (typeof document !== 'undefined') {
  mount()
}
