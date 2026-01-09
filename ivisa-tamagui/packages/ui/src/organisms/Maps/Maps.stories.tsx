
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Maps, GeoJSON } from './Maps'


const meta: Meta<React.ComponentProps<typeof Maps>> = {
  title: 'Organismos/Gráficos/Maps',
  component: Maps,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<React.ComponentProps<typeof Maps>>

// Simple Box Polygon
const sampleData: GeoJSON = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
            [[0, 0], [0, 10], [10, 10], [10, 0], [0, 0]]
        ]
      },
      properties: { name: 'Region A', value: 100 }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
            [[10, 0], [10, 10], [20, 10], [20, 0], [10, 0]]
        ]
      },
      properties: { name: 'Region B', value: 50 }
    },
     {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
            [[0, 10], [0, 20], [10, 20], [10, 10], [0, 10]]
        ]
      },
      properties: { name: 'Region C', value: 200 }
    },
     {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [
            [[10, 10], [10, 20], [20, 20], [20, 10], [10, 10]]
        ]
      },
      properties: { name: 'Region D', value: 150 }
    }
  ]
}

export const Choropleth: Story = {
  args: {
    data: sampleData,
    type: 'choropleth',
    width: 600,
    height: 400,
  },
}

export const DotDensity: Story = {
  args: {
    data: sampleData,
    type: 'dotDensity',
    width: 600,
    height: 400,
  },
}

export const Carregando: Story = {
  args: {
    data: sampleData,
    isLoading: true,
  },
}
