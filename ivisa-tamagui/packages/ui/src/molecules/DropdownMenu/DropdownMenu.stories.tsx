import type { Meta, StoryObj } from '@storybook/react'
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from '@tamagui/lucide-icons'
import { Button, Text } from 'tamagui'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './DropdownMenu'

const meta: Meta<typeof DropdownMenu> = {
  title: 'Moléculas/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
### Uso
Exibe um menu para o usuário, acionado por um botão.

### Comportamento
- Navegável via teclado.
- Suporta submenus aninhados.
- Itens podem ter atalhos, ícones e estados (disabled).
`,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Padrao: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Abrir Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent width={200}>
        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User size={16} style={{ marginRight: 8 }} />
            <Text>Perfil</Text>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard size={16} style={{ marginRight: 8 }} />
            <Text>Pagamento</Text>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings size={16} style={{ marginRight: 8 }} />
            <Text>Configurações</Text>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Keyboard size={16} style={{ marginRight: 8 }} />
            <Text>Atalhos</Text>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Users size={16} style={{ marginRight: 8 }} />
            <Text>Time</Text>
          </DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <UserPlus size={16} style={{ marginRight: 8 }} />
              <Text>Convidar</Text>
            </DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>
                  <Mail size={16} style={{ marginRight: 8 }} />
                  <Text>Email</Text>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <MessageSquare size={16} style={{ marginRight: 8 }} />
                  <Text>Mensagem</Text>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <PlusCircle size={16} style={{ marginRight: 8 }} />
                  <Text>Mais...</Text>
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            <Plus size={16} style={{ marginRight: 8 }} />
            <Text>Novo Time</Text>
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Github size={16} style={{ marginRight: 8 }} />
          <Text>GitHub</Text>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LifeBuoy size={16} style={{ marginRight: 8 }} />
          <Text>Suporte</Text>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <Cloud size={16} style={{ marginRight: 8 }} />
          <Text>API (Desativado)</Text>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut size={16} style={{ marginRight: 8 }} />
          <Text>Sair</Text>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
}
