import { styled, YStack, XStack, GetProps, Text } from 'tamagui'

export const DashboardShellFrame = styled(YStack, {
  name: 'DashboardShell',
  flex: 1,
  height: '100%',
})

export type DashboardShellProps = GetProps<typeof DashboardShellFrame>

export const DashboardShell = DashboardShellFrame.styleable<DashboardShellProps>((props, ref) => {
    return (
        <DashboardShellFrame ref={ref} {...props}>
           <XStack flex={1}>
              <YStack width={250} borderRightWidth={1} borderColor="$borderColor">
                 <Text>Sidebar Placeholder</Text>
              </YStack>
              <YStack flex={1} padding="$4">
                 <Text>Main Content Placeholder</Text>
              </YStack>
           </XStack>
        </DashboardShellFrame>
    )
})

export default DashboardShell
