import React, { createContext, useContext } from 'react'
import { Tabs as TamaguiTabs, styled, GetProps, YStack, XStack } from 'tamagui'
import { Skeleton } from '../atoms/Skeleton'

type TabsContextType = {
  isLoading?: boolean
  hasError?: boolean
  isDisabled?: boolean
}

const TabsContext = createContext<TabsContextType>({})

const useTabsContext = () => {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('useTabsContext must be used within a Tabs component')
  }
  return context
}

const TabsFrame = styled(TamaguiTabs, {
  name: 'Tabs',
  flexDirection: 'column',
  gap: '$2',
})

const InnerTabsList = styled(TamaguiTabs.List, {
  name: 'TabsList',
  flexDirection: 'row',
  gap: '$1',
  flexShrink: 1,
  backgroundColor: 'transparent',
})

const StyledTabsTrigger = styled(TamaguiTabs.Tab, {
  name: 'TabsTrigger',
  backgroundColor: 'transparent',
  borderRadius: '$3',
  paddingVertical: '$1.5',
  paddingHorizontal: '$3',
  justifyContent: 'center',
  alignItems: 'center',

  hoverStyle: {
    backgroundColor: '$backgroundHover',
  },

  variants: {
    active: {
      true: {
        backgroundColor: '$background',
        color: '$foreground',
        shadowColor: '$shadowColor',
        shadowRadius: '$xs',
        shadowOpacity: 0.1,
        elevation: 2,
      },
    },
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'not-allowed',
      },
    },
  } as const,
})

const StyledTabsContent = styled(TamaguiTabs.Content, {
  name: 'TabsContent',
  backgroundColor: '$background',
  padding: '$4',
  borderRadius: '$4',
  borderWidth: 1,
  borderColor: '$borderColor',

  key: 'tab-content',
  animation: 'quick',
  enterStyle: { opacity: 0, scale: 0.95, y: '$2' },
  exitStyle: { opacity: 0, scale: 0.95, y: '$2' },
  opacity: 1,
  scale: 1,
  y: 0,
})

type TabItem = {
  value: string
  label: React.ReactNode
  content: React.ReactNode
}

export type TabsProps = GetProps<typeof TabsFrame> &
  TabsContextType & {
    tabs?: TabItem[]
    actions?: React.ReactNode
  }

export const Tabs = ({
  isLoading,
  hasError,
  isDisabled,
  tabs,
  actions,
  children,
  ...props
}: TabsProps) => {
  const content = tabs ? (
    <>
      <TabsList actions={actions}>
        {tabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value}>
          {tab.content}
        </TabsContent>
      ))}
    </>
  ) : (
    children
  )

  return (
    <TabsContext.Provider value={{ isLoading, hasError, isDisabled }}>
      <TabsFrame {...props}>{content}</TabsFrame>
    </TabsContext.Provider>
  )
}

export const TabsList = ({
  actions,
  children,
  ...props
}: GetProps<typeof InnerTabsList> & { actions?: React.ReactNode }) => {
  const { hasError } = useTabsContext()
  return (
    <XStack
      backgroundColor="$muted"
      borderRadius="$4"
      padding="$1"
      alignItems="center"
      gap="$2"
      borderColor={hasError ? '$destructive' : undefined}
      borderWidth={hasError ? 1 : 0}
    >
      <InnerTabsList {...props}>{children}</InnerTabsList>
      {actions && <YStack ml="auto">{actions}</YStack>}
    </XStack>
  )
}

export const TabsTrigger = (props: GetProps<typeof StyledTabsTrigger>) => {
  const { isDisabled } = useTabsContext()
  return <StyledTabsTrigger disabled={isDisabled} {...props} />
}

export const TabsContent = (props: GetProps<typeof StyledTabsContent>) => {
  const { isLoading } = useTabsContext()
  return isLoading ? (
    <YStack space>
      <Skeleton height={40} />
      <Skeleton height={20} />
      <Skeleton height={20} />
    </YStack>
  ) : (
    <StyledTabsContent {...props} />
  )
}
