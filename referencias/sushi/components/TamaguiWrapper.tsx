import { TamaguiProvider} from 'tamagui'
import {tamaguiConfig} from "../tamagui.config"
import { config } from '@tamagui/config/v3'
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'

// // you usually export this from a tamagui.config.ts file
// const tamaguiConfig = createTamagui(config)

// // make TypeScript type everything based on your config
// type Conf = typeof tamaguiConfig
// declare module 'tamagui' { // or 'tamagui'
//     interface TamaguiCustomConfig extends Conf { }
// }

type TamaguiWrapperProps = {
    children?: React.ReactNode
};

/**
 * @description a wrapper to allow tamagui to run under Nextra
 * @param props
 * @returns
 */
export default function TamaguiWrapper(props: TamaguiWrapperProps) {

    const { children } = props

    return (
        <NextThemeProvider>
            <TamaguiProvider config={tamaguiConfig}>
                {children}
            </TamaguiProvider>
        </NextThemeProvider>
    )
}