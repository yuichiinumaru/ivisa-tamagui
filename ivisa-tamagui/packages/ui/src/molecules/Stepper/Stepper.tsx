// Removed ts-nocheck
import React, { ReactNode } from 'react'
import { Text, XStack, YStack } from 'tamagui'
import { Skeleton } from '../../atoms/Skeleton'
import {
  Stepper as StepperPrimitive,
  StepperContextProvider,
  useStepper,
} from './Stepper.context'

interface Step {
  title: string
  content: ReactNode
}

type ActionsRenderProp = (
  nextStep: () => void,
  prevStep: () => void,
  isFirstStep: boolean,
  isLastStep: boolean,
  isDisabled: boolean,
) => ReactNode

export interface StepperProps {
  steps: Step[]
  isLoading?: boolean
  hasError?: boolean
  isDisabled?: boolean
  actions: ActionsRenderProp
  currentStep?: number
  onStepChange?: (step: number) => void
}

const StepperContent = () => {
  const {
    currentStep,
    steps,
    nextStep,
    prevStep,
    isFirstStep,
    isLastStep,
    isLoading,
    isDisabled,
    hasError,
    actions,
  } = useStepper()

  if (isLoading) {
    return (
      <YStack space="$2" data-testid="skeleton-container">
        <Skeleton height={28} width={250} />
        <Skeleton height={120} />
        <XStack justifyContent="space-between">
          <Skeleton height={44} width={110} />
          <Skeleton height={44} width={110} />
        </XStack>
      </YStack>
    )
  }

  if (!steps || steps.length === 0) {
    return <Text>Não há passos para exibir.</Text>
  }

  return (
    <YStack space="$4">
      <Text
        color={hasError ? '$red10' : '$color'}
        fontSize="$6"
        fontWeight="bold"
        textAlign="center"
        data-testid="stepper-title"
        data-has-error={hasError}
      >
        {steps[currentStep].title}
      </Text>
      <YStack
        borderWidth={1}
        borderColor={hasError ? '$red10' : '$borderColor'}
        borderRadius="$4"
        padding="$4"
        minHeight={100}
        justifyContent="center"
        alignItems="center"
      >
        {steps[currentStep].content}
      </YStack>
      <XStack justifyContent="space-between">
        {actions(nextStep, prevStep, isFirstStep, isLastStep, isDisabled)}
      </XStack>
    </YStack>
  )
}

export const Stepper = ({
  steps,
  isLoading = false,
  hasError = false,
  isDisabled = false,
  actions,
  currentStep,
  onStepChange,
}: StepperProps) => {
  return (
    <StepperContextProvider
      steps={steps}
      isLoading={isLoading}
      hasError={hasError}
      isDisabled={isDisabled}
      actions={actions}
      currentStep={currentStep}
      onStepChange={onStepChange}
    >
      <StepperPrimitive>
        <StepperContent />
      </StepperPrimitive>
    </StepperContextProvider>
  )
}

// `StepperProps` exported above at definition to avoid duplicate declaration

export type StepperContentProps = React.ComponentProps<typeof StepperContent>
