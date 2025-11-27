import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';
import { Input, InputProps } from '@ivisa/ui'; // Assuming Input is exported from @ivisa/ui

export type InputRHFProps<T extends FieldValues = FieldValues> = InputProps & UseControllerProps<T>;

export function InputRHF<T extends FieldValues = FieldValues>({
  name,
  control,
  rules,
  defaultValue,
  ...inputProps
}: InputRHFProps<T>) {
  return (
    <Controller<T>
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur, value, ref }, fieldState: { error } }) => (
        <Input
          {...inputProps}
          ref={ref}
          value={value ?? ''}
          onBlur={onBlur}
          onChangeText={onChange}
          error={!!error}
          helperText={error ? error.message : inputProps.helperText}
        />
      )}
    />
  );
}
