// @ts-nocheck

import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { YStack, XStack, Paragraph } from 'tamagui'
import { DashboardShell } from './DashboardShell'
import { mockHeader, mockSidebar, mockContent } from './mocks'
import { Button } from '../../atoms/Button'
import { H2, H3, MutedText } from '../../atoms/Typography'
import { Avatar } from '../../atoms/Avatar'


const meta: Meta<React.ComponentProps<typeof DashboardShell>> = {
  title: 'Organismos/DashboardShell',
  component: DashboardShell,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    isLoading: { control: 'boolean' },
    hasError: { control: 'boolean' },
    isEmpty: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof DashboardShell>>

const renderSidebar = () => (
  <YStack gap="$4">
    <H3>Menu</H3>
    {mockSidebar.items.map((item) => (
      <Button key={item.id} variant="tertiary" justifyContent="flex-start">
        {item.label}
      </Button>
    ))}
  </YStack>
)

const renderHeader = () => (
  <XStack flex={1} justifyContent="space-between" alignItems="center">
    <H2>{mockHeader.title}</H2>
    <XStack gap="$3" alignItems="center">
      <Avatar>
        <Avatar.Image src={mockHeader.user.avatarUrl} />
        <Avatar.Fallback>{mockHeader.user.name.charAt(0)}</Avatar.Fallback>
      </Avatar>
      <YStack>
        <Paragraph fontWeight="bold">{mockHeader.user.name}</Paragraph>
        <MutedText>Admin</MutedText>
      </YStack>
    </XStack>
  </XStack>
)

const renderContent = () => (
  <YStack gap="$4">
    <H3>{mockContent.title}</H3>
    <XStack gap="$4" flexWrap="wrap">
      {mockContent.stats.map((stat) => (
        <YStack
          key={stat.id}
          flex={1}
          minWidth={200}
          padding="$4"
          borderRadius="$4"
          backgroundColor="$backgroundHover"
        >
          <MutedText>{stat.label}</MutedText>
          <Paragraph fontSize="$6" fontWeight="bold">
            {stat.value}
          </Paragraph>
        </YStack>
      ))}
    </XStack>
    <YStack gap="$2">
      <H3>Atividade Recente</H3>
      {mockContent.recentActivities.map((activity) => (
        <Paragraph key={activity.id}>- {activity.description}</Paragraph>
      ))}
    </YStack>
  </YStack>
)

export const Padrao: Story = {
  name: 'Padrão (Desktop)',
  args: {
    sidebar: renderSidebar(),
    header: renderHeader(),
    children: renderContent(),
  },
}

export const Mobile: Story = {
  name: 'Responsivo (Mobile)',
  args: {
    ...Padrao.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

export const Carregando: Story = {
  args: {
    ...Padrao.args,
    isLoading: true,
  },
}

export const Vazio: Story = {
  args: {
    ...Padrao.args,
    children: undefined,
    isEmpty: true,
    emptyStateTitle: 'Nenhum Projeto Criado',
    emptyStateMessage: 'Comece a criar um projeto para ver seus dados aqui.',
  },
}

export const ComErro: Story = {
  args: {
    ...Padrao.args,
    children: undefined,
    hasError: true,
    onRetry: () => alert('Retrying...'),
  },
}
