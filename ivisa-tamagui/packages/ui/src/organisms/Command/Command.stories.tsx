
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from './Command'
import { useState, useEffect } from 'react'
import { YStack, Text, Button } from 'tamagui'
import { MOCK_SUGESTOES, MOCK_CONFIGURACOES } from './mocks'
import { Search } from '@tamagui/lucide-icons'


const meta: Meta<React.ComponentProps<typeof Command>> = {
  title: 'Organismos/Command',
  component: Command,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <YStack width={400} borderWidth={1} borderColor="$borderColor" borderRadius="$md" overflow="hidden">
        <Story />
      </YStack>
    ),
  ],
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof Command>>

export const Padrao: Story = {
  render: () => (
    <Command>
      <CommandInput placeholder="Digite um comando ou pesquise..." />
      <CommandList>
        <CommandEmpty />
        <CommandGroup heading="Sugestões">
          {MOCK_SUGESTOES.map((item) => (
            <CommandItem key={item.id} onSelect={() => console.log(item.label)}>
              <Text>{item.label}</Text>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Configurações">
          {MOCK_CONFIGURACOES.map((item) => (
            <CommandItem key={item.id} onSelect={() => console.log(item.label)}>
              <Text>{item.label}</Text>
              <CommandShortcut>{item.shortcut}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const ComErro: Story = {
  render: () => (
    <Command>
      <CommandInput placeholder="Digite um comando ou pesquise..." />
      <CommandList error="Ocorreu um erro ao buscar os dados." />
    </Command>
  ),
}

export const Carregando: Story = {
  render: () => (
    <Command>
      <CommandInput placeholder="Digite um comando ou pesquise..." />
      <CommandList isLoading />
    </Command>
  ),
}

export const EstadoVazio: Story = {
  render: () => (
    <Command>
      <CommandInput placeholder="Digite um comando ou pesquise..." />
      <CommandList>
        <CommandEmpty title="Nenhum dado para mostrar." icon={<Search size="$5" />} />
      </CommandList>
    </Command>
  ),
}

export const ContainerLimitado: Story = {
  decorators: [
    (Story) => (
      <YStack width={300} borderWidth={1} borderColor="$borderColor" borderRadius="$md" overflow="hidden">
        <Story />
      </YStack>
    ),
  ],
  render: () => (
    <Command>
      <CommandInput placeholder="Digite um comando ou pesquise..." />
      <CommandList>
        <CommandEmpty />
        <CommandGroup heading="Sugestões">
          {MOCK_SUGESTOES.map((item) => (
            <CommandItem key={item.id} onSelect={() => console.log(item.label)}>
              <Text>{item.label}</Text>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Configurações">
          {MOCK_CONFIGURACOES.map((item) => (
            <CommandItem key={item.id} onSelect={() => console.log(item.label)}>
              <Text>{item.label}</Text>
              <CommandShortcut>{item.shortcut}</CommandShortcut>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const Dialogo = () => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  return (
    <YStack ai="center" jc="center" p="$4" gap="$4">
      <Text fontSize="$md" color="$color11">
        Pressione{' '}
        <Text fontWeight="bold" fontSize="$md">
          ⌘K
        </Text>{' '}
        para abrir o diálogo de comando.
      </Text>
      <Text fontSize="$sm" color="$color10">
        (Ou clique no botão abaixo)
      </Text>
      <Button onPress={() => setOpen(true)}>Abrir Diálogo</Button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Digite um comando ou pesquise..." />
        <CommandList>
          <CommandEmpty />
          <CommandGroup heading="Sugestões">
            {MOCK_SUGESTOES.map((item) => (
              <CommandItem key={item.id}>
                <Text>{item.label}</Text>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </YStack>
  )
}

export type DialogoProps = React.ComponentProps<typeof Dialogo>
