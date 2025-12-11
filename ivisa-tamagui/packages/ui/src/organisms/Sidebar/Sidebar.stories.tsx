import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Sidebar } from './Sidebar';
import { YStack, Text, Avatar } from 'tamagui';
import { mockNavItems, mockSettingsItems, mockUserProfile } from '../../mocks/sidebar';
import { Button } from '../../atoms/Button';

// --- Storybook Metadata ---
const meta: Meta<typeof Sidebar> = {
  title: 'Organisms/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
### Sidebar Organism
A resilient and composable sidebar component built with Tamagui.
- **Responsive:** Acts as a Sheet on mobile and a collapsible panel on desktop.
- **Stateful:** Handles loading, empty, and error states gracefully.
- **Composable:** Provides \`header\` and \`footer\` slots for custom content.
- **Accessible:** Uses semantic tags for better screen reader support.
`,
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['collapsible', 'fixed', 'floating'],
    },
    isCollapsed: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    isEmpty: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// --- Mock Components for Stories ---

const NavMenu = ({ items, collapsed }) => (
  <YStack gap="$2">
    {items.map((item) => (
      <Button
        key={item.id}
        icon={item.icon}
        justifyContent={collapsed ? 'center' : 'flex-start'}
        chromeless
        size="$4"
      >
        {!collapsed && <Text>{item.label}</Text>}
      </Button>
    ))}
  </YStack>
);

const UserProfile = ({ user, collapsed }) => (
  <YStack
    flexDirection={collapsed ? 'column' : 'row'}
    alignItems="center"
    gap="$3"
    paddingVertical="$2"
  >
    <Avatar circular size="$3">
      <Avatar.Image src={user.avatarUrl} />
      <Avatar.Fallback bc="$gray5" />
    </Avatar>
    {!collapsed && (
      <YStack flex={1}>
        <Text fontWeight="bold" fontSize="$3">
          {user.name}
        </Text>
        <Text fontSize="$2" color="$gray11" numberOfLines={1}>
          {user.email}
        </Text>
      </YStack>
    )}
  </YStack>
);

const renderSidebarContent = (isCollapsed = false) => (
  <>
    <NavMenu items={mockNavItems} collapsed={isCollapsed} />
    <YStack flex={1} />
    <NavMenu items={mockSettingsItems} collapsed={isCollapsed} />
  </>
);

const renderHeader = (isCollapsed = false) => (
  <YStack>
    <Text fontSize="$5" fontWeight="bold" textAlign={isCollapsed ? 'center' : 'left'}>
      {isCollapsed ? 'ACME' : 'ACME Corp'}
    </Text>
  </YStack>
);

const renderFooter = (isCollapsed = false) => (
  <UserProfile user={mockUserProfile} collapsed={isCollapsed} />
);

// --- Stories ---

export const GoldenPath: Story = {
  name: 'Golden Path (Default)',
  args: {
    variant: 'collapsible',
    header: renderHeader(false),
    footer: renderFooter(false),
    children: renderSidebarContent(false),
    isCollapsed: false,
    isLoading: false,
    isEmpty: false,
    error: '',
  },
  render: (args) => (
    <YStack height={600} flexDirection="row">
      <Sidebar {...args} header={renderHeader(args.isCollapsed)} footer={renderFooter(args.isCollapsed)} children={renderSidebarContent(args.isCollapsed)} />
      <YStack flex={1} padding="$4">
        <Text>Conteúdo Principal da Aplicação</Text>
      </YStack>
    </YStack>
  ),
};

export const Loading: Story = {
  args: {
    ...GoldenPath.args,
    isLoading: true,
  },
  render: GoldenPath.render,
};

export const Empty: Story = {
  name: 'Zero Data (Empty State)',
  args: {
    ...GoldenPath.args,
    isEmpty: true,
    emptyMessage: 'Nenhum item de navegação encontrado.',
    children: null, // No children when empty
  },
  render: GoldenPath.render,
};

export const Error: Story = {
  name: 'Error State',
  args: {
    ...GoldenPath.args,
    error: 'Falha ao carregar a navegação. Por favor, tente novamente mais tarde.',
    children: null, // No children on error
  },
  render: GoldenPath.render,
};

export const Floating: Story = {
    name: 'Floating Variant',
    args: {
      ...GoldenPath.args,
      variant: 'floating',
    },
    render: (args) => (
        <YStack height={600} flexDirection="row" position="relative">
          <Sidebar {...args} header={renderHeader(args.isCollapsed)} footer={renderFooter(args.isCollapsed)} children={renderSidebarContent(args.isCollapsed)} />
          <YStack flex={1} padding="$4" backgroundColor="$background">
            <Text>Conteúdo Principal da Aplicação</Text>
            <Text>O sidebar flutua sobre este conteúdo.</Text>
          </YStack>
        </YStack>
      ),
  };

export const LayoutStressTest: Story = {
  name: 'Layout Stress (Narrow Container)',
  render: (args) => (
    <YStack
      width={400}
      height={700}
      borderWidth={1}
      borderColor="$borderColor"
      flexDirection="row"
      overflow="hidden"
      mx="auto"
    >
      <Sidebar {...args} header={renderHeader(args.isCollapsed)} footer={renderFooter(args.isCollapsed)} children={renderSidebarContent(args.isCollapsed)} />
      <YStack flex={1} padding="$4">
        <Text>Conteúdo Principal</Text>
      </YStack>
    </YStack>
  ),
  args: {
    ...GoldenPath.args,
  },
};
