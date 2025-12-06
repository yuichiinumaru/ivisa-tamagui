import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import { Checkbox } from '../../atoms/Checkbox'
import { Select } from '../../molecules/Select'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './Form'
import { YStack, H3 } from 'tamagui'

const meta: Meta = {
  title: 'Organisms/Form',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

// 1. Login Form Example
const loginSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
})

const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    // @ts-expect-error - zod version mismatch workaround
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <YStack width={350} padding="$md" borderWidth={1} borderColor="$borderColor" borderRadius="$md" gap="$md">
      <H3>Login</H3>
      <Form {...form}>
        <YStack gap="$md">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <YStack gap="$md">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input secureTextEntry placeholder="******" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button>Submit</Button>
            </YStack>
          </form>
        </YStack>
      </Form>
    </YStack>
  )
}

export const Login: StoryObj = {
  render: () => <LoginForm />
}

// 2. Full Profile Form Example (Select, Checkbox)
const profileSchema = z.object({
  email: z.string().email(),
  role: z.string().min(1, "Please select a role."),
  marketing: z.boolean().default(false).optional(),
})

const ProfileForm = () => {
  const form = useForm<z.infer<typeof profileSchema>>({
    // @ts-expect-error - zod version mismatch workaround
    resolver: zodResolver(profileSchema),
    defaultValues: {
      email: "",
      marketing: true,
    },
  })

  function onSubmit(values: z.infer<typeof profileSchema>) {
    alert(JSON.stringify(values, null, 2))
  }

  const roles = [
    { value: 'admin', label: 'Administrator' },
    { value: 'user', label: 'User' },
    { value: 'guest', label: 'Guest' },
  ]

  return (
    <YStack width={400} padding="$md" borderWidth={1} borderColor="$borderColor" borderRadius="$md" gap="$md">
      <H3>Create Profile</H3>
      <Form {...form}>
        <YStack gap="$md">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <YStack gap="$md">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="m@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      items={roles}
                      placeholder="Select a role"
                      value={field.value}
                      onValueChange={field.onChange}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="marketing"
                render={({ field }) => (
                  <FormItem>
                    <YStack flexDirection="row" alignItems="center" gap="$md" paddingVertical="$sm">
                      <FormControl>
                        <Checkbox
                          id="marketing"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <YStack gap="$xs">
                        <FormLabel htmlFor="marketing" style={{ marginBottom: 0 }}>
                          Marketing emails
                        </FormLabel>
                        <FormDescription>
                          Receive emails about new features.
                        </FormDescription>
                      </YStack>
                    </YStack>
                  </FormItem>
                )}
              />

              <Button>Save Profile</Button>
            </YStack>
          </form>
        </YStack>
      </Form>
    </YStack>
  )
}

export const Complex: StoryObj = {
  render: () => <ProfileForm />
}
