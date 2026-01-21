import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Navbar } from './Navbar';
import { YStack, Text, Button } from 'tamagui';
import { mockUserProfile } from '../../mocks/sidebar';
import { Logo } from '../../atoms/Logo/Logo';

const meta: Meta<React.ComponentProps<typeof Navbar>> = {
  title: 'Organismos/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Navbar padrão da aplicação: logo, area central configurável e usuário.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<React.ComponentProps<typeof meta>>;

export const GoldenPath: Story = {
  name: 'Navbar Padrão',
  // Avoid serializing complex React nodes into args (Storybook warns about circular structures).
  args: {},
  render: () => (
    <div style={{ height: 80 }}>
      <Navbar
        logo={<Logo variant="full" />}
        center={(
          <YStack flexDirection="row" gap="$2">
            <Button chromeless>Dashboard</Button>
            <Button chromeless>Análises</Button>
          </YStack>
        )}
        actions={(
          <YStack>
            <Text>Notificações</Text>
          </YStack>
        )}
        user={mockUserProfile}
      />
    </div>
  ),
};

