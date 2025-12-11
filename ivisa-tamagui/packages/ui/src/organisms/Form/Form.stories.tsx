import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { YStack, H3 } from 'tamagui'
import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import { Checkbox } from '../../atoms/Checkbox'
import { Select } from '../../molecules/Select'
import { Skeleton } from '../../atoms/Skeleton'
import { Alert } from '../../atoms/Alert';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormRoot,
  FormFooter,
} from './Form'

const meta: Meta = {
  title: 'Organisms/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

// --- Schema Definition ---
const profileSchema = z.object({
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  role: z.string().min(1, 'Por favor, selecione um cargo.'),
  marketing: z.boolean().default(false).optional(),
})

type ProfileFormValues = z.infer<typeof profileSchema>

// --- Reusable Organism Component ---
interface ProfileFormProps {
  isLoading?: boolean
  error?: string | null
  onSubmit: (values: ProfileFormValues) => void
  footer: React.ReactNode
}

const ProfileForm = ({ isLoading, error, onSubmit, footer }: ProfileFormProps) => {
  const form = useForm<ProfileFormValues>({
    // @ts-expect-error - zod version mismatch workaround
    resolver: zodResolver(profileSchema),
    defaultValues: {
      email: '',
      role: undefined,
      marketing: true,
    },
  })

  const roles = [
    { value: 'admin', label: 'Administrador' },
    { value: 'user', label: 'Usuário' },
    { value: 'guest', label: 'Convidado' },
  ]

  return (
    <YStack width={400} padding="$4" borderWidth={1} borderColor="$borderColor" borderRadius="$lg">
      <H3>Criar Perfil</H3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <YStack gap="$4">
            <FormRoot>
              {/* Loading State */}
              {isLoading ? (
                <YStack gap="$4">
                  <YStack gap="$2">
                    <Skeleton height={20} width={100} />
                    <Skeleton height={40} />
                  </YStack>
                  <YStack gap="$2">
                    <Skeleton height={20} width={80} />
                    <Skeleton height={40} />
                  </YStack>
                  <YStack gap="$2" flexDirection="row" alignItems="center">
                    <Skeleton height={24} width={24} />
                    <Skeleton height={20} width={200} />
                  </YStack>
                </YStack>
              ) : (
                <>
                  {/* Error State */}
                  {error && (
                    <Alert
                      variant="destructive"
                      title="Ocorreu um erro"
                      message={error}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="seu@email.com" {...field} />
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
                        <FormLabel>Cargo</FormLabel>
                        <Select
                          items={roles}
                          placeholder="Selecione um cargo"
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
                        <YStack flexDirection="row" alignItems="center" gap="$2" paddingTop="$2">
                          <FormControl>
                            <Checkbox
                              id="marketing"
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <YStack gap="$1">
                            <FormLabel htmlFor="marketing" style={{ marginBottom: 0 }}>
                              Emails de marketing
                            </FormLabel>
                            <FormDescription>
                              Receba emails sobre novos produtos e recursos.
                            </FormDescription>
                          </YStack>
                        </YStack>
                      </FormItem>
                    )}
                  />
                </>
              )}
            </FormRoot>
            {footer}
          </YStack>
        </form>
      </Form>
    </YStack>
  )
}

// --- Stories ---
const Template: StoryObj<ProfileFormProps> = {
  render: (args) => <ProfileForm {...args} />,
}

export const Completo = {
  ...Template,
  args: {
    isLoading: false,
    error: null,
    onSubmit: (values: ProfileFormValues) => {
      alert(JSON.stringify(values, null, 2))
    },
    footer: (
      <FormFooter>
        <Button variant="outline">Cancelar</Button>
        <Button>Salvar Perfil</Button>
      </FormFooter>
    ),
  },
}

export const Carregando = {
  ...Template,
  args: {
    ...Completo.args,
    isLoading: true,
    footer: (
      <FormFooter>
        <Button variant="outline" disabled>Cancelar</Button>
        <Button disabled>Salvando...</Button>
      </FormFooter>
    ),
  },
}

export const ComErro = {
  ...Template,
  args: {
    ...Completo.args,
    error: 'Ocorreu um erro ao enviar o formulário. Tente novamente.',
  },
}

export const ConteinerEstreito = {
  ...Template,
  args: {
    ...Completo.args,
  },
  decorators: [
    (Story: any) => (
      <YStack width={320}>
        <Story />
      </YStack>
    ),
  ],
}
