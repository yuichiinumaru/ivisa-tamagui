import { RichTextEditor } from '@siposdani87/expo-rich-text-editor'
import React from 'react'
import { Stack, styled, StackProps } from 'tamagui'

const EditorContainer = styled(Stack, {
    name: 'RichTextEditor',
    borderWidth: 1,
    borderColor: '$borderColor',
    borderRadius: '$md',
    height: 300,
})

export interface RichTextProps extends StackProps {
    value?: string
    onChange?: (value: string) => void
    editable?: boolean
}

export const RichText = ({ value, onChange, editable = true, ...props }: RichTextProps) => {
    return (
        <EditorContainer {...props}>
             <RichTextEditor
                value={value ?? ''}
                onValueChange={onChange}
                disabled={!editable}
                minHeight={200}
            />
        </EditorContainer>
    )
}
