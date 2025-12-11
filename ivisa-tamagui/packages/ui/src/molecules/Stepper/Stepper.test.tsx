import React from 'react'
import { fireEvent, render, screen } from '../../test-utils'
import { Stepper } from './Stepper'
import { Text, XStack } from 'tamagui'
import { Button } from '../../atoms/Button'
import { Minus, Plus } from '@tamagui/lucide-icons'

const mockSteps = [
  {
    title: 'Passo 1',
    content: <Text>Conteúdo do Passo 1</Text>,
  },
  {
    title: 'Passo 2',
    content: <Text>Conteúdo do Passo 2</Text>,
  },
  {
    title: 'Passo 3',
    content: <Text>Conteúdo do Passo 3</Text>,
  },
]

const mockActions = (
  nextStep,
  prevStep,
  isFirstStep,
  isLastStep,
  isDisabled,
) => (
  <XStack justifyContent="space-between" width="100%">
    <Button
      onPress={prevStep}
      disabled={isFirstStep || isDisabled}
      icon={Minus}
    >
      Anterior
    </Button>
    <Button
      onPress={nextStep}
      disabled={isLastStep || isDisabled}
      iconAfter={Plus}
    >
      Próximo
    </Button>
  </XStack>
)

describe('Stepper', () => {
  it('deve renderizar o passo inicial corretamente', () => {
    render(<Stepper steps={mockSteps} actions={mockActions} />)
    expect(screen.getByText('Passo 1')).toBeInTheDocument()
    expect(screen.getByText('Conteúdo do Passo 1')).toBeInTheDocument()
  })

  it('deve navegar para o próximo passo ao clicar em "Próximo"', () => {
    render(<Stepper steps={mockSteps} actions={mockActions} />)
    fireEvent.click(screen.getByRole('button', { name: /Próximo/i }))
    expect(screen.getByText('Passo 2')).toBeInTheDocument()
    expect(screen.getByText('Conteúdo do Passo 2')).toBeInTheDocument()
  })

  it('deve navegar para o passo anterior ao clicar em "Anterior"', () => {
    render(<Stepper steps={mockSteps} actions={mockActions} />)
    fireEvent.click(screen.getByRole('button', { name: /Próximo/i }))
    fireEvent.click(screen.getByRole('button', { name: /Anterior/i }))
    expect(screen.getByText('Passo 1')).toBeInTheDocument()
    expect(screen.getByText('Conteúdo do Passo 1')).toBeInTheDocument()
  })

  it('deve desabilitar o botão "Anterior" no primeiro passo', () => {
    render(<Stepper steps={mockSteps} actions={mockActions} />)
    expect(
      screen.getByRole('button', { name: /Anterior/i }),
    ).toHaveAttribute('aria-disabled', 'true')
  })

  it('deve desabilitar o botão "Próximo" no último passo', () => {
    render(<Stepper steps={mockSteps} actions={mockActions} />)
    fireEvent.click(screen.getByRole('button', { name: /Próximo/i }))
    fireEvent.click(screen.getByRole('button', { name: /Próximo/i }))
    expect(screen.getByRole('button', { name: /Próximo/i })).toHaveAttribute(
      'aria-disabled',
      'true',
    )
  })

  it('deve renderizar o estado de carregamento', () => {
    render(<Stepper steps={mockSteps} actions={mockActions} isLoading={true} />)
    expect(screen.getByTestId('skeleton-container')).toBeInTheDocument()
  })

  it('deve renderizar o estado de erro', () => {
    render(<Stepper steps={mockSteps} actions={mockActions} hasError={true} />)
    const title = screen.getByTestId('stepper-title')
    expect(title).toHaveAttribute('data-has-error', 'true')
  })

  it('deve desabilitar os botões quando desabilitado', () => {
    render(<Stepper steps={mockSteps} actions={mockActions} isDisabled={true} />)
    expect(
      screen.getByRole('button', { name: /Anterior/i }),
    ).toHaveAttribute('aria-disabled', 'true')
    expect(screen.getByRole('button', { name: /Próximo/i })).toHaveAttribute(
      'aria-disabled',
      'true',
    )
  })

  it('deve renderizar a mensagem de "sem passos" quando o array de passos está vazio', () => {
    render(<Stepper steps={[]} actions={mockActions} />)
    expect(screen.getByText('Não há passos para exibir.')).toBeInTheDocument()
  })
})
