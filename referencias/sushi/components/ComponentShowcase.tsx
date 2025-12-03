import { Stack, View } from "tamagui";

type ComponentShowcaseProps = {
    children?: React.ReactNode;
}
export default function ComponentShowcase(props: ComponentShowcaseProps) {
    const { children } = props;
    return (
        <Stack width={'100%'} height={"auto"} padding={"16px"} justifyContent="center" alignItems="center">
            {children}
        </Stack>
    )
}