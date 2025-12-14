import React, { useState } from 'react'
import { useForm, FieldValues } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ZodSchema } from 'zod'
import { YStack, Button } from 'tamagui'
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

  const currentStepConfig = steps[currentStep]

  const form = useForm({
    resolver: zodResolver(currentStepConfig.schema),
    defaultValues: formData as any,
    mode: 'onChange'
  })

  const handleNext = async () => {
    const isValid = await form.trigger()
    if (isValid) {
        const stepData = form.getValues()

        setFormData((prev) => {
            const newData = { ...prev, ...stepData }

            if (currentStep < steps.length - 1) {
                setCurrentStep((curr) => curr + 1)
            } else {
                onSubmit(newData as T)
            }
            return newData
        })
    }
  }

  const handlePrev = () => {
    if (currentStep > 0) {
        const stepData = form.getValues()
        setFormData((prev) => ({ ...prev, ...stepData }))
        setCurrentStep((prev) => prev - 1)
    }
  }

  React.useEffect(() => {
      const timeoutId = setTimeout(() => {
          form.reset(formData, { keepDefaultValues: true })

          const currentFields = steps[currentStep].fields
          currentFields.forEach(field => {
              if (formData[field.name] !== undefined) {
                  form.setValue(field.name as any, formData[field.name])
              }
          })
      }, 0)
      return () => clearTimeout(timeoutId)
  }, [currentStep, formData, form, steps])


  const mappedSteps = steps.map((step) => ({
    title: step.title,
    content: (
        <Form {...form}>
            <YStack gap="$4" width="100%">
                 {step.fields.map((field) => (
                    <FormField
                    key={field.name}
                    control={form.control}
                    name={field.name}
                    render={({ field: formField }) => (
                        <FormItem>
                        <FormLabel htmlFor={field.name}>{field.label}</FormLabel>
                        <FormControl>
                             {renderFieldInput(field, formField)}
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                 ))}
            </YStack>
        </Form>
    )
  }))

  return (
    <Stepper
      steps={mappedSteps}
      actions={(nextStep, prevStep, isFirstStep, isLastStep, isDisabled) => (
        <>
            {!isFirstStep && (
                <Button onPress={handlePrev} disabled={isLoading}>
                    Voltar
                </Button>
            )}
            <Button
                onPress={handleNext}
                theme="active"
                disabled={isLoading}
                marginLeft={isFirstStep ? 'auto' : undefined}
            >
                {isLastStep ? 'Enviar' : 'Próximo'}
            </Button>
        </>
      )}
    />
  )
}
