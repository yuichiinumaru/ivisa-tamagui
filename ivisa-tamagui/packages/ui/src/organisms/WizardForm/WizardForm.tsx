// @ts-nocheck
import React, { useState } from 'react'
import { useForm, FieldValues } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ZodSchema } from 'zod'
import { YStack, XStack, Button } from 'tamagui'
import { Stepper } from '../../molecules/Stepper'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '../Form'
import { Input } from '../../atoms/Input'
import { FieldSchema } from '../SchemaForm/types'

export interface WizardStep<T extends FieldValues> {
  title: string
  schema: ZodSchema<any>
  fields: FieldSchema<any>[]
}

export interface WizardFormProps<T extends FieldValues> {
  steps: WizardStep<T>[]
  onSubmit: (data: T) => void
  isLoading?: boolean
}

const renderFieldInput = (field: FieldSchema<any>, formField: any) => {
  switch (field.type) {
    case 'text':
    case 'email':
      return <Input {...formField} id={field.name} placeholder={field.placeholder} />
    default:
      return <Input {...formField} id={field.name} placeholder={field.placeholder} />
  }
}

export function WizardForm<T extends FieldValues>({
  steps,
  onSubmit,
  isLoading
}: WizardFormProps<T>) {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<Partial<T>>({})

  // 💀 Resurrection: Stable Form Object
  // We use one form instance for the entire wizard lifecycle.
  // The resolver dynamically picks the schema based on the current step.
  const form = useForm({
    resolver: (async (values: any, context: any, options: any) => {
      const currentSchema = steps[currentStep].schema
      return zodResolver(currentSchema as any)(values, context, options)
    }) as any,
    defaultValues: React.useMemo(() => {
      const defaults: any = { ...formData }
      steps.forEach(step => {
        step.fields.forEach(f => {
          if (defaults[f.name] === undefined) defaults[f.name] = ''
        })
      })
      return defaults
    }, [steps, formData]) as any,
    mode: 'all'
  })

  const handleNext = async () => {
    const isValid = await form.trigger()

    if (isValid) {
      const stepData = form.getValues()
      const isLastStep = currentStep === steps.length - 1

      if (!isLastStep) {
        const nextStep = currentStep + 1
        const newData = { ...formData, ...stepData }
        setFormData(newData)
        setCurrentStep(nextStep)
      } else {
        const finalData = { ...formData, ...stepData } as T
        onSubmit(finalData)
      }
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <Form {...form}>
      <YStack {...({ gap: "$4", width: "100%" } as any)}>
        <Stepper
          currentStep={currentStep}
          steps={steps.map((step) => ({ title: step.title, content: null }))}
          actions={() => null}
        />

        <YStack {...({ gap: "$4" } as any)}>
          {steps[currentStep].fields.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name as any}
              render={({ field: formField }) => (
                <FormItem {...({} as any)}>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={field.placeholder as any}
                      {...(formField as any)}
                      value={formField.value ?? ''}
                      error={!!form.formState.errors[field.name as string] as any}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
        </YStack>

        <XStack {...({ gap: "$4", justifyContent: "space-between", marginTop: "$4" } as any)}>
          <Button
            {...({ variant: "outlined" } as any)}
            onPress={handleBack}
            disabled={currentStep === 0 || isLoading}
          >
            Back
          </Button>
          <Button
            {...({ theme: "active" } as any)}
            onPress={handleNext}
            disabled={isLoading}
          >
            {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
          </Button>
        </XStack>
      </YStack>
    </Form>
  )
}

