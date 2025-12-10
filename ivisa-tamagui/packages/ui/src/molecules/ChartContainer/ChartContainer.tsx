import { styled, Card, GetProps, H4 } from 'tamagui'

export const ChartContainerFrame = styled(Card, {
  name: 'ChartContainer',
  padded: true,
  bordered: true,
  minHeight: 300,
})

export type ChartContainerProps = GetProps<typeof ChartContainerFrame> & {
  title: string
}

export const ChartContainer = ChartContainerFrame.styleable<ChartContainerProps>((props, ref) => {
  const { title, children, ...rest } = props
  return (
    <ChartContainerFrame ref={ref} {...rest}>
      <Card.Header padded>
        <H4>{title}</H4>
      </Card.Header>
      <Card.Footer padded>
          {children}
      </Card.Footer>
    </ChartContainerFrame>
  )
})

export default ChartContainer
