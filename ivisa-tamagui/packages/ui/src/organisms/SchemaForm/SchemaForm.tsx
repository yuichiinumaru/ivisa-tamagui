// @ts-nocheck
import React from 'react'
import { useForm, FieldValues, ControllerRenderProps } from 'react-hook-form'
import { YStack } from 'tamagui'
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage, FormRoot } from '../Form'
import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import { Textarea } from '../../atoms/Textarea'
import { Switch } from '../../atoms/Switch'
import { Checkbox } from '../../atoms/Checkbox'
import { DatePicker } from '../../molecules/DatePicker'
import { Select } from '../../molecules/Select'
import { SchemaFormProps, FieldSchema } from './types'

const renderFieldInput = <T extends FieldValues>(field: FieldSchema<T>, formField: ControllerRenderProps<T, any>) => {
  const commonProps = {
    disabled: field.disabled,
    id: field.name,
  }

  switch (field.type) {
    case 'text':
    case 'email':
    case 'password':
    case 'number':
      return (
        <Input
          {...formField}
          {...commonProps}
          placeholder={field.placeholder}
          type={field.type === 'number' ? 'number' : (field.type as any)}
        />
      )
    case 'textarea':
      return <Textarea {...formField} {...commonProps} placeholder={field.placeholder} />
    case 'switch':
      return (
        <Switch
          checked={formField.value}
          onCheckedChange={formField.onChange}
          disabled={field.disabled}
        />
      )
    case 'checkbox':
      return (
        <Checkbox
          checked={formField.value}
          onCheckedChange={formField.onChange}
          disabled={field.disabled}
        />
      )
    case 'date':
      return (
        <DatePicker
          date={formField.value}
          onDateChange={formField.onChange}
          placeholder={field.placeholder}
          disabled={field.disabled}
        />
      )
    case 'select':
      return (
        <Select
          value={formField.value}
          onValueChange={formField.onChange}
          disabled={field.disabled}
        >
          <Select.Trigger placeholder={field.placeholder}>
            <Select.Value placeholder={field.placeholder} />
          </Select.Trigger>
          <Select.Sheet />
          <Select.Content>
            <Select.Viewport>
              <Select.Group>
                {field.options?.map((opt, i) => (
                  <Select.Item key={opt.value} index={i} value={opt.value}>
                    <Select.ItemText>{opt.label}</Select.ItemText>
                    <Select.ItemIndicator marginLeft="auto" />
                  </Select.Item>
                ))}
              </Select.Group>
            </Select.Viewport>
          </Select.Content>
        </Select>
      )
    default:
      return null
  }
}

export function SchemaForm<T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  submitText = 'Enviar',
  isLoading
}: SchemaFormProps<T>) {
  const form = useForm<T>({ defaultValues })

  return (
    <Form {...form}>
      <FormRoot tag="form" onSubmit={form.handleSubmit(onSubmit) as any}>
        <YStack gap="$4">
          {schema.map((field) => (
            <FormField
              key={field.name}
              control={form.control}
              name={field.name}
              rules={{ required: field.required ? 'Campo obrigatório' : false }}
              render={({ field: formField }) => (
                <FormItem>
                  <FormLabel>{field.label}</FormLabel>
                  <FormControl>
                    {renderFieldInput(field, formField)}
                  </FormControl>
                  {field.description && <FormDescription>{field.description}</FormDescription>}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button type="submit" loading={isLoading} theme="active">
            {submitText}
          </Button>
        </YStack>
      </FormRoot>
    </Form>
  )
}

