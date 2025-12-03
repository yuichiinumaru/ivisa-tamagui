import { Children, createContext, Ref, RefObject, useContext, useRef, useState } from "react"
import { LayoutChangeEvent, ScrollView as ScrollViewNative} from "react-native"
import { ScrollView, styled, View } from "tamagui"
import type { ScrollViewProps, ViewProps } from "tamagui"

type StepperContextObject = Pick<ScrollViewNative, "scrollTo"> & {
    layout: LayoutChangeEvent
} | null

const StepperContext = createContext<StepperContextObject>(null);

type StepperProps = Pick<ScrollViewProps, "height" | "width" | "children">

export const Stepper = (props: StepperProps) => {

    const ref = useRef<ScrollViewNative>(null)
    const { height, width, children } = props;
    const [layoutEvent, setLayoutEvent] = useState<LayoutChangeEvent>();

    return (
        <ScrollView
        onLayout={(e) => { setLayoutEvent(e) }}
        width={width}
        height={height}
        ref={ref}
        horizontal
        alignItems="stretch"
        justifyContent="flex-start"
        flexBasis={"100%"}
        flexGrow={0}
        flexShrink={0}
        flexWrap="wrap"
        scrollEnabled={false}
        >
            <StepperContext.Provider value={{scrollTo: ref.current?.scrollTo!, layout: layoutEvent!}}>
                {children}
            </StepperContext.Provider>
        </ScrollView>
    )
}

Stepper.Page = (props: ViewProps) => {

    const context = useContext(StepperContext)
    const width = context?.layout?.nativeEvent?.layout?.width ?? "100%"
    const Page = styled(View, {
        width: width
    })

    return (
        <Page {...props}></Page>
    )
}

type StepperTriggerProps = Pick<ViewProps, "children"> & {
    disabled?: boolean
    targetPage: number
}

Stepper.Trigger = (props: StepperTriggerProps) => {

    const context = useContext(StepperContext);
    const {children, disabled, targetPage} = props;

    const scrollToPage = (target: number): void => {
        context?.scrollTo({
            y: 0,
            // This needs to be refactoed to be way nicer.
            x: target * context.layout.nativeEvent.layout.width,
            animated: true
        })
    }

    const handleOnPress = () => {
        if (!disabled && context?.layout !== null && context?.scrollTo !== null) {
            scrollToPage(targetPage);
        }
    }

    return (
        <View onPress={handleOnPress}>
            {children}
        </View>
    )
}