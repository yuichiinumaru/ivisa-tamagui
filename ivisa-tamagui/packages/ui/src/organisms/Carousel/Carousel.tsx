import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react'
import { styled, YStack, XStack, ThemeableStack, View, StackProps, GetProps, TamaguiElement, Text } from 'tamagui'
import { Button } from '../../atoms/Button'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: CarouselApi
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

const CarouselFrame = styled(YStack, {
  width: '100%',
  position: 'relative',
})

const Carousel = React.forwardRef<any, StackProps & CarouselProps>(
  (
    {
      orientation = 'horizontal',
      opts,
      setApi,
      plugins,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins
    )
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const onSelect = useCallback((api: CarouselApi) => {
      if (!api) return
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = useCallback(() => {
      api?.scrollPrev()
    }, [api])

    const scrollNext = useCallback(() => {
      api?.scrollNext()
    }, [api])

    useEffect(() => {
      if (!api || !setApi) return
      setApi(api)
    }, [api, setApi])

    useEffect(() => {
      if (!api) return
      onSelect(api)
      api.on('reInit', onSelect)
      api.on('select', onSelect)

      return () => {
        api?.off('select', onSelect)
      }
    }, [api, onSelect])

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <CarouselFrame
          ref={ref}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </CarouselFrame>
      </CarouselContext.Provider>
    )
  }
)
Carousel.displayName = 'Carousel'

const CarouselContentFrame = styled(XStack, {
  display: 'flex',
})

const CarouselContent = React.forwardRef<any, StackProps>(
  ({ ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()

    return (
      <View ref={carouselRef} overflow="hidden">
        <CarouselContentFrame
          ref={ref}
          flexDirection={orientation === 'horizontal' ? 'row' : 'column'}
          marginTop={orientation === 'horizontal' ? 0 : '-$4'}
          paddingTop={orientation === 'horizontal' ? 0 : '$4'}
          marginLeft={orientation === 'horizontal' ? '-$4' : 0}
          paddingLeft={orientation === 'horizontal' ? '$4' : 0}
          {...props}
        />
      </View>
    )
  }
)
CarouselContent.displayName = 'CarouselContent'

const CarouselItemFrame = styled(YStack, {
  minWidth: 0,
  flexShrink: 0,
  flexGrow: 0,
  flexBasis: '100%',
})

const CarouselItem = React.forwardRef<any, StackProps>(
  ({ ...props }, ref) => {
    const { orientation } = useCarousel()

    return (
      <CarouselItemFrame
        ref={ref}
        paddingTop={orientation === 'horizontal' ? 0 : '$4'}
        paddingLeft={orientation === 'horizontal' ? '$4' : 0}
        role="group"
        aria-roledescription="slide"
        {...props}
      />
    )
  }
)
CarouselItem.displayName = 'CarouselItem'

// Simple Icon Components
const ArrowLeft = () => <Text>{'<'}</Text>
const ArrowRight = () => <Text>{'>'}</Text>

const CarouselPrevious = React.forwardRef<any, GetProps<typeof Button>>(
  ({ variant = 'outline', size = 'icon', ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        circular
        disabled={!canScrollPrev}
        onPress={scrollPrev}
        icon={ArrowLeft}
        position="absolute"
        zIndex={10}
        {...(orientation === 'horizontal'
          ? {
              left: '-$12',
              top: '50%',
              y: '-50%',
            }
          : {
              top: '-$12',
              left: '50%',
              x: '-50%',
              rotate: '90deg',
            })}
        {...props}
      />
    )
  }
)
CarouselPrevious.displayName = 'CarouselPrevious'

const CarouselNext = React.forwardRef<any, GetProps<typeof Button>>(
  ({ variant = 'outline', size = 'icon', ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel()

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        circular
        disabled={!canScrollNext}
        onPress={scrollNext}
        icon={ArrowRight}
        position="absolute"
        zIndex={10}
        {...(orientation === 'horizontal'
          ? {
              right: '-$12',
              top: '50%',
              y: '-50%',
            }
          : {
              bottom: '-$12',
              left: '50%',
              x: '-50%',
              rotate: '90deg',
            })}
        {...props}
      />
    )
  }
)
CarouselNext.displayName = 'CarouselNext'

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}
