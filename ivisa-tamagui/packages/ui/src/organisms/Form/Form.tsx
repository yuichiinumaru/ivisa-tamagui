import * as React from "react"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"
import { View, Label, Text, styled, YStack, GetProps } from "tamagui"

const Form = FormProvider

type FormFieldContextValue = {
  name: string
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue
)

const FormItemFrame = styled(YStack, {
  name: 'FormItem',
  space: '$2',
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormItem = React.forwardRef<any, GetProps<typeof FormItemFrame>>(
  ({ ...props }, ref) => {
    const id = React.useId()

    return (
      <FormItemContext.Provider value={{ id }}>
        <FormItemFrame ref={ref} {...props} />
      </FormItemContext.Provider>
    )
  }
)
FormItem.displayName = "FormItem"

const FormLabelFrame = styled(Label, {
  name: 'FormLabel',
  color: '$color',
  fontWeight: '500',
  fontSize: '$3',
  variants: {
    error: {
      true: {
        color: '$destructive',
      }
    }
  }
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormLabel = React.forwardRef<any, GetProps<typeof FormLabelFrame>>(
  ({ ...props }, ref) => {
    const { error, formItemId } = useFormField()

    return (
      <FormLabelFrame
        ref={ref}
        htmlFor={formItemId}
        error={!!error}
        {...props}
      />
    )
  }
)
FormLabel.displayName = "FormLabel"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormControl = React.forwardRef<any, GetProps<typeof View>>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

    return (
      <View
        ref={ref}
        id={formItemId}
        aria-describedby={
          !error
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formMessageId}`
        }
        aria-invalid={!!error}
        {...props}
      />
    )
  }
)
FormControl.displayName = "FormControl"

const FormDescriptionFrame = styled(Text, {
  name: 'FormDescription',
  fontSize: '$2',
  color: '$mutedForeground',
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormDescription = React.forwardRef<any, GetProps<typeof FormDescriptionFrame>>(
  ({ ...props }, ref) => {
    const { formDescriptionId } = useFormField()

    return (
      <FormDescriptionFrame
        ref={ref}
        id={formDescriptionId}
        {...props}
      />
    )
  }
)
FormDescription.displayName = "FormDescription"

const FormMessageFrame = styled(Text, {
  name: 'FormMessage',
  fontSize: '$2',
  fontWeight: '500',
  color: '$destructive',
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormMessage = React.forwardRef<any, GetProps<typeof FormMessageFrame>>(
  ({ children, ...props }, ref) => {
    const { error, formMessageId } = useFormField()
    const body = error ? String(error?.message) : children

    if (!body) {
      return null
    }

    return (
      <FormMessageFrame
        ref={ref}
        id={formMessageId}
        {...props}
      >
        {body}
      </FormMessageFrame>
    )
  }
)
FormMessage.displayName = "FormMessage"

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}
