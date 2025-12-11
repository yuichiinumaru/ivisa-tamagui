import * as React from "react"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"
import { View, Label, Text, styled, YStack, GetProps, TamaguiElement } from "tamagui"

const Form = FormProvider

type FormFieldContextValue = {
  name: string
}

// 💀 Resurrection: Context is nullable, not "Empty Object cast to Type"
const FormFieldContext = React.createContext<FormFieldContextValue | null>(null)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  // 💀 Resurrection: Memoize context value to prevent render thrashing
  const contextValue = React.useMemo(() => ({ name: props.name }), [props.name])

  return (
    <FormFieldContext.Provider value={contextValue}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  // 💀 Resurrection: Fail Loudly
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>")
  }
  if (!itemContext) {
    throw new Error("useFormField should be used within <FormItem>")
  }

  const fieldState = getFieldState(fieldContext.name, formState)
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

// 💀 Resurrection: Nullable Context
const FormItemContext = React.createContext<FormItemContextValue | null>(null)

const FormRoot = styled(YStack, {
  name: 'FormRoot',
  gap: '$4',
})

const FormFooter = styled(YStack, {
  name: 'FormFooter',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '$2',
})

const FormItemFrame = styled(YStack, {
  name: 'FormItem',
  space: '$sm',
})

const FormItem = React.forwardRef<TamaguiElement, GetProps<typeof FormItemFrame>>(
  ({ ...props }, ref) => {
    const id = React.useId()
    // 💀 Resurrection: Memoize ID object
    const contextValue = React.useMemo(() => ({ id }), [id])

    return (
      <FormItemContext.Provider value={contextValue}>
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
  } as const
})

const FormLabel = React.forwardRef<TamaguiElement, GetProps<typeof FormLabelFrame>>(
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

const FormControl = React.forwardRef<TamaguiElement, GetProps<typeof View>>(
  ({ ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

    return (
      <View
        ref={ref}
        // Tamagui handles id prop mapping
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

const FormDescription = React.forwardRef<TamaguiElement, GetProps<typeof FormDescriptionFrame>>(
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

const FormMessage = React.forwardRef<TamaguiElement, GetProps<typeof FormMessageFrame>>(
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
  FormRoot,
  FormFooter,
}
