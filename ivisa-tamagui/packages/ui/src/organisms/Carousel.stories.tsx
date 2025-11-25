import type { Meta, StoryObj } from '@storybook/react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './Carousel'
import { Card, CardContent } from '../molecules/Card'
import { Text, View } from 'tamagui'

const meta: Meta<typeof Carousel> = {
  title: 'Organisms/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Carousel>

export const Default: Story = {
  render: () => (
    <View width={400} padding="$4">
      <Carousel>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <View padding="$1">
                <Card>
                  <CardContent alignItems="center" justifyContent="center" padding="$6">
                    <Text fontSize="$9" fontWeight="bold">{index + 1}</Text>
                  </CardContent>
                </Card>
              </View>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </View>
  ),
}

export const Sizes: Story = {
  render: () => (
    <View width={600} padding="$4">
      <Carousel
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} flexBasis="33%">
              <View padding="$1">
                <Card>
                  <CardContent alignItems="center" justifyContent="center" padding="$6">
                    <Text fontSize="$9" fontWeight="bold">{index + 1}</Text>
                  </CardContent>
                </Card>
              </View>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </View>
  ),
}

export const Vertical: Story = {
  render: () => (
    <View width={400} padding="$4">
      <Carousel
        orientation="vertical"
        opts={{
            align: "start",
        }}
      >
        <CarouselContent height={200}>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} flexBasis="50%">
              <View padding="$1">
                <Card>
                  <CardContent alignItems="center" justifyContent="center" padding="$6">
                    <Text fontSize="$6" fontWeight="bold">{index + 1}</Text>
                  </CardContent>
                </Card>
              </View>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </View>
  ),
}
