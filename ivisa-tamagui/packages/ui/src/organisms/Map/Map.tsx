// @ts-nocheck
import React, { createContext, useContext, useMemo, useState, useRef, useEffect, ReactNode } from 'react'
import { YStack, useTheme, XStack, Button } from 'tamagui'
import { Plus, Minus } from '@tamagui/lucide-icons'
import MapLibreGL from '../../mocks/maplibre-react-native'
import { GeoFeature, GeoJSON } from '../Maps/Maps'
import { Platform } from 'react-native'

// --- Types ---

export interface MapContextValue {
  mapRef: React.RefObject<MapLibreGL.MapView>
  cameraRef: React.RefObject<MapLibreGL.Camera>
  zoom: number
  setZoom: (z: number) => void
}

const MapContext = createContext<MapContextValue | null>(null)

export const useMap = () => {
  const context = useContext(MapContext)
  if (!context) {
    throw new Error('useMap must be used within a Map component')
  }
  return context
}

// --- Components ---

export interface MapProps {
  data?: GeoJSON
  children?: ReactNode
  width?: number | string
  height?: number | string
  initialZoom?: number
  styleURL?: string
}

export const Map = ({
  data,
  children,
  width = '100%',
  height = 400,
  initialZoom = 10,
  styleURL = "https://demotiles.maplibre.org/style.json"
}: MapProps) => {
  const mapRef = useRef<MapLibreGL.MapView>(null)
  const cameraRef = useRef<MapLibreGL.Camera>(null)
  const [zoom, setZoom] = useState(initialZoom)

  // Set access token if needed (for other providers)
  // MapLibreGL.setAccessToken(null);

  const onRegionDidChange = async (feature: any) => {
    // Sync zoom state
    // const z = await mapRef.current?.getZoom();
    // if (z) setZoom(z);
  }

  // Handle zooming programmatically
  useEffect(() => {
    cameraRef.current?.zoomTo(zoom);
  }, [zoom]);

  return (
    <MapContext.Provider value={{
      mapRef,
      cameraRef,
      zoom,
      setZoom
    }}>
      <YStack
        width={width}
        height={height}
        overflow="hidden"
        position="relative"
        borderRadius="$4"
      >
        <MapLibreGL.MapView
          ref={mapRef}
          style={{ flex: 1 }}
          styleURL={styleURL}
          onRegionDidChange={onRegionDidChange}
          logoEnabled={false}
          attributionEnabled={false}
        >
          <MapLibreGL.Camera
            ref={cameraRef}
            defaultSettings={{
              zoomLevel: initialZoom,
              centerCoordinate: [-43.1729, -22.9068], // Rio default
            }}
          />

          {/* Render children (Markers) */}
          {children}

          {/* Render GeoJSON Data if provided */}
          {data && (
            <MapLibreGL.ShapeSource id="mapSource" shape={data as any}>
              <MapLibreGL.FillLayer id="mapFill" style={{ fillColor: '#3b82f6', fillOpacity: 0.5, fillOutlineColor: '#ffffff' }} />
              <MapLibreGL.LineLayer id="mapLine" style={{ lineColor: '#ffffff', lineWidth: 1 }} />
            </MapLibreGL.ShapeSource>
          )}

        </MapLibreGL.MapView>

        {/* Controls Overlay */}
        <MapControls />
      </YStack>
    </MapContext.Provider>
  )
}

// --- Subcomponents ---

export const MapControls = ({ showZoom = true }: { showZoom?: boolean }) => {
  const { zoom, setZoom } = useMap()

  return (
    <YStack position="absolute" bottom="$4" right="$4" gap="$2">
      {showZoom && (
        <YStack borderRadius="$4" overflow="hidden" elevation="$2" backgroundColor="$background" borderWidth={1} borderColor="$borderColor">
          <Button
            size="$3"
            chromeless
            icon={Plus}
            onPress={() => setZoom(zoom + 1)}
            borderRadius={0}
            borderBottomWidth={1}
            borderColor="$borderColor"
          />
          <Button
            size="$3"
            chromeless
            icon={Minus}
            onPress={() => setZoom(zoom - 1)}
            borderRadius={0}
          />
        </YStack>
      )}
    </YStack>
  )
}

export const MapMarker = ({ longitude, latitude, children, id }: { longitude: number, latitude: number, children?: ReactNode, id: string }) => {

  return (
    <MapLibreGL.PointAnnotation
      id={id}
      coordinate={[longitude, latitude]}
    >
      {children || <YStack width={10} height={10} backgroundColor="$red10" borderRadius={10} />}
    </MapLibreGL.PointAnnotation>
  )
}

export const MapPopup = ({ children }: { children: ReactNode }) => {
  return (
    <MapLibreGL.Callout>
      <YStack padding="$2" backgroundColor="$background" borderRadius="$2" elevation="$2">
        {children}
      </YStack>
    </MapLibreGL.Callout>
  )
}

// Export a bundled object for clean API
export const GeoMap = Object.assign(Map, {
  Marker: MapMarker,
  Popup: MapPopup,
  Controls: MapControls
})

export type MapControlsProps = React.ComponentProps<typeof MapControls>

export type MapMarkerProps = React.ComponentProps<typeof MapMarker>

export type MapPopupProps = React.ComponentProps<typeof MapPopup>

export type GeoMapProps = React.ComponentProps<typeof GeoMap>
