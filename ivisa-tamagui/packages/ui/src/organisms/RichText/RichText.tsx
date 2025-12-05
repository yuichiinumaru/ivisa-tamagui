import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import { Stack, styled, StackProps } from 'tamagui'
import DOMPurify from 'isomorphic-dompurify'
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

/**
 * RichText Component
 * Wraps TipTap editor with Tamagui styling.
 *
 * SECURITY NOTE:
 * This component automatically sanitizes output using DOMPurify to prevent XSS.
 * However, consumers should still treat HTML content as potentially unsafe if
 * strictly rendering user-generated content in sensitive contexts.
 */
export const RichText = ({ value, onChange, editable = true, ...props }: RichTextProps) => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: value,
        editable,
        onUpdate: ({ editor }) => {
            if (onChange) {
                // 🛡️ Security: Sanitize HTML before passing it up
                // This kills stored XSS vectors immediately.
                const rawHtml = editor.getHTML()
                const cleanHtml = DOMPurify.sanitize(rawHtml)
                onChange(cleanHtml)
            }
        },
    })

    return (
        <EditorContainer {...props}>
             <EditorContent editor={editor} />
        </EditorContainer>
    )
}
