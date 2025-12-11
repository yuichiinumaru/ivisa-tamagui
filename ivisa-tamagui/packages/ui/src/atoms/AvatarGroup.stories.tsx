import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

const meta: Meta<typeof AvatarGroup> = {
  title: 'Átomos/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Um componente para empilhar e agrupar múltiplos avatares.',
      },
      source: {
        code: `
<AvatarGroup max={3}>
  <Avatar>
    <Avatar.Image src="https://github.com/user1.png" accessibilityLabel="User 1" />
    <Avatar.Fallback>U1</Avatar.Fallback>
  </Avatar>
  <Avatar>
    <Avatar.Image src="https://github.com/user2.png" accessibilityLabel="User 2" />
    <Avatar.Fallback>U2</Avatar.Fallback>
  </Avatar>
</AvatarGroup>
        `,
        language: 'tsx',
      },
    },
  },
  argTypes: {
    max: {
      name: 'Máximo de Avatares',
      control: { type: 'number' },
      description: 'O número máximo de avatares a serem exibidos antes de mostrar o indicador "+N".',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Padrao: Story = {
  name: 'Padrão',
  args: {
    max: 3,
  },
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar>
        <Avatar.Image src="https://github.com/ivisa.png" accessibilityLabel="Usuário 1" />
        <Avatar.Fallback>U1</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Image src="https://github.com/tamagui.png" accessibilityLabel="Usuário 2" />
        <Avatar.Fallback>U2</Avatar.Fallback>
      </Avatar>
       <Avatar>
        <Avatar.Image src="https://github.com/git.png" accessibilityLabel="Usuário 3" />
        <Avatar.Fallback>U3</Avatar.Fallback>
      </Avatar>
    </AvatarGroup>
  ),
};

export const ComMaisAvatares: Story = {
  name: 'Com Indicador "+N"',
  args: {
    max: 2,
  },
  render: (args) => (
    <AvatarGroup {...args}>
      <Avatar>
        <Avatar.Image src="https://github.com/ivisa.png" accessibilityLabel="Usuário 1" />
        <Avatar.Fallback>U1</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Image src="https://github.com/tamagui.png" accessibilityLabel="Usuário 2" />
        <Avatar.Fallback>U2</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Image src="https://github.com/git.png" accessibilityLabel="Usuário 3" />
        <Avatar.Fallback>U3</Avatar.Fallback>
      </Avatar>
      <Avatar>
        <Avatar.Image src="https://github.com/vercel.png" accessibilityLabel="Usuário 4" />
        <Avatar.Fallback>U4</Avatar.Fallback>
      </Avatar>
    </AvatarGroup>
  ),
};
