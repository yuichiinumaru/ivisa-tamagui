import type { Meta, StoryObj } from '@storybook/react';
import { Label, YStack } from 'tamagui';
import {
  Select,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectSheet,
} from './Select';
import { SelectTriggerProps } from './Select';

const meta: Meta<SelectTriggerProps> = {
  title: 'Moléculas/Select',
  component: SelectTrigger, 
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isLoading: { control: 'boolean' },
    isError: { control: 'boolean' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<SelectTriggerProps>;

const frutas = [
  { value: 'apple', label: 'Maçã' },
  { value: 'banana', label: 'Banana' },
  { value: 'blueberry', label: 'Mirtilo' },
  { value: 'grapes', label: 'Uvas' },
  { value: 'pineapple', label: 'Abacaxi' },
];

const RenderSelect = (args: SelectTriggerProps) => (
  <Select>
    <SelectTrigger {...args}>
      <SelectValue placeholder="Selecione uma fruta..." />
    </SelectTrigger>

    <SelectSheet />

    <SelectContent>
      <SelectGroup>
        <Label>Frutas</Label>
        {frutas.map((fruta, i) => (
          <SelectItem 
            value={fruta.value} 
            key={fruta.value} 
            index={i} 
          >
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
  render: (args) => (
    <YStack width={200} gap="$2">
      <Label>Fruta Favorita</Label>
      <RenderSelect {...args} />
    </YStack>
  ),
  args: {
    disabled: false,
    isLoading: false,
    isError: false,
  },
};

export const ComErro: Story = {
  name: 'Com Erro',
  render: (args) => (
    <YStack width={200} gap="$2">
      <Label>Fruta Favorita</Label>
      <RenderSelect {...args} />
    </YStack>
  ),
  args: {
    isError: true,
    error: 'Campo obrigatório',
  },
};

export const Carregando: Story = {
  name: 'Carregando',
  render: (args) => (
    <YStack width={200} gap="$2">
      <Label>Fruta Favorita</Label>
      <RenderSelect {...args} />
    </YStack>
  ),
  args: {
    isLoading: true,
  },
};