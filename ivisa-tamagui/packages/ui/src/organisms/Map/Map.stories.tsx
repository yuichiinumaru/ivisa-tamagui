// @ts-nocheck
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { GeoMap } from './Map'
import { YStack, Text, Circle } from 'tamagui'
import { MapPin } from '@tamagui/lucide-icons'

const meta: Meta<React.ComponentProps<typeof GeoMap>> = {
  title: 'Organismos/Map',
  component: GeoMap,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof GeoMap>>

export const Default: Story = {
  args: {
    height: 500,
  },
  render: (args) => (
    <GeoMap {...args}>
      <GeoMap.Marker id="marker-1" longitude={-43.1729} latitude={-22.9068}>
        <MapPin size="$2" color="$red10" />
        <GeoMap.Popup>
            <Text>Rio de Janeiro</Text>
        </GeoMap.Popup>
      </GeoMap.Marker>
    </GeoMap>
  )
}
