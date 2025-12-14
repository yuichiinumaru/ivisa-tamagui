import React from 'react'
import { styled, YStack, XStack, Text, Stack } from 'tamagui'

// --- Types ---
export type SegmentedControlItem = {
    value: string
    label: string
}

export type AnimatedSegmentedControlProps = {
    value: string
    onValueChange: (value: string) => void
    items: SegmentedControlItem[]
}

// --- Components ---
const Container = styled(XStack, {
    backgroundColor: '$backgroundHover',
    borderRadius: '$4',
    padding: '$1',
    position: 'relative',
    height: 44,
})

const TabButton = styled(Stack, {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$3',
    zIndex: 2,
    cursor: 'pointer',
    pressStyle: {
        opacity: 0.8
    }
})

const ActiveIndicator = styled(Stack, {
    position: 'absolute',
    height: '100%',
    backgroundColor: '$background',
    borderRadius: '$3',
    shadowColor: '$shadowColor',
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    zIndex: 1,
    animation: 'quick',
})

// --- Organism ---
export const AnimatedSegmentedControl = ({
    value,
    onValueChange,
    items
}: AnimatedSegmentedControlProps) => {

    // Using a simple index lookup.
    // To avoid useEffect dependency issues if 'items' is unstable, we could memoize the index or trust standard equality.
    // If items change, we recalculate index.
    const activeIndex = React.useMemo(() => {
        return items.findIndex(i => i.value === value)
    }, [items, value])

    return (
        <Container>
             <ActiveIndicator
                width={`${100 / items.length}%`}
                x={0} // We will use transform for animation or just left
                left={`${(100 / items.length) * (activeIndex === -1 ? 0 : activeIndex)}%`}
                opacity={activeIndex === -1 ? 0 : 1}
            />

            {items.map((item) => {
                const isActive = item.value === value
                return (
                    <TabButton
                        key={item.value}
                        onPress={() => onValueChange(item.value)}
                    >
                        <Text
                            fontWeight={isActive ? 'bold' : 'normal'}
                            color={isActive ? '$color' : '$gray10'}
                            fontSize="$3"
                            zIndex={3}
                        >
                            {item.label}
                        </Text>
                    </TabButton>
                )
            })}
        </Container>
    )
}
