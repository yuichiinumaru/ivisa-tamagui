import React, { createContext, useContext, useState, ReactNode } from 'react'
import { YStack } from 'tamagui'

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

interface StepperContextProps {
  steps: Step[]
  isLoading: boolean
  hasError: boolean
  isDisabled: boolean
  children: ReactNode
  actions: ActionsRenderProp
}

interface StepperContextValue {
  currentStep: number
  steps: Step[]
  nextStep: () => void
  prevStep: () => void
  isFirstStep: boolean
  isLastStep: boolean
  isLoading: boolean
  hasError: boolean
  isDisabled: boolean
  actions: ActionsRenderProp
}

const StepperContext = createContext<StepperContextValue | null>(null)

export const StepperContextProvider = ({
  steps,
  isLoading,
  hasError,
  isDisabled,
  children,
  actions,
}: StepperContextProps) => {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const value: StepperContextValue = {
    currentStep,
    steps,
    nextStep,
    prevStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    isLoading,
    hasError,
    isDisabled,
    actions,
  }

  return (
    <StepperContext.Provider value={value}>{children}</StepperContext.Provider>
  )
}

export const useStepper = () => {
  const context = useContext(StepperContext)
  if (!context) {
    throw new Error('useStepper must be used within a StepperContextProvider')
  }
  return context
}

export const Stepper = ({ children }: { children: ReactNode }) => {
  return <YStack>{children}</YStack>
}
