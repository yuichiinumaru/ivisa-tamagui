import React, { ComponentType, ForwardedRef } from 'react';
import { ComponentProps } from 'react';
import { TextInput } from 'react-native';
import { styled, Input as TamaguiInput, View, XStack, Button } from 'tamagui'
import { Star as Icon } from "@tamagui/lucide-icons"

/**
 * _InputFrame is a private component not meant for use outside of the Input component.
 * It mimicks the Input styling to make it look a like the former.
 * @param {InputFrameProps} props
 * @returns {JSX.Element}
 */
const InputFrame = styled(XStack, {
    name: "Input",
    backgroundColor: "$background",
    borderBottomColor: "$borderColor",
    borderTopColor: "$borderColor",
    borderLeftColor: "$borderColor",
    borderRightColor: "$borderColor",
    borderWidth: "$0.25",
    borderRadius: "$4",
    focusable: true,
    overflow: "hidden",
})

type InputProps = ComponentProps<typeof TamaguiInput>

/**
 * Base Input act as a proxy for tamagui's component but if the end eveliper decides to use it as a compound it will act as a frame.
 */
const BaseInput = React.forwardRef((props: InputProps, ref: ForwardedRef<TextInput>): JSX.Element => {

    const { children } = props

    return (
        <>
            {props.children ? (
                <InputFrame>{children}</InputFrame>
            ) : (
                <TamaguiInput ref={ref} {...props} />
            )}
        </>
    );
})

const UnframedInput = styled(TamaguiInput, {
    background: "transparent",
    borderBottomColor: "$colorTransparent",
    borderTopColor: "$colorTransparent",
    borderLeftColor: "$colorTransparent",
    borderRightColor: "$colorTransparent",
    borderBottomRightRadius: "0",
    borderTopRightRadius: "0",
    borderBottomLeftRadius: "0",
    borderTopLeftRadius: "0",
    focusVisibleStyle: {
        outlineStyle: "none",
        shadowColor: "$colorTransparent",
        borderColor: "$colorTransparent"
    },
    hoverStyle: {
        borderColor: "$colorTransparent"
    }
})

type InputIconProps = {
    icon: ComponentProps<typeof Icon>
}

// I'm debating with myself if the ref should be forwarded.
const InputIcon = (props: InputIconProps): JSX.Element => {
    const { icon } = props

    return <View background={"$borderColor"} justifyContent="center" alignItems="center" height={"$4"} width={'$4'}>{icon}</View>
}

const InputButton = styled(Button, {
    borderRadius: "$0"
})

export const Input = Object.assign(BaseInput, { Field: UnframedInput, Icon: InputIcon, Button: InputButton });