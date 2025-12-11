import type { Meta, StoryObj } from '@storybook/react';
import { Label, YStack } from 'tamagui';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
  SelectSheet,
} from './Select';

const meta: Meta<typeof Select> = {
  title: 'Molecules/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Um componente de seleção que permite aos usuários escolher um valor de uma lista.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const frutas = [
  { value: 'apple', label: 'Maçã' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Mirtilo' },
  { value: 'grapes', label: 'Uvas' },
  { value: 'pineapple', label: 'Abacaxi' },
];

const renderSelect = (args: any) => (
  <Select>
    <SelectTrigger {...args}>
      <SelectValue placeholder="Selecione uma fruta..." />
    </SelectTrigger>

    <SelectSheet />

    <SelectContent>
      <SelectGroup>
        <Label>Frutas</Label>
        {frutas.map((fruta) => (
          <SelectItem value={fruta.value} key={fruta.value}>
            <SelectItemText>{fruta.label}</SelectItemText>
            <SelectItemIndicator />
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);

export const Padrao: Story = {
  name: 'Padrão',
  render: () => (
    <YStack width={200} gap="$2">
      <Label>Fruta Favorita</Label>
      {renderSelect({})}
    </YStack>
  ),
};

export const ComErro: Story = {
  name: 'Com Erro',
  render: () => (
    <YStack width={200} gap="$2">
      <Label>Fruta Favorita</Label>
      {renderSelect({ hasError: true })}
    </YStack>
  ),
};

export const Desabilitado: Story = {
  name: 'Desabilitado',
  render: () => (
    <YStack width={200} gap="$2">
      <Label>Fruta Favorita</Label>
      {renderSelect({ disabled: true })}
    </YStack>
  ),
};

export const EmContainerEstreito: Story = {
  name: 'Em Container Estreito',
  render: () => (
    <YStack width={120} gap="$2">
      <Label>Fruta Favorita</Label>
      {renderSelect({})}
    </YStack>
  ),
};

export const Carregando: Story = {
  name: 'Carregando',
  render: () => (
    <YStack width={200} gap="$2">
      <Label>Fruta Favorita</Label>
      {renderSelect({ isLoading: true })}
    </YStack>
  ),
};
