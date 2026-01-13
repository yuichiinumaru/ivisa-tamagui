// @ts-nocheck
import React from 'react'
import { YStack, XStack, styled, GetProps, Text, ScrollView } from 'tamagui'

const DiffContainer = styled(YStack, {
  name: 'DiffViewer',
  width: '100%',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$4',
  overflow: 'hidden',
  backgroundColor: '$background',
})

const Header = styled(XStack, {
  backgroundColor: '$muted',
  padding: '$2',
  borderBottomWidth: 1,
  borderColor: '$borderColor',
  justifyContent: 'space-between',
})

const DiffContent = styled(XStack, {
  width: '100%',
  height: 400, // Fixed height for scrolling
})

const Pane = styled(YStack, {
  flex: 1,
  height: '100%',
  borderRightWidth: 1,
  borderColor: '$borderColor',
  variants: {
    last: {
      true: {
        borderRightWidth: 0,
      }
    }
  }
})

const Line = styled(XStack, {
  width: '100%',
  minHeight: 24,
  paddingHorizontal: '$2',
  alignItems: 'center',
  variants: {
    type: {
      added: { backgroundColor: '$green2' },
      removed: { backgroundColor: '$red2' },
      neutral: { backgroundColor: 'transparent' },
    }
  }
})

const LineNumber = styled(Text, {
  width: 40,
  color: '$mutedForeground',
  fontSize: '$2',
  userSelect: 'none',
  textAlign: 'right',
  paddingRight: '$2',
  borderRightWidth: 1,
  borderColor: '$borderColor',
  marginRight: '$2',
})

const LineText = styled(Text, {
  fontSize: '$3',
  fontFamily: '$mono',
  color: '$foreground',
  whiteSpace: 'pre-wrap',
  flex: 1,
})

export type DiffViewerProps = GetProps<typeof DiffContainer> & {
  oldText: string
  newText: string
  oldTitle?: string
  newTitle?: string
}

// Simple diff mock logic (line by line comparison)
// In production, use 'diff' library
const computeDiff = (oldText: string, newText: string) => {
    const oldLines = oldText.split('\n')
    const newLines = newText.split('\n')
    const maxLines = Math.max(oldLines.length, newLines.length)
    const lines = []

    for (let i = 0; i < maxLines; i++) {
        const oldL = oldLines[i] || ''
        const newL = newLines[i] || ''

        let type: 'neutral' | 'added' | 'removed' | 'modified' = 'neutral'
        if (oldL !== newL) {
            // Very naive diff: if lines differ, mark as modified (show both)
            // Real diff algo is complex, we just visualize changes here.
            // For simple visualization, we can show:
            // If old exists and new doesn't -> removed
            // If new exists and old doesn't -> added
            // If both exist and differ -> modified
             if (!oldL && newL) type = 'added'
             else if (oldL && !newL) type = 'removed'
             else type = 'modified'
        }

        lines.push({ num: i + 1, oldL, newL, type })
    }
    return lines
}

export const DiffViewer = ({
  oldText,
  newText,
  oldTitle = 'Original',
  newTitle = 'Modificado',
  ...props
}: DiffViewerProps) => {
  const diffs = computeDiff(oldText, newText)

  return (
    <DiffContainer {...props}>
      <Header>
        <Text fontWeight="bold" flex={1} textAlign="center">{oldTitle}</Text>
        <Text fontWeight="bold" flex={1} textAlign="center">{newTitle}</Text>
      </Header>
      <ScrollView>
        <DiffContent>
            <Pane>
                {diffs.map((line, i) => (
                    <Line key={`old-${i}`} type={line.type === 'removed' || line.type === 'modified' ? 'removed' : 'neutral'}>
                        <LineNumber>{line.num}</LineNumber>
                        <LineText>{line.oldL}</LineText>
                    </Line>
                ))}
            </Pane>
            <Pane last>
                {diffs.map((line, i) => (
                    <Line key={`new-${i}`} type={line.type === 'added' || line.type === 'modified' ? 'added' : 'neutral'}>
                        <LineNumber>{line.num}</LineNumber>
                        <LineText>{line.newL}</LineText>
                    </Line>
                ))}
            </Pane>
        </DiffContent>
      </ScrollView>
    </DiffContainer>
  )
}
