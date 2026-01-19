
import type React from 'react';
import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardFooter, CardHeader } from '../../molecules/Card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './Carousel'
import { CAROUSEL_MOCK_DATA, CarouselCardData } from '../../mocks/carousel'
import { Image, Paragraph, Text, View, YStack } from 'tamagui'


// --- Storybook Setup ---------------------------------------------------------

const meta: Meta<React.ComponentProps<typeof Carousel>> = {
  title: 'Organismos/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: { type: 'radio' },
      options: ['horizontal', 'vertical'],
    },
    isLoading: { control: { type: 'boolean' } },
  },
}

export default meta
type Story = StoryObj<React.ComponentProps<typeof Carousel>>

// --- Helper Components -------------------------------------------------------

const CarouselCard = ({ title, subtitle, imageUrl }: CarouselCardData) => (
  <Card overflow="hidden" width="100%" height={250}>
    <CardHeader p={0}>
      <Image
        source={{ uri: imageUrl, width: 300, height: 150 }}
        style={{ width: '100%', height: 150 }}
        alt={title}
      />
    </CardHeader>
    <CardFooter p="$3">
      <YStack>
        <Text fontWeight="bold">{title}</Text>
        <Paragraph theme="alt1">{subtitle}</Paragraph>
      </YStack>
    </CardFooter>
  </Card>
)

// --- Stories -----------------------------------------------------------------

const renderItem = (item: CarouselCardData) => (
  <CarouselItem flexBasis="33.33%">
    <View padding="$2">
      <CarouselCard {...item} />
    </View>
  </CarouselItem>
)

export const ComDados: Story = {
  name: 'Golden Path (Com Dados)',
  args: {
    data: CAROUSEL_MOCK_DATA,
    opts: {
      align: 'start',
      loop: true,
    },
  },
  render: (args) => (
    <View width={800} padding="$4">
      <Carousel {...args}>
        <CarouselContent renderItem={renderItem} />
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </View>
  ),
}

export const Carregando: Story = {
  name: 'Estado de Carregamento',
  args: {
    ...ComDados.args,
    isLoading: true,
  },
  render: ComDados.render,
}

export const Vazio: Story = {
  name: 'Estado Vazio',
  args: {
    ...ComDados.args,
    data: [], // Override with empty data
  },
  render: ComDados.render,
}

export const ComErro: Story = {
  name: 'Estado de Erro',
  args: {
    ...ComDados.args,
    data: [], // No data to show
    error: 'Ocorreu um erro ao carregar os itens. Por favor, tente novamente.',
  },
  render: ComDados.render,
}

export const EstresseDeLayout: Story = {
  name: 'Estresse de Layout (Container Estreito)',
  args: {
    ...ComDados.args,
  },
  render: (args) => (
    <View width={350} padding="$4" borderColor="$borderColor" borderWidth={1} borderRadius="$4">
      <Carousel {...args}>
        <CarouselContent
          renderItem={(item) => (
            <CarouselItem flexBasis="100%">
              <View padding="$2">
                <CarouselCard {...item} />
              </View>
            </CarouselItem>
          )}
        />
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </View>
  ),
}

export const Vertical: Story = {
  name: 'Orientação Vertical',
  args: {
    ...ComDados.args,
    orientation: 'vertical',
  },
  render: (args) => (
    <View width={400} height={500} padding="$4">
      <Carousel {...args}>
        <CarouselContent
          renderItem={(item) => (
            <CarouselItem flexBasis="50%">
              <View padding="$2">
                <CarouselCard {...item} />
              </View>
            </CarouselItem>
          )}
        />
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </View>
  ),
}

export type CarouselCardProps = React.ComponentProps<typeof CarouselCard>

