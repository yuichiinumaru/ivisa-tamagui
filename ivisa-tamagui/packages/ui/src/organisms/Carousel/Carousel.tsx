// @ts-nocheck
import {
  ChevronLeft,
  ChevronRight,
  HelpCircle,
} from '@tamagui/lucide-icons'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'
import React, { useCallback, useEffect, useState } from 'react'
import { GetProps, StackProps, styled, Text, View, XStack, YStack } from 'tamagui'

import { Button } from '../../atoms/Button'
import { Skeleton } from '../../atoms/Skeleton'

// --- Carousel Core Hooks and Context -----------------------------------------

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

// Props for the main Carousel provider component
type CarouselProps<T> = {
  data?: T[]
  isLoading?: boolean
  error?: React.ReactNode
  emptyState?: React.ReactNode
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

// Props for the CarouselContent component, which handles rendering
type CarouselContentProps<T> = {
  renderItem: (item: T, index: number) => React.ReactNode
} & StackProps

// The shape of the context provided by the Carousel component
type CarouselContextProps<T> = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: CarouselApi
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
  orientation: 'horizontal' | 'vertical'
  data: T[]
  isLoading: boolean
  error: React.ReactNode
  emptyState: React.ReactNode
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CarouselContext = React.createContext<CarouselContextProps<any> | null>(null)

function useCarousel<T = unknown>() {
  const context = React.useContext<CarouselContextProps<T> | null>(CarouselContext)
  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }
  return context
}

// --- Styled Components -------------------------------------------------------

const CarouselFrame = styled(YStack, {
  name: 'CarouselFrame',
  position: 'relative',
  width: '100%',
})

const CarouselContentFrame = styled(XStack, {
  name: 'CarouselContent',
  // Negative margin is applied here to counteract item padding
})

const CarouselItemFrame = styled(YStack, {
  name: 'CarouselItem',
  minWidth: 0,
  flex: '0 0 100%',
  position: 'relative',
})

const CarouselNavButton = styled(Button, {
  name: 'CarouselNavButton',
  circular: true,
  size: '$4',
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  backgroundColor: '$background',
  opacity: 0.8,
  pressStyle: {
    backgroundColor: '$background',
    opacity: 1,
  },
  variants: {
    side: {
      prev: { left: '$2' },
      next: { right: '$2' },
    },
  } as const,
})

const StateContainer = styled(YStack, {
  name: 'StateContainer',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$4',
  padding: '$8',
  borderRadius: '$4',
  backgroundColor: '$background',
  borderWidth: 1,
  borderColor: '$borderColor',
  minHeight: 200,
})

// --- Carousel Components -----------------------------------------------------

const Carousel = <T,>({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  data = [],
  isLoading = false,
  error = null,
  emptyState = null,
  children,
  ...props
}: StackProps & CarouselProps<T>) => {
  const [carouselRef, api] = useEmblaCarousel(
    { ...opts, axis: orientation === 'horizontal' ? 'x' : 'y' },
    plugins
  )
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = useCallback(() => api?.scrollPrev(), [api])
  const scrollNext = useCallback(() => api?.scrollNext(), [api])

  useEffect(() => {
    if (!api) return
    if (setApi) setApi(api)
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)
    return () => {
      api.off('reInit', onSelect)
      api.off('select', onSelect)
    }
  }, [api, setApi, onSelect])

  const contextValue: CarouselContextProps<T> = {
    carouselRef,
    api,
    scrollPrev,
    scrollNext,
    canScrollPrev,
    canScrollNext,
    orientation,
    data,
    isLoading,
    error,
    emptyState,
  }

  return (
    <CarouselContext.Provider value={contextValue}>
      <CarouselFrame role="region" aria-roledescription="carousel" {...props}>
        {children}
      </CarouselFrame>
    </CarouselContext.Provider>
  )
}
Carousel.displayName = 'Carousel'

const CarouselContent = React.forwardRef(
  <T,>({ renderItem, ...props }: CarouselContentProps<T>, ref: React.Ref<HTMLDivElement>) => {
    const {
      carouselRef,
      orientation,
      data,
      isLoading,
      error,
      emptyState,
    } = useCarousel<T>()

    const renderChildren = () => {
      if (isLoading) {
        return (
          <XStack space="$2" width="100%" pl="$2">
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} flexBasis="33.33%">
                <YStack flex={1} space="$2">
                  <Skeleton height={150} />
                  <Skeleton height={20} />
                  <Skeleton height={20} width="75%" />
                </YStack>
              </CarouselItem>
            ))}
          </XStack>
        )
      }

      if (error) {
        return (
          <StateContainer>
            <HelpCircle size="$4" color="$red10" />
            <Text color="$red10" textAlign="center">{error}</Text>
          </StateContainer>
        )
      }

      if (!data || data.length === 0) {
        return (
          emptyState || (
            <StateContainer>
              <HelpCircle size="$4" color="$gray10" />
              <Text color="$gray10" textAlign="center">Nenhum item para exibir.</Text>
            </StateContainer>
          )
        )
      }

      return data.map((item, index) => renderItem(item, index))
    }

    return (
      <View ref={carouselRef} overflow="hidden">
        <CarouselContentFrame
          ref={ref}
          flexDirection={orientation === 'horizontal' ? 'row' : 'column'}
          marginLeft={orientation === 'horizontal' ? '-$2' : '$0'}
          marginTop={orientation === 'vertical' ? '-$2' : '$0'}
          {...props}
        >
          {renderChildren()}
        </CarouselContentFrame>
      </View>
    )
  }
)
CarouselContent.displayName = 'CarouselContent'

const CarouselItem = React.forwardRef<React.ElementRef<typeof CarouselItemFrame>, StackProps>(
  (props, ref) => {
    const { orientation } = useCarousel()
    return (
      <CarouselItemFrame
        ref={ref}
        paddingLeft={orientation === 'horizontal' ? '$2' : '$0'}
        paddingTop={orientation === 'vertical' ? '$2' : '$0'}
        role="group"
        aria-roledescription="slide"
        {...props}
      />
    )
  }
)
CarouselItem.displayName = 'CarouselItem'

const CarouselPrevious = React.forwardRef<
  React.ElementRef<typeof CarouselNavButton>,
  GetProps<typeof CarouselNavButton>
>((props, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel()
  return (
    <CarouselNavButton
      ref={ref}
      side="prev"
      disabled={!canScrollPrev}
      onPress={scrollPrev}
      icon={ChevronLeft}
      aria-label="Slide anterior"
      {...props}
    />
  )
})
CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = React.forwardRef<
  React.ElementRef<typeof CarouselNavButton>,
  GetProps<typeof CarouselNavButton>
>((props, ref) => {
  const { scrollNext, canScrollNext } = useCarousel()
  return (
    <CarouselNavButton
      ref={ref}
      side="next"
      disabled={!canScrollNext}
      onPress={scrollNext}
      icon={ChevronRight}
      aria-label="Próximo slide"
      {...props}
    />
  )
})
CarouselNext.displayName = 'CarouselNext'

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
