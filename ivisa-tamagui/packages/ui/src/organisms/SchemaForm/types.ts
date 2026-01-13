// @ts-nocheck
import { DefaultValues, FieldValues, Path } from 'react-hook-form'

export type FieldType =
  | 'text'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'date'
  | 'switch'
  | 'number'
  | 'email'
  | 'password'

export interface FieldOption {
  label: string
  value: string
}

export interface FieldSchema<T extends FieldValues> {
  name: Path<T>
  type: FieldType
  label?: string
  description?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  options?: FieldOption[]
}

export interface SchemaFormProps<T extends FieldValues> {
  schema: FieldSchema<T>[]
  defaultValues?: DefaultValues<T>
  onSubmit: (data: T) => void
  submitText?: string
  isLoading?: boolean
}
