// @ts-nocheck
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Layout } from './Layout'
import { mockNavItems, mockSettingsItems, mockUserProfile } from '../../mocks/sidebar'
import { YStack, Text } from 'tamagui'

const meta: Meta = {
  title: 'Organismos/Layout',
  component: Layout,
  parameters: { layout: 'fullscreen' },
}

export default meta

type Story = StoryObj<typeof Layout>

export const GoldenPath: Story = {
  render: () => (
    <Layout
      navbarProps={{
        logo: <Text fontWeight="800">ACME</Text>,
        center: <Text>Pesquisa / Ações</Text>,
        user: { name: 'Jules', role: 'Engenheiro', avatarUrl: '' },
      }}
      sidebarProps={{
        variant: 'collapsible',
        header: <Text fontSize="$5" fontWeight="800">ACME</Text>,
        footer: undefined,
        children: (
          <>
            {/* Use mocks from sidebar mocks */}
          </>
        ),
      }}
    >
      <YStack>
        <Text fontSize="$6">Página Principal</Text>
        <Text>Conteúdo reutilizável de tela.</Text>
      </YStack>
    </Layout>
  ),
}
