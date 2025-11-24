import React from 'react'
import { AppRegistry } from 'react-native'

import { AppProviders } from '../providers'
import { TamaguiGallery } from '../gallery/TamaguiGallery'

export const NativeRoot = () => (
  <AppProviders>
    <TamaguiGallery />
  </AppProviders>
)

const APP_NAME = 'TamaguiComponentsNative'

AppRegistry.registerComponent(APP_NAME, () => NativeRoot)

export default NativeRoot
