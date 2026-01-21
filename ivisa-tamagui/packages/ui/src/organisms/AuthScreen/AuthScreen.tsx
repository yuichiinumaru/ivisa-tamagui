// @ts-nocheck
import React, { useState } from 'react';
import { AuthScreenProps } from './AuthScreen.props';
import { YStack, XStack, Text, Image } from 'tamagui';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { Separator } from '../../atoms/Separator';
import { Spinner } from '../../atoms/Spinner';
import { Card } from '../../molecules/Card';

export const AuthScreen = ({
  logo,
  title,
  subtitle,
  onLogin,
  onRegister,
  onForgotPassword,
  socialProviders,
  isLoading,
  defaultView = 'login',
  error,
}: AuthScreenProps) => {
  const [view, setView] = useState<'login' | 'register' | 'forgot-password'>(defaultView);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (view === 'login' && onLogin) {
      onLogin({ email, password });
    } else if (view === 'register' && onRegister) {
      onRegister({ email, password, confirmPassword, name });
    } else if (view === 'forgot-password' && onForgotPassword) {
      onForgotPassword(email);
    }
  };

  return (
    <YStack f={1} alignItems="center" justifyContent="center" padding="$4" backgroundColor="$background">
      <Card width="100%" maxWidth={400} padding="$6" gap="$4" elevation="$2">
        {/* Header */}
        <YStack alignItems="center" gap="$2" marginBottom="$4">
          {typeof logo === 'string' ? (
            <Image source={{ uri: logo }} width={60} height={60} borderRadius="$2" />
          ) : (
            logo
          )}
          <Text fontSize="$6" fontWeight="bold">{title || (view === 'login' ? 'Welcome Back' : 'Create Account')}</Text>
          {subtitle && <Text color="$color10" textAlign="center">{subtitle}</Text>}
        </YStack>

        {/* Error */}
        {error && (
            <YStack backgroundColor="$red2" padding="$2" borderRadius="$2">
                <Text color="$red10">{error}</Text>
            </YStack>
        )}

        {/* Form */}
        <YStack gap="$3">
            {view === 'register' && (
                 <Input
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                 />
            )}
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          {view !== 'forgot-password' && (
            <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
          )}
          {view === 'register' && (
             <Input
                placeholder="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
             />
          )}

          {view === 'login' && onForgotPassword && (
            <Text
                fontSize="$2"
                color="$blue10"
                alignSelf="flex-end"
                onPress={() => setView('forgot-password')}
                cursor="pointer"
            >
                Forgot password?
            </Text>
          )}

          <Button
            themeInverse
            onPress={handleSubmit}
            disabled={isLoading}
            icon={isLoading ? <Spinner /> : undefined}
          >
            {view === 'login' ? 'Sign In' : view === 'register' ? 'Sign Up' : 'Reset Password'}
          </Button>
        </YStack>

        {/* Social Login */}
        {socialProviders && socialProviders.length > 0 && view === 'login' && (
          <YStack gap="$3" marginTop="$2">
            <XStack alignItems="center" gap="$2">
              <Separator />
              <Text fontSize="$2" color="$color10">Or continue with</Text>
              <Separator />
            </XStack>
            <XStack gap="$2" justifyContent="center">
              {socialProviders.map((provider) => (
                <Button
                    key={provider.name}
                    icon={provider.icon}
                    onPress={provider.onClick}
                    variant="outlined"
                >
                    {provider.name}
                </Button>
              ))}
            </XStack>
          </YStack>
        )}

        {/* Footer */}
        <YStack alignItems="center" marginTop="$4">
          {view === 'login' ? (
            <Text fontSize="$2" color="$color10">
              Don't have an account?{' '}
              <Text
                color="$blue10"
                fontWeight="bold"
                onPress={() => setView('register')}
                cursor="pointer"
              >
                Sign Up
              </Text>
            </Text>
          ) : (
            <Text fontSize="$2" color="$color10">
              Already have an account?{' '}
              <Text
                color="$blue10"
                fontWeight="bold"
                onPress={() => setView('login')}
                cursor="pointer"
              >
                Sign In
              </Text>
            </Text>
          )}
        </YStack>
      </Card>
    </YStack>
  );
};

export type AuthScreenProps = React.ComponentProps<typeof AuthScreen>
