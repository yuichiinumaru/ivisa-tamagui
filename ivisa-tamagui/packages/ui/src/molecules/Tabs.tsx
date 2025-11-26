import { Tabs as TamaguiTabs, styled, GetProps } from 'tamagui'

const Tabs = styled(TamaguiTabs, {
    name: 'Tabs',
    flexDirection: 'column',
    defaultValue: 'tab1',
})

const TabsList = styled(TamaguiTabs.List, {
    name: 'TabsList',
    flexDirection: 'row',
    backgroundColor: '$muted',
    borderRadius: '$4',
    padding: '$1',
    gap: '$1',
})

const TabsTrigger = styled(TamaguiTabs.Tab, {
    name: 'TabsTrigger',
    backgroundColor: 'transparent',
    borderRadius: '$3',
    paddingVertical: '$1.5',
    paddingHorizontal: '$3',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1, // Distribute space evenly if needed, or remove for auto width

    hoverStyle: {
        backgroundColor: '$backgroundHover', // Subtle hover
    },

    // Active state styling in Tamagui Tabs is usually handled by the 'active' prop or interaction state
    // But Tamagui Tabs.Tab doesn't automatically get an 'active' variant unless we use the context or 'unstyled' + custom logic.
    // However, Tamagui's default Tabs.Tab supports 'data-state="active"' styling if we use the right selectors,
    // OR we can use the `interactionState` if we were using the headless primitive directly.
    // For simplicity in this wrapper, we'll rely on Tamagui's default behavior or add a simple active style if possible.
    // Actually, Tamagui Tabs.Tab has an `active` state in its theme/variants if configured.
    // Let's try to simulate shadcn's active state: bg-background text-foreground shadow-sm

    variants: {
        active: {
            true: {
                backgroundColor: '$background',
                color: '$foreground',
                shadowColor: '$shadowColor',
                shadowRadius: 2,
                shadowOpacity: 0.1,
                elevation: 2,
            }
        }
    } as const,
})

const TabsContent = styled(TamaguiTabs.Content, {
    name: 'TabsContent',
    backgroundColor: '$background',
    padding: '$4',
    borderRadius: '$4',
    borderWidth: 1,
    borderColor: '$borderColor',
    marginTop: '$2',

    // Animation
    key: 'tab-content',
    animation: 'quick',
    enterStyle: { opacity: 0, scale: 0.95, y: 10 },
    exitStyle: { opacity: 0, scale: 0.95, y: 10 },
    opacity: 1,
    scale: 1,
    y: 0,
})

export {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
}

export type TabsProps = GetProps<typeof Tabs>
export type TabsListProps = GetProps<typeof TabsList>
export type TabsTriggerProps = GetProps<typeof TabsTrigger>
export type TabsContentProps = GetProps<typeof TabsContent>
