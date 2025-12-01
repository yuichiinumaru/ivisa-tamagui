import { styled, YStack, XStack, GetProps } from 'tamagui'
import React from 'react'

// Mocking react-resizable-panels API structure

const ResizablePanelGroupFrame = styled(XStack, {
    name: 'ResizablePanelGroup',
    flex: 1,
    width: '100%',
    height: '100%',
    variants: {
        direction: {
            vertical: {
                flexDirection: 'column',
            },
            horizontal: {
                flexDirection: 'row',
            },
        },
    } as const,
    defaultVariants: {
        direction: 'horizontal',
    },
})

const ResizablePanelFrame = styled(YStack, {
    name: 'ResizablePanel',
    flex: 1, // Default to flex 1, but can be overridden by defaultSize (which we'd need to map to flex basis or grow)
})

const ResizableHandleFrame = styled(YStack, {
    name: 'ResizableHandle',
    backgroundColor: '$border',
    variants: {
        withHandle: {
            true: {
                // Add handle styling if needed
            }
        },
        direction: {
            vertical: {
                height: 1,
                width: '100%',
            },
            horizontal: {
                width: 1,
                height: '100%',
            },
        }
    } as const,
})

// Wrapper components to handle props translation if needed
const ResizablePanelGroup = React.forwardRef<React.ElementRef<typeof ResizablePanelGroupFrame>, GetProps<typeof ResizablePanelGroupFrame>>((props, ref) => {
    return <ResizablePanelGroupFrame ref={ref} {...props} />
})
ResizablePanelGroup.displayName = 'ResizablePanelGroup'

const ResizablePanel = React.forwardRef<React.ElementRef<typeof ResizablePanelFrame>, GetProps<typeof ResizablePanelFrame> & { defaultSize?: number }>((props, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { defaultSize, ...rest } = props
    // In a real implementation, defaultSize would control flex-basis or width/height
    return <ResizablePanelFrame ref={ref} {...rest} />
})
ResizablePanel.displayName = 'ResizablePanel'

const ResizableHandle = React.forwardRef<React.ElementRef<typeof ResizableHandleFrame>, GetProps<typeof ResizableHandleFrame> & { withHandle?: boolean }>((props, ref) => {
    return <ResizableHandleFrame ref={ref} {...props} />
})
ResizableHandle.displayName = 'ResizableHandle'

export {
    ResizablePanelGroup,
    ResizablePanel,
    ResizableHandle,
}

export type ResizablePanelGroupProps = GetProps<typeof ResizablePanelGroupFrame>
export type ResizablePanelProps = GetProps<typeof ResizablePanelFrame>
export type ResizableHandleProps = GetProps<typeof ResizableHandleFrame>
