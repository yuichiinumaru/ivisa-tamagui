import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';
import { Sidebar, SidebarProps } from './Sidebar';
import { YStack, Text, Avatar, XStack } from 'tamagui';
import { Button } from '../../atoms/Button';
import { Home, MessageSquare, Globe, Settings, LogOut } from '@tamagui/lucide-icons';

// Interface para garantir tipagem dos itens de menu
interface NavItemData {
  label: string;
  icon: React.ElementType;
  onPress?: () => void;
}

const mockNavItems: NavItemData[] = [
  { label: 'Dashboard', icon: Home },
  { label: 'Mensagens', icon: MessageSquare },
  { label: 'Explorar', icon: Globe },
];

const mockSettingsItems: NavItemData[] = [
  { label: 'Configurações', icon: Settings },
  { label: 'Sair', icon: LogOut },
];

const mockUserProfile = {
  name: 'Chica da Silva',
  email: 'chica.silva@ivisa.gov.br',
  avatarUrl: 'https://i.pravatar.cc/150?u=adriana',
};

const meta: Meta<SidebarProps> = {
  title: 'Organismos/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['collapsible', 'fixed', 'floating'],
    },
    isCollapsed: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    isEmpty: { control: 'boolean' },
    error: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<SidebarProps>;

// --- Componentes Auxiliares da Story ---

const NavMenu = ({ items, collapsed }: { items: NavItemData[]; collapsed?: boolean }) => (
  <YStack gap="$2">
    {items.map((item) => (
      <Button
        key={item.label}
        chromeless
        justifyContent={collapsed ? "center" : "flex-start"}
        paddingHorizontal={collapsed ? 0 : "$3"}
      >
        <XStack gap="$3" alignItems="center">
          <item.icon size={18} color="$gray11" />
          {!collapsed && <Text color="$gray12" fontWeight="500">{item.label}</Text>}
        </XStack>
      </Button>
    ))}
  </YStack>
);

const UserProfileSection = ({ user, collapsed }: { user: typeof mockUserProfile; collapsed?: boolean }) => (
  <XStack
    alignItems="center"
    gap="$3"
    paddingVertical="$2"
    paddingHorizontal={collapsed ? 0 : "$2"}
    justifyContent={collapsed ? "center" : "flex-start"}
  >
    <Avatar circular size="$3">
      <Avatar.Image src={user.avatarUrl} />
      <Avatar.Fallback backgroundColor="$gray5" />
    </Avatar>
    {!collapsed && (
      <YStack flex={1}>
        <Text fontWeight="bold" fontSize="$3" color="$color" numberOfLines={1}>
          {user.name}
        </Text>
        <Text fontSize="$1" color="$gray11" numberOfLines={1}>
          {user.email}
        </Text>
      </YStack>
    )}
  </XStack>
);

// --- Stories ---

export const GoldenPath: Story = {
  name: 'Golden Path (Default)',
  args: {
    variant: 'collapsible',
    isCollapsed: false,
    isLoading: false,
    isEmpty: false,
  },
  render: (args) => {
    const [collapsed, setCollapsed] = useState(args.isCollapsed);

    useEffect(() => {
      setCollapsed(args.isCollapsed);
    }, [args.isCollapsed]);

    return (
      <XStack height={600} backgroundColor="$background">
        <Sidebar 
          {...args} 
          isCollapsed={collapsed}
          onCollapsedChange={setCollapsed}
          header={
            <YStack paddingVertical="$2" alignItems={collapsed ? 'center' : 'flex-start'}>
              <Text fontSize="$5" fontWeight="900" color="$blue10">
                {collapsed ? 'IV' : 'IVISA'}
              </Text>
            </YStack>
          } 
          footer={<UserProfileSection user={mockUserProfile} collapsed={collapsed} />}
        >
          <NavMenu items={mockNavItems} collapsed={collapsed} />
          <YStack flex={1} minHeight={20} />
          <NavMenu items={mockSettingsItems} collapsed={collapsed} />
        </Sidebar>
        
        <YStack flex={1} padding="$4" backgroundColor="$gray1" justifyContent="center" alignItems="center">
          <Text color="$gray8">Conteúdo Principal da Aplicação</Text>
        </YStack>
      </XStack>
    );
  },
};

export const Carregando: Story = {
  name: 'Estado: Carregando',
  args: { ...GoldenPath.args, isLoading: true },
  render: GoldenPath.render,
};

export const Empty: Story = {
  name: 'Estado: Vazio',
  args: { ...GoldenPath.args, isEmpty: true, emptyMessage: 'Nenhum item encontrado.' },
  render: GoldenPath.render,
};

export const Erro: Story = {
  name: 'Estado: Erro',
  args: { ...GoldenPath.args, error: 'Erro ao carregar menu lateral.' },
  render: GoldenPath.render,
};