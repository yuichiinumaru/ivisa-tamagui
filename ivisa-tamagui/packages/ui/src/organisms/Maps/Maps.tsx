// @ts-nocheck
import React, { useMemo } from 'react'
import { YStack, Text, useTheme } from 'tamagui'
import { Svg, Path, G, Circle } from 'react-native-svg'
import { Skeleton } from '../../atoms/Skeleton'
import { AlertTriangle, Map } from '@tamagui/lucide-icons'

export interface GeoFeature {
    type: 'Feature'
    geometry: {
        type: string
        coordinates: any[]
    }
    properties: Record<string, any>
}

export interface GeoJSON {
    type: 'FeatureCollection'
    features: GeoFeature[]
}

export interface MapsProps {
  data: GeoJSON
  type?: 'choropleth' | 'dotDensity'
  valueKey?: string // Key in properties for value (choropleth)
  width?: number
  height?: number
  color?: string
  isLoading?: boolean
  error?: Error | null
  headerContent?: React.ReactNode
}

// Simple Mercator Projection
const project = (lon: number, lat: number, width: number, height: number, bounds: [number, number, number, number]) => {
    // bounds: [minLon, minLat, maxLon, maxLat]
    const [minLon, minLat, maxLon, maxLat] = bounds

    // Normalize lon/lat to 0-1 relative to bounds
    const xPct = (lon - minLon) / (maxLon - minLon)
    const yPct = (lat - minLat) / (maxLat - minLat)

    // Flip Y because screen coords are top-down
    const x = xPct * width
    const y = height - (yPct * height)

    return [x, y]
}

const getBounds = (features: GeoFeature[]): [number, number, number, number] => {
    let minLon = Infinity, minLat = Infinity, maxLon = -Infinity, maxLat = -Infinity

    const visit = (coords: any[]) => {
        // Flatten deep arrays until we hit [lon, lat]
        if (typeof coords[0] === 'number') {
            const [lon, lat] = coords
            minLon = Math.min(minLon, lon)
            minLat = Math.min(minLat, lat)
            maxLon = Math.max(maxLon, lon)
            maxLat = Math.max(maxLat, lat)
        } else {
            coords.forEach(visit)
        }
    }

    features.forEach(f => visit(f.geometry.coordinates))
    return [minLon, minLat, maxLon, maxLat]
}

const geoPath = (feature: GeoFeature, width: number, height: number, bounds: [number, number, number, number]) => {
    const { geometry } = feature

    const drawRing = (ring: number[][]) => {
        return ring.map((pt, i) => {
            const [x, y] = project(pt[0], pt[1], width, height, bounds)
            return `${i === 0 ? 'M' : 'L'} ${x} ${y}`
        }).join(' ') + 'Z'
    }

    if (geometry.type === 'Polygon') {
        return geometry.coordinates.map(drawRing).join(' ')
    } else if (geometry.type === 'MultiPolygon') {
        return geometry.coordinates.map(poly => poly.map(drawRing).join(' ')).join(' ')
    }
    return ''
}


export const Maps = ({
  data,
  type = 'choropleth',
  valueKey = 'value',
  width = 600,
  height = 400,
  color = '$primary',
  isLoading = false,
  error = null,
  headerContent,
}: MapsProps) => {
  const theme = useTheme()
  const themeColor = theme[color as keyof typeof theme]

  const { paths, circles } = useMemo(() => {
    if (!data || !data.features) return { paths: [], circles: [] }

    const bounds = getBounds(data.features)

    // Choropleth logic: Map value to color intensity
    const values = data.features.map(f => f.properties[valueKey]).filter(v => typeof v === 'number')
    const maxVal = Math.max(...values) || 1
    const minVal = Math.min(...values) || 0

    const paths = data.features.map(f => {
        const d = geoPath(f, width, height, bounds)
        let fill = theme.background?.get() || '#eee'

        if (type === 'choropleth') {
            const val = f.properties[valueKey]
            if (typeof val === 'number') {
                const intensity = (val - minVal) / (maxVal - minVal)
                // Simple opacity based blue
                fill = `rgba(59, 130, 246, ${0.2 + 0.8 * intensity})`
            }
        } else {
            // Dot density uses base map
            fill = '#e5e7eb'
        }

        return { d, fill, feature: f }
    })

    const circles = []
    if (type === 'dotDensity') {
        // Randomly distribute dots inside polygons or use centroids?
        // True dot density requires placing dots randomly inside the polygon proportional to value.
        // For simplicity, we'll place one circle at the centroid with size proportional to value.
        // Or multiple dots.

        data.features.forEach(f => {
             // Calculate approximate centroid
             const coords = f.geometry.type === 'Polygon' ? f.geometry.coordinates[0] : f.geometry.coordinates[0][0]
             let sumX = 0, sumY = 0, count = 0
             coords.forEach(pt => {
                 sumX += pt[0]
                 sumY += pt[1]
                 count++
             })
             const cx = sumX / count
             const cy = sumY / count
             const [x, y] = project(cx, cy, width, height, bounds)

             const val = f.properties[valueKey]
             if (val) {
                 circles.push({
                     cx: x,
                     cy: y,
                     r: Math.sqrt(val) / 2, // scale size
                     fill: theme.red9?.get() || '#ef4444'
                 })
             }
        })
    }

    return { paths, circles }
  }, [data, width, height, type, valueKey, theme])

  const renderContent = () => {
    if (isLoading) {
      return <Skeleton height={height} width="100%" />
    }

    if (error) {
      return (
        <YStack flex={1} justifyContent="center" alignItems="center" gap="$2" height={height}>
          <AlertTriangle color="$red10" />
          <Text color="$red10">Ocorreu um erro ao carregar os dados.</Text>
        </YStack>
      )
    }

    if (!data) {
        return (
          <YStack flex={1} justifyContent="center" alignItems="center" gap="$2" height={height}>
            <Map color="$gray10" />
            <Text>Não há dados para exibir.</Text>
          </YStack>
        )
      }

    return (
        <Svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <G>
                {paths.map((p, i) => (
                    <Path
                        key={i}
                        d={p.d}
                        fill={p.fill}
                        stroke={theme.background?.get() || 'white'}
                        strokeWidth={0.5}
                    />
                ))}

                {circles.map((c, i) => (
                    <Circle
                        key={`c-${i}`}
                        cx={c.cx}
                        cy={c.cy}
                        r={c.r}
                        fill={c.fill}
                        opacity={0.6}
                    />
                ))}
            </G>
        </Svg>
    )
  }

  return (
    <YStack width="100%" gap="$4" paddingHorizontal="$4">
      {headerContent}
      {renderContent()}
    </YStack>
  )
}

