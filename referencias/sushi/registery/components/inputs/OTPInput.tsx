import { ComponentProps, useState } from "react";
import { Form, Input, styled, XStack, YStack } from "tamagui";

type OTPInputProps = ComponentProps<typeof Form> & { length: number };

export const OTPInput = (props: OTPInputProps) => {

    const OTPNumberInput = styled(Input, {
        name: "Input",
        width: "$4"
    })

    // Might improve states later.
    const [focusArray, setFocusArray] = useState<boolean[]>(new Array(props.length).fill(false));
    const [valueArray, setValueArray] = useState<string[]>(new Array(props.length));


    // For some reason using this approach to move the focus forces me to keep a values array.
    const focusOnNextInput = (e: string, i: number): void => {
        const _focusArray = [...focusArray];
        const _valueArray = [...valueArray];
        const next = i + 1;

        if (!_focusArray[next]) {
            console.log('h')
            _focusArray.fill(false);
            setFocusArray(_focusArray);
        }

        if (e.length === 0) {
            _focusArray.fill(false);
            _focusArray[i] = true;
            _valueArray[i] = e;
            setFocusArray(_focusArray);
            setValueArray(_valueArray);

            return;
        }

        if (isNaN(Number(e))) {
            return;
        }

        _valueArray[i] = e;
        _focusArray[next] = true;

        setValueArray(_valueArray);
        setFocusArray(_focusArray);

    }

    return (
        <Form {...props}>
            <YStack>
                <XStack gap={"$4"}>
                    {[...Array(props.length)].map((_, i) => (
                        <OTPNumberInput inputMode={'numeric'} value={valueArray[i]} autoFocus={focusArray[i]} onChangeText={(e) => { focusOnNextInput(e, i) }} textAlign="center" maxLength={1} key={i} />
                    ))}
                </XStack>
            </YStack>
        </Form>
    );
}