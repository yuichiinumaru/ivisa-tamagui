import * as React from "react"
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
} from "react-hook-form"
import { View, Text, styled, YStack, GetProps, TamaguiElement } from "tamagui"
import { Slot } from "@tamagui/core"
import { Label } from "../../atoms/Label"

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
  gap: '$4',
} as any)

const FormFooter = styled(YStack, {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  gap: '$2',
} as any)

const FormItemFrame = styled(YStack, {
  space: '$sm',
} as any)

const FormItem = React.forwardRef<TamaguiElement, GetProps<typeof FormItemFrame>>(
  ({ ...props }, ref) => {
    const id = React.useId()
    // 💀 Resurrection: Memoize ID object
    const contextValue = React.useMemo(() => ({ id }), [id])

    return (
      <FormItemContext.Provider value={contextValue}>
        <FormItemFrame ref={ref} {...(props as any)} />
      </FormItemContext.Provider>
    )
  }
)
FormItem.displayName = "FormItem"

const FormLabelFrame = styled(Label, {
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
} as any)

const FormLabel = React.forwardRef<TamaguiElement, GetProps<typeof FormLabelFrame>>(
  ({ ...props }, ref) => {
    const { error, formItemId } = useFormField()

    return (
      <FormLabelFrame
        ref={ref}
        htmlFor={formItemId}
        error={!!error}
        {...(props as any)}
      />
    )
  }
)
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<TamaguiElement, GetProps<typeof View>>(
  ({ children, ...props }, ref) => {
    const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

    return (
      <Slot
        ref={ref}
        id={formItemId}
        aria-describedby={
          !error
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formMessageId}`
        }
        aria-invalid={!!error}
        {...props}
      >
        {children}
      </Slot>
    )
  }
)
FormControl.displayName = "FormControl"

const FormDescriptionFrame = styled(Text, {
  fontSize: '$2',
  color: '$mutedForeground',
} as any)

const FormDescription = React.forwardRef<TamaguiElement, GetProps<typeof FormDescriptionFrame>>(
  ({ ...props }, ref) => {
    const { formDescriptionId } = useFormField()

    return (
      <FormDescriptionFrame
        ref={ref}
        id={formDescriptionId}
        {...(props as any)}
      />
    )
  }
)
FormDescription.displayName = "FormDescription"

const FormMessageFrame = styled(Text, {
  fontSize: '$2',
  color: '$red10',
  marginTop: '$2',
} as any)

const FormMessage = React.forwardRef<
  TamaguiElement,
  GetProps<typeof FormMessageFrame> & { name?: string; error?: any }
>(({ className, children, name: propName, error: propError, ...props }, ref) => {
  const fieldInfo = useFormField()
  const { formState } = useFormContext()
  const name = propName || fieldInfo.name
  const castErrors = formState.errors as any
  const fieldError = castErrors[name] || fieldInfo.error || propError
  const body = fieldError ? String(fieldError?.message) : children

  if (!body) {
    return null
  }

  return (
    <FormMessageFrame
      ref={ref}
      id={fieldInfo.formMessageId}
      data-testid={`form-message-${name}`}
      {...(props as any)}
    >
      {body}
    </FormMessageFrame>
  )
})
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
