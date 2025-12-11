
import { createContext, useContext, useMemo, cloneElement, Children, isValidElement, forwardRef } from 'react'
import { Skeleton } from '../../atoms/Skeleton'
import { ToggleGroup as TamaguiToggleGroup, styled, GetProps, TamaguiElement, YStack, withStaticProperties } from 'tamagui'
import { ReactNode } from 'react';

type ToggleGroupContextProps = {
  disabled?: boolean
  error?: boolean
  loading?: boolean
}

const ToggleGroupContext = createContext<ToggleGroupContextProps>({
  disabled: false,
  error: false,
  loading: false,
})

const useToggleGroupContext = () => {
  const context = useContext(ToggleGroupContext)
  if (!context) {
    throw new Error('useToggleGroupContext must be used within a ToggleGroupProvider')
  }
  return context
}

const ToggleGroupItemFrame = styled(TamaguiToggleGroup.Item, {
  name: 'ToggleGroupItem',
  backgroundColor: 'transparent',
  borderRadius: '$4',
  paddingHorizontal: '$3',
  height: '$10',
  alignItems: 'center',
  justifyContent: 'center',

  hoverStyle: {
    backgroundColor: '$muted',
    color: '$mutedForeground',
  },

  focusStyle: {
    outlineColor: '$ring',
    outlineStyle: 'solid',
    outlineWidth: 2,
    outlineOffset: 2,
  },

  variants: {
    active: {
      true: {
        backgroundColor: '$accent',
        color: '$accentForeground',
      },
    },
    error: {
      true: {
        color: '$red10',
        hoverStyle: {
          backgroundColor: '$red5',
          color: '$red11',
        },
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        pointerEvents: 'none',
      },
    },
  } as const,
})

export type ToggleGroupItemProps = GetProps<typeof ToggleGroupItemFrame>

export const ToggleGroupItem = forwardRef<TamaguiElement, ToggleGroupItemProps>((props, ref) => {
  const { disabled, error } = useToggleGroupContext()
  return <ToggleGroupItemFrame ref={ref} {...props} disabled={disabled || props.disabled} error={error} />
})

const ToggleGroupFrame = styled(TamaguiToggleGroup, {
  name: 'ToggleGroup',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$1',
  variants: {
    error: {
      true: {
        borderColor: '$red10',
        borderWidth: 1,
        borderRadius: '$4',
        padding: 1,
      },
    },
  } as const,
})

type ToggleGroupProps = GetProps<typeof ToggleGroupFrame> & {
  disabled?: boolean
  error?: boolean
  loading?: boolean
  children: ReactNode;
}

const ToggleGroupRoot = forwardRef<TamaguiElement, ToggleGroupProps>((props, ref) => {
  const { children, disabled, error, loading, ...rest } = props
  const contextValue = useMemo(() => ({ disabled, error, loading }), [disabled, error, loading])

  if (loading) {
    const childCount = Children.count(children)
    return (
      <YStack flexDirection="row" gap="$1" alignItems="center">
        {Array.from({ length: childCount > 0 ? childCount : 3 }).map((_, i) => (
          <Skeleton key={i} height="$10" width="$10" borderRadius="$4" />
        ))}
      </YStack>
    )
  }

  return (
    <ToggleGroupContext.Provider value={contextValue}>
      <ToggleGroupFrame ref={ref} {...rest} disabled={disabled} error={error}>
        {children}
      </ToggleGroupFrame>
    </ToggleGroupContext.Provider>
  )
})

export const ToggleGroup = withStaticProperties(ToggleGroupRoot, {
  Item: ToggleGroupItem,
})

export type { ToggleGroupProps }
