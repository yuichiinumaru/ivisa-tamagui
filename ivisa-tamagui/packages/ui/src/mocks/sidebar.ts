// @ts-nocheck
import { Home, BarChart2, Users, Settings, LifeBuoy } from '@tamagui/lucide-icons';

export interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
  href: string;
}

export const mockNavItems: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Painel',
    icon: Home,
    href: '/dashboard',
  },
  {
    id: 'analytics',
    label: 'Análises',
    icon: BarChart2,
    href: '/analytics',
  },
  {
    id: 'customers',
    label: 'Clientes',
    icon: Users,
    href: '/customers',
  },
];

export const mockSettingsItems: NavItem[] = [
  {
    id: 'settings',
    label: 'Configurações',
    icon: Settings,
    href: '/settings',
  },
  {
    id: 'support',
    label: 'Suporte',
    icon: LifeBuoy,
    href: '/support',
  },
];

export const mockUserProfile = {
  name: 'Júlia Alves',
  email: 'julia.alves@example.com',
  avatarUrl: 'https://i.pravatar.cc/40?u=a042581f4e29026704d',
};
