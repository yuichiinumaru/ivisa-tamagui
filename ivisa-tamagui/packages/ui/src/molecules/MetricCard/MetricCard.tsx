import { styled, Card, GetProps, H4, Text, XStack, YStack } from 'tamagui'

export const MetricCardFrame = styled(Card, {
  name: 'MetricCard',
  padded: true,
  bordered: true,
  width: 300,
})

export type MetricCardProps = GetProps<typeof MetricCardFrame> & {
  title: string
  value: string
  trend?: 'up' | 'down' | 'neutral'
}

export const MetricCard = MetricCardFrame.styleable<MetricCardProps>((props, ref) => {
  const { title, value, trend, ...rest } = props
  return (
    <MetricCardFrame ref={ref} {...rest}>
      <Card.Header padded>
        <H4>{title}</H4>
      </Card.Header>
      <Card.Footer padded>
        <YStack>
          <Text fontSize="$8" fontWeight="bold">{value}</Text>
          {trend && <Text theme={trend === 'up' ? 'green' : trend === 'down' ? 'red' : 'gray'}>{trend}</Text>}
        </YStack>
      </Card.Footer>
    </MetricCardFrame>
  )
})

export default MetricCard
