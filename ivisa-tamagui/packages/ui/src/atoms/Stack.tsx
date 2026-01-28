// Removed ts-nocheck
import { forwardRef } from 'react'
import { Stack as TamaguiStack, StackProps, styled } from 'tamagui'

/**
 * @module Stack
 * @description Um componente de layout flexível para agrupar e alinhar elementos filhos.
 * Este componente serve como um wrapper polimórfico em torno dos componentes Stack, HStack e VStack do Tamagui,
 * permitindo a renderização como diferentes elementos (por exemplo, `div`, `button`) através da propriedade `asChild`.
 *
 * @param {StackProps} props - As propriedades do componente Stack do Tamagui.
 * @param {React.ReactNode} [props.children] - Os elementos filhos a serem renderizados dentro do Stack.
 * @param {boolean} [props.asChild=false] - Se definido como `true`, o Stack renderizará seu único filho, passando suas próprias propriedades para ele.
 * Isso é útil para compor componentes e manter a semântica correta do HTML.
 *
 * @example
 * // Uso básico com filhos diretos
 * <Stack gap="$4">
 *   <Text>Item 1</Text>
 *   <Text>Item 2</Text>
 * </Stack>
 *
 * @example
 * // Composição com asChild para renderizar como um botão
 * <Stack asChild>
 *   <button onClick={() => alert('Clicado!')}>
 *     <Text>Clique Aqui</Text>
 *   </button>
 * </Stack>
 */
const Stack = forwardRef<TamaguiStack, StackProps>((props, ref) => {
  return <TamaguiStack ref={ref} {...props} />
})

Stack.displayName = 'Stack'

/**
 * @module HStack
 * @description Um componente de layout horizontal (flex-direction: row) para agrupar elementos.
 * É um atalho para `<Stack flexDirection="row">`.
 *
 * @param {StackProps} props - As propriedades do componente Stack do Tamagui.
 *
 * @example
 * <HStack gap="$2" alignItems="center">
 *   <Icon name="user" />
 *   <Text>Usuário</Text>
 * </HStack>
 */
const HStack = styled(TamaguiStack, {
  name: 'HStack',
  flexDirection: 'row',
})

/**
 * @module VStack
 * @description Um componente de layout vertical (flex-direction: column) para agrupar elementos.
 * É um atalho para `<Stack flexDirection="column">`.
 *
 * @param {StackProps} props - As propriedades do componente Stack do Tamagui.
 *
 * @example
 * <VStack gap="$4">
 *   <Header />
 *   <Content />
 *   <Footer />
 * </VStack>
 */
const VStack = styled(TamaguiStack, {
  name: 'VStack',
  flexDirection: 'column',
})

export { Stack, HStack, VStack }

// Removed trailing alias export to reduce duplicate React.ComponentProps aliases
