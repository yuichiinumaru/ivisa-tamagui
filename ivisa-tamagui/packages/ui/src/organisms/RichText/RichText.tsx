import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {
  Bold,
  Code,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  List,
  ListOrdered,
  Quote,
  Redo,
  Strikethrough,
  Undo,
} from '@tamagui/lucide-icons'
import React from 'react'
import {
  ScrollView,
  StackProps,
  styled,
  withStaticProperties,
  XStack,
  YStack,
} from 'tamagui'
import DOMPurify from 'isomorphic-dompurify'

import { Button } from '../../atoms/Button'
import { Skeleton } from '../../atoms/Skeleton'
import { Tooltip } from '../../molecules/Tooltip'
import { ToggleGroup, ToggleGroupItem } from '../../molecules/ToggleGroup'

import './proseMirror.css'

const EditorContainer = styled(YStack, {
  name: 'RichTextEditor',
  borderWidth: 1,
  borderColor: '$borderColor',
  borderRadius: '$borderRadius',
  variants: {
    hasError: {
      true: {
        borderColor: '$red10',
      },
    },
  },
})

const EditorContentContainer = styled(ScrollView, {
  name: 'EditorContentContainer',
  minHeight: 150,
  padding: '$3',
})

const Toolbar = styled(XStack, {
  name: 'RichTextToolbar',
  padding: '$2',
  borderBottomWidth: 1,
  borderBottomColor: '$borderColor',
  flexWrap: 'wrap',
  gap: '$2',
})

const RichTextToolbar = ({ editor }) => {
  if (!editor) {
    return null
  }

  const toggleGroupItems = [
    { name: 'bold', icon: Bold, label: 'Negrito' },
    { name: 'italic', icon: Italic, label: 'Itálico' },
    { name: 'strike', icon: Strikethrough, label: 'Riscado' },
  ]

  const headingItems = [
    { level: 1, icon: Heading1, label: 'Título 1' },
    { level: 2, icon: Heading2, label: 'Título 2' },
    { level: 3, icon: Heading3, label: 'Título 3' },
  ]

  return (
    <Toolbar>
      <ToggleGroup
        type="multiple"
        value={toggleGroupItems.filter((item) => editor.isActive(item.name)).map((item) => item.name)}
        onValueChange={(values) => {
          toggleGroupItems.forEach((item) => {
            if (values.includes(item.name) !== editor.isActive(item.name)) {
              editor.chain().focus()[`toggle${item.name.charAt(0).toUpperCase() + item.name.slice(1)}`]().run()
            }
          })
        }}
      >
        {toggleGroupItems.map(({ name, icon: Icon, label }) => (
          <Tooltip key={name} placement="top" content={label}>
            <ToggleGroupItem value={name} aria-label={label}>
              <Icon size={16} />
            </ToggleGroupItem>
          </Tooltip>
        ))}
      </ToggleGroup>

      {headingItems.map(({ level, icon: Icon, label }) => (
        <Tooltip key={level} placement="top" content={label}>
          <Button
            variant={editor.isActive('heading', { level }) ? 'secondary' : 'ghost'}
            onPress={() => editor.chain().focus().toggleHeading({ level }).run()}
            aria-label={label}
          >
            <Icon size={16} />
          </Button>
        </Tooltip>
      ))}
    </Toolbar>
  )
}

export interface RichTextProps extends StackProps {
  value?: string
  onChange?: (value: string) => void
  editable?: boolean
  isLoading?: boolean
  hasError?: boolean
  headerActions?: React.ReactNode
}

const RichTextFrame = ({
  value,
  onChange,
  editable = true,
  isLoading = false,
  hasError = false,
  headerActions,
  ...props
}: RichTextProps) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,
    editable: !isLoading && editable,
    onUpdate: ({ editor }) => {
      if (onChange) {
        const rawHtml = editor.getHTML()
        const cleanHtml = DOMPurify.sanitize(rawHtml)
        onChange(cleanHtml)
      }
    },
  })

  if (isLoading) {
    return (
      <YStack gap="$2" {...props}>
        <Skeleton height={40} />
        <Skeleton height={150} />
      </YStack>
    )
  }

  return (
    <EditorContainer hasError={hasError} {...props}>
      <RichTextToolbar editor={editor} />
      {headerActions}
      <EditorContentContainer>
        <EditorContent editor={editor} />
      </EditorContentContainer>
    </EditorContainer>
  )
}

export const RichText = withStaticProperties(RichTextFrame, {})
