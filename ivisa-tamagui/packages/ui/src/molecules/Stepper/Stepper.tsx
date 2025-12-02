import React, { createContext, useContext, useRef, useState } from 'react'
import { LayoutChangeEvent, ScrollView as ScrollViewNative } from 'react-native'
import { ScrollView, View, ViewProps, ScrollViewProps } from 'tamagui'
import { withErrorLogging } from '../../utils/withErrorLogging'

type StepperContextObject = {
  scrollTo: (options: { x: number; y: number; animated: boolean }) => void
  layout: LayoutChangeEvent | undefined
} | null

const StepperContext = createContext<StepperContextObject>(null)

type StepperProps = Pick<ScrollViewProps, 'height' | 'width' | 'children' | 'backgroundColor' | 'borderWidth' | 'borderColor' | 'borderRadius'>

const StepperImpl = React.forwardRef<ScrollViewNative, StepperProps>((props, ref) => {
  const localRef = useRef<ScrollViewNative>(null)

  const setRef = (node: ScrollViewNative | null) => {
    localRef.current = node
    if (typeof ref === 'function') {
      ref(node)
    } else if (ref) {
      ref.current = node
    }
  }

  const { height, width, children, ...rest } = props
  const [layoutEvent, setLayoutEvent] = useState<LayoutChangeEvent>()

  return (
    <ScrollView
      onLayout={(e) => {
        setLayoutEvent(e)
      }}
      width={width}
      height={height}
      ref={setRef}
      horizontal
      alignItems="stretch"
      justifyContent="flex-start"
      flexBasis="100%"
      flexGrow={0}
      flexShrink={0}
      flexWrap="wrap"
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
      {...rest}
    >
      <StepperContext.Provider
        value={{
          scrollTo: (options) => localRef.current?.scrollTo(options),
          layout: layoutEvent,
        }}
      >
        {children}
      </StepperContext.Provider>
    </ScrollView>
  )
})

StepperImpl.displayName = 'Stepper'

const WrappedStepper = withErrorLogging<StepperProps, ScrollViewNative>('Stepper', StepperImpl)

// Stepper Page
const StepperPage = (props: ViewProps) => {
  const context = useContext(StepperContext)
  const width = context?.layout?.nativeEvent?.layout?.width ?? '100%'

  return <View width={width} {...props} />
}

type StepperTriggerProps = ViewProps & {
  disabled?: boolean
  targetPage: number
}

const StepperTrigger = (props: StepperTriggerProps) => {
  const context = useContext(StepperContext)
  const { children, disabled, targetPage, ...rest } = props

  const scrollToPage = (target: number): void => {
    if (!context?.layout) return

    context.scrollTo({
      y: 0,
      x: target * context.layout.nativeEvent.layout.width,
      animated: true,
    })
  }

  const handleOnPress = () => {
    if (!disabled && context?.layout) {
      scrollToPage(targetPage)
    }
  }

  return (
    <View onPress={handleOnPress} cursor={disabled ? 'not-allowed' : 'pointer'} {...rest}>
      {children}
    </View>
  )
}

export const Stepper = Object.assign(WrappedStepper, {
  Page: StepperPage,
  Trigger: StepperTrigger,
})
