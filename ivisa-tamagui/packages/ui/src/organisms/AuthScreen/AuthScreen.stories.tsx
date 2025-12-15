import type { Meta, StoryObj } from '@storybook/react';
import { AuthScreen } from './AuthScreen';

const meta: Meta<typeof AuthScreen> = {
  title: 'Organisms/AuthScreen',
  component: AuthScreen,
  tags: ['autodocs'],
  argTypes: {
    onLogin: { action: 'login' },
    onRegister: { action: 'register' },
    onForgotPassword: { action: 'forgot password' },
  },
};

export default meta;
type Story = StoryObj<typeof AuthScreen>;

export const Login: Story = {
  args: {
    title: 'Welcome Back',
    subtitle: 'Enter your credentials to access your account',
    logo: 'https://i.pravatar.cc/150?u=tamagui',
  },
};

export const Register: Story = {
  args: {
    defaultView: 'register',
    logo: 'https://i.pravatar.cc/150?u=tamagui',
  },
};

export const WithSocial: Story = {
  args: {
    title: 'Sign In',
    socialProviders: [
      { name: 'Google', onClick: () => console.log('Google') },
      { name: 'GitHub', onClick: () => console.log('GitHub') },
    ]
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
