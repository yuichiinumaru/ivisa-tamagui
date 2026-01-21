// @ts-nocheck
import { render, screen, fireEvent, waitFor } from '../../test-utils'
import { GeoMap } from './Map'
import React from 'react'
import { Text } from 'tamagui'

// Mock Native MapLibre
jest.mock('@maplibre/maplibre-react-native', () => {
  const React = require('react');
  const View = require('react-native').View;

  return {
    MapView: React.forwardRef(({ children, ...props }: any, ref: any) => <View {...props} data-testid="map-view">{children}</View>),
    Camera: React.forwardRef((props: any, ref: any) => <View {...props} data-testid="map-camera" />),
    ShapeSource: ({ children }: any) => <View>{children}</View>,
    FillLayer: () => <View />,
    LineLayer: () => <View />,
    PointAnnotation: ({ children }: any) => <View data-testid="map-marker">{children}</View>,
    Callout: ({ children }: any) => <View data-testid="map-callout">{children}</View>,
    setAccessToken: jest.fn(),
  }
})

// Mock Tamagui icons
jest.mock('@tamagui/lucide-icons', () => ({
  Plus: () => <span data-testid="icon-plus" />,
  Minus: () => <span data-testid="icon-minus" />,
}))

describe('GeoMap', () => {
  it('renders the map wrapper and native map view', async () => {
    const { getByTestId } = render(
      <GeoMap>
      </GeoMap>
    )
    // The MapView uses forwardRef, which might be causing slight delays or async rendering in JSDOM environment
    // Also, use screen.findByTestId for more reliable async wait
    expect(await screen.findByTestId('map-view')).toBeInTheDocument()
  })

  it('renders children (markers)', async () => {
    const { getByText } = render(
      <GeoMap>
        <GeoMap.Marker id="m1" longitude={0} latitude={0}>
          <Text>MarkerContent</Text>
        </GeoMap.Marker>
      </GeoMap>
    )

    expect(await screen.findByTestId('map-marker')).toBeInTheDocument()
    expect(getByText('MarkerContent')).toBeInTheDocument()
  })

  it('renders controls', () => {
    const { getAllByTestId } = render(
      <GeoMap>
        <GeoMap.Controls />
      </GeoMap>
    )
    expect(getAllByTestId('icon-plus')[0]).toBeInTheDocument()
    expect(getAllByTestId('icon-minus')[0]).toBeInTheDocument()
  })
})

