import { GetProps, styled, XStack } from 'tamagui'
import { MetricCard, MetricCardProps } from '../../molecules/MetricCard/MetricCard'
import { ReactNode } from 'react'
import { Alert } from '../../atoms/Alert'
import { Empty } from '../../molecules/Empty/Empty'
import { Skeleton } from '../../atoms/Skeleton'

export const KPIGridFrame = styled(XStack, {
  name: 'KPIGrid',
  tag: 'section',
  flexWrap: 'wrap',
  gap: '$4',
  width: '100%',
})

export type KPIGridProps = GetProps<typeof KPIGridFrame> & {
  data?: MetricCardProps[]
  isLoading?: boolean
  error?: ReactNode
}

export const KPIGrid = KPIGridFrame.styleable<KPIGridProps>((props, ref) => {
  const { data = [], isLoading, error, ...rest } = props

  if (error) {
    return <Alert message={error} />
  }

  if (isLoading) {
    return (
      <KPIGridFrame ref={ref} {...rest}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} flex={1} minWidth={250} height={150} />
        ))}
      </KPIGridFrame>
    )
  }

  if (data.length === 0) {
    return (
      <Empty
        title="Nenhum dado para exibir"
        message="Não há informações disponíveis no momento. Por favor, tente novamente mais tarde."
      />
    )
  }
  return (
    <KPIGridFrame ref={ref} {...rest}>
      {data.map((item, index) => (
        <MetricCard key={index} {...item} />
      ))}
    </KPIGridFrame>
  )
})

export default KPIGrid
