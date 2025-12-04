import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import { Stack, styled, StackProps } from 'tamagui'
import './proseMirror.css'

const EditorContainer = styled(Stack, {
    name: 'RichTextEditor',
    borderWidth: 1,
    borderColor: '$borderColor',
    borderRadius: '$md',
    padding: '$md',
    minHeight: 150,
    marginHorizontal: '$true',
})

export interface RichTextProps extends StackProps {
    value?: string
    onChange?: (value: string) => void
    editable?: boolean
}

export const RichText = ({ value, onChange, editable = true, ...props }: RichTextProps) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: value,
        editable,
        onUpdate: ({ editor }) => {
            onChange?.(editor.getHTML())
        },
    })

    return (
        <EditorContainer {...props}>
             <EditorContent editor={editor} />
        </EditorContainer>
    )
}
